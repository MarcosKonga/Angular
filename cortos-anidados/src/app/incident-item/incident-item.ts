import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incident-item',
  imports: [],
  templateUrl: './incident-item.html',
  styleUrl: './incident-item.css',
})
export class IncidentItem {
  @Input() incidencia: any;

  @Output() estadoCambiado = new EventEmitter<string>();
  setEstado() {
    this.estadoCambiado.emit('Resulta');
  }
}
