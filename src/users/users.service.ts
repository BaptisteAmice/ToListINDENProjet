import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async create(id:string, pseudo:string, pfp:string, password:string, r_token:string, inscription:Date, mail:string) : Promise<User> {
        const user = new User(id, pseudo, pfp, password, r_token, inscription, mail);
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async getAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    getById(id: number): User | PromiseLike<User> {
        return this.userModel.findOne({_id: id}).exec();
    }

    deleteById(id: any): boolean | PromiseLike<boolean> {
        this.userModel.deleteOne({_id: id}).exec();
        return true;
    }
}
