import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Admins } from "../models/admins.model";

import { Observable } from 'rxjs';

@Injectable(  {providedIn: 'root'})
export class AdminService{
    url:string="http://localhost:23441/api/Admins";
    constructor(private client:HttpClient,private registerHttp:HttpClient)
    {

    }
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }
  
    AdminLogin(admin: Admins) {
      return this.client.post(this.url+'/AdminLogin', JSON.stringify(admin), this.httpOptions);
    }
    
   
   
}