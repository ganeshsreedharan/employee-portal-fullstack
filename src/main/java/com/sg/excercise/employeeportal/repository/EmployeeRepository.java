package com.sg.excercise.employeeportal.repository;

import org.springframework.data.repository.CrudRepository;
import com.sg.excercise.employeeportal.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long>  {

}
