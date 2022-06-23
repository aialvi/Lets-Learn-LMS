import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly author: string;
  @ApiProperty()
  readonly url: string;
}
