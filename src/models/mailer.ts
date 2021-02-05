import { Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import   {Document, Types} from 'mongoose';

@Schema()
export class Mailer extends Document {
    @Prop()
    user_email: string;
}


export const MailerSchema  = SchemaFactory.createForClass(Mailer);