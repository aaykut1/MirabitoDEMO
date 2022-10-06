import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseAPIUrl: string = environment.baseAPIUrl;
  constructor(private http: HttpClient ) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseAPIUrl+"/api/Employees");
  }

  addEmployee(emp: Employee): Observable<Employee>{
    emp.id= "2c276c0d-c563-481a-8497-fb284bb83282";
    return this.http.post<Employee>(this.baseAPIUrl+"/api/Employees", emp);
  }

  getEmployee(id: String): Observable<Employee>{
    
    return this.http.get<Employee>(this.baseAPIUrl+"/api/Employees/"+ id);
  }

  updateEmployee(id: String, updatedEmployee: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseAPIUrl+"/api/Employees/"+ id, updatedEmployee);
  }

  deleteEmployee(id: String): Observable<Employee>{
    return this.http.delete<Employee>(this.baseAPIUrl+"/api/Employees/"+ id);
  }

}
