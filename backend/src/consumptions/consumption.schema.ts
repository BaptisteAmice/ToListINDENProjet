import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Title } from 'src/titles/title.schema';
import { ConsumptionStatus } from './consumption.status';
import { User } from 'src/users/user.schema';

export type ConsumptionDocument = HydratedDocument<Consumption>;


@Schema()
export class Consumption {
    @Prop()
    piece: Title; 

    @Prop()
    user: User;
    
    @Prop()
    state: string;
    @Prop()
    episodeConsumed: number;
    @Prop()
    rating: number;

    constructor(piece: Title, user: User, state: string, episodeConsumed: number, rating: number) {
        this.piece = piece;
        this.user = user;
        this.state = state;
        this.episodeConsumed = episodeConsumed;
        this.rating = rating;
    }
}

export const ConsumptionSchema = SchemaFactory.createForClass(Consumption);

