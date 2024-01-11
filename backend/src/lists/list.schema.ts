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
    consuptionStates: string[];

    
    //todo link to an user
    //@Prop()

    constructor(name: string, description: string, types: string[], tags: string[], consuptionStates: string[]) {
        this.name = name;
        this.description = description;
        this.types = types;
        this.tags = tags;
        this.consuptionStates = consuptionStates;
    }
}

export const ListSchema = SchemaFactory.createForClass(List);

