import { ApiProperty } from "@nestjs/swagger";



export class UserInputUpdate {
    @ApiProperty({
        description: 'Username of the user',
        example: "Shadow",
        type: String,
    })
    pseudo: string;

    @ApiProperty({
        description: 'Path to the user profile picture',
        example: "./pfp/id.png",
        type: String,
    })
    pfp: string;


    @ApiProperty({
        description: 'User password',
        example: "Super secret",
        type: String,
    })
    password: string;

    @ApiProperty({
        description: 'Should the system remember the user token?',
        example: "yes",
        type: String,
    })
    r_token: string;

    @ApiProperty({
        description: 'User account creation date',
        example: "10/12/2000",
        type: Date,
    })
    inscription: Date;

    @ApiProperty({
        description: 'Mail adress of the user',
        example: "john.smith@examplemail.com",
        type: String,
    })
    mail: string;

    @ApiProperty({
        description: 'User lists',
        example: ['654ca2888d15f7020b656055'],
        type: String,
    })
    userLists: string[];
}
