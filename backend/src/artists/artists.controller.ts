import { Controller, Get, Body, Post, Param, Delete } from '@nestjs/common';
import { Artist } from './artist.schema';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ArtistsService } from './artists.service';
import { ArtistInput } from './artist.input';

@ApiTags('artists')
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

    
    @Delete(':id')
    async deleteById(@Param() parameter): Promise<boolean> {
        return this.service.deleteById(parameter.id);
    }
}
