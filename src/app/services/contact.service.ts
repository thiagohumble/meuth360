import { Injectable } from '@angular/core'; // Importa o decorador Injectable do Angular para tornar a classe um serviço
import { Interfaces } from '../componentes/interfaces'; // Importa a interface Interfaces, provavelmente definindo a estrutura de um contato

@Injectable({
  providedIn: 'root' // Indica que o serviço é fornecido na raiz do módulo, tornando-o acessível em toda a aplicação
})
export class ContactService { // Define a classe do serviço
  private company: Interfaces[] = []; // Declara um array privado chamado company para armazenar os contatos

  constructor() {
    // Obtém os contatos do localStorage, se existirem, e os atribui ao array company
    const companyLocalStorageString = localStorage.getItem('companyLocal');
    const companyLocalStorage = companyLocalStorageString ? JSON.parse(companyLocalStorageString) : null;
    this.company = companyLocalStorage || this.company;

    // Salva o estado atual do array company no localStorage
    localStorage.setItem('companyLocal', JSON.stringify(this.company));
  }

  getCompany(): Interfaces[] {
    // Retorna uma cópia do array company para evitar modificações indesejadas
    return [...this.company];
  }

  saveUser(user: Interfaces) {
    // Adiciona um novo contato ao array company
    this.company.push(user);
    // Atualiza o localStorage com o novo estado do array company
    localStorage.setItem('companyLocal', JSON.stringify(this.company));
  }
}