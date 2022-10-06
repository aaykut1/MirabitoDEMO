import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import {MatSnackBar} from '@angular/material/snack-bar';

declare let alertify: any;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [
  ];

  displayedColumns: string[] = ['id', 'First Name', 'Last Name', 'Salary', "edit", "delete"];

  constructor(private employeeService : EmployeeService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (employees) => {this.employees= employees; console.log(employees)},
      error: (response) => console.log(response),
    })
  }

  delete(id: String){

    this.employeeService.deleteEmployee(id).subscribe({
      next: (response)=> { setTimeout(window.location.reload.bind(window.location),1000); this.snackBar.open(`${id} deleted`, '', {
        duration: 2000
      });}
    })

    

    
  }

}
