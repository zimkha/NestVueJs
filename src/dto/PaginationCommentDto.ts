import { IsOptional, IsPositive } from 'class-validator';


export class QueryPaginationDto {
    @IsOptional()
    @IsPositive()
    limit: number;

    @IsOptional()
    @IsPositive()
    offset: number;
}