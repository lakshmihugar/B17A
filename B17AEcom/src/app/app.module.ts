import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { Loginuser } from './login/loginuser';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    LogoutComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
     
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
