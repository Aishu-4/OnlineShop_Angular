import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  status!: string;
  statusObj: any = {};
  name : string="";
  adminlogged:boolean=false;
  admin:null|string="";
  
  constructor(private UserService: UserService,private AdminService:AdminService, private router: Router) { }

  ngOnInit(): void {
   
  }
  
  LoginForm : FormGroup =new FormGroup({
    useremail: new FormControl("",[Validators.required,Validators.pattern("(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]),
    userpassword: new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
  });

  get useremail()
  {
    return this.LoginForm.get('useremail');
  }
  get userpassword()
  {
    return this.LoginForm.get('userpassword');
  }
  submituserdata()
  {
    {
      console.log(this.LoginForm.value);
      this.UserService.UserLogin(this.LoginForm.value).subscribe(data => {
        this.statusObj = data;
        console.log(this.statusObj);
        if(this.statusObj.status == "successful") {
          this.status = "Login Successfull";
          alert(this.status)
          sessionStorage.setItem('user', this.LoginForm.controls.useremail.value);
          //this.router.navigateByUrl("Home")
          this.router.navigateByUrl("UserProfile")
        }
        else {
          this.status = "Inavlid credentials";
          alert(this.status);
        }
      });
    }
 
  }

  AdminLoginForm : FormGroup =new FormGroup({
    email: new FormControl("",[Validators.required,Validators.pattern("(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]),
    password: new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
  });

  get email()
  {
    return this.AdminLoginForm.get('email');
  }
  get password()
  {
    return this.AdminLoginForm.get('password');
  }
  submitadmindata()
  {
    {
      console.log(this.AdminLoginForm.value);
      this.AdminService.AdminLogin(this.AdminLoginForm.value).subscribe(data => {
        this.statusObj = data;
        console.log(this.statusObj);
        if(this.statusObj.status == "successful") {
          this.status = "Login Successfull";
          alert(this.status)
          sessionStorage.setItem('email', this.AdminLoginForm.controls.email.value);
         
         // this.router.navigate(['Admin']);
          this.router.navigateByUrl("Admin1")
        }
        else {
          this.status = "Inavlid credentials";
          alert(this.status);
        }
      });
    }
  } 
}
