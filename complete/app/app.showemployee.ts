import { Component,OnInit, Input} from "@angular/core";
import {EmployeeService} from './app.employeeservice';
import { ActivatedRoute,Params } from "@angular/router";

@Component({selector:'show-comp',
templateUrl:'app.showemployee.html'})

export class ShowEmployeeComponenent implements OnInit
{
 
  constructor(private myservice:EmployeeService,private _active:ActivatedRoute)
  {

  }

  empAll:any[]=[];
  data:any
  ngOnInit()
  {
      this.empAll=this.myservice.getAllEmployee();
     this.data= this._active.snapshot.params['id'];
  }
  deleteEmployee(data:number)
  {
    this.empAll.splice(data,1)
  }
  
 /*@Input()
  inchild:any[];*/
}