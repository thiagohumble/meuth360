import { Injectable } from '@angular/core';

interface Company {
  companyName: "string"
  cpnj: number
  cep: number
  address: string
  neighborhood: string
  mobile: number
  adm: string
  cpf: number
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private company: Company[] = [
    {"companyName": "string","cpnj": 654654123154,"cep": 654654123154,"address": "string","neighborhood": "string","mobile": 654654123154,"adm": "string","cpf": 654654123154,"email": "asdf@asdf.com"}
  ]

  constructor() {
    const companyLocalStorageString = localStorage.getItem('companyLocal');
    const companyLocalStorage = companyLocalStorageString ? JSON.parse(companyLocalStorageString) : null;

    this.company = companyLocalStorage || this.company; 

    localStorage.setItem('companyLocal', JSON.stringify(this.company));
  }

  getCompany() {
    return this.company;
  }

}


