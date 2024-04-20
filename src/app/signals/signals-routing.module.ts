import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsComponent } from './signals.component';
import { SignalsLayoutComponent } from './interfaces/signalsLayout/signalsLayout.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    // children: [
    //   { path: '', }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
