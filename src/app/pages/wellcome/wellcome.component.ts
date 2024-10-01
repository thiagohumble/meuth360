import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';

@Component({
  selector: 'app-wellcome',
  standalone: true,
  imports: [
    ContainerComponent
  ],
  templateUrl: './wellcome.component.html',
  styleUrl: './wellcome.component.css'
})
export class WellcomeComponent {

}
