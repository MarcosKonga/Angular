import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoticeList } from './notice-list/notice-list';
import { IncidentList } from './incident-list/incident-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NoticeList, IncidentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cortos-anidados');
}
