import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { ConsumptionsService } from './consumptions.service';
import { Consumption } from './consumption.schema';
import { ConsumptionInput } from './consumption.input';
import { UsersService } from 'src/users/users.service';
import { TitlesService } from 'src/titles/titles.service';

@ApiTags('consumptions')
@Controller('consumptions')
export class ConsumptionsController {

    constructor(
        private usersService: UsersService,
        private titlesService: TitlesService,
        private service: ConsumptionsService
    ) {}


    @Post()
    @ApiCreatedResponse({
        description: 'The user has been successfully created.'
    })
    async create(@Body() input: ConsumptionInput): Promise<Consumption> {
        return this.service.create(input.pieceId, input.userId, input.state, input.episodeConsumed, input.rating)
    }

    @Get('')
    async getAll(): Promise<Consumption[]> {
        return this.service.getAll();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        description: 'The id of the consumption',
        type: String,
        required: true
    })
    async getById(@Param('id') id: string): Promise<Consumption> {
        return this.service.getById(id);
    }

    
    @Delete(':id')
    @ApiParam({
        name: 'id',
        description: 'The id of the consumption',
        type: String,
        required: true
    })
    async deleteById(@Param() parameter): Promise<boolean> {
        return this.service.deleteById(parameter.id);
    }


}
