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
   * 댓글 생성:
   * 게시글에 댓글을 작성
   * 댓글의 최대 길이는 1000자, 댓글의 최소 길이는 1자
   */
  async createComment(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = this.commentRepository.create(createCommentDto);
    return this.commentRepository.save(comment);
  }

  /**
   * 대댓글 생성:
   * 댓글에 대댓글을 작성
   * 대댓글의 최대 길이는 1000자, 댓글의 최소 길이는 1자
   */
  async createReply(
    parentId: number,
    createCommentDto: CreateCommentDto,
  ): Promise<Comment> {
    const comment = this.commentRepository.create(createCommentDto);

    if (parentId) {
      const parent = await this.commentRepository.findOne({
        where: { id: parentId },
      });
      if (!parent) {
        throw new Error('Parent comment not found');
      }
      comment.parent = parent;
    }
    return this.commentRepository.save(comment);
  }
}
