import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8181';

  constructor(private http: HttpClient) {}

  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user`);
  }

  loginUser(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/loginUser`, data);
  }

  registerUser(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/registerUser`, data);
  }
}