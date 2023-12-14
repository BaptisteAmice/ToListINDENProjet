import { Injectable } from '@nestjs/common';
import { Relation } from './relation.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RelationsService {
    constructor(@InjectModel(Relation.name) private relationModel: Model<Relation>) {}

    async create(currentTitle: string, relatedTitle: string,  name: string, reciprocalName: string): Promise<Relation> {
        const relation = new Relation(currentTitle,relatedTitle, name, reciprocalName);
        const reciprocalRelation = new Relation(relatedTitle,currentTitle, reciprocalName, name);

        const createdRelation = new this.relationModel(relation);
        const createdReciprocalRelation = new this.relationModel(reciprocalRelation);

        createdRelation.save();
        createdReciprocalRelation.save();
        return createdRelation;
    }

    async getAll(): Promise<Relation[]> {
        return this.relationModel.find().exec();
    }

    getById(id: string): Relation | PromiseLike<Relation> {
        return this.relationModel.findOne({_id: id}).exec();
    }

    
    setById(id: string, currentTitle: string, relatedTitle: string,  name: string, reciprocalName: string): Relation | PromiseLike<Relation> {
       
        this.relationModel.updateOne({_id: id}, {currentTitle: currentTitle, relatedTitle: relatedTitle, name: name, reciprocalName: reciprocalName}).exec();

        //update reciprocal relation
        this.relationModel.findOne({currentTitle: relatedTitle, relatedTitle: currentTitle}).exec().then((reciprocalRelation) => {
            this.relationModel.updateOne({_id: reciprocalRelation._id}, {currentTitle: relatedTitle, relatedTitle: currentTitle, name: reciprocalName, reciprocalName: name}).exec();
        });

        //todo test if it works
        return this.getById(id);
    }

    deleteById(id: string): boolean | PromiseLike<boolean> {
        this.relationModel.findOneAndDelete({_id: id}).exec();
        return true;
    }
}