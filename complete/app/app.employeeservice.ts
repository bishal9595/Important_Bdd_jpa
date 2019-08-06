import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn:'root'


})
export class EmployeeService
{
    
    
    constructor( private http:HttpClient)
    {
        
    }
    empAll:any[]=[{
      empId:1001,
      empName:"Abcd",
      empSalary:8881.11,
      empDepartment:"JAVA"
  
  },
  {
      empId:1002,
      empName:"bcd",
      empSalary:6881.11,
      empDepartment:"JAVA"
  
  },
  {
      empId:1003,
      empName:"cd",
      empSalary:9881.11,
      empDepartment:"JAVA"
  
  }];
   
    
  getAllEmployee()
   {
           //return this.http.get("assets/employee.json");
           return this.empAll;
   }
   addEmployee(data:any):any
   {
       
      
       this.empAll.push(data);
       return true;
       
   }
   searchEmployee(data:any):any{
      
       return this.empAll.filter(x=>x.empId==data);
   }
   deleteEmployee(data:any):any
   {
       
      
       this.empAll.splice(data,1);
       return true;
       
   }
   
}