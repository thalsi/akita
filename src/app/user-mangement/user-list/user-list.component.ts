import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserQuery } from '../state/user.query';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../state/user.model';
import { UserService } from '../state/user.service';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, RouterOutlet, RouterLink],
  standalone:true,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users$!:Observable<User[]>;
  userObj$!:Observable<any>;

  constructor(
    private userService: UserService,
    private userQuery: UserQuery
  ) {} 
  
  ngOnInit(): void {
    this.users$ = this.userQuery.selectAll();
  }

  setAll(){
    let users=[{
      id:1,
      name:'Ammu'
    },
    {
      id:2,
      name:'Hanna'
    },
    {
      id:3,
      name:'Ajo'
    },
  ]
    this.userService.setAll(users);
    console.log(this.userQuery.selectAll());
    
  }

  update(id:number){
    this.userService.update(id,{
      id:333,
      name:'Name update'
    });
  }

  delete(id:number){
    this.userService.delete(id);
  }

  view(id:number){
    // option 1: <!-- Live watching (auto-updates if store changes) -->
    this.userObj$=this.userQuery.selectUserId(id);

    // option 2: <!-- One-time fetch (doesn't auto-update) -->
    console.log(this.userQuery.getUserId(id));
    
  }
  
}
