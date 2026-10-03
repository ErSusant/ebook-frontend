import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule]
})
export class WishlistComponent {
  wishlist = [
    {
      id: 1,
      title: 'Clean Code',
      subtitle: 'Programming',
      author: 'Robert C. Martin',
      price: 499,
      addedOn: '28 Sep 2025',
      stock: 'In Stock',
      cover: 'blue',
      selected: true
    },
    {
      id: 2,
      title: 'Java Complete Reference',
      subtitle: 'Java',
      author: 'Herbert Schildt',
      price: 599,
      addedOn: '26 Sep 2025',
      stock: 'In Stock',
      cover: 'navy',
      selected: true
    },
    {
      id: 3,
      title: 'Spring Boot in Action',
      subtitle: 'Spring Boot',
      author: 'Craig Walls',
      price: 799,
      addedOn: '24 Sep 2025',
      stock: 'In Stock',
      cover: 'green',
      selected: true
    },
    {
      id: 4,
      title: 'Design Patterns',
      subtitle: 'Software Engineering',
      author: 'Erich Gamma',
      price: 699,
      addedOn: '19 Sep 2025',
      stock: 'Low Stock',
      cover: 'purple',
      selected: true
    },
    {
      id: 5,
      title: 'Microservices',
      subtitle: 'Cloud Computing',
      author: 'Sam Newman',
      price: 799,
      addedOn: '12 Sep 2025',
      stock: 'In Stock',
      cover: 'black',
      selected: true
    },
    {
      id: 6,
      title: 'Effective Java',
      subtitle: 'Java',
      author: 'Joshua Bloch',
      price: 649,
      addedOn: '10 Sep 2025',
      stock: 'In Stock',
      cover: 'orange',
      selected: true
    }
  ];

  get selectedCount(): number {
    return this.wishlist.filter((book) => book.selected).length;
  }

  get totalValue(): number {
    return this.wishlist.reduce((sum, item) => sum + item.price, 0);
  }

  get inStockCount(): number {
    return this.wishlist.filter((item) => item.stock === 'In Stock').length;
  }

  trackByItem(index: number, item: any): number {
    return item.id;
  }

  toggleSelection(item: any): void {
    item.selected = !item.selected;
  }

  removeSelected(): void {
    this.wishlist = this.wishlist.filter((book) => !book.selected);
  }

  addToCart(): void {
    console.log('Add selected books to cart');
  }
}
