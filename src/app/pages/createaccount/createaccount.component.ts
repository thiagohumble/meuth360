import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-createaccount',
  standalone: true,
  imports: [
    ContainerComponent,
    ReactiveFormsModule
  ],
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {
  accountForm!: FormGroup;

  constructor() {
    this.accountForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      psw: new FormControl(''),
      pswAgain: new FormControl('')
    })
  }

  sendForm() {
    console.log(this.accountForm.value)
  }

  
}
