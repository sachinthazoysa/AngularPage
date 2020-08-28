import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import {  MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { EmployeeComponent } from '../employee/employee.component';
import { EmpLoginComponent } from '../emp-login/emp-login.component';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service : EmployeeService,
    private dialog:MatDialog) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp : Employee){
    // this.service.formData = Object.assign({},emp);
    this.viewLogin(emp);
  }


  onDelete(id : number){
    if(confirm('Are you sure to delte this record?'))
    this.service.deleteEmployee(id).subscribe(res =>{
      this.service.refreshList();
    })
  }

  viewLogin(emp){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '30%';
    dialogConfig.data = {emp};
    dialogConfig.scrollStrategy ;
  
    dialogConfig.hasBackdrop;
    this.dialog.open(EmpLoginComponent,dialogConfig);
  }



  openRegForm(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    // dialogConfig.width = '50%';
    dialogConfig.scrollStrategy ;
    
    dialogConfig.hasBackdrop;
    this.dialog.open(EmployeeComponent,dialogConfig);
  }

}
