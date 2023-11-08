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

    getById(id: number): Artist | PromiseLike<Artist> {
        return this.artistModel.findOne({_id: id}).exec();
    }


}
