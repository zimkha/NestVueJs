import { IsOptional, IsPositive } from 'class-validator';


export class QueryPaginationPostDto {
    @IsOptional()
    @IsPositive()
    limit: number;

    @IsOptional()
    @IsPositive()
    offset: number;
}