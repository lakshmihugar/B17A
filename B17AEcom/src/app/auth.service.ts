import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserforLogin } from './model/user';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  fakeUsername: string = "username";
  fakePassword: string = "password";

  url="https://bookcart.azurewebsites.net/api/Login";

  constructor(private http:HttpClient) { }
  
  login(username: string, password: string): Observable<any> {
  if (username == this.fakeUsername && password == this.fakePassword) {
      localStorage.setItem("token", "https://bookcart.azurewebsites.net/api/Login");
      return of(new HttpResponse({ status: 200 }));
    } else {
      return of(new HttpResponse({ status: 401 }));
    }
  }
  logout(): void {
    localStorage.removeItem("token");
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem("token") != null) {
      return true;
    }
    return false;
  }

//onlogin(){
  //return this.http.get(this.url);
//}

authUser(user:UserforLogin){
  return this.http.post(this.url,user);
 }
//let UserArray=[];
//if(localStorage.getItem('Users')){
  //UserArray =JSON.parse(localStorage.getItem('Users') || '{}');
//}
//return UserArray.find( (p:any) => p.userName ===  user.userName && p.password === user.password)
  }


