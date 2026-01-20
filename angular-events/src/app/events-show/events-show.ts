import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Component({
  selector: 'app-events-show',
  imports: [],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  events: IEvent[] = [
    {
      title: 'Empanadas',
      image: '/dumplings.jpg',
      date: '2020-06-23',
      price: 75,
      description: '*Sonido de piano*',
    },
    {
      title: 'Huevos',
      image: '/eggs.jpg',
      date: '2025-09-12',
      price: 96.95,
      description: '¿Que le vamos a preparar para desayunar?',
    },
  ];
}
