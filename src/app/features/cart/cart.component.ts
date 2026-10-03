import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule]
})
export class CartComponent {
  items = [
    {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      price: 499,
      quantity: 1,
      total: 499,
      selected: true,
      cover: 'blue'
    },
    {
      id: 2,
      title: 'Java Complete Reference',
      author: 'Herbert Schildt',
      price: 599,
      quantity: 2,
      total: 1198,
      selected: true,
      cover: 'navy'
    },
    {
      id: 3,
      title: 'Spring Boot in Action',
      author: 'Craig Walls',
      price: 799,
      quantity: 1,
      total: 799,
      selected: true,
      cover: 'green'
    },
    {
      id: 4,
      title: 'Design Patterns',
      author: 'Erich Gamma',
      price: 699,
      quantity: 1,
      total: 699,
      selected: true,
      cover: 'purple'
    }
  ];

  trackByItem(index: number, item: any): number {
    return item.id;
  }

  get selectedCount(): number {
    return this.items.filter((item) => item.selected).length;
  }

  get subtotal(): number {
    return this.items.reduce((sum, item) => sum + item.total, 0);
  }

  get shipping(): number {
    return 0;
  }

  get discount(): number {
    return 0;
  }

  get total(): number {
    return this.subtotal + this.shipping - this.discount;
  }

  toggleSelected(item: any): void {
    item.selected = !item.selected;
  }

  updateQuantity(item: any, delta: number): void {
    const next = item.quantity + delta;
    item.quantity = Math.max(1, next);
    item.total = item.price * item.quantity;
  }

  removeItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  clearCart(): void {
    this.items = [];
  }
}
