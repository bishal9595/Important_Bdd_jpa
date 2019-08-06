import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AddEmployeeComponenent } from './app.addemployee';
import {Routes,RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { ShowEmployeeComponenent } from './app.showemployee';
import { SearchEmployeeComponenent } from './app.searchemployee';
import{FormsModule} from '@angular/forms';
import { MyPipe } from './app.myownpipe';

const routes:Routes=[{path:'',redirectTo:'show',pathMatch:'full'},
        {path:'add',component:AddEmployeeComponenent},
        {path:'show',component:ShowEmployeeComponenent},
        {path:'search',component:SearchEmployeeComponenent},
         {path:'show/:id',component:ShowEmployeeComponenent}];


@NgModule({
    imports: [
        BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(routes)

        
    ],
    declarations: [
        AppComponent,AddEmployeeComponenent,ShowEmployeeComponenent,SearchEmployeeComponenent,MyPipe
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }