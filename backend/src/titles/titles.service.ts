import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Title } from './title.schema';
import { TitleType, alternatif } from './title.types';

@Injectable()
export class TitlesService {

    constructor(@InjectModel(Title.name) private titleModel: Model<Title>) {}


    async create(name : string, type : TitleType, description : string, releaseDateStart : Date, releaseDateEnd : Date, country : string, episodeCount : number, alternate_title : alternatif): Promise<Title> {
        const title = new Title(name,type, description, releaseDateStart, releaseDateEnd, country, episodeCount, alternate_title);
        const createdTitle = new this.titleModel(title);
        return createdTitle.save();
    }

    async getAll(): Promise<Title[]> {
        return this.titleModel.find().exec();
    }

    getById(id: number): Promise<Title> {
        return this.titleModel.findOne({_id: id}).exec();
    }

    deleteById(id: any): boolean | PromiseLike<boolean> {
        this.titleModel.deleteOne({_id: id}).exec();
        return true;
    }

    
}
