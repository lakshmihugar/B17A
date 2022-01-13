import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserforLogin } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout() {
    throw new Error('Method not implemented.');
  }
  url="https://bookcart.azurewebsites.net/api/Login";

  constructor(private http:HttpClient) { }
onlogin(){
  return this.http.get(this.url);
}
  authUser(user:UserforLogin){
   return this.http.post(this.url,user)
   ;}
//let UserArray=[];
//if(localStorage.getItem('Users')){
  //UserArray =JSON.parse(localStorage.getItem('Users') || '{}');
//}
//return UserArray.find( (p:any) => p.userName ===  user.userName && p.password === user.password)
  }


