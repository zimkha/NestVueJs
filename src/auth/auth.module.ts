import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from 'src/models/user';
import {UsersService} from '../users/users.service';


@Module({
  imports: [UsersModule, PassportModule,
      MongooseModule.forFeature([
        {name: User.name, schema: UserSchema}
      ])  
  ],
  providers: [AuthService, LocalStrategy, UsersService]
})
export class AuthModule {}
