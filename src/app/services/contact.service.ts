import { Injectable } from '@angular/core';
import { Interfaces } from '../componentes/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private company: Interfaces[] = []

  constructor() {
    const companyLocalStorageString = localStorage.getItem('companyLocal');
    const companyLocalStorage = companyLocalStorageString ? JSON.parse(companyLocalStorageString) : null;

    this.company = companyLocalStorage || this.company; 

    localStorage.setItem('companyLocal', JSON.stringify(this.company));
  }

  getCompany(): Interfaces[] {
    return this.company;
  }

  saveUser(user: Interfaces) {
    this.company.push(user);
    localStorage.setItem('companyLocal', JSON.stringify(this.company));
  }

  saveCompany(user: Interfaces) {
    this.company.push(user)
    localStorage.setItem('companyLocal', JSON.stringify(this.company));
  }

}


