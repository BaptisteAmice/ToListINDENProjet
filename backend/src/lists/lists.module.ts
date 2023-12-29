import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { List, ListSchema } from './list.schema';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';
import { ConsumptionsModule } from 'src/consumptions/consumptions.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: List.name, schema: ListSchema }]),ConsumptionsModule],
  controllers: [ListsController],
  providers: [ListsService],
  exports: []
})
export class ListsModule {}
