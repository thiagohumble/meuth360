import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';

@Component({
  selector: 'app-company-registration',
  standalone: true,
  imports: [
    ContainerComponent
  ],
  templateUrl: './company-registration.component.html',
  styleUrl: './company-registration.component.css'
})
export class CompanyRegistrationComponent {

}
