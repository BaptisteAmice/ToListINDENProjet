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
        return this.service.create(input.lastname,input.firstname,input.birthdate,input.nationality);
    }

    @Get('')
    async getAll(): Promise<Artist[]> {
        return this.service.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Artist> {
        return this.service.getById(id);
    }
}
