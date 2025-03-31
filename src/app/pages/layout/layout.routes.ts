import { Routes } from '@angular/router';
import { employeeRoutes } from '../employee/employee.routes';

export const layoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
            {path: '', children: employeeRoutes}
        ]
    }
];