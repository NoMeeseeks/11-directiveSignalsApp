import { HttpClient } from '@angular/common/http';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit {

  private _userService = inject(UsersServiceService);

  public idUsuario = signal(1);
  public usuarioActual = signal<User | undefined>(undefined);
  public usuarioEncontrado = signal(true);
  public nombreCompleto = computed<string>(() => {
    if (!this.usuarioActual()) { return 'usuario no encontrado' }

    return `${this.usuarioActual()?.first_name} ${this.usuarioActual()?.last_name}`
  })

  ngOnInit(): void {
    this.cargarUsuario(this.idUsuario());
  }

  cargarUsuario(id: number) {
    if (id <= 0) { return }

    this.usuarioActual.set(undefined);
    //establecemos el valor del id
    this.idUsuario.set(id);

    this._userService.obtenerUsuarioPorId(id)
      .subscribe(
        //regresaremos un objeto
        {
          next: (value) => {
            this.usuarioActual.set(value);
            this.usuarioEncontrado.set(true);
          },
          error: () => {
            this.usuarioActual.set(undefined);
            this.usuarioEncontrado.set(false);
          }
        }
      )

  }
}
