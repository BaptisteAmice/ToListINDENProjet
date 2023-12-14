import { Type } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ListDocument = HydratedDocument<List>;

@Schema()
export class List {
    @Prop()
    name: string;
    @Prop()
    description: string;
    @Prop()
    types: string[];
    @Prop()
    tags: string[];
    @Prop()
    consuptionStatus: string[];

    
    //todo link to an user
    //@Prop()

    constructor(name: string, description: string, types: string[], tags: string[], consuptionStatus: string[]) {
        this.name = name;
        this.description = description;
        this.types = types;
        this.tags = tags;
        this.consuptionStatus = consuptionStatus;
    }
}

export const ListSchema = SchemaFactory.createForClass(List);

