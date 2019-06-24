import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../shared/service/config/config.service';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/core/models/employee.model';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class EmployeeListComponent implements AfterViewInit {

  private showSpinner: boolean;
  private noDatainDb: boolean;
  private isException: boolean;
  searchText: any;
  private employees: Employee[];

  constructor(private employeeService: EmployeeService) {
    this.showSpinner = true;
  }

  ngAfterViewInit() {
    this.showSpinner = true;
    this.employeeService.getAllUsers().subscribe(data => {

      if (data.length === 0) {
        this.hideSpinner(() => {
          this.noDatainDb = true;
        });
      } else {
        this.hideSpinner(() => {
          this.employees = this.sortByFirstName(data);
        });

      }
    }, error => {
      this.hideSpinner(() => {
        this.isException = true;
      });

    });
  }
  hideSpinner(callBack?) {
    setTimeout(() => {
      this.showSpinner = false;
      if (callBack) {
        callBack();
      }
    }, 1000);
  }

  sortByFirstName(data: Employee[]): Employee[] {
    return data.sort((first, second) => {
      return first.firstName.toString().localeCompare(second.firstName.toString());
    });
  }

}
