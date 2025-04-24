import { Injectable } from "@angular/core"
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita"
import { User } from "./user.model"


export interface UserState extends EntityState<User, number> {}

@Injectable({providedIn:'root'})
@StoreConfig({name:'user'})
export class UserStore extends EntityStore<UserState> {
    constructor(){
        super();
    }
}