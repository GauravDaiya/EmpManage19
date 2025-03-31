import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../../shared/shared.material';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,MATERIAL_IMPORTS],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  public isEditMode!:boolean;

  constructor(
    // private empSrv: EmployeeService,
    private router: Router
  ) {}

  Logout() {
    sessionStorage.clear();
    this.router.navigate([''])
  }
}
