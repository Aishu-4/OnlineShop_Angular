import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  Registerform:FormGroup=new FormGroup({
    Name:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
    Email:new FormControl("",[Validators.required,Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]),
    Mobile:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")])
  });
  get Name()
  {
    return this.Registerform.get('Name');
  }
  get Email()
  {
    return this.Registerform.get('Email');
  }
  get Mobile()
  {
    return this.Registerform.get('Mobile');
  }

  ngOnInit(): void {
  }
  Submitregister()
  {
    
  }

}
