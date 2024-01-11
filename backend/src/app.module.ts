import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

import { ArtistsModule } from './artists/artists.module';
import { ListsModule } from './lists/lists.module';
import { TitlesModule } from './titles/titles.module';
import { UsersModule } from './users/users.module';
import { DistributersModule } from './distributers/distributers.module';
import { ConsumptionsModule } from './consumptions/consumptions.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';


require('dotenv').config();
const env = process.env;
console.log('mongodb+srv://'+ env.DB_USER +':'+env.DB_PASSWORD+'@'+env.DB_HOST+'/?retryWrites=true&w=majority');
@Module({
  imports: [AuthModule,DistributersModule,TitlesModule,ListsModule,ConsumptionsModule,ArtistsModule,UsersModule,MongooseModule.forRoot('mongodb+srv://'+ env.DB_USER +':'+env.DB_PASSWORD+'@'+env.DB_HOST+'/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [
    AppService,
    AuthService,
    JwtService,
  ],
})
export class AppModule {}
