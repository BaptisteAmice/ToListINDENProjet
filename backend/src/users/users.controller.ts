import { Controller, Get, Body, Post, Param, Delete } from '@nestjs/common';
import { User } from './user.schema';
import { ApiCreatedResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserInput } from './user.input';

@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(
        private service: UsersService
    ) {}



    @Post()
    @ApiCreatedResponse({
        description: 'The user has been successfully created.'
    })
    async create(@Body() input: UserInput): Promise<User> {
        return this.service.create(input.pseudo, input.pfp, input.password, input.r_token, input.inscription, input.mail);
    }

    @Get('')
    async getAll(): Promise<UserInput[]> {
        return this.service.getAll();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        description: 'The id of the user',
        type: String,
        required: true
    })
    async getById(@Param('id') id: string): Promise<UserInput> {
        return this.service.getById(id);
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
