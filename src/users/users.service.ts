import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {

    private users:User[] = [
        {
            id: 1,
            password: '53535345353',
            firstName: 'Bob',
            lastName: 'Esponja',
            phone: '331455353',
            email: 'bob@email.com',
            address: []
            
        },
        {
            id: 1,
            password: '53535345353',
            firstName: 'TED',
            lastName: 'Urso',
            phone: '331655518',
            email: 'ted@email.com',
            address: []
            
        }
    ];

    findAll(){
        return this.users;

    }
    findOne(id:string){
        const user = this.users.find(user => user.id === Number(id));
        if(!user){
        throw new HttpException(`User ID:#${id} not found`, HttpStatus.NOT_FOUND);

        }
          return user;
       
    }

    create(createUserDTO: any){
         this.users.push(createUserDTO);
         return createUserDTO;
    }
    update(id:string, updateUserDTO: any){
        const indexUser = this.users.findIndex(user => user.id === Number(id));
        this.users[indexUser] = updateUserDTO;
    }
     remove(id:string){
        const indexUser = this.users.findIndex(user => user.id === Number(id));
        if(indexUser >= 0){
            this.users.splice(indexUser, 1);
        }
    }



}
