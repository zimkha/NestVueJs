import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { CommentSchema, Comments } from 'src/models/comments';


@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Comments.name, schema: CommentSchema}
    ])
  ],
  providers: [CommentsService],
  controllers: [CommentsController]
})
export class CommentsModule {}
