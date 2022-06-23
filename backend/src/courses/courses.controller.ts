import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

@ApiTags('courses')
@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  async getCourses() {
    const courses = await this.coursesService.getCourses();
    return courses;
  }

  @Get(':courseId')
  async getCourse(@Param('courseId') courseId) {
    const course = await this.coursesService.getCourse(courseId);
    return course;
  }

  @Post()
  async addCourse(@Body() createCourseDto: CreateCourseDto) {
    const course = await this.coursesService.addCourse(createCourseDto);
    return course;
  }

  @Delete()
  async deleteCourse(@Query() query) {
    const courses = await this.coursesService.deleteCourse(query.courseId);
    return courses;
  }
}
