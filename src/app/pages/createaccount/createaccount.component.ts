import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-createaccount',
  standalone: true,
  imports: [
    ContainerComponent,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent implements OnInit {
  accountForm!: FormGroup;

// Inicializa o formulário
  ngOnInit() {
    this.initForm();
  }

// Cria um novo FormGroup com os seguintes controles user, email, psw... 
  initForm() {
    this.accountForm = new FormGroup({
      user: new FormControl(''),
      email: new FormControl(''),
      psw: new FormControl(''),
      pswAgain: new FormControl(''),
      accepted: new FormControl('', Validators.requiredTrue)
    })
  }

  constructor( private userService: ContactService, private router: Router) {}


  sendForm() {
    const newUser = this.accountForm.value;
    this.userService.saveUser(newUser);
    this.accountForm.reset();
    this.router.navigateByUrl('/seja-bem-vindo')
  }  
}
