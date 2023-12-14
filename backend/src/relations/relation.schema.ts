import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RelationDocument = HydratedDocument<Relation>;


@Schema()
export class Relation {
    @Prop()
    name: string;

    constructor(name: string) {
        this.name=name;
    }
}

export const RelationSchema = SchemaFactory.createForClass(Relation);

