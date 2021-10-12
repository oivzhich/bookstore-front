import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  private updateCartStatus() {
    //subscribe to the totalPrice
    this.cartService.totalPrice.subscribe(data => this.totalPrice = data)

    //subscript to the totalQuantity
    this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data)
  }
}