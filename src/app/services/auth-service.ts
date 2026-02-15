import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(username: string, password: string) {
    return this.http.get<IUser[]>(
      'http://localhost:3000/users?username=${username}&password=${password}'
    );
  }
}
