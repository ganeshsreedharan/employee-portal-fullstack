package com.sg.excercise.employeeportal.service;

import java.util.List;
import com.sg.excercise.employeeportal.model.Employee;

public interface EmployeeService {
  public List<Employee> findAll();
  public Employee save(Employee employee);
}
