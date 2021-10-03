import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/Services/filter.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  Products:any;
  search: string = "";
  searchdetails:any;
  searchstatus : boolean = false;
  filterbycategory : any;
  categories : any
  filterbycategorystatus:boolean = false;
  constructor(private productService:ProductService,private router :Router, private filterService:FilterService) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(
      data => {
        this.Products = data;
      }
    )
  }

  onCategory(){
    this.productService.getallcategories().subscribe((data : any) => {
      this.categories = data;
      console.log(this.categories)
    }
      )
  }

  FetchSearchResults()
  {
    console.log(this.search)
    this.productService.searchallProducts(this.search)
    .subscribe((data: any)=>
    {this.searchdetails=data;
      console.log(this.searchdetails);
      this.searchstatus = true;
      this.filterbycategorystatus = false;
    }
      )
  }

  ByCategory(catname:string)
  {
    this.filterService.FilterByCategory(catname).subscribe((data:any) => {
      this.filterbycategory = data;
      this.filterbycategorystatus = true;
      this.searchstatus = false;
    });
  }
 
}
