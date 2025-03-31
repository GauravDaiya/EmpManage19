import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "https://empleaveappnode.onrender.com/api/v1/user";

  constructor(private http: HttpClient,) { }

  LoginEmployee(data:any) {
    return this.http.post(
      `${this.apiUrl}/login`, 
      data,
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

}
