import { Body, Controller, Post, Res, HttpStatus, NotFoundException,Get, Put, Param, Delete } from '@nestjs/common';
import { PostsService } from '../posts/posts.service';
import { CreatePostsDto } from '../dto/PostDto';
import { UpdatePostDto } from '../dto/UpdatePostDto';
@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {}

    @Get()
    public async getAll(
        @Res() res: any,
    ) {
        try {
                const posts = await this.postService.findAll();
                return res.status(HttpStatus.OK).json(posts);
            } catch (error) {
                return res.status(HttpStatus.BAD_REQUEST)
                .json({
                    message : 'Error',
                    status: 400
                });
        }
    }

    @Post()
    public async addpost(createpostDto: CreatePostsDto) {
          const newPost = await  this.postService.addPost(createpostDto);
       
          return newPost;
    }

    @Get('/:id')
    public async getOnePost(postId: string, @Res() res:any) {
        try {
            const post = await this.postService.getOne(postId);
              if(!post) {
                throw new NotFoundException("post does not exist in the database");
              }
              return post;
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST)
                .json({
                    message : 'Error: Post with not exist',
                    status: 400
                });
         }
    }
    @Put('/:id')
    public async updatepost(
        @Res() res: any,
        @Param('id') postId: string,
        @Body() updatepostDto: UpdatePostDto 
    ) {
         try {
            const post = await this.postService.updatePost(postId, updatepostDto)
            if(!post) {
                throw new NotFoundException("Post does not exist in the database");
            }
            return res.status(HttpStatus.OK).json({
                message: 'comment has been successfully updated',
                post,
                status: 201
          });
         } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST)
            .json({
                message : 'Error: Email not registered',
                status: 400
            });
         }
    }

    @Delete('/:id')
    public async deletePost(
        @Res() res: any,
        @Param('id') postId: string,
    ) {
        
        if(!postId){
            throw new NotFoundException("Post ID is undefined");
        }
        try {
              const isDelete = await this.postService.removePost(postId);
              return res.status(HttpStatus.OK).json({
                message: 'comment has been successfully deleted',
                status: 201
          })
            
        } catch (error) {
            return res.status(HttpStatus.OK).json({
                message: 'comment has been successfully deleted',
                status: 201
             })
        }
      }

}
