import { Injectable } from '@angular/core';
import { Admin } from '../Entity/Admin.Entity';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  // admin
  addAdmin(admin: Admin) {
    return this.http.post<any>(this.apiUrl + "/admin", admin);
  }
}
