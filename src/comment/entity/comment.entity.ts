import { Timestamp } from '../../global/common/timeStamp';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment extends Timestamp {
  @PrimaryGeneratedColumn('increment', { name: 'comment_id' })
  id: number;

  @ManyToOne(() => Comment, (comment) => comment.children, { nullable: true })
  @JoinColumn({ name: 'parent_id' })
  parent: Comment;

  @OneToMany(() => Comment, (comment) => comment.parent)
  children: Comment[];

  @Column({ name: 'story_id', type: 'int', nullable: false })
  storyId: number;

  @Column({ name: 'writer', type: 'varchar', nullable: false, length: 20 })
  writer: string;

  @Column({ name: 'content', type: 'varchar', nullable: false, length: 1000 })
  content: string;
}
