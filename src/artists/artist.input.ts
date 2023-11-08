import { ApiProperty } from "@nestjs/swagger";



export class ArtistInput {
    @ApiProperty({
        description: 'The lastname of the artist',
        example: "John",
        type: String,
    })
    lastname: string;

    @ApiProperty({
        description: 'The firstname of the artist',
        example: "John",
        type: String,
    })
    firstname: string;

    @ApiProperty({
        description: 'The birth date of the artist',
        example: "01/12/2010",
        type: String,
    })
    birthdate: Date;


    @ApiProperty({
        description: 'The nationality of the artist',
        example: "french",
        type: String,
    })
    nationality: string;

    
}
