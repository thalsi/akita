import { QueryEntity } from "@datorama/akita";
import { UserState, UserStore } from "./user.store";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UserQuery extends QueryEntity<UserState> {
    constructor(protected override store:UserStore){
        super(store);
    }

    selectUserId(id:number){
        return this.selectEntity(id);
    }

    getUserId(id:number){
        return this.getEntity(id);
    }
}