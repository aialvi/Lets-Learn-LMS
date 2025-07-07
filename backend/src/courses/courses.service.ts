import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async create(data: any, authorId: string) {
    return this.prisma.course.create({
      data: {
        ...data,
        authorId,
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.course.findMany({
      include: {
        author: {
          select: {
            id: true,
            username: true,
          },
        },
        _count: {
          select: { lessons: true, enrollments: true },
        },
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.course.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            username: true,
          },
        },
        lessons: {
          orderBy: {
            order: 'asc',
          },
        },
        _count: {
          select: { enrollments: true },
        },
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.course.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.course.delete({
      where: { id },
    });
  }
}
