import { ApiProperty } from "@nestjs/swagger";

export class RelationInput {
    @ApiProperty({
        description: 'Type ',
        example: "Name of the relation",
        type: String,
    })
    name: string;
}
