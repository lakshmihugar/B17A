import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserforLogin } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  constructor(private authService:AuthService,
    private router:Router) {
      this.router.navigate([`$(Login)`]);
    }

  ngOnInit(): void {
  }
  onLogin(loginForm:NgForm){
  console.log(loginForm.value);
  this.authService.authUser(loginForm.value).subscribe();
    (  Response:UserforLogin) =>{
    console.log(Response);
    const user=Response;
    localStorage.setItem('token',user.token);
    localStorage.setItem('userName',user.username);
    console.log('Login successfull');
    this.router.navigate(['/']);
  }
  //if(token){
   // localStorage.setItem('token',token.Username)
    //console.log('Login successfull');
  //}
//else{
  //console.log('Login not successfull');
  //}
}
}
