import { Body, Controller, Post, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateMailerDto } from 'src/dto/MailerDto';
import { MailerService } from'../mailer/mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private mailerService: MailerService){}
    @Post()
    public async addMailer(
        @Res() res: any,
        @Body() createMailerDto: CreateMailerDto
    )
    {
        try {
            const mailer = await this.mailerService.addAdresseMaile(createMailerDto);
            return res.status(HttpStatus.OK)
            .json({
                message: 'Successfully',
                mailer
            });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST)
                .json({
                    message : 'Error: Email not registered',
                    status: 400
                })
        }
    }
}
