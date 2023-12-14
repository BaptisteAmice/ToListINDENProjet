import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { ListsService } from './lists.service';
import { List } from './list.schema';
import { ListInput } from './list.input';
import { ApiCreatedResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { ListUpdate } from './list.update';

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
        return this.service.create(input.name,input.description,input.types,input.tags,input.consuptionStatus);
    }

    @Get('')
    async getAll(): Promise<List[]> {
        return this.service.getAll();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        description: 'The id of the list',
        type: String,
        required: true
    })
    async getById(@Param('id') id: string): Promise<List> {
        return this.service.getById(id);
    }

    @Put(':id')
    @ApiParam({
        name: 'id',
        description: 'The id of the list',
        type: String,
        required: true
    })
    @ApiCreatedResponse({
        description: 'The list has been successfully updated.'
    })
    async setById(@Param() parameter, @Body() input: ListUpdate): Promise<List> {
        return this.service.setById(parameter.id, input.name, input.description, input.types, input.tags, input.consuptionStatus);
    }




    @Delete(':id')
    @ApiParam({
        name: 'id',
        description: 'The id of the list',
        type: String,
        required: true
    })
    async deleteById(@Param() parameter): Promise<boolean> {
        return this.service.deleteById(parameter.id);
    }

    @Get('content/:listId/:userId')
    @ApiParam({
        name: 'listId',
        description: 'The id of the list',
        type: String,
        required: true
    })
    @ApiParam({
        name: 'userId',
        description: 'The id of the user',
        type: String,
        required: true
    })
    async getContent(@Param('listId') listId: string, @Param('userId') userId: string): Promise<List> {
        return this.service.getContent(listId, userId);
    }


}
