import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

import { Observable } from 'rxjs';

@Injectable(  {providedIn: 'root'})
export class UserService{
    url:string="http://localhost:23441/api/User";
    constructor(private client:HttpClient,private registerHttp:HttpClient)
    {

    }
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }
  
    UserLogin(user: User) {
      return this.client.post(this.url+'/UserLogin', JSON.stringify(user), this.httpOptions);
    }
    
   
   
}