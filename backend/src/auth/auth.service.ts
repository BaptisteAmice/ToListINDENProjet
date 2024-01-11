import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,
        private jwtService: JwtService) {}
    
    /**
     * Check if the user is valid
     * @param id 
     * @param password 
     */
    public async validateUser(id: string, password: string) : Promise<User> {
        //get the user
        const user : User = await this.usersService.getById(id);
        if(user !== undefined && user !== null && await this.usersService.comparePassword(password, user.password)) {
            return user;
        }
        return undefined;
    }

    async login(user: any) {
        const payload = { username: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
