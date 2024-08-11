import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {EmployeServiceService} from "../../employe-service.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees:  any[] = []

  constructor(private router: Router, private employeService :EmployeServiceService) {}

  ngOnInit() {
    this.employees = this.employeService.getEmployees();
  }

  editEmployee(employee: any) {
    this.router.navigate(['/employee-edit', employee.id]);

  }

  deleteEmployee(employee: any) {
    this.employeService.deleteEmployee(employee);
    this.employees = this.employeService.getEmployees();
  }
}
