import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistsModule } from './artists/artists.module';

import { MongooseModule } from '@nestjs/mongoose';
import { ListsModule } from './lists/lists.modules';
import { TitlesModule } from './titles/titles.modules';

import { UsersModule } from './users/users.module';


require('dotenv').config();
const env = process.env;
console.log('mongodb+srv://'+ env.DB_USER +':'+env.DB_PASSWORD+'@'+env.DB_HOST+'/?retryWrites=true&w=majority');
@Module({
  imports: [TitlesModule,ListsModule,ArtistsModule,UsersModule,MongooseModule.forRoot('mongodb+srv://'+ env.DB_USER +':'+env.DB_PASSWORD+'@'+env.DB_HOST+'/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
