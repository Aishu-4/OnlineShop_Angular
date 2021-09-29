import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RetailerService } from 'src/app/Services/retailer.service';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css']
})
export class RegisterDetailsComponent implements OnInit {
  clicked:boolean=false;
  constructor(private RetailerService:RetailerService,private router:Router) { }
  submitted:boolean=false;
  status:any;
  ngOnInit(): void {
  }
  RegisterDetsform:FormGroup=new FormGroup({gst:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
  pan:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
  aadhar:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
  cmpdets:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),


 });
 Approval(){
   alert("Request has been sent to admin,please check confirmation mail for your approval status");
   this.clicked=true;
 }
 get pan()
  {
    return this.RegisterDetsform.get('pan');
  }
  get aadhar()
  {
    return this.RegisterDetsform.get('aadhar');
  }
  get cmpdets()
  {
    return this.RegisterDetsform.get('cmpdets');
  }
  get gst()
  {
    return this.RegisterDetsform.get('gst');
  }
 Submitregister()
  {
    this.submitted = true;
    this.status = this.RetailerService.RetailerRegister(this.RegisterDetsform.value).subscribe(
      data =>{
        if(data=="successful"){
            console.log(this.RegisterDetsform.value.gst);
            alert('Registration successful... ');
            
            this.router.navigate([' ']);
        }else{
          alert('Registration Unsuccessful... try again');
        }
      })
  }

}
