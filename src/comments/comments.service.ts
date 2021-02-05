import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { Comments } from '../models/comments';
import { CreateCommentsDto } from '../dto/CommentsDto';
import { UpdateCommentDto } from '../dto/UpdateCommentDto';
import { QueryPaginationDto } from '../dto/PaginationCommentDto';

@Injectable()
export class CommentsService {
    constructor(
        @InjectModel(Comments.name) private readonly commentsModel: Model <Comments>){

    }
    public async findAll( paginationQuery: QueryPaginationDto)  {
            return await this.commentsModel
                .find()
    }
    public async  createComment(createCommensDto: CreateCommentsDto) {
            const newComments = await new this.commentsModel(createCommensDto);
            return newComments.save();
    }

    public async update(
        commentId: string,
        updateCommentDto: UpdateCommentDto
       
        ) {
            const isExist = await this.commentsModel.findByIdAndUpdate({ _id: commentId }, updateCommentDto);
            if(isExist){
                throw new NotFoundException(`Comment not found`);
                
            }
            return isExist;
    }

    public async remove(commentId: string): Promise<any> {
        const deleteComment = await this.commentsModel.findByIdAndRemove({_id: commentId});
        return deleteComment;
    }
}
