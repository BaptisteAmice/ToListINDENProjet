import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Title } from 'src/titles/title.schema';
import { ConsumptionStatus } from './consumption.status';
import { User } from 'src/users/user.schema';

export type ConsumptionDocument = HydratedDocument<Consumption>;


@Schema()
export class Consumption {
    @Prop()
    piece: Title; //if a title is deleted from the database, it won't be deleted from the user consumption list
    @Prop()
    state: ConsumptionStatus;
    @Prop()
    episodeConsumed: number;
    @Prop()
    rating: number;
}

export const ConsumptionSchema = SchemaFactory.createForClass(Consumption);

