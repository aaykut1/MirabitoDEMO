import { Component, OnInit } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import {MatSnackBar} from '@angular/material/snack-bar';
declare let alertify: any;

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  model: Employee = {
    id: "",
    first_name: "",
    last_name: "",
    salary:0

  }

  constructor(private employeeService: EmployeeService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.model);
    this.employeeService.addEmployee(this.model).subscribe({
      next: (employee) => { console.log(employee); this.router.navigate(["employees"]); this.snackBar.open(`${employee.first_name} ${employee.last_name} added`, '', {
        duration: 2000
      });},
      error: (response) => console.log(response),
    })
  }

}
