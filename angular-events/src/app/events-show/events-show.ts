import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { EventFilterPipe } from '../pipes/event-filter-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events-show',
  imports: [TitleCasePipe, CurrencyPipe, DatePipe, EventFilterPipe, FormsModule],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
  };
  events: IEvent[] = [
    {
      title: 'empanadas',
      image: '/evento1.jpg',
      date: '2020-12-12',
      price: 75,
      description: '*Sonido de piano*',
    },
    {
      title: 'huevos',
      image: '/evento2.jpg',
      date: '1998-3-3',
      price: 80,
      description: '¿Que le vamos a preparar para desayunar?',
    },
  ];

  search: string = '';

  orderDate() {
    this.search = '';
    this.events.sort((a, b) => a.date.localeCompare(b.date));
  }

  orderPrice() {
    this.search = '';
    this.events.sort((a, b) => a.price - b.price);
  }

  addEvent() {
    this.events.push({ ...this.newEvent });

    this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: ''
    };
  }

  changeImage(fileInput: HTMLInputElement) {
  if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvent.image = reader.result as string;
    });
  }
}
