import { ApiProperty } from "@nestjs/swagger";
import { TitleType } from "src/titles/title.schema";

export class ListInput {
    @ApiProperty({
        description: 'The lastname of the list',
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
        type: String,
    })
    types: TitleType[];

    @ApiProperty({
        description: 'The tags of titles the list',
        example: "action",
        type: String
    })
    tags: string[];
}
