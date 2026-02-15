import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from '../interfaces/food';
import { DishService } from '../services/dishes-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  dishes: Food[] = [];

  newDish: Food = {
    id: '1',
    name: '',
    description: '',
    price: 0,
    category: 'entrantes',
    enabled: true
  };

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.loadDishes();
  }

  loadDishes() {
    this.dishService.getDishes().subscribe(data => this.dishes = data);
  }

  addDish() {
    this.dishService.addDish(this.newDish).subscribe(() => {
      this.loadDishes();
      this.newDish = {
        id: '1',
        name: '',
        description: '',
        price: 0,
        category: 'entrantes',
        enabled: true
      };
    });
  }

  deleteDish(id: string) {
    this.dishService.deleteDish(id).subscribe(() => this.loadDishes());
  }
}
