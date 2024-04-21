import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  public counter = signal(10)

  //esto recibe una funcion de computacion que podemos retornar ese valor
  public squareCounter = computed(() => this.counter() * this.counter())

  increaseBy(valor: number) {
    //poner update pide una funcion de actualizacion
    //esta funcion de actualizaicon tiene el valor actual
    this.counter.update(valorActual => valorActual + valor)
  }
}
