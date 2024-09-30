import { Injectable } from '@angular/core';
import { Admin } from '../Entity/Admin.Entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
  onDeleteAdmin(id : number){
    const url =`${this.apiUrl+"/admin"}/${id}`
    return this.http.delete(url)
  }
  getAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl + "/admin");
  }
  updateAdmin(id:number,admin:Admin){
    const url= `${this.apiUrl + "/admin"}/${id}`;
    return this.http.put<any>(url, admin);
  }
  findAdminById(id: number): Observable<Admin> {
    const url = `${this.apiUrl + "/admin"}/${id}`;
    return this.http.get<Admin>(url);
  }
}
