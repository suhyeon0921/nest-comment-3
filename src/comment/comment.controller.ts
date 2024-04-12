import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentIdDto } from './dto/comment-id.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  /** 댓글 생성 */
  @Post()
  @HttpCode(HttpStatus.OK)
  async createComment(@Body() createCommentDto: CreateCommentDto) {
    return await this.commentService.createComment(createCommentDto);
  }

  /** 대댓글 생성 */
  @Post(':parentId')
  @HttpCode(HttpStatus.OK)
  async createReply(
    @Param() parentIdDto: CommentIdDto,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return await this.commentService.createReply(
      parentIdDto.commentId,
      createCommentDto,
    );
  }

  /** 댓글/대댓글 조회 */
  @Get()
  async getAllComments(@Query() paginationDto: PaginationDto) {
    return this.commentService.getAllComments(paginationDto);
  }

  /** 댓글/대댓글 삭제 */
  @Delete(':commentId')
  @HttpCode(HttpStatus.OK)
  async deleteComment(@Param() commentIdDto: CommentIdDto) {
    return this.commentService.deleteComment(commentIdDto.commentId);
  }
}
