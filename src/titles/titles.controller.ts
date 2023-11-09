import { Body, Controller, Param, Post } from '@nestjs/common';
import { TitlesService } from './titles.service';
import { Title } from './title.schema';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('titles')
@Controller('titles')
export class TitlesController {
    constructor(
        private service:TitlesService
    ) {}

    /*
    @Post()
    @ApiCreatedResponse({
        description: 'The user has been successfully created.'
    })
    async create(@Body() input: TitleInput): Promise<Title> {
        return this.service.create(////////
    }

    @Get('')
    async getAll(): Promise<Title[]> {
        return this.service.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Title> {
        return this.service.getById(id);
    }
*/

}
