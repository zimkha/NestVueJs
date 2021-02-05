import { PartialType } from '@nestjs/mapped-types';
import { CreateMailerDto } from './MailerDto';


export class UpdateMailerDto extends PartialType(CreateMailerDto) {
    
}