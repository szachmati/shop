import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productID = +this.route.snapshot.paramMap.get('productID');
    this.product = products[productID];
  }


}
