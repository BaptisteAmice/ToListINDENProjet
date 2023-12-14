import { ApiProperty } from "@nestjs/swagger";

export class RelationInput {

    @ApiProperty({
        description: 'The id of the current title',
        example: "654ca63c99312126cc65a5af",
        type: String,
    })
    currentTitle: string;

    @ApiProperty({
        description: 'The id of the related title',
        example: "654ca63c99312126cc65a5af",
        type: String,
    })
    relatedTitle: string;

    @ApiProperty({
        description: 'The name of the relation',
        example: "sequel",
        type: String,
    })
    name: string;

    @ApiProperty({
        description: 'The name of the reciprocal relation',
        example: "prequel",
        type: String,
    })
    reciprocalName: string;
}
