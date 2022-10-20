import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Document } from 'mongoose';
import { IPost } from '../interfaces/post.interface';

export type PostDocument = Post & Document;

@Schema({ collection: 'posts' })
export class Post implements IPost{
  @Prop()
  description: string;
  @Prop()
  title: string;
}
const PostSchema = SchemaFactory.createForClass(Post);
export { PostSchema as PostSchema }
