import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService) {}

    @Get()
    findAll() {
      return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string) {
        return this.usersService.findOne(id);
    }
    @Post()
    create(@Body() createUserDto: CreateUserDto)  {
        return this.usersService.create(createUserDto);
    }

    @Put(':id')
    updateAll(@Param('id') id:string, @Body() updateUserDto:UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }
    
    @Delete(':id')
    remove(@Param('id') id:string) {
        return this.usersService.remove(id);
    }
}