import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '1200px';
    dialogConfig.maxHeight = '100%';
    dialogConfig.height = '100%';
    dialogConfig.scrollStrategy ;
    
    this.dialog.open(EmployeesComponent,dialogConfig);

  }



  logout(){

    if(confirm('Do you want to Logout from the Account')){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = '1200px';
      dialogConfig.maxHeight = '100%';
      dialogConfig.height = '100%';
      dialogConfig.scrollStrategy ;
      
      this.dialog.open(EmployeesComponent,dialogConfig);
    }

    
  }
}
