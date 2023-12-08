import { IsInt, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class ParentIdDto {
  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => Number(value))
  parentId: number;
}
