import { Component } from '@angular/core';
import { IUser } from '../interfaces/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}
  login() {
    this.http.get<any[]>(`http://localhost:3000/users?username=${this.username}&password=${this.password}`)
      .subscribe(users => {
        if (users.length > 0) {
          const user = users[0];
          if (user.role === 'chef') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/menu']);
          }
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      });
  }
}
