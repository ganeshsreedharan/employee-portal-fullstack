package com.sg.excercise.employeeportal.controller;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;
import com.sg.excercise.employeeportal.dto.ResponseDTO;
import com.sg.excercise.employeeportal.model.Employee;
import com.sg.excercise.employeeportal.service.EmployeeService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/api")
public class EmployeeController {

  @Autowired
  private EmployeeService employeeService;

  @ApiOperation(value = "Get all employees details", response = List.class)
  @ApiResponses(value = {
      @ApiResponse(code = 200, message = "Employee Details Retrieved", response = List.class),
      @ApiResponse(code = 500, message = "Internal Server Error")})
  @GetMapping("/employees")
  public List<Employee> getAllEmployees() {
    return employeeService.findAll();
  }

  @ApiOperation(value = "Register a new Employee", response = Employee.class)
  @ApiResponses(value = {
      @ApiResponse(code = 200, message = "Employee Registered successfully",
          response = Employee.class),
      @ApiResponse(code = 500, message = "Internal Server Error"),
      @ApiResponse(code = 400, message = "Invalid detils given")})
  @PostMapping("/employees")
  public ResponseEntity<ResponseDTO> registerNewEmployee(@Valid @RequestBody Employee employee,
      UriComponentsBuilder uriBuilder) {
    Employee newEmployee = employeeService.save(employee);
    
    // Setting location header for newly registered employee
    UriComponents uriComponents =
        uriBuilder.path("/employees/{id}").buildAndExpand(newEmployee.getEmployeeId());

    
    ResponseEntity<ResponseDTO> response =
        ResponseEntity.created(uriComponents.toUri()).body(new ResponseDTO("v1", true, newEmployee));

    return response;
  }

}
