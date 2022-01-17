import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private loginUrl="https://bookcart.azurewebsites.net/api/Login";
 
 isLoggedin:boolean=false;

  

  constructor(private http:HttpClient,private router:Router) { }
  
  
  onLogin(Loginuser: {}){
    return this.http.post<any>(this.loginUrl,Loginuser)
  }
  isLoggedIn(){
    if (localStorage.getItem("token") != null) {
     this.isLoggedin=false;
      return this.isLoggedIn;
    }
    else{
    return true;
  }
  
  }

  OnLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login/login'])
  }

  authUser(user:any){
    return this.http.post<any>(this.loginUrl,user)
  
  }}



  

  

