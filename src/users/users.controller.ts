import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { User } from './user.schema';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
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
    async getById(@Param('id') id: number): Promise<UserInput> {
        return this.service.getById(id);
    }
}
