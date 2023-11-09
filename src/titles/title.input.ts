import { ApiProperty } from "@nestjs/swagger";
import { TitleType } from "./title.schema";

export class TitleInput {
    @ApiProperty({
        description: 'The name of the title',
        example: "The Matrix",
        type: String,
    })
    title: string;


    @ApiProperty({
        description: 'The types of the title',
        example: ['Doe', 'Smith', 'Johnson'],
        type: [TitleType],
    })
    type: TitleType[];


    @ApiProperty({
        description: 'The description of the title',
        example: "A great movie",
        type: String,
    })
    description: string;

    @ApiProperty({
        description: 'The date the release of the title began',
        example: "01/12/2010",
        type: String,
    })
    releaseDateStart: Date;


    @ApiProperty({
        description: 'The date the release of the title ended',
        example: "01/12/2010",
        type: String,
    })
    releaseDateEnd: Date;


    @ApiProperty({
        description: 'The country of the title production',
        example: "USA",
        type: String,
    })
    country: string;


    @ApiProperty({
        description: 'The number of episodes of the title',
        example: "1",
        type: String,
    })
    episodeCount: number;

}
