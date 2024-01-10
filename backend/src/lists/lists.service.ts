import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { List } from './list.schema';
import { Model } from 'mongoose';
import { ConsumptionsService } from 'src/consumptions/consumptions.service';
import { Consumption } from 'src/consumptions/consumption.schema';

@Injectable()
export class ListsService {

    constructor(
        @InjectModel(List.name) private listModel: Model<List>,
        private readonly consumptionService: ConsumptionsService,
    ) {}


    async create(name: string, description: string, types: string[], tags: string[], consuptionStatus: string[]): Promise<List> {
        const list = new List(name,description,types,tags,consuptionStatus);
        const createdList = new this.listModel(list);
        return createdList.save();
    }

    async getAll(): Promise<List[]> {
        return this.listModel.find().exec();
    }

    async getById(id: string): Promise<List> {
        return this.listModel.findOne({_id: id}).exec();
    }

    async setById(id: string, name: string, description: string, types: string[], tags: string[], consuptionStatus: string[]): Promise<List> {
        this.listModel.updateOne({_id: id}, {name: name, description: description, types: types, tags: tags, consuptionStatus: consuptionStatus}).exec();
        //todo test if it works
        return this.getById(id);
    }

    async deleteById(id: string): Promise<boolean> {
        this.listModel.findOneAndDelete({_id: id}).exec();
        return true;
    }

    async getContent(listId: string, userId: string): Promise<Consumption[]> {
        let list = await this.getById(listId);
        //get accepted status
        let acceptedTypes = list.types;
        //get accepted tags
        let acceptedTags = list.tags;
        //get accepted types
        let acceptedStatus = list.consuptionStatus;

        //get all titles consumed by the user and respecting the criterias
        let consumptions = this.consumptionService.getByUserId(userId);

        //filter by using the criteria of the list
        //TODOOOOOOOOOOOOOOOOOOOOOOOOO




        

        return consumptions;
    }



}
