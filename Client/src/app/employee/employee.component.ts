import { Component, OnInit } from '@angular/core';
import { Employee } from '../viewModels/employee';
import { EmployeeService } from '../_services/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent  implements OnInit {

  employees: Employee[];
  cols: { field: string; header: string; }[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
     this.getEmployees();
     this.cols = [
      { field: 'firstname', header: 'First Name' },
      { field: 'lastname', header: 'Last Name' },
      { field: 'contactEmail', header: 'Email' },
      { field: 'businessUnit', header: 'Unit' }
  ];
  }
  getEmployees() {
    return this.employeeService.getEmployees()
               .subscribe(
                employees => {
                  console.log(employees);
                  this.employees = employees
                 }
                );
 }
}
