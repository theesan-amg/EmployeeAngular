import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {HomeComponent} from "../pages/home/home.component";

import {EmployeeCreateComponent} from "../pages/employee-create/employee-create.component";
import {NavbarComponent} from "../shared/navbar/navbar.component";
import {EmployeeListComponent} from "../pages/employee-list/employee-list.component";
import {LoginComponent} from "../pages/login/login.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeListComponent,   // Déclaré ici
    EmployeeCreateComponent, // Déclaré ici
    NavbarComponent,
    LoginComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
