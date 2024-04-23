import { Component, OnDestroy, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent implements OnDestroy {

  public contador = signal(10);

  public usuario = signal<User>({
    id: 1,
    email: 'george.bluth@gaymail.com',
    first_name: 'George',
    last_name: 'Blut',
    avatar: 'https://regres.in/img/faces/1-image.jpg',
  });
  public nombreCompleto = computed(() => { `${this.usuario().first_name} ${this.usuario().last_name}` })

  // es una propiedad computada
  public usuarioEfecto = effect(() => {
    console.log(`${this.usuario().first_name}-${this.contador()}`);

  });


  ngOnDestroy(): void {
    this.usuarioEfecto.destroy();
  }

  onFieldUpdated(campo: keyof User, valor: string) {
    // this.usuario.set({
    //   ...this.usuario(), [campo]: valor
    // })
    this.usuario.update(valorActual => {

      switch (campo) {
        case 'email':
          valorActual.email = valor;
          break;
        case 'avatar':
          valorActual.avatar = valor;
          break;
        case 'first_name':
          valorActual.first_name = valor;
          break;
        case 'last_name':
          valorActual.last_name = valor;
          break;
        case 'id':
          valorActual.id = Number(valor);
          break;

      }


      return valorActual
    })

  }
  incrementarPor(valor: number) {
    this.contador.update(valorActual => valorActual + valor);
  }
}
