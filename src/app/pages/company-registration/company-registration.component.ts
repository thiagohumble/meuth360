import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
      companyType: new FormControl('mkt'),
      companyName: new FormControl('thumble mkt digital'),
      cpnj: new FormControl('444444444444'),
      cep: new FormControl('00000000'),
      address: new FormControl('rua Bruno CF'),
      neighborhood: new FormControl('vila prudente'),
      state: new FormControl('SP'),
      city: new FormControl('SP'),
      complement: new FormControl('61A'),
      mobile: new FormControl('9999999-9999'),
      adm: new FormControl('Thumble'),
      cpf: new FormControl('999999999-99'),
      email: new FormControl('thg.humble@gmail.com')
    })
  }
}
