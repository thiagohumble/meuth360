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
      name: new FormControl('Thiago'),
      email: new FormControl('thg.humble@gmail.com'),
      psw: new FormControl('Thiago'),
      pswAgain: new FormControl('Thiago')
    })
  }
}
