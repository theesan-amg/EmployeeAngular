import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {EmployeServiceService} from "../../employe-service.service";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employee = { id: 0, firstName: '', lastName: '', email: '' };
  isEditMode = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeServiceService
  ) {}

  ngOnInit() {
    const employeeId = this.route.snapshot.paramMap.get('id');
    if (employeeId) {
      this.isEditMode = true;
      const employee = this.employeeService.getEmployeeById(+employeeId);
      if (employee) {
        this.employee = { ...employee };
      }
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.employeeService.updateEmployee(this.employee);
      console.log('Employé modifié:', this.employee);
    } else {
      this.employeeService.addEmployee(this.employee);
      console.log('Employé créé:', this.employee);
    }
    this.router.navigate(['/employees']);
  }
}
