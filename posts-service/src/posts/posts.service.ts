import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/posts.schema';
import { IPost } from '../../../api-gateway/src/posts/interfaces/post.interface';
@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private posts: Model<PostDocument>
  ) {}

  async addPost(post: IPost): Promise<IPost> {
    return this.posts.create(post).then(r => r.save())
  }

  async getList(){
    return this.posts.find();
  }
}
