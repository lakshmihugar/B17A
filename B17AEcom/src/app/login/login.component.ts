import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup, FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserforLogin } from '../model/user';
import { Loginuser } from './loginuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  massege!: string;
  error=false;
logiuser:any
  Error: boolean=true;
  constructor(private authService:AuthService,private FormBuilder:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {}

  setFormState():void{
    this.loginForm = this.FormBuilder.group({
      UserName:['',[Validators.required]],
      passowod:['',[Validators.required]],
    })
  }
  onSubmit(loginForm: NgForm){
    let login=this.loginForm.value;
    this.onLogin(login);
  }

  onLogin(loginUser:Loginuser){
    this.authService.loginUser(loginUser).subscribe(
    
      user=>{
        debugger;
        var succ = user;
        if (succ){
          this.loginForm.reset();
          localStorage.setItem("user",JSON.stringify(succ));
          this.router.navigate(['/Registration']);
        }
          else{
            this.Error=true;
            this.massege = "User ID/passoword wrong";
           }
        }
    )
      }
    
    
  }
  

