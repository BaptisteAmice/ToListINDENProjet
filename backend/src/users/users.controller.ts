import { Controller, Get, Body, Post, Param, Delete, Put } from '@nestjs/common';
import { User } from './user.schema';
import { ApiCreatedResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserInputCreate } from './user.input.create';
import { UserInputUpdate } from './user.input.update';

@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(
        private service: UsersService
    ) {}

    @Get('')
    async getAll(): Promise<User[]> {
        return this.service.getAll();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        description: 'The id of the user',
        type: String,
        required: true
    })
    async getById(@Param('id') id: string): Promise<User> {
        return this.service.getById(id);
    }

    @Get('pseudo/:pseudo')
    @ApiParam({
        name: 'pseudo',
        description: 'The pseudo of the user',
        type: String,
        required: true
    })
    async getByPseudo(@Param('pseudo') pseudo: string): Promise<User> {
        return this.service.getByPseudo(pseudo);
    }

    @Post()
    @ApiCreatedResponse({
        description: 'The user has been successfully created.'
    })
    async create(@Body() input: UserInputCreate): Promise<User> {
        return this.service.create(input.pseudo, input.pfp, input.password, input.r_token, input.inscription, input.mail);
    }

    @Put(':id')
    @ApiParam({
        name: 'id',
        description: 'The id of the user',
        type: String,
        required: true
    })
    @ApiCreatedResponse({
        description: 'The user has been successfully updated.'
    })
    async setById(@Param() parameter, @Body() input: UserInputUpdate): Promise<User> {
        return this.service.setById(parameter.id, input.pseudo, input.pfp, input.password, input.r_token, input.inscription, input.mail, input.userLists);
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        description: 'The id of the user',
        type: String,
        required: true
    })
    async deleteById(@Param('id') id: string): Promise<boolean> {
        return this.service.deleteById(id);
    }
}
