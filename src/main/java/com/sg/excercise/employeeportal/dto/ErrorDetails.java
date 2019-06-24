package com.sg.excercise.employeeportal.dto;

import java.util.Map;

public class ErrorDetails {
  private String messaage;
  private Map<String, String> details;
  
  public ErrorDetails(String messaage, Map<String, String> details) {
    super();
    this.messaage = messaage;
    this.details = details;
  }
  public String getMessaage() {
    return messaage;
  }
  public void setMessaage(String messaage) {
    this.messaage = messaage;
  }
  public Map<String,String> getDetails() {
    return details;
  }
  public void setDetails(Map<String ,String>  details) {
    this.details = details;
  }
  
}
