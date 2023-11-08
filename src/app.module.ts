import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistsModule } from './artists/artists.module';
import { MongooseModule } from '@nestjs/mongoose';


require('dotenv').config();
const env = process.env;
console.log('mongodb+srv://'+ env.DB_USER +':'+env.DB_PASSWORD+'@'+env.DB_HOST+'/?retryWrites=true&w=majority');
@Module({
  imports: [ArtistsModule,MongooseModule.forRoot('mongodb+srv://'+ env.DB_USER +':'+env.DB_PASSWORD+'@'+env.DB_HOST+'/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
