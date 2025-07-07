import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LessonsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    // Get the highest order for the course
    const maxOrder = await this.prisma.lesson.findFirst({
      where: { courseId: data.courseId },
      orderBy: { order: 'desc' },
      select: { order: true }
    });

    const order = maxOrder ? maxOrder.order + 1 : 1;

    return this.prisma.lesson.create({
      data: {
        ...data,
        order
      }
    });
  }

  async findAll(courseId: number) {
    return this.prisma.lesson.findMany({
      where: { courseId: courseId.toString() },
      orderBy: { order: 'asc' }
    });
  }

  async findOne(id: number) {
    return this.prisma.lesson.findUnique({
      where: { id: id.toString() },
    });
  }

  async update(id: number, data: any) {
    return this.prisma.lesson.update({
      where: { id: id.toString() },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.lesson.delete({
      where: { id: id.toString() },
    });
  }
}
