import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


import { Observable } from 'rxjs';
import { Product } from "../models/product.model";

@Injectable(  {providedIn: 'root'})
export class ProductService{
    url:string="http://localhost:23441/api/Retailer";
    constructor(private client:HttpClient,private registerHttp:HttpClient)
    {

    }
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }
  
    AddProduct(retaileremail:any,product:Product)
    {
     
     
      return this.client.post(this.url+"/AddProduct?retaileremail="+retaileremail,product);
    }
    public UpdateProduct(productid:any,retaileremail:any,product:Product){
      return this.client.post(this.url+"/RetailerUpdateProduct?productid="+productid+"&remail="+retaileremail,product);
  }
    
}