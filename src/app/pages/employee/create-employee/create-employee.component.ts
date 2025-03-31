import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../shared/shared.material';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../../core/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  imports: [MATERIAL_IMPORTS,ReactiveFormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent implements OnInit, OnDestroy {

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  employeeForm!: FormGroup;
  public RolesData: any[] = ['Employee', 'Amin Department Employee', 'Department Head'];
  public DepartmentData: any[] = ['IT', 'Infra', 'Management'];
  public isEditMode!: boolean;
  public EditEmployeeData: any = null;

  constructor(
    private fb: FormBuilder,
    private empSrv: EmployeeService,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      employeeName: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      emailId: ['', [Validators.required, Validators.email]],
      deptName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
    effect(() => {
      const employee = this.empSrv.employeeToEdit();
      if (employee) {
        this.EditEmployeeData = employee;
        this.employeeForm.patchValue(employee);
      }
    })
  }
  ngOnDestroy(): void {
    this.empSrv.ResetEmployeeEditMode();
  }

  ngOnInit(): void {
    this.isEditMode = this.empSrv.isEditMode();
  }

  submitForm() {
    if (this.employeeForm.valid) {
      if (this.isEditMode) {
        const EditEmpData = { ...this.employeeForm.value};
        this.empSrv.UpdateEmployee(this.EditEmployeeData._id,EditEmpData).subscribe((UpdRes: any) => {
          this.router.navigate(['/dashboard/view-employee'])
        })
      } else {
        this.empSrv.createNewEmp(this.employeeForm.value).subscribe(res => {
          if(res) {
            this.router.navigate(['/dashboard/view-employee'])
          }
        }, error => {
          console.error('Error adding employee:', error);
        });
      }

    } else {
      alert('Form is invalid');
    }
  }
}
