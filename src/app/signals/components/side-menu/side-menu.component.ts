import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface MenuItems {
  titulo: string;
  ruta: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {

  public menuItems = signal<MenuItems[]>(
    [
      {
        titulo: 'Contador',
        ruta: 'counter'
      },
      {
        titulo: 'Usuario',
        ruta: 'user-info'
      },
      {
        titulo: 'Cambios',
        ruta: 'properties'
      },
    ]
  )


  //manera tradicional
  // public menuItems: menuItems[] = [
  //   {
  //     titulo: 'Contador',
  //     ruta: 'counter'
  //   },
  //   {
  //     titulo: 'Usuario',
  //     ruta: 'user-info'
  //   },
  //   {
  //     titulo: 'Cambios',
  //     ruta: 'properties'
  //   },
  // ]


}
