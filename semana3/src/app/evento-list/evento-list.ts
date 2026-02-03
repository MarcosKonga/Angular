import { Component } from '@angular/core';
import { EventoItem } from '../evento-item/evento-item';
import { EventoAdd } from '../evento-add/evento-add';
import { EventoService } from '../services/evento.service';
import { EventFilterPipe } from '../pipes/event-filter-pipe';
import { IEvent } from '../interfaces/i-event';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evento-list',
  imports: [EventoItem, EventoAdd, EventFilterPipe, CommonModule],
  templateUrl: './evento-list.html',
  styleUrl: './evento-list.css',
})
export class EventoList {
  eventos: IEvent[] = [
    {
      id: 1,
      title: 'Concierto de Rock',
      description: 'Concierto en directo con bandas locales',
      image: '',
      date: '2024-06-20',
      price: 20
    },
    {
      id: 2,
      title: 'Exposición de Arte',
      description: 'Muestra de arte contemporáneo',
      image: '',
      date: '2020-07-23',
      price: 15
    }
  ];
  deleteEvento(evento: IEvent) {
    this.eventos = this.eventos.filter(e => e !== evento);
  }
  addEvento(evento: IEvent) {
    this.eventos = [...this.eventos, evento];
  }

  constructor(private eventoService: EventoService) {
  this.eventos = this.eventoService.getEventos();
  }
}
