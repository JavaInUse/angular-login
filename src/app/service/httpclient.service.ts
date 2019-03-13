import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     

     getEmployees()
  {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees',{headers});
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/"+ employee.empId);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee);
  }



getHeaders(){
  let username='admin'
  let password='password'

  let  basicString='Basic '+window.btoa(username + ':' + password)
  return basicString;
}

}