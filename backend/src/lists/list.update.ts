import { ApiProperty } from "@nestjs/swagger";

export class ListUpdate {
    @ApiProperty({
        description: 'The name of the list',
        example: "American action movies",
        type: String,
    })
    name: string;

    @ApiProperty({
        description: 'The description of the list',
        example: "To list american action movies",
        type: String,
    })
    description: string;

    @ApiProperty({
        description: 'The types of titles in the list',
        example: "movie",
        type: [String],
    })
    types: string[];

    @ApiProperty({
        description: 'The tags of titles the list',
        example: "action",
        type: [String],
    })
    tags: string[];

    @ApiProperty({
        description: 'The status of the consumption of the titles in the list',
        example: "watched",
        type: [String],
    })
    consuptionStatus: string[];
}
