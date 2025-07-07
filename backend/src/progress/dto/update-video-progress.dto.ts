import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateVideoProgressDto {
  @IsString()
  lessonId: string;

  @IsString()
  courseId: string;

  @IsNumber()
  @IsOptional()
  watchTime?: number;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
