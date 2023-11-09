import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

import { ArtistsModule } from './artists/artists.module';
import { ListsModule } from './lists/lists.module';
import { TitlesModule } from './titles/titles.module';
import { UsersModule } from './users/users.module';
import { DistributersModule } from './distributers/distributers.module';
import { ConsumptionsController } from './consumptions/consumptions.controller';
import { ConsumptionsService } from './consumptions/consumptions.service';


require('dotenv').config();
const env = process.env;
console.log('mongodb+srv://'+ env.DB_USER +':'+env.DB_PASSWORD+'@'+env.DB_HOST+'/?retryWrites=true&w=majority');
@Module({
  imports: [DistributersModule,TitlesModule,ListsModule,ArtistsModule,UsersModule,MongooseModule.forRoot('mongodb+srv://'+ env.DB_USER +':'+env.DB_PASSWORD+'@'+env.DB_HOST+'/?retryWrites=true&w=majority')],
  controllers: [AppController, ConsumptionsController],
  providers: [AppService, ConsumptionsService],
})
export class AppModule {}
