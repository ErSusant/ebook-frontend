import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Book } from '../../../shared/models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [
    {
      id: '1',
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'Programming',
      price: 499,
      rating: 4.7
    },
    {
      id: '2',
      title: 'Java Complete Reference',
      author: 'Herbert Schildt',
      category: 'Java',
      price: 599,
      rating: 4.6
    },
    {
      id: '3',
      title: 'Spring Boot in Action',
      author: 'Craig Walls',
      category: 'Spring',
      price: 799,
      rating: 4.4
    },
    {
      id: '4',
      title: 'Design Patterns',
      author: 'Erich Gamma',
      category: 'Software Engineering',
      price: 699,
      rating: 4.5
    },
    {
      id: '5',
      title: 'Microservices',
      author: 'Sam Newman',
      category: 'Microservices',
      price: 799,
      rating: 4.5
    }
  ];

  stats = [
    { label: 'Total Books', value: 24, icon: '📚', color: '#dbeafe', note: '2 new this week' },
    { label: 'Categories', value: 8, icon: '🗂️', color: '#ede9fe', note: 'No change' },
    { label: 'Orders (Related)', value: 12, icon: '🛒', color: '#dcfce7', note: '3 new this week' },
    { label: 'Wishlist (Related)', value: 6, icon: '💗', color: '#fce7f3', note: 'No change' },
    { label: 'Avg. Rating', value: 4.6, icon: '⭐', color: '#fef3c7', note: '0.2 this week' }
  ];
}
