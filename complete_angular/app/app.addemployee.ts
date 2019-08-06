import { Component,OnInit} from "@angular/core";
import {EmployeeService} from './app.employeeservice';
import { Router } from '@angular/router'
@Component({selector:'add-comp',
templateUrl:'app.addemployee.html'})

export class AddEmployeeComponenent   
{
    constructor(private service:EmployeeService,private router:Router)
    {
       
    } 
    myAllData:any;
    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;
    status:boolean=false;
    flag:boolean=false;
    addData()
    {   this. myAllData={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}
        if(this.service.addEmployee(this.myAllData))
        {
           this.router.navigate(['show'])
        }
    }
   
  
  
    
    

  
}