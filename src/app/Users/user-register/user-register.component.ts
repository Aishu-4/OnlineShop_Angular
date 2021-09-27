import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor() { }
  Registerform:FormGroup=new FormGroup({
    Name:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
    password: new FormControl(null, [Validators.required]),
    confirmedPassword: new FormControl(null, [Validators.required]),
    Email:new FormControl("",[Validators.required,Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]),
    Mobile:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    City:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
    State:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
    Qualification:new FormControl("",[Validators.required]),
    YearOfCompletion:new FormControl("",[Validators.required])

  });
  get Name()
  {
    return this.Registerform.get('Name');
  }
  get Password()
  {
    return this.Registerform.get('Password');
  }
  get Email()
  {
    return this.Registerform.get('Email');
  }
  get Mobile()
  {
    return this.Registerform.get('Mobile');
  }
  get City()
  {
    return this.Registerform.get('City');
  }
  get State()
  {
    return this.Registerform.get('State');
  }
  get Qualification()
  {
    return this.Registerform.get('Qualification');
  }
  get YearOfCompletion()
  {
    return this.Registerform.get('YearOfCompletion');
  }

  ngOnInit(): void {
    
  }
  Submitregister()
  {
    
  }
  
}
