import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { ListsService } from './lists.service';
import { List } from './list.schema';
import { ListInput } from './list.input';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('lists')
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

    @Delete(':id')
    async deleteById(@Param() parameter): Promise<boolean> {
        return this.service.deleteById(parameter.id);
    }

    @Get('content/:listId/:userId')
    async getContent(@Param('listId') listId: number, @Param('userId') userId: number): Promise<List> {
        return this.service.getContent(listId, userId);
    }


}
