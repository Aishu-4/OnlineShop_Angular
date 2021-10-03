import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private UserService:UserService) { }

  name : string="";
  userlogged:boolean=false;
  user:null|string="";
  UserDetails : any = [];
  Userdet:any=[];
  ngOnInit(): void {
    this.user = sessionStorage.getItem('user');
    if(this.user != null ){
      this.userlogged=true;
    this.name=this.user}
    this.UserService.UserDetails(this.user)
    .subscribe(
      data=>{this.UserDetails = data;
        console.log("successful");
        console.log(this.UserDetails.length)
        for (let index = 0; index <this.UserDetails.length; index++) {
          console.log(this.UserDetails[index])
          this.Userdet[index]=this.UserDetails[index]
          //console.log(this.retailerList[index].approved)
        }
      //console.log(data)
    }
    ); }
  
  LogOff(){
    
     
     
      this.userlogged=false;
      alert("Successfully logged off");
      sessionStorage.clear();
     
    }

}
