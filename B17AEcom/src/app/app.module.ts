import { NgModule} from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { Loginuser } from './login/loginuser';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AlertifyService } from './alertify.service';
import { Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    LogoutComponent,
    DashboardComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
     ReactiveFormsModule,
     FormsModule,
    
  ],
  providers: [AuthService,AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
