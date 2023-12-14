import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { Relation } from './relation.schema';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { RelationsService } from './relations.service';
import { RelationInput } from './relation.input';

@ApiTags('relations')
@Controller('relations')
export class RelationsController {

    constructor(
        private service: RelationsService
    ) {}



    @Post()
    @ApiCreatedResponse({
        description: 'The relation has been successfully created.'
    })
    async create(@Body() input: RelationInput): Promise<Relation> {
        return this.service.create(input.name);
    }

    @Get('')
    async getAll(): Promise<RelationInput[]> {
        return this.service.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<RelationInput> {
        return this.service.getById(id);
    }
}
