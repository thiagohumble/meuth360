import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Interfaces } from '../../componentes/interfaces';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-wellcome',
  standalone: true,
  imports: [
    ContainerComponent,
    RouterLink,
    FormsModule
  ],
  templateUrl: './wellcome.component.html',
  styleUrl: './wellcome.component.css'
})
export class WellcomeComponent implements OnInit {

public userFirstName: string = ''; 

constructor (private companyServices: ContactService){} 

ngOnInit(): void {
    const users =  this.companyServices.getCompany(); // obtendo os dados comunicação com o serviço
    if (users.length > 0) {
      this.userFirstName = users[users.length - 1].user.split(' ')[0];
    }
}

}
