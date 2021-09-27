import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  status!: string;
  statusObj: any = {};
  constructor(private UserService: UserService, private router: Router) { }

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
        }
        else {
          this.status = "Inavlid credentials";
          alert(this.status);
        }
      });
    }

}
}
