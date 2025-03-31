import { Routes } from '@angular/router';

export const employeeRoutes: Routes = [
    { path: '', redirectTo: 'view-employee', pathMatch: 'full' },
    {path: 'view-employee', loadComponent: () => import('./view-employee/view-employee.component').then(m=>m.ViewEmployeeComponent)},
    {path: 'create-employee', loadComponent: () => import('./create-employee/create-employee.component').then(m=>m.CreateEmployeeComponent)}
];