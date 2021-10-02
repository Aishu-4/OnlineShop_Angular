import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { AdminService } from 'src/app/Services/admin.service';
import { ProductService } from 'src/app/Services/product.service';
import { RetailerService } from 'src/app/Services/retailer.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  

  constructor(private AdminService:AdminService,
    private ProductService:ProductService,private router:Router,
    private RetailerService:RetailerService, private myRoute:ActivatedRoute) {
      
      }
  retaileremail:null|string="";
  categories:any;
 categoryList : any =[] ;
  categoriesLists : any = [];
  ProductList : any =[] ;
  ProductsLists : any = [];

 
  
  submitted=false;
  check:boolean=false;
  checkpassword:any;
  status:any;
  
  productid:any;


  
  ngOnInit(): void {
  
    this.retaileremail = sessionStorage.getItem('retailer');
    this.productid= this.myRoute.snapshot.params["id"]
    console.log(this.productid)
    this.AdminService.GetCategories()
    .subscribe(
      data=>{this.categoriesLists = data;
        console.log("successful");
       
        console.log(this.categoriesLists.length)
        for (let index = 0; index <this.categoriesLists.length; index++) {
          console.log(this.categoriesLists[index])
          this.categoryList[index]=this.categoriesLists[index]
          //console.log(this.retailerList[index].approved)
          
          
        }
      //ceseonsole.log(data)
      
    }
    );
    this.RetailerService.RetailerProducts(this.retaileremail)
    .subscribe(
      data=>{this.ProductsLists = data;
        console.log("successful");
       
        console.log(this.ProductsLists.length)
        for (let index = 0; index <this.ProductsLists.length; index++) {
          console.log(this.ProductsLists[index])
          this.ProductList[index]=this.ProductsLists[index]
          //console.log(this.retailerList[index].approved)
        }
      //console.log(data)
    }
    );
  }
 
  Register1form:FormGroup=new FormGroup({
    productname:new FormControl(""),
    productprice: new FormControl(""),
    productquantity:new FormControl(""),
    productdescription:new FormControl(""),
    productbrand:new FormControl(""),
    categoryid:new FormControl("")
  });
  get productname()
  {
    return this.Register1form.get('productname');
  }
  get productquantity()
  {
    return this.Register1form.get('productquantity');
  }
  get productdescription()
  {
    return this.Register1form.get('productdescription');
  }
  get productbrand()
  {
    return this.Register1form.get('productbrand');
  }
  
  get productprice()
  {
    return this.Register1form.get('productprice');
  }  
 
  get categoryid()
  {
    return this.Register1form.get('categoryid');
  }  

  
  statusObj:any;
  
  OnSubmit(){
    //console.log(Retaileremail.value)
   this.ProductService.AddProduct(this.retaileremail,this.Register1form.value)
   .subscribe(data => {
    this.statusObj = data;
    console.log("hii");
    console.log(data);
     window.location.reload();
    //let jdata = JSON.parse(data.toString());
    console.log(this.statusObj);
    if(this.statusObj.status == "successful") {
      alert("Product Uploaded");
      this.router.navigateByUrl(" ");
    }
    else {
      this.status = "Product  not Uploaded";
      alert(this.status);
    }
  });
  }  

  Register2form:FormGroup=new FormGroup({
    
    product1price: new FormControl(""),
    product1quantity:new FormControl(""),
    product1description:new FormControl(""),
    product1brand:new FormControl("")
    
  });
  get product1quantity()
  {
    return this.Register2form.get('product1quantity');
  }
  get product1description()
  {
    return this.Register2form.get('product1description');
  }
  get product1brand()
  {
    return this.Register2form.get('product1brand');
  }
  
  get product1price()
  {
    return this.Register2form.get('product1price');
  }  

  Updateproduct(){
    this.status = this.ProductService.UpdateProduct(this.productid,this.retaileremail,this.Register2form.value).subscribe(
      data =>{ 
        if(data!="invalid"){
            console.log("updated");
            alert('Product Updated Successfuly');
            this.router.navigate(['profileRetailer']);
        }else{
          alert('Product Update Unsuccessful..try again');
          console.log("not updated");
        }
      })
  }

}
  


   





