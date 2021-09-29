import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }
  name : string="";
  adminlogged:boolean=false;
  admin:null|string="";
  ngOnInit(): void {
    this.admin = sessionStorage.getItem('admin');
    if(this.admin != null ){
      this.adminlogged=true;
    this.name=this.admin}
  }
  LogOff(){
    
     
     
      this.adminlogged=false;
      alert("Successfully logged off");
      sessionStorage.clear();
     
    }
   
  }

