import { PartialType } from '@nestjs/mapped-types';
import { CreatePostsDto } from './PostDto';


export class UpdatePostDto extends PartialType(CreatePostsDto) {
    
}