import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-top-products-list',
  templateUrl: './top-products-list.component.html',
  styleUrls: ['./top-products-list.component.css']
})
export class TopProductsListComponent implements OnInit {
   Products:any;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(
      data => {
        this.Products = data;
      }
    )
  }

  
}
