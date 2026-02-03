import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  getEventos(): IEvent[] {
    return [
      {
        id: 1,
        title: 'Concierto',
        description: 'Música en directo',
        image: 'assets/evento1.jpg',
        price: 20,
        date: '2024-06-10'
      },
      {
        id: 2,
        title: 'Teatro',
        description: 'Obra clásica',
        image: 'assets/evento2.jpg',
        price: 15,
        date: '2024-05-20'
      }
    ];
  }
}
