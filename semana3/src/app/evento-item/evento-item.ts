import { Component,EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEvent } from '../interfaces/ievent';

@Component({
  selector: 'app-evento-item',
  imports: [CommonModule],
  templateUrl: './evento-item.html',
  styleUrl: './evento-item.css',
  host: { class: 'card' }
})
export class EventoItem {
  @Input() evento:any;

  @Output() delete = new EventEmitter<void>();
  deleteEvento() {
    this.delete.emit();
  }

}
