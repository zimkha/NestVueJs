import { Controller, Get, Post, HttpStatus, NotFoundException, Delete, Query, Param, Put, Res, Body } from '@nestjs/common';
import { CreateCommentsDto } from '../dto/CommentsDto';
import { UpdateCommentDto } from '../dto/UpdateCommentDto';
import { QueryPaginationDto } from '../dto/PaginationCommentDto';
import { CommentsService } from './comments.service';
@Controller('comments')
export class CommentsController {
    constructor(private commentService: CommentsService) {}
    
    @Get()
    public async getAllComments(@Query() commentPagination: QueryPaginationDto, @Res() res: any) {
        const comments = await this.commentService.findAll(commentPagination)
        return res.status(HttpStatus.OK).json(comments);
    }

    @Post()
    public async addComment(
        @Res() res: any,
        @Body() createCommentDto: CreateCommentsDto 
    ) {
        try {
            
        const comment = await this.commentService.createComment(createCommentDto);
        return res.status(HttpStatus.OK)
                .json({
                    message: 'Successfully',
                    comment
                });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST)
                .json({
                    message : 'Error: Comment not created',
                    status: 400
                });
        }
    }
    @Put('/:id')
    public async updateComment(
        @Res() res: any,
        @Param('id') commentId: string,
        @Body() updateCommentDto: UpdateCommentDto 

    ){
            try {
               const comment = await this.commentService.update(commentId, updateCommentDto)
                if(!comment){
                     throw new NotFoundException("comment does not exist in the database");
                } 
                return res.status(HttpStatus.OK).json({
                      message: 'comment has been successfully updated',
                      comment,
                      status: 201
                })
            } catch (error) {
                return res.status(HttpStatus.BAD_REQUEST)
                .json({
                    message : 'Error: Comment not updated',
                    status: 400
                });
            }
    }

    @Delete('/:id')
    public async removeComment(
        @Res() res: any,
        @Param('id') commentId: string,
    ) {
        if(!commentId){
            throw new NotFoundException("comment ID is undefined");
        }
        try {
             const is_delete = await this.commentService.remove(commentId);
              if(!is_delete) {
                throw new NotFoundException("comment does not exist in the database");
              }
              return res.status(HttpStatus.OK).json({
                message: 'comment has been successfully deleted',
                status: 201
             })
            
        } catch (error) {
            
        }
    }

}
