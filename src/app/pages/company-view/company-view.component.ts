import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { ContactService } from '../../services/contact.service';

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

@Component({
  selector: 'app-company-view',
  standalone: true,
  imports: [
    ContainerComponent
  ],
  templateUrl: './company-view.component.html',
  styleUrl: './company-view.component.css'
})
export class CompanyViewComponent implements OnInit {

  companyAll: Company[] = []
  
  constructor(private companyService: ContactService) {}

  //boa praticas hook siclo de vida
  ngOnInit() {
   this.companyAll = this.companyService.getCompany();
  }
}
