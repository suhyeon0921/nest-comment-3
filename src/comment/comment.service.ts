import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entity/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  /**
   * 댓글 생성 API:
   * 게시글에 댓글을 작성
   * 댓글의 최대 길이는 1000자, 댓글의 최소 길이는 1자
   */
  async createComment(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = this.commentRepository.create(createCommentDto);
    return this.commentRepository.save(comment);
  }
}
