import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ParentIdDto } from './dto/parent-id.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  /** 댓글 생성 */
  @Post()
  @HttpCode(HttpStatus.OK)
  async createStory(@Body() createCommentDto: CreateCommentDto) {
    return await this.commentService.createComment(createCommentDto);
  }

  /** 대댓글 생성 */
  @Post(':parentId')
  @HttpCode(HttpStatus.OK)
  async createReply(
    @Param() parentIdDto: ParentIdDto,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return await this.commentService.createReply(
      parentIdDto.parentId,
      createCommentDto,
    );
  }

  /** 댓글 조회 */
  @Get()
  async getAllComments(@Query() paginationDto: PaginationDto) {
    return this.commentService.getAllComments(paginationDto);
  }
}
