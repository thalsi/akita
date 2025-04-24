import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../state/user.service';
import { User } from '../state/user.model';

@Component({
  selector: 'app-user-add',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {
  
  form = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
  });

  constructor(private userService:UserService){

  }
  

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);

    const user: User = {
      id: this.form.value.id ?? null,          
      name: this.form.value.name ?? "",   
    };
    
    this.userService.add(user);
  }
}
