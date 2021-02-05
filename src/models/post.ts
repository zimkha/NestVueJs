import { Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import   {Document, Types} from 'mongoose';
@Schema()
export class Post extends Document {
    @Prop()
    content: string;
    @Prop()
    title: string;
     
    @Prop()
    password: string;
}


export const PostSchema = SchemaFactory.createForClass(Post);
