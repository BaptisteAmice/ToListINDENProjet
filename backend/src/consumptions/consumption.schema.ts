import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Title } from 'src/titles/title.schema';
import { ConsumptionStatus } from './consumption.status';
import { User } from 'src/users/user.schema';

export type ConsumptionDocument = HydratedDocument<Consumption>;


@Schema()
export class Consumption {
    @Prop({ type: Types.ObjectId, ref: () => 'Title'})
    piece: String; 

    @Prop({ type: Types.ObjectId, ref: () => 'User'})
    user: String;
    
    @Prop()
    state: string;
    @Prop()
    episodeConsumed: number;
    @Prop()
    rating: number;

    constructor(piece: String, user: String, state: string, episodeConsumed: number, rating: number) {
        this.piece = piece;
        this.user = user;
        this.state = state;
        this.episodeConsumed = episodeConsumed;
        this.rating = rating;
    }
}

export const ConsumptionSchema = SchemaFactory.createForClass(Consumption)
                .index({ piece: 1, user: 1 }, { unique: true });

