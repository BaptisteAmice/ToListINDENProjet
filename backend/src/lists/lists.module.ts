import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { List, ListSchema } from './list.schema';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';
import { ConsumptionsModule } from 'src/consumptions/consumptions.module';
import { TitlesModule } from 'src/titles/titles.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: List.name, schema: ListSchema }]),ConsumptionsModule, TitlesModule],
  controllers: [ListsController],
  providers: [ListsService],
  exports: []
})
export class ListsModule {}
