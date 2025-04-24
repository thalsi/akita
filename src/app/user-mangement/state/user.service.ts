import { Injectable } from '@angular/core';
import { UserStore } from './user.store';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userStore: UserStore) {}

  setAll(users:User[]){
    this.userStore.set(users);
  }

  add(user:User):void{
    this.userStore.add(user);
  }

  update(id:number, user:Partial<User>){
    this.userStore.update(id, user);
  }

  delete(id: number) {
    this.userStore.remove(id);
  }

  getById(id:number){
    // return this.userStore.getEntity(id)
  }


}
