import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
//import { UserforLogin } from './model/user';
import { Observable, of } from 'rxjs';
import { Loginuser } from './login/loginuser';
import { UserforLogin } from './model/user';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  fakeUsername: string = "username";
  fakePassword: string = "password";

  url="https://bookcart.azurewebsites.net/api/Login";

  constructor(private http:HttpClient) { }
  
  login(username: string, password: string): Observable<any> {
  
    return this.http.post(this.url+'/api/Login',this.login);
  }
  loginUser(loginUser:Loginuser):Observable<any>{
    return this.http.post<any>(this.url+'api/login',loginUser)
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

onlogin(){
  return this.http.get(this.url);
}
loginuser(){
return this.http.get(this.url);
}
authUser(user:Loginuser){
  return this.http.post(this.url,user);
 }
}


