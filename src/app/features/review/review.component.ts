import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

interface ReviewStat {
  label: string;
  value: number | string;
  icon: string;
  color: string;
  note: string;
  accent: string;
}

interface ReviewRow {
  id: number;
  bookCover: string;
  bookName: string;
  bookTitle: string;
  customerName: string;
  rating: number;
  comment: string;
  reviewDate: string;
  status: 'Approved' | 'Pending';
}

@Component({
  selector: 'app-review',
  standalone: true,
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  imports: [CommonModule, MatCardModule]
})
export class ReviewComponent {
  stats: ReviewStat[] = [
    { label: 'Total Reviews', value: 18, icon: '💬', color: '#e0e7ff', accent: '#4f46e5', note: '↑ 3 new this week' },
    { label: 'Average Rating', value: 4.6, icon: '⭐', color: '#fef3c7', accent: '#f59e0b', note: '↑ 0.2 this week' },
    { label: 'Positive Reviews', value: '16 (89%)', icon: '✅', color: '#dcfce7', accent: '#16a34a', note: '↑ 2 new this week' },
    { label: 'Negative Reviews', value: '2 (11%)', icon: '❌', color: '#fee2e2', accent: '#ef4444', note: 'No change' },
    { label: 'Total Customers', value: 18, icon: '👥', color: '#f3e8ff', accent: '#8b5cf6', note: '↑ 3 new this week' }
  ];

  reviews: ReviewRow[] = [
    { id: 1, bookCover: 'C', bookName: 'Clean Code', bookTitle: 'Clean Code', customerName: 'Rahul Sharma', rating: 5, comment: 'Excellent book! Very well explained and easy to understand.', reviewDate: '28 Sep 2025', status: 'Approved' },
    { id: 2, bookCover: 'J', bookName: 'Java Complete Reference', bookTitle: 'Java Complete Reference', customerName: 'Priya Patel', rating: 4, comment: 'Good content, but could have more practical examples.', reviewDate: '26 Sep 2025', status: 'Approved' },
    { id: 3, bookCover: 'S', bookName: 'Spring Boot in Action', bookTitle: 'Spring Boot in Action', customerName: 'Amit Kumar', rating: 5, comment: 'Best book for Spring Boot. Highly recommended!', reviewDate: '24 Sep 2025', status: 'Approved' },
    { id: 4, bookCover: 'D', bookName: 'Design Patterns', bookTitle: 'Design Patterns', customerName: 'Neha Singh', rating: 4.5, comment: 'Great content and structure. Easy to follow.', reviewDate: '22 Sep 2025', status: 'Approved' },
    { id: 5, bookCover: 'M', bookName: 'Microservices', bookTitle: 'Microservices', customerName: 'Sandeep Verma', rating: 4, comment: 'Good explanation of concepts. Useful for real projects.', reviewDate: '19 Sep 2025', status: 'Approved' },
    { id: 6, bookCover: 'C', bookName: 'Clean Code', bookTitle: 'Clean Code', customerName: 'Vikas Yadav', rating: 5, comment: 'A must-read for every developer!', reviewDate: '16 Sep 2025', status: 'Approved' },
    { id: 7, bookCover: 'J', bookName: 'Java Complete Reference', bookTitle: 'Java Complete Reference', customerName: 'Sneha Rani', rating: 4, comment: 'Helpful and well organized.', reviewDate: '12 Sep 2025', status: 'Pending' },
    { id: 8, bookCover: 'S', bookName: 'Spring Boot in Action', bookTitle: 'Spring Boot in Action', customerName: 'Pooja Mehta', rating: 5, comment: 'Really good book. Loved it!', reviewDate: '10 Sep 2025', status: 'Approved' }
  ];

  ratingBreakdown = [
    { star: 5, percent: 12, count: '12 (67%)', color: '#2563eb' },
    { star: 4, percent: 4, count: '4 (22%)', color: '#60a5fa' },
    { star: 3, percent: 1, count: '1 (6%)', color: '#93c5fd' },
    { star: 2, percent: 1, count: '1 (6%)', color: '#dbeafe' },
    { star: 1, percent: 0, count: '0 (0%)', color: '#e2e8f0' }
  ];

  latestReviews = [
    { customer: 'Rahul Sharma', rating: 5, date: '28 Sep 2025', comment: 'Excellent book! Very well explained and easy to understand.', initials: 'R', color: '#8b5cf6' },
    { customer: 'Priya Patel', rating: 4, date: '26 Sep 2025', comment: 'Good content, but could have more practical examples.', initials: 'P', color: '#f472b6' },
    { customer: 'Amit Kumar', rating: 5, date: '24 Sep 2025', comment: 'Best book for Spring Boot. Highly recommended!', initials: 'A', color: '#10b981' },
    { customer: 'Neha Singh', rating: 4.5, date: '22 Sep 2025', comment: 'Great content and structure. Easy to follow.', initials: 'N', color: '#f59e0b' },
    { customer: 'Sandeep Verma', rating: 4, date: '19 Sep 2025', comment: 'Good explanation of concepts. Useful for real projects.', initials: 'S', color: '#0ea5e9' }
  ];

  getStatusClass(status: string): string {
    return status === 'Approved' ? 'approved' : 'pending';
  }

  getStarIcons(value: number): string {
    const full = Math.round(value);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
  }
}
