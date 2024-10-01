import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-registration',
  standalone: true,
  imports: [
    ContainerComponent,
    ReactiveFormsModule
  ],
  templateUrl: './company-registration.component.html',
  styleUrl: './company-registration.component.css'
})
export class CompanyRegistrationComponent {
  formContact!: FormGroup;

  constructor() {
    this.formContact = new FormGroup({
      companyType: new FormControl(''),
      companyName: new FormControl('', Validators.required),
      cpnj: new FormControl('', Validators.required),
      cep: new FormControl(''),
      address: new FormControl(''),
      neighborhood: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      complement: new FormControl(''),
      mobile: new FormControl('', [Validators.required, Validators.pattern(new RegExp("[0-9 ]{12}"))]),
      adm: new FormControl(''),
      cpf: new FormControl(''),
      email: new FormControl('')
    })
  }

  sendForm() {
    if(this.formContact.valid){
      console.log(this.formContact.value)
    } else {
      console.log('error')
    }
  }
}
