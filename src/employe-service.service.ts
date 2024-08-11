import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {

  private employees = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'Jan@gmail.com' },
  ];

  getEmployees() {
    return this.employees;
  }


  getEmployeeById(id: number) {
    return this.employees.find(e => e.id === id);
  }
  addEmployee(employee: any) {
    this.employees.push(employee);
  }

  updateEmployee(updatedEmployee: any) {
    const index = this.employees.findIndex(e => e.id === updatedEmployee.id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  deleteEmployee(employee: any) {
    this.employees = this.employees.filter(e => e !== employee);
  }

}
