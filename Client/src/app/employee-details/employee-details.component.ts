import { Component, OnInit } from '@angular/core';
import { Employee } from '../viewModels/employee';
import { EmployeeService } from '../_services/employee.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee = new Employee() ;
  submitted = false;
  message: string;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
  }

  update(): void {
    this.submitted = true;
    this.employeeService.updateEmployee(this.employee)
        .subscribe(result => this.message =this.employee.firstname + " Was Updated Successfully!");
  }

  delete(): void {
    this.submitted = true;
    this.employeeService.deleteEmployee(this.employee.id)
        .subscribe(result => this.message = this.employee.firstname + " Was Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }
}