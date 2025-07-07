import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateVideoProgressDto } from './dto/update-video-progress.dto';

@Injectable()
export default class ProgressService {
  constructor(private prisma: PrismaService) {}

  async getUserProgress(userId: number, courseId: string) {
    const enrollment = await this.prisma.enrollment.findFirst({
      where: {
        userId: userId.toString(),
        courseId: courseId.toString(),
      },
    });

    if (!enrollment) {
      throw new NotFoundException('Enrollment not found');
    }

    return {
      progress: enrollment.progress,
      lastAccessed: enrollment.updatedAt,
    };
  }

  async updateProgress(userId: number, courseId: string, progress: number) {
    const enrollment = await this.prisma.enrollment.findFirst({
      where: {
        userId: userId.toString(),
        courseId: courseId,
      },
    });

    if (!enrollment) {
      throw new NotFoundException('Enrollment not found');
    }

    return this.prisma.enrollment.update({
      where: { id: enrollment.id },
      data: { progress },
    });
  }

  async getCoursesProgress(userId: number) {
    const enrollments = await this.prisma.enrollment.findMany({
      where: { userId: userId.toString() },
      include: {
        course: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    return enrollments.map(enrollment => ({
      courseId: enrollment.courseId,
      courseTitle: enrollment.course.title,
      progress: enrollment.progress,
      lastAccessed: enrollment.updatedAt,
    }));
  }

  async updateVideoProgress(userId: number, dto: UpdateVideoProgressDto) {
    // Check if lesson exists
    const lesson = await this.prisma.lesson.findUnique({
      where: { id: dto.lessonId },
    });

    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }

    // Check if user is enrolled in the course
    const enrollment = await this.prisma.enrollment.findFirst({
      where: {
        userId: userId.toString(),
        courseId: dto.courseId,
      },
    });

    if (!enrollment) {
      throw new NotFoundException('User is not enrolled in this course');
    }

    // Upsert video progress
    const videoProgress = await this.prisma.videoProgress.upsert({
      where: {
        userId_lessonId: {
          userId: userId.toString(),
          lessonId: dto.lessonId,
        },
      },
      update: {
        ...(dto.watchTime !== undefined && { watchTime: dto.watchTime }),
        ...(dto.completed !== undefined && { completed: dto.completed }),
      },
      create: {
        userId: userId.toString(),
        lessonId: dto.lessonId,
        courseId: dto.courseId,
        watchTime: dto.watchTime || 0,
        completed: dto.completed || false,
      },
    });

    // Calculate overall course progress based on completed videos
    const totalLessons = await this.prisma.lesson.count({
      where: {
        courseId: dto.courseId,
      },
    });

    const completedLessons = await this.prisma.videoProgress.count({
      where: {
        userId: userId.toString(),
        courseId: dto.courseId,
        completed: true,
      },
    });

    const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

    // Update enrollment progress
    await this.prisma.enrollment.update({
      where: { id: enrollment.id },
      data: { progress },
    });

    return videoProgress;
  }

  async getVideoProgress(userId: number, lessonId: string) {
    return this.prisma.videoProgress.findUnique({
      where: {
        userId_lessonId: {
          userId: userId.toString(),
          lessonId,
        },
      },
    });
  }

  async getCourseVideosProgress(userId: number, courseId: string) {
    const enrollment = await this.prisma.enrollment.findFirst({
      where: {
        userId: userId.toString(),
        courseId,
      },
    });

    if (!enrollment) {
      throw new NotFoundException('User is not enrolled in this course');
    }

    const lessons = await this.prisma.lesson.findMany({
      where: { courseId },
      orderBy: { order: 'asc' },
    });

    const videoProgress = await this.prisma.videoProgress.findMany({
      where: {
        userId: userId.toString(),
        courseId,
      },
    });

    const lessonsWithProgress = lessons.map(lesson => {
      const progress = videoProgress.find(p => p.lessonId === lesson.id) || {
        completed: false,
        watchTime: 0,
      };
      
      return {
        ...lesson,
        completed: progress.completed,
        watchTime: progress.watchTime,
      };
    });

    return {
      overallProgress: enrollment.progress,
      lessons: lessonsWithProgress,
    };
  }
}
