import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RelationDocument = HydratedDocument<Relation>;


@Schema()
export class Relation {

    @Prop()
    idCurrentTitle: string;

    @Prop()
    idRelatedTitle: string;

    @Prop()
    name: string;

    @Prop()
    reciprocalName: string;

    constructor(idCurrentTitle: string, idRelatedTitle: string, name: string, reciprocalName: string) {
        this.idCurrentTitle = idCurrentTitle;
        this.idRelatedTitle = idRelatedTitle;
        this.name=name;
        this.reciprocalName=reciprocalName;
    }

    

}

export const RelationSchema = SchemaFactory.createForClass(Relation);

