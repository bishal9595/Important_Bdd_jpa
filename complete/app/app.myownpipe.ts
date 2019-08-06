import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'checkmyown'
})
export class MyPipe implements PipeTransform
{
    transform(data:any, option:any) {
        if(option==null)
         return data;
         else return data.filter(data=> 
             { return data.empId.toString().toLowerCase()==(option.toString().toLowerCase())})
         
    

         }}