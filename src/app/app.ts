import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsApi } from './signals-api/signals-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalsApi],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('advanced-angular-course');
}
