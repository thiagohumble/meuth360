import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';

@Component({
  selector: 'app-company-view',
  standalone: true,
  imports: [
    ContainerComponent
  ],
  templateUrl: './company-view.component.html',
  styleUrl: './company-view.component.css'
})
export class CompanyViewComponent {
  

}
