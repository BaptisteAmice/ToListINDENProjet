import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistsModule } from './artists/artists.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ListsController } from './lists/lists.controller';
import { TitlesController } from './titles/titles.controller';
import { TitlesService } from './titles/titles.service';
import { ListsService } from './lists/lists.service';
import { ListsModule } from './lists/lists.modules';
import { TitlesModule } from './titles/titles.modules';
import { ArtistsController } from './artists/artists.controller';
import { ArtistsService } from './artists/artists.service';


require('dotenv').config();
const env = process.env;
console.log('mongodb+srv://'+ env.DB_USER +':'+env.DB_PASSWORD+'@'+env.DB_HOST+'/?retryWrites=true&w=majority');
@Module({
  imports: [TitlesModule,ListsModule,ArtistsModule,MongooseModule.forRoot('mongodb+srv://'+ env.DB_USER +':'+env.DB_PASSWORD+'@'+env.DB_HOST+'/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
