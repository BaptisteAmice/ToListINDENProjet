import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;


@Schema()
export class User {
    @Prop()
    id: string;
    @Prop()
    pseudo: string;
    @Prop()
    pfp: string;
    @Prop()
    password: string;
    @Prop()
    r_token: string;
    @Prop()
    inscription: Date;
    @Prop()
    mail: string;

    constructor(id: string, pseudo: string, pfp: string, password: string, r_token: string, inscription: Date, mail: string) {
        this.id=id;
        this.pseudo=pseudo;
        this.pfp=pfp;
        this.password=password;
        this.r_token=r_token;
        this.inscription=inscription;
        this.mail=mail;
    }
}

export const UserSchema = SchemaFactory.createForClass(User);

