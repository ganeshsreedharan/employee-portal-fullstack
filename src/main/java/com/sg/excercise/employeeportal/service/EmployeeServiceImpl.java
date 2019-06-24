package com.sg.excercise.employeeportal.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sg.excercise.employeeportal.model.Employee;
import com.sg.excercise.employeeportal.repository.EmployeeRepository;

@Service(value="employeeService")
public class EmployeeServiceImpl implements EmployeeService {
  
  @Autowired
  private EmployeeRepository employeeRepository;
  
  @Override
  public List<Employee> findAll(){
      return (List<Employee>) employeeRepository.findAll();
  }
  
  @Override
  public Employee save(Employee employee) {
    return employeeRepository.save(employee);
  }

}
