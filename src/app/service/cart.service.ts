import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  addItem(item) {
    this.items.push(item);
  }

  deleteItem(item) {
    this.items = this.items.filter(i => i !== item);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

  getShippingPrices() {
    return this.httpClient.get('/assets/shipping.json');
  }

}
