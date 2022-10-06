import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
declare let alertify: any;

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  emp : Employee = {
    id: "",
    first_name: "",
    last_name: "",
    salary:0

  }

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id) {this.employeeService.getEmployee(id).subscribe({
          next: (response) => {this.emp = response}
        })
      }
      }
    })
  }

  update(){
    this.employeeService.updateEmployee(this.emp.id, this.emp).subscribe({
      next: (employee) => {
        console.log(employee); this.router.navigate(["employees"]); alertify.warning(`${this.emp.id} edited`)
      }
    })
  }

}
