import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { products } from '../products';
import {CartService} from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    const productID = +this.route.snapshot.paramMap.get('productID');
    this.product = products[productID];
  }

  addProductToCart(product) {
    this.cartService.addItem(product);
    window.alert('Added '+product.name+' to cart');
  }

}
