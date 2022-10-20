import { Controller } from '@nestjs/common';
import { PostsService } from './posts.service';
import { MessagePattern, Payload } from '@nestjs/microservices';;

@Controller()
export class PostsController {
  constructor(private postsService: PostsService) {
  }

  @MessagePattern('get.posts.list')
  async getPosts() {
    return this.postsService.getList();
  }

  @MessagePattern('add.new.post')
  async addPost(@Payload() message) {
    return this.postsService.addPost(message);
  }
}
