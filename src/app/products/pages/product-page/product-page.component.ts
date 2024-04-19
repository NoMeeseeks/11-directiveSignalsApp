import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  private _formbuilder = inject(FormBuilder);

  public color: string = 'blue';

  public formulario: FormGroup = this._formbuilder.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  });
  //un tipo de injeccion
  // constructor(private _formbuilder: FormBuilder) { }
  cambiarColor(): void {
    this.color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
  }
}
