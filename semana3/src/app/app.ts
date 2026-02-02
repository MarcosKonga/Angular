import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventoItem } from './evento-item/evento-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventoItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('semana3');
}
