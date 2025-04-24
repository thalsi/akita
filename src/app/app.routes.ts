import { Routes } from '@angular/router';
import { UserListComponent } from './user-mangement/user-list/user-list.component';
import { UserAddComponent } from './user-mangement/user-add/user-add.component';

export const routes: Routes = [
    {
        path:'',
        component:UserListComponent,
        children:[
            {
                path:'add',
                component:UserAddComponent
            }
        ]
    },
];
