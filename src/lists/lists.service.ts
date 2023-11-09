import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { List } from './list.schema';
import { Model } from 'mongoose';
import { TitleType } from 'src/titles/title.schema';

@Injectable()
export class ListsService {

    constructor(@InjectModel(List.name) private listModel: Model<List>) {}


    async create(name: string, description: string, types: TitleType[], tags: string[]): Promise<List> {
        const list = new List(name,description,types,tags);
        const createdList = new this.listModel(list);
        return createdList.save();
    }

    async getAll(): Promise<List[]> {
        return this.listModel.find().exec();
    }

    getById(id: number): Promise<List> {
        return this.listModel.findOne({_id: id}).exec();
    }

    deleteById(id: any): boolean | PromiseLike<boolean> {
        this.listModel.deleteOne({_id: id}).exec();
        return true;
    }



}
