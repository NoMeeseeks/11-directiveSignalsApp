import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
//tiene un decorador y un selector cuando se trabaja con una directiva tiene unas llaves cuadradas y se puede poner en un elemento html
export class CustomLabelDirective implements OnInit {

  private elementoHtml?: ElementRef<HTMLElement>;
  private _color = 'red';

  @Input() set color(valorHexadecimal: string) {
    this._color = valorHexadecimal;
    this.setEstilo();
  }

  constructor(
    private _element: ElementRef<HTMLElement>,
  ) {
    this.elementoHtml = _element;
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
}
