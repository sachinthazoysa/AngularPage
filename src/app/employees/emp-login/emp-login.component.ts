import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Employee } from 'src/app/shared/employee.model';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EmployeesComponent } from '../employees.component';


@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {

  test : String = '';
  formData: Employee;
  temp: Employee;
  empCode: any;


  constructor(public service: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router,
    private dialog: MatDialog,
    public dialogRef: MatDialog) { }

  ngOnInit() {
    this.temp = Object.assign({}, this.data.emp);
    this.service.formData = {
      FullName: this.temp.FullName,
      EmployeeID: this.temp.EmployeeID,
      Mobile: this.temp.Mobile,
      EMPCode: '',
      Position: this.temp.Position
    }
  }


  onSubmit(form: NgForm) {
    if(this.service.formData.EMPCode == this.temp.EMPCode){
        this.dialogRef.closeAll();
    
    }
    else if(this.service.formData.EMPCode == ''){
      this.test = 'Please type the password';
    }
    else{
      this.test = 'Invalid Password. Please try again!';

    }
  }
}
