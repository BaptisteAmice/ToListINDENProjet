import { Module } from '@nestjs/common';
import { RelationsService } from './relations.service';
import { RelationsController } from './relations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Relation, RelationSchema } from './relation.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Relation.name, schema: RelationSchema }])],
  controllers: [RelationsController],
  providers: [RelationsService]
})
export class DistributersModule {}
