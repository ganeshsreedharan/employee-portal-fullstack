package com.sg.excercise.employeeportal.service;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import com.sg.excercise.employeeportal.model.Employee;
import com.sg.excercise.employeeportal.repository.EmployeeRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EmployeeServiceTest {

  @Autowired
  private EmployeeService employeeService;

  @MockBean
  private EmployeeRepository employeeRepository;
  
  @Before
  public void setup() {
    when(employeeRepository.findAll()).thenReturn(Arrays.asList(new Employee(1L,"Ganesh", "KV", "Male", new Date(), "Dev"),
    new Employee(2L,"Ganesh1", "KV", "Male", new Date(), "Dev")));
    
    when(employeeRepository.save(Mockito.any())).thenReturn(new Employee(1L,"Ganesh", "KV", "Male", new Date(), "Dev"));
  }
  
  @Test
  public void findAllTest() {     
      List<Employee> employees = employeeService.findAll();
      assertEquals(new Long(1), employees.get(0).getEmployeeId());      
  }
  
  @Test
  public void saveTest() {     
    Employee testEmployee=new Employee(1L,"Ganesh", "KV", "Male", new Date(), "Dev");
    Employee employee= employeeService.save(testEmployee);
    
   assertEquals(testEmployee.getEmployeeId(), employee.getEmployeeId());      
  }
  
  

}
