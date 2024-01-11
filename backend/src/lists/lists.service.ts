import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { List } from './list.schema';
import { Model } from 'mongoose';
import { ConsumptionsService } from 'src/consumptions/consumptions.service';
import { TitlesService } from 'src/titles/titles.service';
import { Consumption } from 'src/consumptions/consumption.schema';
import { Title } from 'src/titles/title.schema';

@Injectable()
export class ListsService {

    constructor(
        @InjectModel(List.name) private listModel: Model<List>,
        private readonly consumptionService: ConsumptionsService,
        private readonly titlesService: TitlesService
    ) {}


    async create(name: string, description: string, types: string[], tags: string[], consuptionStates: string[]): Promise<List> {
        const list = new List(name,description,types,tags,consuptionStates);
        const createdList = new this.listModel(list);
        return createdList.save();
    }

    async getAll(): Promise<List[]> {
        return this.listModel.find().exec();
    }

    async getById(id: string): Promise<List> {
        return this.listModel.findOne({_id: id}).exec();
    }

    async setById(id: string, name: string, description: string, types: string[], tags: string[], consuptionStates: string[]): Promise<List> {
        this.listModel.updateOne({_id: id}, {name: name, description: description, types: types, tags: tags, consuptionStates: consuptionStates}).exec();
        //todo test if it works
        return this.getById(id);
    }

    async deleteById(id: string): Promise<boolean> {
        this.listModel.findOneAndDelete({_id: id}).exec();
        return true;
    }

    //todo tester
    async getContent(listId: string, userId: string): Promise<Consumption[]> {
        let list = await this.getById(listId);
        //get accepted status
        let acceptedTypes = list.types;
        //get accepted tags
        let acceptedTags = list.tags;
        //get accepted types
        let acceptedStates = list.consuptionStates;

        //get all titles consumed by the user and respecting the criterias
        let userConsumtions = await this.consumptionService.getByUserId(userId);

        //convert the pieces of the consumption to a list of titles
        let returnedConsumptions : Consumption[];
        userConsumtions.forEach(async consumption => {
            let title = await this.titlesService.getById(consumption.piece);
            //filter by type
            if(acceptedTypes == undefined || acceptedTypes.length == 0 || acceptedTypes.includes(title.type)){
                console.log("acceptedTags : " + acceptedTags);
                let includedTag : boolean = acceptedTags == undefined || acceptedTags.length == 0;
                if(!includedTag){
                    //if acceptedTags contains one of the title tags
                    acceptedTags.forEach(tag => {
                        if(title.tags.includes(tag)){
                            includedTag = true;
                        }
                    });
                }
                //filter by tags
                if(includedTag){
                    //filter by status
                    if(acceptedStates == undefined || acceptedStates.length == 0 || acceptedStates.includes(consumption.state)){
                        returnedConsumptions.push(consumption);
                    }
                    
                }
                
            }
        });

        return returnedConsumptions;
    }



}
