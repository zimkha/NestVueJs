import { Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { MailerModule } from './mailer/mailer.module';
import { CommentsModule } from './comments/comments.module';
import { UserSchema, User } from './models/user'
import { CommentSchema, Comments} from './models/comments';
import { MailerSchema, Mailer} from './models/mailer';
import { PostSchema, Post} from './models/post';
import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';
import { CommentsController } from './comments/comments.controller';
import { MailerController } from './mailer/mailer.controller';
import { UsersService } from './users/users.service';
import { CommentsService } from './comments/comments.service';
import { MailerService } from './mailer/mailer.service';
import { PostsService } from './posts/posts.service';
import { NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ExpressMiddleware } from '../src/express.middleware';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestinfolettre', {useNewUrlParser:true}),
    UsersModule,
    PostsModule,
    MailerModule,
    CommentsModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema},
      { name: Post.name, schema: PostSchema},
      { name: Comments.name, schema: CommentSchema},
      { name: Mailer.name, schema: MailerSchema}
    ]),
    AuthModule
  ],
  controllers: [AppController, PostsController, UsersController, CommentsController, MailerController],
  providers: [AppService, UsersService, PostsService, MailerService, CommentsService, AuthService],
})
export class AppModule {
  //  configure(consumer: MiddlewareConsumer){
  //    consumer.apply(ExpressMiddleware)
  //     .forRoutes(
  //       { path: '/comments', method: RequestMethod.GET},
  //       { path: '/comment/:id', method: RequestMethod.PUT},
  //       { path: '/mailer', method: RequestMethod.GET},


  //     )
  //  }
}
