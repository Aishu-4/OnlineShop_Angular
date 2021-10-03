import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { ProductService } from '../Services/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  useremail:any = sessionStorage.getItem('user');
  status : any;
  statusObj : any = {};
  usercart : any = [];
  subtotal : any = 0;
  grandtotal : any; 
  public id : number =0;
  constructor(private cartService :CartService, private productService:ProductService) { }

  ngOnInit(): void {
    

    this.status = this.cartService.GetCart(this.useremail)
    .subscribe(
      data => {
        this.usercart = data;
      }
    )

    this.GetTotal(this.useremail);
  }

  incr(quantity : number)
  {
    return quantity = quantity + 1;
    console.log(quantity);
  }

  Removefromcart(cartid:number){
    this.cartService.RemoveProductCart(cartid)
    .subscribe(data => {
      this.statusObj = data;
      if(this.statusObj.status == "successful")
       {
        alert("Removed Successfully");
        window.location.reload();
       }
      
      });
  }

  GetTotal(useremail: string){
    this.cartService.GetTotal(useremail)
    .subscribe(
      data =>{
        console.log(data)
        this.subtotal = data;
        this.grandtotal = this.subtotal + 1;
      }
    )
    
   }
   
}

