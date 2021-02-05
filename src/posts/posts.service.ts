import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { Post, PostSchema } from '../models/post';
import {CreatePostsDto} from '../dto/PostDto'
import { UpdatePostDto } from '../dto/UpdatePostDto';
@Injectable()
export class PostsService {
    constructor(@InjectModel(Post.name) private readonly postModel: Model<Post>){}

    public async findAll(): Promise<any> {
        return await this.postModel.find();
    }

    public async getOne(postId: string) : Promise<any>{
        const post = await this.postModel.findOne({_id: postId});
            if(!post) {
                throw new NotFoundException(`Post not found`);
            }
            return post;
    }
    public async addPost(createPostDto: CreatePostsDto): Promise<any> {
        const newPost = await  new this.postModel(createPostDto);
        return newPost.save();
    }

    public async updatePost(postId: string, updatepostDto: UpdatePostDto) : Promise<any> {
        const isExist = await this.postModel.findOneAndUpdate({_id: postId}, updatepostDto);
        if(!isExist) {
            throw new NotFoundException(`Post not found`);
        }
        return isExist;
    }

    public async removePost(postId: string) : Promise<any> {
        const deleted = await this.postModel.findOneAndRemove({_id: postId});
        if(!deleted) {
            throw new NotFoundException(`Post not found`);
        }
        return deleted;
    }
}
