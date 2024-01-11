import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type RelationDocument = HydratedDocument<Relation>;


@Schema()
export class Relation {

    @Prop({ type: Types.ObjectId, ref: () => 'Title'}) //todo voir si ca marche
    idCurrentTitle: string;

    @Prop({ type: Types.ObjectId, ref: () => 'Title'})
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

