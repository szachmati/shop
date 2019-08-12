import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CartService} from '../service/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingCosts = null;

  constructor(
    private cartService: CartService
  ) {

  }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }


}
