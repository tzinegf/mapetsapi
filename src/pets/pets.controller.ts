import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
    create(@Body() body)  {
        return this.petsService.create(body);
    }

    // @Patch(':id')
    // update(@Param('id') id:string, @Body() body): string {
    //     return `This action updates a #${id} pet`;

    // }

    @Put(':id')
    updateAll(@Param('id') id:string, @Body() body) {
        return this.petsService.update(id, body);
    }
    
    @Delete(':id')
    remove(@Param('id') id:string) {
        return this.petsService.remove(id);
    }




}
