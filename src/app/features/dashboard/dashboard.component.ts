import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, MatCardModule]
})
export class DashboardComponent {
  username = localStorage.getItem('username') || 'Susanta';
  today = 'Monday, 29 Sep 2025';

  stats = [
    { label: 'Total Books', value: 24, note: '2 new this week', icon: '📚', color: '#e0f2fe' },
    { label: 'Categories', value: 8, note: 'No change', icon: '🗂️', color: '#ede9fe' },
    { label: 'Orders', value: 12, note: '3 new this week', icon: '🛒', color: '#dcfce7' },
    { label: 'Wishlist', value: 6, note: 'No change', icon: '💗', color: '#fce7f3' },
    { label: 'Cart Items', value: 3, note: 'No change', icon: '🛍️', color: '#fef3c7' },
    { label: 'Payments', value: '₹ 4,250', note: '2 new this week', icon: '💳', color: '#d1fae5' }
  ];

  recentOrders = [
    { id: '#ORD1006', book: 'Clean Code', amount: '₹ 499', status: 'Delivered', date: '28 Sep 2025' },
    { id: '#ORD1005', book: 'Design Patterns', amount: '₹ 699', status: 'Shipped', date: '26 Sep 2025' },
    { id: '#ORD1004', book: 'Java Complete...', amount: '₹ 599', status: 'Processing', date: '24 Sep 2025' },
    { id: '#ORD1003', book: 'Microservices', amount: '₹ 799', status: 'Delivered', date: '21 Sep 2025' },
    { id: '#ORD1002', book: 'Spring Boot', amount: '₹ 499', status: 'Shipped', date: '19 Sep 2025' }
  ];

  recommendedBooks = [
    { title: 'Clean Code', author: 'Robert C. Martin', price: '₹ 499', rating: '4.7 (1.2k)', accent: '#0b1e2d' },
    { title: 'Design Patterns', author: 'Erich Gamma', price: '₹ 699', rating: '4.5 (856)', accent: '#1d4ed8' },
    { title: 'Java Complete Reference', author: 'Herbert Schildt', price: '₹ 599', rating: '4.6 (2.3k)', accent: '#ef4444' },
    { title: 'Spring Boot in Action', author: 'Craig Walls', price: '₹ 799', rating: '4.4 (1.1k)', accent: '#16a34a' }
  ];

  notifications = [
    { title: 'Order #ORD1006 has been delivered', time: '2h ago', icon: '📦', tone: 'blue' },
    { title: 'Payment received ₹ 499 for Order #ORD1006', time: '3h ago', icon: '💳', tone: 'green' },
    { title: 'New book added Spring Security in Action', time: '5h ago', icon: '📘', tone: 'purple' },
    { title: 'New review received 5 stars for Clean Code', time: '7h ago', icon: '⭐', tone: 'orange' },
    { title: 'Book added to wishlist Design Patterns', time: '9h ago', icon: '💖', tone: 'pink' }
  ];
}
