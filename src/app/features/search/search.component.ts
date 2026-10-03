import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [CommonModule, FormsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule]
})
export class SearchComponent {
  query = '';

  books = [
    {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'Programming',
      price: 499,
      rating: 4.8,
      cover: 'blue',
      badge: 'Popular'
    },
    {
      id: 2,
      title: 'Java Complete Reference',
      author: 'Herbert Schildt',
      category: 'Java',
      price: 599,
      rating: 4.7,
      cover: 'navy',
      badge: 'New'
    },
    {
      id: 3,
      title: 'Spring Boot in Action',
      author: 'Craig Walls',
      category: 'Backend',
      price: 799,
      rating: 4.9,
      cover: 'green',
      badge: 'Trending'
    },
    {
      id: 4,
      title: 'Design Patterns',
      author: 'Erich Gamma',
      category: 'Software Engineering',
      price: 699,
      rating: 4.6,
      cover: 'purple',
      badge: 'Classic'
    }
  ];

  onSearch(): void {
    console.log('Searching for', this.query);
  }

  get filteredBooks(): any[] {
    const searchText = this.query.trim().toLowerCase();

    if (!searchText) {
      return this.books;
    }

    return this.books.filter((book) => {
      return (
        book.title.toLowerCase().includes(searchText) ||
        book.author.toLowerCase().includes(searchText) ||
        book.category.toLowerCase().includes(searchText)
      );
    });
  }
}
