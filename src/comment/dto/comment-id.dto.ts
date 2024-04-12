import { IsNotEmpty, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class CommentIdDto {
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => Number(value))
  commentId: number;
}
