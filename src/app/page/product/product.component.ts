import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pro: any = [
    { img: "http://themesflat.com/html/alohan/assets/img/products/product-25.jpg" },
    { img: "http://themesflat.com/html/alohan/assets/img/products/product-20.jpg" },
    { img: "http://themesflat.com/html/alohan/assets/img/products/product-24.jpg" },
    { img: "http://themesflat.com/html/alohan/assets/img/products/product-22.jpg" },
    { img: "http://themesflat.com/html/alohan/assets/img/products/product-23.jpg" },
    { img: "http://themesflat.com/html/alohan/assets/img/products/product-26.jpg" },
    { img: "https://themesflat.com/html/alohan/assets/img/products/product-19.jpg" },
    { img: "https://themesflat.com/html/alohan/assets/img/products/product-36.jpg" },
    { img: "https://themesflat.com/html/alohan/assets/img/products/product-23.jpg" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
