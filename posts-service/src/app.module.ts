import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: 'mongodb://localhost:27016',
        retryAttempts: 3
      })
    }),
    PostsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
