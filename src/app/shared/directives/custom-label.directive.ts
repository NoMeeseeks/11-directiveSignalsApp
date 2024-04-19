import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
//tiene un decorador y un selector cuando se trabaja con una directiva tiene unas llaves cuadradas y se puede poner en un elemento html
export class CustomLabelDirective implements OnInit {

  private elementoHtml?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(valorHexadecimal: string) {
    this._color = valorHexadecimal;
    this.setEstilo();
  }

  @Input() set errores(errores: ValidationErrors | null | undefined) {
    this._errors = errores;
    this.setMensajeDeError();
  }

  constructor(
    private elemento: ElementRef<HTMLElement>,
  ) {
    this.elementoHtml = elemento;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.setEstilo();
  }

  setEstilo() {
    if (!this.elementoHtml) { return }
    this.elementoHtml!.nativeElement.style.color = this._color;
  }

  setMensajeDeError() {
    if (!this.elementoHtml) { return }
    if (!this._errors) {
      this.elementoHtml.nativeElement.innerHTML = 'No tiene errores';
      return;
    }

    const errores = Object.keys(this._errors);

    if (errores.includes('required')) {
      this.elementoHtml.nativeElement.innerHTML = 'Este campo es requerido';
    }
    if (errores.includes('minlength')) {
      const valorMinimo = this._errors!['minlength']['requiredLength']
      const valorActual = this._errors!['minlength']['actualLength']
      this.elementoHtml.nativeElement.innerHTML = `Minimo ${valorActual}/${valorMinimo} caracteres`;
    }
    if (errores.includes('email')) {
      this.elementoHtml.nativeElement.innerHTML = 'Email invalido';
    }
  }
}
