import { Routes } from '@angular/router';
import { authRoutes } from './pages/auth/auth.routes';
import { layoutRoutes } from './pages/layout/layout.routes';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', children: authRoutes },
  {path: '', children: layoutRoutes, canActivate: [authGuard]}
];
