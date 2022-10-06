import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';

const routes: Routes = [
  {
  path:'',
  component: EmployeeListComponent
  },
  {
    path:'employees',
    component: EmployeeListComponent
  },
  {
    path:'addEmployee',
    component: EmployeeAddComponent
  },
  {
    path:'editEmployee/:id',
    component: EmployeeEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
