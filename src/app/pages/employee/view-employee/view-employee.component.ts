import { Component, effect, OnInit } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../shared/shared.material';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../core/services/employee.service';

@Component({
  selector: 'app-view-employee',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.scss'
})
export class ViewEmployeeComponent implements OnInit {
  
  public AllEmployeeData !: any[];
  public dataSource = new MatTableDataSource<any>();

  displayedColumns = ['sn', 'empId', 'empName', 'empEmailId', 'department', 'role', 'mobile', 'actions'];

  constructor(
    private empSrv: EmployeeService,
    private router: Router
  ) {
    effect(() => {
      this.dataSource.data = this.empSrv.employees();
    })
  }

  ngOnInit(): void {
    this.getAllEmp();
  }

  getAllEmp() {
    this.empSrv.GellAllEmployee();
  }

  onDelete(empId: number) {
    this.empSrv.DeleteEmployee(empId).subscribe((EmpDelRes: any) => {
      alert(EmpDelRes.message);
      this.getAllEmp()
    })
  }

  onEdit(empId: any) {
    this.empSrv.ActiveEmployeeEditMode();
    this.empSrv.setEmployeeToEdit(empId); 
    this.router.navigate(['/dashboard/create-employee'])
  }

}
