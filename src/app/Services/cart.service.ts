import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url:string="http://localhost:23441/api/Cart/";
  constructor(private removeProductCartHttp:HttpClient,
    private insertIntoCartHttp:HttpClient,private getTotalHttp:HttpClient,
    private updateQuantityCartHttp:HttpClient,private getcarthttp:HttpClient) { }

    RemoveProductCart(cartid : number) 
    {
        const httpheader={headers:new HttpHeaders({'Content-Type':'text/html'})};
        return  this.removeProductCartHttp.delete(this.url+"RemoveFromCart?cartid="+cartid,httpheader);
    }
    /*UpdateQuantityCart(cartid:number, productid: number, cartquantity :any){
        const httpheader={headers:new HttpHeaders({'Content-Type':'text/html'})};
        return this.updateQuantityCartHttp.put<any>(this.url+"UpdateCart?cartid="+cartid+
        "&productid="+productid+"&cartquantity="+cartquantity,httpheader);
    }*/
    
    GetCart(useremail:any)
    {
        return this.getcarthttp.get(this.url+"GetCartUser?useremail="+useremail)
    }

    AddtoCart(val : any) {
        const httpheader={headers:new HttpHeaders({'Content-Type':'application/json'})};
        return this.insertIntoCartHttp.post("http://localhost:23441/api/Cart/InsertIntoCart",val ,httpheader);
    }
   
    GetTotal(useremail:any)
    {
        return this.getTotalHttp.get(this.url+"CartTotal?useremail="+useremail)
    }
}
