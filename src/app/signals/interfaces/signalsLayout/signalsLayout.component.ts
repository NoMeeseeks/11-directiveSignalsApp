import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-signals-layout',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './signalsLayout.component.html',
  styleUrl: './signalsLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsLayoutComponent { }
