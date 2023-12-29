import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Title, TitleSchema } from './title.schema';
import { TitlesController } from './titles.controller';
import { TitlesService } from './titles.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Title.name, schema: TitleSchema }])],
  controllers: [TitlesController],
  providers: [TitlesService],
  exports: [TitlesService]
})
export class TitlesModule {}
