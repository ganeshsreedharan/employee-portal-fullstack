package com.sg.excercise.employeeportal.dto;

public class ResponseDTO {
  
  private String version;
  private Boolean success;
  private Object data;
  
  public ResponseDTO(String version, Boolean success, Object data) {
    this.version = version;
    this.success = success;
    this.data = data;
  }
  public String getVersion() {
    return version;
  }
  public void setVersion(String version) {
    this.version = version;
  }
  public Boolean getSuccess() {
    return success;
  }
  public void setSuccess(Boolean success) {
    this.success = success;
  }
  public Object getData() {
    return data;
  }
  public void setData(Object data) {
    this.data = data;
  }
  

}
