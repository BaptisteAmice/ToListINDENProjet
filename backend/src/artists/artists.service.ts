import { Injectable } from '@nestjs/common';
import { Artist } from './artist.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ArtistsService {
    constructor(@InjectModel(Artist.name) private artistModel: Model<Artist>) {}


    async create(lastname: string,firstname: string,birthdate: Date,nationality: string) : Promise<Artist> {
        const artist = new Artist(lastname,firstname,birthdate,nationality);
        const createdArtist = new this.artistModel(artist);
        return createdArtist.save();
    }

    async getAll(): Promise<Artist[]> {
        return this.artistModel.find().exec();
    }

    getById(id: string): Artist | PromiseLike<Artist> {
        return this.artistModel.findOne({_id: id}).exec();
    }

    setById(id: string, lastname: string,firstname: string,birthdate: Date,nationality: string): Artist | PromiseLike<Artist> {
        this.artistModel.updateOne({_id: id}, {lastname: lastname, firstname: firstname, birthdate: birthdate, nationality: nationality}).exec();
        //todo test if it works
        return this.getById(id);
    }


    deleteById(id: string): boolean | PromiseLike<boolean> {
        this.artistModel.findOneAndDelete({_id: id}).exec();
        return true;
    }


}
