import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";



import { Observable } from 'rxjs';
import { Retailer } from "../models/retailer.model";

@Injectable(  {providedIn: 'root'})
export class RetailerService{
    url:string="http://localhost:23441/api/Retailer";
    constructor(private client:HttpClient,private registerHttp:HttpClient)
    {

    }
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }
  
    RetailerLogin(retailer: Retailer) {
      return this.client.post(this.url+'/RetailerLogin', JSON.stringify(retailer), this.httpOptions);
    }
    public RetailerRegister(retailer:Retailer){
        return this.registerHttp.post(this.url+'/RetailerRegister',retailer);
    }
    
   
   
}