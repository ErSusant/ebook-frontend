import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

interface CategoryRow {
  id: number;
  name: string;
  description: string;
  booksCount: number;
  status: 'Active' | 'Inactive';
  createdAt: string;
  icon: string;
  iconBg: string;
}

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  imports: [CommonModule, MatCardModule]
})
export class CategoryComponent {
  stats = [
    { label: 'Total Categories', value: 8, icon: '🗂️', color: '#e9d5ff', note: '2 new this week' },
    { label: 'Total Books', value: 24, icon: '📚', color: '#dbeafe', note: '2 new this week' },
    { label: 'Active Categories', value: 7, icon: '✅', color: '#dcfce7', note: '1 new this week' },
    { label: 'Inactive Categories', value: 1, icon: '⚠️', color: '#ffe4e6', note: 'No change' }
  ];

  categories: CategoryRow[] = [
    { id: 1, name: 'Programming', description: 'Books on programming languages, frameworks and development tools.', booksCount: 8, status: 'Active', createdAt: '12 Sep 2025', icon: '⌨️', iconBg: '#dbeafe' },
    { id: 2, name: 'Design Patterns', description: 'Common design patterns used in software development.', booksCount: 4, status: 'Active', createdAt: '14 Sep 2025', icon: '🎨', iconBg: '#f3e8ff' },
    { id: 3, name: 'Software Engineering', description: 'System design, architecture and best practices.', booksCount: 5, status: 'Active', createdAt: '16 Sep 2025', icon: '🛠️', iconBg: '#dcfce7' },
    { id: 4, name: 'Java', description: 'Core Java, Advanced Java and related technologies.', booksCount: 6, status: 'Active', createdAt: '18 Sep 2025', icon: '☕', iconBg: '#fef3c7' },
    { id: 5, name: 'Spring Boot', description: 'Spring Boot framework, microservices and cloud development.', booksCount: 5, status: 'Active', createdAt: '20 Sep 2025', icon: '🌱', iconBg: '#bbf7d0' },
    { id: 6, name: 'Database', description: 'MySQL, PostgreSQL, MongoDB and other databases.', booksCount: 3, status: 'Active', createdAt: '22 Sep 2025', icon: '🗄️', iconBg: '#ddd6fe' },
    { id: 7, name: 'Cloud Computing', description: 'AWS, Azure, Docker, Kubernetes and distributed systems.', booksCount: 2, status: 'Active', createdAt: '25 Sep 2025', icon: '☁️', iconBg: '#dbeafe' },
    { id: 8, name: 'Web Development', description: 'Angular, React, HTML, CSS, JavaScript and frontend frameworks.', booksCount: 4, status: 'Inactive', createdAt: '27 Sep 2025', icon: '💻', iconBg: '#fce7f3' }
  ];

  quickActions = ['Add Category', 'Edit Category', 'Delete Category', 'Refresh'];

  categoryTree = [
    { name: 'Programming', count: 8 },
    { name: 'Design Patterns', count: 4 },
    { name: 'Software Engineering', count: 5 },
    { name: 'Java', count: 6 },
    { name: 'Spring Boot', count: 5 },
    { name: 'Database', count: 3 },
    { name: 'Cloud Computing', count: 2 },
    { name: 'Web Development', count: 4 }
  ];
}
