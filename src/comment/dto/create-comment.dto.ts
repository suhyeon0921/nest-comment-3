import { IsInt, IsNotEmpty, Length } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsInt()
  storyId: number;

  @IsNotEmpty()
  @Length(1, 20)
  writer: string;

  @IsNotEmpty()
  @Length(1, 1000)
  content: string;
}
