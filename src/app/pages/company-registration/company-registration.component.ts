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
  // Define uma propriedade para o formulário reativo
  formContact!: FormGroup;

  // Inicializa o formulário reativo e comunicação entre os serviços. E a comunicação para rota ser redirecionado 
  constructor(private userService: ContactService, private router: Router) {
    this.formContact = new FormGroup({
      companyType: new FormControl(''),
      companyName: new FormControl('', Validators.required), //usado para campo obrigatório
      cpnj: new FormControl('', Validators.required),
      cep: new FormControl(''),
      address: new FormControl(''),
      neighborhood: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      complement: new FormControl(''),
      mobile: new FormControl('', [Validators.required, Validators.pattern(new RegExp("[0-9 ]{12}"))]), //além de ser campo obrigário, número ser digitado corretamente
      adm: new FormControl('', Validators.required),
      cpf: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  // Função para envio do formulário
  sendForm() {
    // Recupera os dados do formulário
    const newCompany = this.formContact.value;

    // se o formulário está valido
    if(this.formContact.valid){
      this.userService.saveUser(newCompany); //salva os dados obtido no form com  a constante  newCompany 
    } else {
      console.log('error')
    }

    this.formContact.reset(); // Limpa o formulário após o envio
    this.router.navigateByUrl('/configuracoes-empresa') //navega para a rota
  }

  // Função para cancelar o formulário
  cancelForm() {
    this.formContact.reset();
    this.router.navigateByUrl('/cadastrar-usuario') //navega para a rota
  }
}
