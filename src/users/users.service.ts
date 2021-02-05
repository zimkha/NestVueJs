import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { User, UserSchema } from '../models/user';

@Injectable()
export class UsersService {
      constructor(@InjectModel(User.name) private readonly userModel:Model<User>){

      }
  public async findOne(user_name: string): Promise<any> {
      const user = await this.userModel.findOne({username: user_name});
       if(!user){
        throw new NotFoundException(`User not found`);
       }
       return user;
  }
}
