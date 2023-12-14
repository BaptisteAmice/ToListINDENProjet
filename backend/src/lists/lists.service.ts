import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { List } from './list.schema';
import { Model } from 'mongoose';

@Injectable()
export class ListsService {

    constructor(
        @InjectModel(List.name) private listModel: Model<List>,

    ) {}


    async create(name: string, description: string, types: string[], tags: string[], consuptionStatus: string[]): Promise<List> {
        const list = new List(name,description,types,tags,consuptionStatus);
        const createdList = new this.listModel(list);
        return createdList.save();
    }

    async getAll(): Promise<List[]> {
        return this.listModel.find().exec();
    }

    getById(id: number): Promise<List> {
        return this.listModel.findOne({_id: id}).exec();
    }

    setById(id: number, name: string, description: string, types: string[], tags: string[], consuptionStatus: string[]): Promise<List> {
        this.listModel.updateOne({_id: id}, {name: name, description: description, types: types, tags: tags, consuptionStatus: consuptionStatus}).exec();
        //todo test if it works
        return this.getById(id);
    }

    deleteById(id: any): boolean | PromiseLike<boolean> {
        this.listModel.deleteOne({_id: id}).exec();
        return true;
    }

    getContent(listId: number, userId: number): List | PromiseLike<List> {
        //get all titles consumed by the user
        //todo -> get from service

        //filter by using the criteria of the list

        throw new Error('Method not implemented.');
        
    }



}
