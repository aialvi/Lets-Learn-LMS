import { Controller, Get, Put, Body, Param, Request, UseGuards } from '@nestjs/common';
import ProgressService from './progress.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateVideoProgressDto } from './dto/update-video-progress.dto';

@ApiTags('progress')
@Controller('progress')
export default class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('course/:courseId')
  getUserProgressForCourse(@Param('courseId') courseId: string, @Request() req) {
    return this.progressService.getUserProgress(req.user.id, courseId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Put('course/:courseId')
  updateProgress(
    @Param('courseId') courseId: string,
    @Body() progressData: { progress: number },
    @Request() req,
  ) {
    return this.progressService.updateProgress(
      req.user.id,
      courseId,
      progressData.progress,
    );
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  getAllProgress(@Request() req) {
    return this.progressService.getCoursesProgress(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('video/:courseId')
  getCourseVideosProgress(@Param('courseId') courseId: string, @Request() req) {
    return this.progressService.getCourseVideosProgress(req.user.id, courseId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('video/lesson/:lessonId')
  getVideoProgress(@Param('lessonId') lessonId: string, @Request() req) {
    return this.progressService.getVideoProgress(req.user.id, lessonId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Put('video')
  updateVideoProgress(@Body() dto: UpdateVideoProgressDto, @Request() req) {
    return this.progressService.updateVideoProgress(req.user.id, dto);
  }
}
