import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { RetailerService } from '../Services/retailer.service';

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
  
  constructor(private UserService: UserService,private AdminService:AdminService,private RetailerService:RetailerService ,private router: Router) { }

  ngOnInit(): void {
    this.admin = sessionStorage.getItem('admin');
    if(this.admin != null ){
      this.adminlogged=true;
    this.name=this.admin}
    
   
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
          this.router.navigateByUrl("/UserProfile");
          
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
          
          sessionStorage.setItem('admin', this.AdminLoginForm.controls.email.value);
          sessionStorage.setItem('reload',"done");
         // this.router.navigate(['Admin']);
         this.router.navigateByUrl("/Admin1");
         
        }
        else {
          this.status = "Inavlid credentials";
          alert(this.status);
        }
      });
    } 
  }

RetailerLoginForm : FormGroup =new FormGroup({
  retaileremail: new FormControl("",[Validators.required,Validators.pattern("(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]),
  retailerpassword: new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
});

get retaileremail()
{
  return this.RetailerLoginForm.get('retaileremail');
}
get retailerpassword()
{
  return this.RetailerLoginForm.get('retailerpassword');
}

      submitretailerdata()
  {
    {
      console.log(this.RetailerLoginForm.value);
      this.RetailerService.RetailerLogin(this.RetailerLoginForm.value).subscribe(data => {
        this.statusObj = data;
        console.log(this.statusObj);
        if(this.statusObj.status == "successful") {
          this.status = "Login Successfull";
          alert(this.status)
          
          sessionStorage.setItem('retailer', this.RetailerLoginForm.controls.retaileremail.value);
          sessionStorage.setItem('reload',"done");
         // this.router.navigate(['Admin']);
         this.router.navigateByUrl("/Admin1");
         
        }
        else {
          this.status = "Inavlid credentials";
          alert(this.status);
        }
      });
    }
  } 
}
