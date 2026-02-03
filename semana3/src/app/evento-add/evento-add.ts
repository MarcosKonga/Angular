import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IEvent } from '../interfaces/i-event';

@Component({
  selector: 'app-evento-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './evento-add.html',
  styleUrl: './evento-add.css',
})
export class EventoAdd {
  @Output() add = new EventEmitter<IEvent>();

  newEvent: IEvent = {
    id: 1,
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
  };

  addEvent() {
    this.add.emit({ ...this.newEvent });

    this.newEvent = {
      id: 2,
      title: '',
      description: '',
      image: '',
      price: 0,
      date: ''
    };
  }

  changeImage(input: HTMLInputElement) {
    if (!input.files || input.files.length === 0) return;

    const reader = new FileReader();
    reader.readAsDataURL(input.files[0]);

    reader.onload = () => {
      this.newEvent.image = reader.result as string;
    };
  }
}
