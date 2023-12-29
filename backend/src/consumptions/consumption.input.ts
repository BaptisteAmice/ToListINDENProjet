import { ApiProperty } from "@nestjs/swagger";



export class ConsumptionInput {
    @ApiProperty({
        description: 'The consumed title id',
        example: "654ca2888d15f7020b656055",
        type: String,
    })
    pieceId: string;

    @ApiProperty({
        description: 'The user id',
        example: "654ca63c99312126cc65a5af",
        type: String,
    })
    userId: string;

    @ApiProperty({
        description: 'The state of the consumption',
        example: "finished",
        type: String,
    })
    state: string;

    @ApiProperty({
        description: 'The number of episode consumed',
        example: "1",
        type: Number,
    })
    episodeConsumed: number;

    @ApiProperty({
        description: 'The rating of the consumption',
        example: "4",
        type: Number,
    })
    rating: number;

}
