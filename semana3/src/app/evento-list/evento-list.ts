import { Component } from '@angular/core';
import { EventoItem } from '../evento-item/evento-item';

@Component({
  selector: 'app-evento-list',
  imports: [EventoItem],
  templateUrl: './evento-list.html',
  styleUrl: './evento-list.css',
})
export class EventoList {
  deleteEvento(evento: IEvent) {
    this.eventos = this.eventos.filter(e => e !== evento);
  }
}
