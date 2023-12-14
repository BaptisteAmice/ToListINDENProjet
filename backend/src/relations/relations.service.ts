import { Injectable } from '@nestjs/common';
import { Relation } from './relation.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RelationsService {
    constructor(@InjectModel(Relation.name) private relationModel: Model<Relation>) {}

    async create(name: string) : Promise<Relation> {
        const relation = new Relation(name);
        const createdRelation = new this.relationModel(relation);
        return createdRelation.save();
    }

    async getAll(): Promise<Relation[]> {
        return this.relationModel.find().exec();
    }

    getById(id: string): Relation | PromiseLike<Relation> {
        return this.relationModel.findOne({_id: id}).exec();
    }

    deleteById(id: string): boolean | PromiseLike<boolean> {
        this.relationModel.findOneAndDelete({_id: id}).exec();
        return true;
    }
}