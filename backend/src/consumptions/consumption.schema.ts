import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Title } from 'src/titles/title.schema';
import { consumptionStates } from './consumption.states';
import { User } from 'src/users/user.schema';

export type ConsumptionDocument = HydratedDocument<Consumption>;


@Schema()
export class Consumption {
    @Prop({ type: Types.ObjectId, ref: () => 'Title'})
    piece: string; 

    @Prop({ type: Types.ObjectId, ref: () => 'User'})
    user: string;
    
    @Prop()
    state: string;
    @Prop()
    episodeConsumed: number;
    @Prop()
    rating: number;

    constructor(piece: string, user: string, state: string, episodeConsumed: number, rating: number) {
        this.piece = piece;
        this.user = user;
        this.state = state;
        this.episodeConsumed = episodeConsumed;
        this.rating = rating;
    }
}

export const ConsumptionSchema = SchemaFactory.createForClass(Consumption)
                .index({ piece: 1, user: 1 }, { unique: true });

