import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';
@Component({
  selector: 'app-pending-products-component',
  templateUrl: './pending-products-component.component.html',
  styleUrls: ['./pending-products-component.component.css']
})
export class PendingProductsComponentComponent implements OnInit {

  constructor(private AdminService:AdminService,private router:Router) { }
  ProductList : any =[] ;
  ProductsLists : any = [];
  name : string="";
  adminlogged:boolean=false;
  admin:null|string="";
  status:any;
  result:any;
  ngOnInit(): void {
    this.admin = sessionStorage.getItem('admin');
    if(this.admin != null ){
      this.adminlogged=true;
    this.name=this.admin}
    this.AdminService.GetPendingProducts()
    .subscribe(
      data=>{this.ProductsLists = data;
        console.log("successful");
        console.log(this.ProductsLists.length)
        for (let index = 0; index <this.ProductsLists.length; index++) {
          console.log(this.ProductsLists[index])
          this.ProductList[index]=this.ProductsLists[index]
          //console.log(this.retailerList[index].approved)
        }
      }
    );
      //cons
  }

  
  ApproveProduct(productid:number){
    this.status = this.AdminService.ApproveProduct(productid)
    .subscribe(
      data=>{
        this.result = data;
        if(this.result == "accepted"){
          console.log("approved")
         
        }
      }
    )  
  }

  RejectProduct(productid:number){
    this.status = this.AdminService.RejectProduct(productid)
    .subscribe(
      data=>{
        this.result = data;
        if(this.result == "rejected"){
          console.log("approved")
         
        }
      }
    )  
  }
 
    LogOff(){
      this.adminlogged=false;
        alert("Successfully logged off");
        sessionStorage.clear();
       
      }
}
