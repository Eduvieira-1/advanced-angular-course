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

  preferences = signal({
    fast: true,
    comfortable: true,
    expensive: false
  })

  name = signal('Sem nome')
  count = signal(0);


  multiply(){
    this.count.update((value) => value * 2)
  }

  increment(){
    this.count.update((value) => value + 1)
  }

  decrement(){
    this.count.update((value) => value - 1)
  }

  reset(){
    this.count.set(0);
  }


  toggleComfort() {
    this.preferences.update((preferences) => ({
      ...preferences,
      comfortable: !preferences.comfortable
    }))
  }

  updateName(){
    const value = this.formSignals.controls.name.value;
    this.name.set(value ?? '')
  }

}
