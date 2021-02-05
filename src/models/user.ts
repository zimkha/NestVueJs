import { Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import   {Document, Types} from 'mongoose';


@Schema()
export class User extends Document {

    @Prop()
    username: string;

    @Prop()
    fullname: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);