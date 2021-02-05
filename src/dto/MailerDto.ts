import { MaxLength, IsNotEmpty, IsEmail} from 'class-validator';


export class CreateMailerDto {

    @IsEmail()
    @MaxLength(30)
    @IsNotEmpty()
    readonly user_email: string;
}