import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

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
        let hashedPassword = password;
        if(password != undefined && password != null) {
            hashedPassword= await this.hashPassword(password);
        }
        const user = new User(pseudo, pfp, hashedPassword, r_token, inscription, mail);
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async setById(id: string, pseudo:string, pfp:string, password:string, r_token:string, inscription:Date, mail:string, userLists:string[]): Promise<User> {
        let hashedPassword = password;
        if(password != undefined && password != null) {
            hashedPassword= await this.hashPassword(password);
        }
        this.userModel.updateOne({_id: id}, {pseudo: pseudo, pfp: pfp, password: password, r_token: r_token, inscription: inscription, mail: mail, userLists: userLists}).exec();
        //todo test if it works
        return this.getById(id);
    }



    deleteById(id: string): boolean | PromiseLike<boolean> {
        this.userModel.findOneAndDelete({_id: id}).exec();
        return true;
    }

    async hashPassword(password: string): Promise<string> {
        if (password === undefined || password === null) {
            throw new HttpException('Password is undefined or null', HttpStatus.BAD_REQUEST);
        }
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds);
    }

    async comparePassword(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
}
