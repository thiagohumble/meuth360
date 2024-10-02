import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { ContactService } from '../../services/contact.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule

interface Company {
  companyName: string;
  cpnj: number;
  cep: number;
  address: string;
  neighborhood: string;
  mobile: number;
  adm: string;
  cpf: number;
  email: string;
}

@Component({
  selector: 'app-company-view',
  standalone: true,
  imports: [
    ContainerComponent,
    FormsModule // Include FormsModule here
  ],
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent implements OnInit {
  company: Company = {
    companyName: '',
    cpnj: 0,
    cep: 0,
    address: '',
    neighborhood: '',
    mobile: 0,
    adm: '',
    cpf: 0,
    email: '',
  };
  
  constructor(private companyService: ContactService) {}

  ngOnInit() {
    const companies = this.companyService.getCompany();
    if (companies.length > 0) {
      this.company = companies[0];
    }
  }
}
