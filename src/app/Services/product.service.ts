import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


import { Observable } from 'rxjs';
import { Product } from "../models/product.model";
import { Product1 } from "../models/Product1.model";

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
    public UpdateProduct(productid:any,product:Product){
      return this.client.put(this.url+"/RetailerUpdateProduct?productid="+productid,product);
  }
  RejectProduct(productid:any)
  {
      const httpheader={headers:new HttpHeaders({'Content-Type':'text/html'})};
      return this.client.put(this.url+"/RejectProduct?productid="+productid,JSON.stringify(productid),httpheader)
  }
}