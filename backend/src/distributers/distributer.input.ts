import { ApiProperty } from "@nestjs/swagger";



export class DistributerInput {
    @ApiProperty({
        description: 'Name of the distributer',
        example: "ADN",
        type: String,
    })
    name: string;

    @ApiProperty({
        description: 'Web link the distributer',
        example: "https://link.com",
        type: String,
    })
    url: string;


    @ApiProperty({
        description: 'Country of the distributer',
        example: "France",
        type: String,
    })
    country: string;
}
