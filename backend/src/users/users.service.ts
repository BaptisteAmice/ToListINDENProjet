import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async getAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async getById(id: string): Promise<User> {
        return this.userModel.findOne({_id: id}).exec();
    }


    async create(pseudo:string, pfp:string, password:string, r_token:string, inscription:Date, mail:string) : Promise<User> {
        const user = new User(pseudo, pfp, password, r_token, inscription, mail);
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async setById(id: string, pseudo:string, pfp:string, password:string, r_token:string, inscription:Date, mail:string, userLists:string[]): Promise<User> {
        this.userModel.updateOne({_id: id}, {pseudo: pseudo, pfp: pfp, password: password, r_token: r_token, inscription: inscription, mail: mail, userLists: userLists}).exec();
        //todo test if it works
        return this.getById(id);
    }



    deleteById(id: string): boolean | PromiseLike<boolean> {
        this.userModel.findOneAndDelete({_id: id}).exec();
        return true;
    }
}
