import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ArtistDocument = HydratedDocument<Artist>;


@Schema()
export class Artist {

    @Prop()
    id: number;
    @Prop()
    lastname: string;
    @Prop()
    firstname: string;
    @Prop()
    birthdate: Date;
    @Prop()
    nationality: string;

    constructor(id :number, lastname: string,firstname: string,birthdate: Date, nationality: string) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.birthdate = birthdate;
        this.nationality = nationality;
    }


}

export const ArtistSchema = SchemaFactory.createForClass(Artist);

