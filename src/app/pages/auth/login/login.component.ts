import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  login() {
    const LoginData = this.loginForm.value;
    const LoginFinalData = {
      userEmail: LoginData.emailId,
      userPassword: LoginData.password
    }
    this.authSrv.LoginEmployee(LoginFinalData).subscribe({
      next: (LogRes: any) => {
        console.log(LogRes);
        if (LogRes.status === 'Success') {
          this.router.navigate(['/dashboard']);
          sessionStorage.setItem('Employee', JSON.stringify(LogRes.data));
        } else {
          alert('Wrong Credentials');
          this.loginForm.reset();
        }
      },
      error: (err) => {
        console.log("Error:", err);
        alert(err.error.data?.message || "Invalid credentials");
        this.loginForm.reset();
      }
    });
  }
}
