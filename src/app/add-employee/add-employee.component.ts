import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/httpclient.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  user: Employee = new Employee("","","","");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
          alert("Employee created successfully.");
        });

  };

}