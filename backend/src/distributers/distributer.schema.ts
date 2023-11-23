import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DistributerDocument = HydratedDocument<Distributer>;


@Schema()
export class Distributer {
    @Prop()
    name: string;
    @Prop()
    url: string;
    @Prop()
    country: string;

    constructor(name: string, url: string, country: string) {
        this.name=name;
        this.url=url;
        this.country=country;
    }
}

export const DistributerSchema = SchemaFactory.createForClass(Distributer);

