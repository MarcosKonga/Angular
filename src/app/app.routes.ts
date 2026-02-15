import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Menu } from './menu/menu';
import { Admin } from './admin/admin';
import { Login } from './login/login';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'menu', component: Menu },
  { path: 'admin', component: Admin },
  { path: 'login', component: Login },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

