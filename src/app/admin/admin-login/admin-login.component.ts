import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private AdminService: AdminService, private router: Router) { }
  status!: string;
  statusObj: any = {};
  ngOnInit(): void {
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
          sessionStorage.setItem('user', this.AdminLoginForm.controls.email.value);
          //this.router.navigateByUrl("Home")
        }
        else {
          this.status = "Inavlid credentials";
          alert(this.status);
        }
      });
    }
  }
}
