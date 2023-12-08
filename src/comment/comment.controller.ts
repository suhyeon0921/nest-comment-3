import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  /** 댓글 생성 */
  @Post()
  @HttpCode(HttpStatus.OK)
  async createStory(@Body() createCommentDto: CreateCommentDto) {
    return await this.commentService.createComment(createCommentDto);
  }
}
