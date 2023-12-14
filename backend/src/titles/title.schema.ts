import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TitleDocument = HydratedDocument<Title>;

@Schema()
export class Title {
    @Prop()
    title: string;
    //enum types {movie, series, episode}
    @Prop()
    type: string;
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
    @Prop()
    alternate_title: string;

    constructor(title: string, type: string, description: string, releaseDateStart: Date, releaseDateEnd: Date, country: string, episodeCount: number, alternate_title: string) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.releaseDateStart = releaseDateStart;
        this.releaseDateEnd = releaseDateEnd;
        this.country = country;
        this.episodeCount = episodeCount;
        this.alternate_title = alternate_title;
    }
}

export const TitleSchema = SchemaFactory.createForClass(Title);
