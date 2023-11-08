import { Injectable } from '@nestjs/common';
import { Artist } from './artist.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ArtistsService {

    constructor(@InjectModel(Artist.name) private artistModel: Model<Artist>) {}


    async create(id: number,lastname: string,firstname: string,birthdate: Date,nationality: string) : Promise<Artist> {
        const artist = new Artist(id,lastname,firstname,birthdate,nationality);
        const createdArtist = new this.artistModel(artist);
        return createdArtist.save();
    }

    /*
    async getById(id: number): Promise<Artist> {
        const user : Artist = await this.artistModel.findOne({where: {id: Equal(id)}});
        if (user === undefined) {
            throw new HttpException('Could not find the user with id ' + id, HttpStatus.NOT_FOUND);
        }
        return user;
    }*/


    async getAll(): Promise<Artist[]> {
        return this.artistModel.find().exec();
    }

    getById(id: number): Artist | PromiseLike<Artist> {
        return this.artistModel.findOne({id: id}).exec();
    }


}
