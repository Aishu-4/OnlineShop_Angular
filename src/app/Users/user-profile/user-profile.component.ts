import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  name : string="";
  userlogged:boolean=false;
  user:null|string="";
  ngOnInit(): void {
    this.user = sessionStorage.getItem('user');
    if(this.user != null ){
      this.userlogged=true;
    this.name=this.user}
  }
  LogOff(){
    
     
     
      this.userlogged=false;
      alert("Successfully logged off");
      sessionStorage.clear();
     
    }

}
