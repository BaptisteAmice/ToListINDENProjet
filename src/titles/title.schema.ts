import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TitleType } from './title.types';

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

    constructor(title: string, type: TitleType, description: string, releaseDateStart: Date, releaseDateEnd: Date, country: string, episodeCount: number) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.releaseDateStart = releaseDateStart;
        this.releaseDateEnd = releaseDateEnd;
        this.country = country;
        this.episodeCount = episodeCount;
    }
}

export const TitleSchema = SchemaFactory.createForClass(Title);
