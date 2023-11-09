import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ListsService } from './lists.service';
import { List } from './list.schema';
import { ListInput } from './list.input';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('lists')
export class ListsController {

    constructor(
        private service: ListsService
    ) {}

    @Post()
    @ApiCreatedResponse({
        description: 'The user has been successfully created.'
    })
    async create(@Body() input: ListInput): Promise<List> {
        return this.service.create(input.name,input.description,input.types,input.tags);
    }

    @Get('')
    async getAll(): Promise<List[]> {
        return this.service.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<List> {
        return this.service.getById(id);
    }


}
