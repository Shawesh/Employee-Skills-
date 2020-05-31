import { Component, OnInit } from '@angular/core';
import { Employee } from '../viewModels/employee';
import { EmployeeService } from '../_services/employee.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent{

  employee = new Employee();
  submitted = false;

  constructor(
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

 addEmployee() {
   this.submitted = true;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.employeeService.addEmployee(this.employee)
        .subscribe();
  }
}
