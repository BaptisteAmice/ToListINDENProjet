import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { types } from 'util';

export enum TitleType {
    movie="movie",
    series="series",
    book="book",
    music="music",
    game="game",
}

export type TitleDocument = HydratedDocument<Title>;

@Schema()
export class Title {
    @Prop()
    title: string;
    //enum types {movie, series, episode}
    @Prop()
    type: TitleType;
    @Prop()
    description: string;
    @Prop()
    releaseDateStart: Date;
    @Prop()
    releaseDateEnd: Date;
    @Prop()
    country: string;
    @Prop()
    episodeCount: number;
}

export const TitleSchema = SchemaFactory.createForClass(Title);
