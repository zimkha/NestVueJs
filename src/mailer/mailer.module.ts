import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerController } from './mailer.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { Mailer, MailerSchema } from 'src/models/mailer';

@Module({
 imports:[
   MongooseModule.forFeature([
     {name: Mailer.name, schema: MailerSchema}
   ])
 ],
  providers: [MailerService],
  controllers: [MailerController]
})
export class MailerModule {}
