import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-company-registration',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    ReactiveFormsModule
  ],
  templateUrl: './company-registration.component.html',
  styleUrl: './company-registration.component.css'
})
export class CompanyRegistrationComponent {
  formContact!: FormGroup;

  constructor(private userService: ContactService, private router: Router) {
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
      adm: new FormControl('', Validators.required),
      cpf: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  sendForm() {
    const newCompany = this.formContact.value;
    if(this.formContact.valid){
      this.userService.saveUser(newCompany);
    } else {
      console.log('error')
    }
    this.formContact.reset();
    this.router.navigateByUrl('/configuracoes-empresa')
  }

  cancelForm() {
    this.formContact.reset();
    this.router.navigateByUrl('/cadastrar-usuario')
  }
}
