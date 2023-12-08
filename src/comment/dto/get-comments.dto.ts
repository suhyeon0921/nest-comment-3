import { Comment } from '../entity/comment.entity';

export class GetCommentsDto {
  data: Comment[];
  totalCount: number;
  page: number;
  totalPage: number;
}
