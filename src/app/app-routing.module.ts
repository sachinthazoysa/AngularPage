import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpLoginComponent } from './employees/emp-login/emp-login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';



const routes: Routes = [
  
  { path : '', component : EmpLoginComponent } ,
  { path : 'employeepage', component : EmployeeComponent } ,
  { path : 'homePage', component : HomeComponent } ,
  { path : 'employeespage', component : EmployeesComponent } ,


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

