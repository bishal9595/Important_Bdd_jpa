import { Component} from "@angular/core";
import {EmployeeService} from './app.employeeservice';
import { Router } from '@angular/router'
@Component({selector:'search-comp',
templateUrl:'app.searchemployee.html'})

export class SearchEmployeeComponenent 
{  constructor(private service:EmployeeService,private router:Router)
    {
       
    } 
    mydata:any[]=null
    searchId:number;
    searchvalue:string;
    /*showData():any
    {   this.mydata=this.service.searchEmployee(this.searchId)
        if(this.mydata.length!=0)
        {
           for(let i of this.mydata)
             this.searchvalue=" "+i.empId+" "+i.empName+" "+i.empSalary+" "+i.empDepartment;

        }
        else{
            this.searchvalue="Employee not found"
        }
    } */

    showData():any
    {
        this.router.navigate(['show',this.searchId])
    }
    
  
}