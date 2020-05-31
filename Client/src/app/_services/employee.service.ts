import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../viewModels/employee';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesUrl = 'http://localhost:8080/api/employees';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getEmployees (): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    //console.log(employee);
    return this.http.post<Employee>(this.employeesUrl, employee, httpOptions);
    

  }

  deleteEmployee (employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.id;
    const url = `${this.employeesUrl}/${id}`;

    return this.http.delete<Employee>(url, httpOptions);
  }

  updateEmployee (employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl, employee, httpOptions);
  }
}