import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss']
})
export class ProductAlertComponent implements OnInit {


  @Input()
  product;

  @Output()
  notification = new EventEmitter();

  notify(product) {
    this.notification.emit(product.name);
  }

  constructor() { }

  ngOnInit() {
  }


}
