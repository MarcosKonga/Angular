import { Component, signal } from '@angular/core';
import { UserProfile } from './user-profile/user-profile';
import { HoverButton } from './hover-button/hover-button';
import { PriceView } from './price-view/price-view';

@Component({
  selector: 'app-root',
  imports: [UserProfile, HoverButton, PriceView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cortos-data-binding');
}
