import { Component, effect, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../../shared/shared.material';
import { EmployeeService } from '../../../core/services/employee.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,MATERIAL_IMPORTS, JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  public isEditMode!:boolean;


  constructor(
    public empSrv: EmployeeService,
    private router: Router
  ) {
  }

  Logout() {
    sessionStorage.clear();
    this.router.navigate([''])
  }
}
