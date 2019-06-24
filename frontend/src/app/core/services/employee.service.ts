import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Employee } from 'src/app/core/models/employee.model';
import { environment as env } from '../../../environments/environment';


const BASE_URL = env.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private apiService: ApiService) { }

  getAllUsers(): Observable<Employee[]> {
    return this.apiService.get(BASE_URL);
  }
  createNewUser(employee: Employee): Observable<any> {
    return this.apiService.post(BASE_URL, employee);
  }
}

