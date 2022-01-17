import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { User, UserforLogin } from '../model/user';

// { Observable, of } from 'rxjs'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
 loginUserData={}


  constructor(private authservice: AuthService, 
    private router: Router) { }

  ngOnInit() {
    

    }
   
    
    onLogin(loginForm:NgForm){
      console.log(loginForm.value);
      this.authservice.authUser(loginForm.value).subscribe(
        (response:UserforLogin)=>{
          console.log(response);
          const user=response;
        localStorage.setItem('token',user.token);
        console.log('Login successfull');
        this.router.navigate(['/']);
      }
        
      );
     
     }
      }




      
  
   
  



  

   