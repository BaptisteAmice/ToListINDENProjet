import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { Artist } from './artist.schema';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { ArtistsService } from './artists.service';
import { ArtistInput } from './artist.input';

@Controller('artists')
export class ArtistsController {

    constructor(
        private service: ArtistsService
    ) {}



    @Post()
    @ApiCreatedResponse({
        description: 'The user has been successfully created.'
    })
    async create(@Body() input: ArtistInput): Promise<Artist> {
        return this.service.create(input.id,input.lastname,input.firstname,input.birthdate,input.nationality);
    }

    /*
    async getById(id: number): Promise<Artist> {
        const user : Artist = await this.artistModel.findOne({where: {id: Equal(id)}});
        if (user === undefined) {
            throw new HttpException('Could not find the user with id ' + id, HttpStatus.NOT_FOUND);
        }
        return user;
    }*/

    @Get('')
    async getAll(): Promise<Artist[]> {
        return this.service.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Artist> {
        return this.service.getById(id);
    }
}
