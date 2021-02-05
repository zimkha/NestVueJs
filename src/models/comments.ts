import { Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import   {Document} from 'mongoose';

@Schema()
export class Comments extends Document {
    @Prop()
    content: string;
    @Prop()
    user_email:string;

}


export const CommentSchema  = SchemaFactory.createForClass(Comments);