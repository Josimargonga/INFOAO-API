import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    
    @ApiProperty({
        description: 'Banca',
        minimum: 1,
        default: 1,
    })
    @IsNotEmpty()
    @IsString()
    nome!: string

    @ApiProperty({
        description: 'B',
        minimum: 1,
        default: 1,
    })
    @IsNotEmpty()
    @IsString()
    slug!: string
}
