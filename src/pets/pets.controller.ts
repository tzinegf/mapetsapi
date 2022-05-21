import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {
    constructor(private readonly petsService:PetsService) {}

    @Get()
    findAll() {
      return this.petsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string) {
        return this.petsService.findOne(id);
    }
    @Post()
    create(@Body() createPetDto: CreatePetDto)  {
        return this.petsService.create(createPetDto);
    }

    // @Patch(':id')
    // update(@Param('id') id:string, @Body() body): string {
    //     return `This action updates a #${id} pet`;

    // }

    @Put(':id')
    updateAll(@Param('id') id:string, @Body() updatePetDto:UpdatePetDto) {
        return this.petsService.update(id, updatePetDto);
    }
    
    @Delete(':id')
    remove(@Param('id') id:string) {
        return this.petsService.remove(id);
    }




}
