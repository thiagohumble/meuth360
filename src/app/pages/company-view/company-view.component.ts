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
    // Pega os dados da empresa
    const companies = this.companyService.getCompany();
    if (companies && companies.length > 0) {
        this.company = companies[companies.length - 1]; // Pega o último item do array
        console.log('Última empresa selecionada:', this.company);
      } else {
        console.log('Nenhuma empresa encontrada no localStorage.');
      }
  }
}
