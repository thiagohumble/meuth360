import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { ContactService } from '../../services/contact.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Interfaces } from '../../componentes/interfaces';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-company-view',
  standalone: true,
  imports: [
    ContainerComponent,
    FormsModule,
    RouterLink
  ],
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent implements OnInit {
  // Define uma interface para representar os dados de uma empresa
  public company: Interfaces = {
      companyName: '',
      cpnj: 0,
      cep: 0,
      address: '',
      neighborhood: '',
      mobile: 0,
      adm: '',
      cpf: 0,
      email: '',
      user: ''
    };
  
  constructor(private companyService: ContactService) {}

  ngOnInit() {
    // Quando o componente é inicializado, busca os dados da empresa
    const companies = this.companyService.getCompany();

    // Verifica se tem empresas e atribui a última empresa encontrada à propriedade 'company'
    if (companies && companies.length > 0) {
        this.company = companies[companies.length - 1]; // Pega o último item do array
      } else {
        console.log('Nenhuma empresa encontrada no localStorage.');
      }
  }
}
