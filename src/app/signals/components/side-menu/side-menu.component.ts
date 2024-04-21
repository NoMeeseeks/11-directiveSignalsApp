import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface menuItems {
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

  public menuItems: menuItems[] = [
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

}
