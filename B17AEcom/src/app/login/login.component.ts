import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
//import { UserforLogin } from '../model/user';
import { Loginuser } from './loginuser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup: any;
  message: string | undefined;
  Error = false;
  logiuser: any

  loginForm: any;

  constructor(private authService: AuthService, private FormBuilder: FormBuilder,
    private router: Router) { 
      
      }
      getloginForm(data:any){
        console.warn(data)
        this.logiuser.authUser().subscribe((result: any)=>{
          console.warn(result)
        })
      }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName:new FormControl('',[Validators.required]),
      password:new FormControl(),
    })
  }
   onSubmit() {
    //console.log(loginForm.value);
    let login=this.loginForm.value;
    this.login(login);
  }

  login(loginUser: Loginuser) {
    this.authService.loginUser(loginUser).subscribe(

      user => {
        debugger;
        var succ = user;
        if (succ) {
          this.loginForm.reset();
          localStorage.setItem("user", JSON.stringify(succ));
          this.router.navigate(['dashboard']);
        }
        else {
          this.Error = true;
          this.message = "User ID/passoword wrong";
        }
      }
    )
  }
}


