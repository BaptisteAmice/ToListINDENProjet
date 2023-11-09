import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { Distributer } from './distributer.schema';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { DistributersService } from './distributers.service';
import { DistributerInput } from './distributer.input';

@ApiTags('distributers')
@Controller('distributers')
export class DistributersController {

    constructor(
        private service: DistributersService
    ) {}



    @Post()
    @ApiCreatedResponse({
        description: 'The distributer has been successfully created.'
    })
    async create(@Body() input: DistributerInput): Promise<Distributer> {
        return this.service.create(input.name, input.url, input.country);
    }

    @Get('')
    async getAll(): Promise<DistributerInput[]> {
        return this.service.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<DistributerInput> {
        return this.service.getById(id);
    }
}
