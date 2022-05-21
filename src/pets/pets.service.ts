import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {

    private pets:Pet[] = [
        {
            id: 1,
            name: 'Max',
            weight: 'dog',
            age: 5,
            breed: 'labrador',
            description: 'Max is a very good dog',
            especies: 'dog',
            gender: 'dog',
            mainColor:'black',
            image:  'https://www.petz.com.br/cachorro/racas/labrador/img/labrador-caracteristicas-guia-racas.jpg'
            


        },
        {
            id: 2,
            name: 'Caramelo',
            weight: 'dog',
            age: 11,
            breed: 'vira-lata',
            description: 'Caramelo is a very bad dog',
            especies: 'dog',
            gender: 'dog',
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
        throw new HttpException(`Pet ID:#${pet.id} not found`, HttpStatus.NOT_FOUND);

        }
          return this.pets.find(pet => pet.id === Number(id));
       
    }

    create(createPetDTO: any){
        return this.pets.push(createPetDTO);
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
