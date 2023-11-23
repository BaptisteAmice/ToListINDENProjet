import { Body, Controller, Param, Post, Delete, Get } from '@nestjs/common';
import { TitlesService } from './titles.service';
import { Title } from './title.schema';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { TitleInput } from './title.input';

@ApiTags('titles')
@Controller('titles')
export class TitlesController {
    constructor(
        private service:TitlesService
    ) {}


    @Post()
    @ApiCreatedResponse({
        description: 'The user has been successfully created.'
    })
    async create(@Body() input: TitleInput): Promise<Title> {
        return this.service.create(input.title,input.type,input.description,input.releaseDateStart,input.releaseDateEnd,input.country,input.episodeCount,input.alternate_title);
    }

    @Get('')
    async getAll(): Promise<Title[]> {
        return this.service.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Title> {
        return this.service.getById(id);
    }

    @Delete(':id')
    async deleteById(@Param() parameter): Promise<boolean> {
        return this.service.deleteById(parameter.id);
    }

}
