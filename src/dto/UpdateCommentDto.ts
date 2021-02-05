import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentsDto } from './CommentsDto';


export class UpdateCommentDto extends PartialType(CreateCommentsDto) {
    
}