import { Type } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TitleType } from 'src/titles/title.types';

export type ListDocument = HydratedDocument<List>;

@Schema()
export class List {
    @Prop()
    name: string;
    @Prop()
    description: string;
    @Prop()
    types: TitleType[];
    @Prop()
    tags: string[];
    
    //todo link to an user
    //@Prop()

    constructor(name: string, description: string, types: TitleType[], tags: string[]) {
        this.name = name;
        this.description = description;
        this.types = types;
        this.tags = tags;
    }
}

export const ListSchema = SchemaFactory.createForClass(List);

