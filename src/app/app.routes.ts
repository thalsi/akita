import { Routes } from '@angular/router';
import { UserListComponent } from './user-mangement/user-list/user-list.component';
import { UserAddComponent } from './user-mangement/user-add/user-add.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { ProductAddComponent } from './product/components/product-add/product-add.component';

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
    {
        path:'products',
        component:ProductListComponent,
        children:[
            {
                path:'add',
                component:ProductAddComponent
            }
        ]
    },
];
