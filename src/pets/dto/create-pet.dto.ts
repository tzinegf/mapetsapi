import { IsString } from "class-validator";

export class CreatePetDto {

    @IsString()
    readonly name: string;
    @IsString()
    readonly especies: string;
    @IsString()
    readonly gender:String;
    @IsString()
    readonly breed:String;
    @IsString()
    readonly age:number;
    @IsString()
    readonly weight:String;
    @IsString()
    readonly mainColor:String;
    @IsString()
    readonly image:String;
    @IsString()
    readonly description:String;

}
