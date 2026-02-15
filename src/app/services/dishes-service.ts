import { Injectable } from '@angular/core';
import { Food } from '../interfaces/food';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private apiUrl = 'http://localhost:3000/dishes';
  constructor(private http: HttpClient) {}
  getDishes(): Observable<Food[]> {
    return this.http.get<Food[]>(this.apiUrl);
  }
  addDish(dish: Food) {
    return this.http.post(this.apiUrl, dish);
  }
  deleteDish(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  updateDish(dish: Food) {
    return this.http.put(`${this.apiUrl}/${dish.id}`, dish);
  }
}
