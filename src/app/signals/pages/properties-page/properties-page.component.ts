import { Component, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

  public usuario = signal<User>({
    id: 1,
    email: 'george.bluth@gaymail.com',
    first_name: 'George',
    last_name: 'Blut',
    avatar: 'https://regres.in/img/faces/1-image.jpg',
  });

  onFieldUpdated(campo: string, valor: string) {
    console.log(campo, valor);
  }
}
