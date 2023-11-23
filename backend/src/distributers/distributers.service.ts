import { Injectable } from '@nestjs/common';
import { Distributer } from './distributer.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DistributersService {
    constructor(@InjectModel(Distributer.name) private distributerModel: Model<Distributer>) {}

    async create(name: string, url: string, country: string) : Promise<Distributer> {
        const distributer = new Distributer(name, url, country);
        const createdDistributer = new this.distributerModel(distributer);
        return createdDistributer.save();
    }

    async getAll(): Promise<Distributer[]> {
        return this.distributerModel.find().exec();
    }

    getById(id: number): Distributer | PromiseLike<Distributer> {
        return this.distributerModel.findOne({_id: id}).exec();
    }
}
