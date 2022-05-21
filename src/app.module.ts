import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { UsersModule } from './users/users.module';



@Module({
  imports: [PetsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
