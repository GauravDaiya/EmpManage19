import { Routes } from '@angular/router';
import { authRoutes } from './pages/auth/auth.routes';
import { layoutRoutes } from './pages/layout/layout.routes';
import { authGuard } from './core/guards/auth.guard';
import { authcheckGuard } from './core/guards/authcheck.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', children: authRoutes, canActivate: [authcheckGuard]},
  {path: 'layout', children: layoutRoutes, canActivate: [authGuard]}
];
