import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {

    private pets:Pet[] = [
        {
            id: 1,
            name: 'Max',
            weight: '10',
            age: 5,
            breed: 'labrador',
            description: 'Max is a very good dog',
            especies: 'dog',
            gender: 'male',
            mainColor:'black',
            image:  'https://www.petz.com.br/cachorro/racas/labrador/img/labrador-caracteristicas-guia-racas.jpg'
            


        },
        {
            id: 2,
            name: 'Caramelo',
            weight: '12',
            age: 11,
            breed: 'vira-lata',
            description: 'Caramelo is a very bad dog',
            especies: 'dog',
            gender: 'male',
            mainColor:'caramelo',
            image:  'https://www.hypeness.com.br/1/2019/09/Vira-lata_Caramelo_1.jpg'
            
        }
    ];

    findAll(){
        return this.pets;

    }
    findOne(id:string){
        const pet = this.pets.find(pet => pet.id === Number(id));
        if(!pet){
        throw new HttpException(`Pet ID:#${id} not found`, HttpStatus.NOT_FOUND);

        }
          return pet;
       
    }

    create(createPetDTO: any){
         this.pets.push(createPetDTO);
         return createPetDTO;
    }
    update(id:string, updatePetDTO: any){
        const indexPet = this.pets.findIndex(pet => pet.id === Number(id));
        this.pets[indexPet] = updatePetDTO;
    }
     remove(id:string){
        const indexPet = this.pets.findIndex(pet => pet.id === Number(id));
        if(indexPet >= 0){
            this.pets.splice(indexPet, 1);
        }
    }



}
