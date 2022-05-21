import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    id: number;
    @IsString()
    password: string;
    @IsString()
    firstName: string;
    @IsString()
    lastName: string;
    @IsString()
    phone: string;
    @IsString()
    email: string;
    @IsString()
    address: string[];
}
