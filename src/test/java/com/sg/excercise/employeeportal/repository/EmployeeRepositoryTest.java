package com.sg.excercise.employeeportal.repository;

import static org.junit.Assert.assertEquals;
import java.util.Date;
import java.util.List;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;
import com.sg.excercise.employeeportal.model.Employee;



@RunWith(SpringRunner.class)
@DataJpaTest
public class EmployeeRepositoryTest {
  
  @Autowired
  private EmployeeRepository employeeRepository;
  
  @Test
  public void testSave() {
      Employee testEmployee=new Employee(1L,"Ganesh", "KV", "Male", new Date(), "Dev");
      Employee employee= employeeRepository.save(testEmployee);
      assertEquals(testEmployee.getFirstName(),employee.getFirstName());
  }
  
  @Test
  public void testFindAll() {
      testSave();
      List<Employee> items = (List<Employee>) employeeRepository.findAll();
      assertEquals(1,items.size());
  }



}
