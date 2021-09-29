import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  
    name : string="";
    retailerlogged:boolean=false;
    retailer:null|string="";
    ngOnInit(): void {
      this.retailer = sessionStorage.getItem('retailer');
      if(this.retailer != null ){
        this.retailerlogged=true;
      this.name=this.retailer}
    }
  
  
LogOff(){
  this.retailerlogged=false;
  alert("Logout successful");
  sessionStorage.clear();
}
}
