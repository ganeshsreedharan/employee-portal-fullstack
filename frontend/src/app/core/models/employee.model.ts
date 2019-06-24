export class Employee {
    firstName: string;
    lastName: string;
    dob: Date;
    gender: string;
    department: string;
    constructor(employeeData: any) {
        this.firstName = employeeData.first_name;
        this.lastName = employeeData.last_name;
        this.dob = employeeData.dob;
        this.gender = employeeData.gender;
        this.department = employeeData.department;
    }
}
