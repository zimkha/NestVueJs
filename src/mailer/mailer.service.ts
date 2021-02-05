import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { Mailer, MailerSchema } from '../models/mailer';
import { CreateMailerDto } from '../dto/MailerDto'

@Injectable()
export class MailerService {
     constructor(@InjectModel(Mailer.name) private readonly mailerModel: Model<Mailer>){}

     public async addAdresseMaile(createMailer: CreateMailerDto) {
        const newMailer = await new this.mailerModel();
        return newMailer.save();   
     }
}
