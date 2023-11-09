import { Module } from '@nestjs/common';
import { DistributersService } from './distributers.service';
import { DistributersController } from './distributers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Distributer, DistributerSchema } from './distributer.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Distributer.name, schema: DistributerSchema }])],
  controllers: [DistributersController],
  providers: [DistributersService]
})
export class DistributersModule {}
