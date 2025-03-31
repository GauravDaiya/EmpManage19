import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  isEditMode = signal(false);
  employeeToEdit = signal<any>(null);

  private apiUrl = "https://empleaveappnode.onrender.com/api/v1/user";

  employees = signal<any[]>([]);

  constructor(
    private http: HttpClient,
  ) { }

  GellAllEmployee() {
    this.http.get<{ data: { AllEmployees: any[] } }>(`${this.apiUrl}/GetAllEmployees`)
      .subscribe((response) => {
        this.employees.set(response.data.AllEmployees);
      });
  }

  createNewEmp(employeeData: any) {
    return this.http.post(`${this.apiUrl}/CreateEmployee`, employeeData);
  }

  GetEmployeeById(Empid:any) {
    return this.http.get(`${this.apiUrl}/GetEmpById/${Empid}`)
  }

  UpdateEmployee(editId:any,data:any) {
    return this.http.patch(`${this.apiUrl}/UpdateEmp/${editId}`,data)
  }

  DeleteEmployee(Empid: any) {
    return this.http.delete(`${this.apiUrl}/DeleteEmployee/${Empid}`);
  }

  ActiveEmployeeEditMode() {
    this.isEditMode.set(true)
  }

  setEmployeeToEdit(empId: any) {
    this.GetEmployeeById(empId).subscribe((res:any) => {
      this.employeeToEdit.set(res.data.EmpById);
    })
  }

  ResetEmployeeEditMode() {
    this.isEditMode.set(false);
    this.employeeToEdit.set(null)
  }

}
