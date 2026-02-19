import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals-api',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './signals-api.html',
  styleUrl: './signals-api.scss',
})
export class SignalsApi {
 private _fb = inject(FormBuilder);

  formSignals = this._fb.group({
    name: ['']
  })

  name = signal('Sem nome')

  updateName(){
    const value = this.formSignals.controls.name.value;
    this.name.set(value ?? '')
  }

}
