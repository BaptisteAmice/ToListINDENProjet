import { Injectable } from '@nestjs/common';
import { Consumption } from './consumption.schema';
import { UsersService } from 'src/users/users.service';
import { TitlesService } from 'src/titles/titles.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ConsumptionsService {

    constructor(@InjectModel(Consumption.name) private consumptionModel: Model<Consumption>,
        private usersService: UsersService,
        private titlesService: TitlesService) {}

    async create(titleId: string, userId, status: string, episode: number, rating: number) : Promise<Consumption> {
        //let title = await this.titlesService.getById(titleId);
        //let user = await this.usersService.getById(userId);
        const consumption = new Consumption(titleId, userId, status, episode, rating);
        const createdConsumption = new this.consumptionModel(consumption);
        return createdConsumption.save();
    }

    async getAll(): Promise<Consumption[]> {
        return this.consumptionModel.find().exec();
    }

    async getById(id: string): Promise<Consumption> {
        return this.consumptionModel.findOne({_id: id}).exec();
    }

    async setById(id: string, titleId: string, userId, status: string, episode: number, rating: number): Promise<Consumption> {
        this.consumptionModel.updateOne({_id: id}, {title: titleId, user: userId, status: status, episode: episode, rating: rating}).exec();
        //todo test if it works
        return this.getById(id);
    }

    async deleteById(id: string): Promise<boolean> {
        this.consumptionModel.findOneAndDelete({_id: id}).exec();
        return true;
    }

    async getByUserId(userId: string): Promise<Consumption[]> {
        return this.consumptionModel.find({'user._id': userId}).exec();
    }



}
