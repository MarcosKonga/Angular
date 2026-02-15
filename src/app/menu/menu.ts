import { Component } from '@angular/core';
import { Food } from '../interfaces/food';
import { Observable } from 'rxjs';
import { DishService } from '../services/dishes-service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  dishes: Food[] = [];

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.dishService.getDishes().subscribe(data => {
      this.dishes = data.filter(d => d.enabled);
    });
  }
}
