import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/shared/employee.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { ToastrService } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service : EmployeeService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EmployeeComponent>
    // public toastr : ToastrService
    ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm)
  {
    if(form != null)
      form.resetForm();
    this.service.formData = {
      EmployeeID : null,
      FullName : '',
      Position : '',
      EMPCode : '',
      Mobile : ''
    }
  }

  onSubmit(form : NgForm){
    if(form.value.EmployeeID == null)
     this.insertRecord(form);
    else
      this.updateRecord(form);
   
   }


   insertRecord(form : NgForm){
     this.service.postEmployee(form.value).subscribe(res => {
       this.resetForm(form);
       this.service.refreshList();
      this.dialogRef.close();
      this.openSnackBar('User Added Successfully','');
      //  this.toastr.info('Inserted successfully','done');
     });
   }
 

   updateRecord(form : NgForm){
     this.service.putEmployee(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
   }

   cancel(){
    this.dialogRef.close();
   }


   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
}
}