import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-products-list',
  templateUrl: './top-products-list.component.html',
  styleUrls: ['./top-products-list.component.css']
})
export class TopProductsListComponent implements OnInit {
   Products:Array<any>=[
     {
       "ID":1,
       "Name":"Jeans",
       "Desc":"Highly Comforts",
       "Price":"Rs.1500"
       },
     {
      "ID":2,
      "Name":"Nike,Reebok,Adidas..",
      "Desc":"Sports,Shoes and more",
      "Price":"Rs.1500"
      },
    {
      "ID":3,
      "Name":"Sarees",
      "Desc":"Attractive",
      "Price":"Rs.1500"
    },
    {
      "ID":4,
      "Name":"Fastrack,Casio,Sonata",
      "Desc":"Knockout Deals",
      "Price":"Rs.1500"
    },
    {
      "ID":5,
      "Name":"Fastrack,Casio,Sonata",
      "Desc":"Knockout Deals",
      "Price":"Rs.1500"
    },
    {
      "ID":6,
      "Name":"Fastrack,Casio,Sonata",
      "Desc":"Knockout Deals",
      "Price":"Rs.1500"
    },
    {
      "ID":7,
      "Name":"Fastrack,Casio,Sonata",
      "Desc":"Knockout Deals",
      "Price":"Rs.1500"
    },
    {
      "ID":8,
      "Name":"Fastrack,Casio,Sonata",
      "Desc":"Knockout Deals",
      "Price":"Rs.1500"
    }

   ]
  constructor() { }

  ngOnInit(): void {
  }

}
