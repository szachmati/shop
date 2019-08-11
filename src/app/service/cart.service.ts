import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  constructor() { }

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


}
