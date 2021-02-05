import { MaxLength, IsNotEmpty, IsEmail, IsString} from 'class-validator';

export class CreateUserDto {
    @IsString()
    readonly fullname: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly password: string;

}