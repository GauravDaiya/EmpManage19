import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';

interface EmployeeState {
  employees: any[];
  isEditMode: boolean;
  employeeToEdit: any | null;
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //isEditMode = signal(false);
  //employeeToEdit = signal<any>(null);

  private readonly apiUrl = "https://empleaveappnode.onrender.com/api/v1/user";

  //employees = signal<any[]>([]);

  private readonly state = signal<EmployeeState>({
    employees: [],
    isEditMode: false,
    employeeToEdit: [],
    loading: false
  })

  constructor(
    private http: HttpClient,
  ) { }

  employees = computed(() => this.state().employees);
  isEditMode = computed(() => this.state().isEditMode);
  employeeToEdit = computed(() => this.state().employeeToEdit);
  loading = computed(() => this.state().loading);

  GellAllEmployee() {
    this.patchState({ loading: true });
    return this.http.get<{ data: { AllEmployees: any[] } }>(`${this.apiUrl}/GetAllEmployees`)
      .pipe(
        tap(res => {
          console.log(res.data.AllEmployees);
          this.patchState({
            employees: res.data.AllEmployees,
            loading: false
          })
        })
      )
  }

  createNewEmp(employeeData: any) {
    this.patchState({ loading: true });
    return this.http.post(`${this.apiUrl}/CreateEmployee`, employeeData)
    .pipe(
      tap(() => {
        this.GellAllEmployee().subscribe()
      })
    );
  }

  GetEmployeeById(Empid: any) {
    this.patchState({ loading: true });
    return this.http.get(`${this.apiUrl}/GetEmpById/${Empid}`)
    .pipe(
      tap((res:any) => {
        this.patchState({
          employeeToEdit: res.data.EmpById,
          loading: false,
        })
      })
    )
  }

  UpdateEmployee(editId: any, data: any) {
    this.patchState({ loading: true });
    return this.http.patch(`${this.apiUrl}/UpdateEmp/${editId}`, data)
    .pipe(
      tap(() => {
        this.patchState({ isEditMode: false, employeeToEdit: null });
        this.GellAllEmployee().subscribe();
      })
    )
  }

  DeleteEmployee(Empid: any) {
    this.patchState({ loading: true });
    return this.http.delete(`${this.apiUrl}/DeleteEmployee/${Empid}`)
    .pipe(
      tap(() => {
        this.GellAllEmployee().subscribe(); 
      })
    )
  }

  ActiveEmployeeEditMode() {
    this.patchState({isEditMode: true})
  }

  ResetEmployeeEditMode() {
    this.patchState({ 
      isEditMode: false,
      employeeToEdit: null
    });
  }

  private patchState(partialState: Partial<EmployeeState>) {
    this.state.update(current => ({ ...current, ...partialState }));
  }

}
