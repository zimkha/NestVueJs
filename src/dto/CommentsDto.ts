import { MaxLength, IsNotEmpty, IsString, IsEmail} from 'class-validator';


export class CreateCommentsDto  {
    @IsString()
    @MaxLength(1000)
    @IsNotEmpty()
    readonly comments: string;

    @IsEmail()
    @MaxLength(30)
    @IsNotEmpty()
    readonly user_email: string;

}