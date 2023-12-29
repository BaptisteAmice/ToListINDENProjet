import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Consumption, ConsumptionSchema } from "./consumption.schema";
import { ConsumptionsController } from "./consumptions.controller";
import { ConsumptionsService } from "./consumptions.service";
import { UsersModule } from "src/users/users.module";
import { TitlesModule } from "src/titles/titles.module";

@Module({
    imports: [MongooseModule.forFeature([{ name: Consumption.name, schema: ConsumptionSchema }])
    ,UsersModule,TitlesModule],
    controllers: [ConsumptionsController],
    providers: [ConsumptionsService],
    exports: [ConsumptionsService]
  })
  export class ConsumptionsModule {}
  