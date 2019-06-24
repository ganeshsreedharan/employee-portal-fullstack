import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/ngx-bootstrap-datepicker';

import { routerTransition } from '../../shared/service/config/config.service';
import { Employee } from '../../core/models/employee.model';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class EmployeeAddComponent implements OnInit {

  bsConfig: Partial<BsDatepickerConfig>;
  employeeAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService, private toastrService: ToastrService) {
    this.createForm();
  }
  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: 'theme-default' });
  }

  createForm() {

    this.employeeAddForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      last_name: ['', [Validators.required]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      department: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    });
  }
  registerUser() {
    if (this.employeeAddForm.value) {
      const employeeData: Employee = new Employee(this.employeeAddForm.value);
      this.employeeService.createNewUser(employeeData).subscribe(data => {
        this.createForm();
        this.toastrService.success('Employee registerd successfully', 'Success!');

      }, (error) => {
        this.toastrService.error('error.status ' + error.message, 'Oops! Error..');
      });
    }

  }


}
