import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { List, ListSchema } from './list.schema';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: List.name, schema: ListSchema }])],
  controllers: [ListsController],
  providers: [ListsService],
  exports: []
})
export class ListsModule {}