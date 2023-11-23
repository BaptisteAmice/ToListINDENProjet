import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Consumption } from 'src/consumptions/consumption.schema';
import { List } from 'src/lists/list.schema';

export type UserDocument = HydratedDocument<User>;


@Schema()
export class User {
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
    @Prop()
    userLists: List[];
    @Prop()
    consumptionList: Consumption[];

    constructor(pseudo: string, pfp: string, password: string, r_token: string, inscription: Date, mail: string) {
        this.pseudo=pseudo;
        this.pfp=pfp;
        this.password=password;
        this.r_token=r_token;
        this.inscription=inscription;
        this.mail=mail;
        this.userLists = [];
        this.consumptionList = [];
    }
}

export const UserSchema = SchemaFactory.createForClass(User);

