import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { environment } from '../../../environments/environment';

interface CategoryRow {
  id: number;
  name: string;
  description: string;
  booksCount: number;
  status: 'Active' | 'Inactive';
  createdAt: string;
  icon: string;
  iconBg: string;
  active: boolean;
  parentId?: number | null;
}

interface CategoryFormModel {
  name: string;
  description: string;
  active: boolean;
  parentId: number | null;
}

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  imports: [CommonModule, MatCardModule, FormsModule]
})
export class CategoryComponent implements OnInit {
  private http = inject(HttpClient);

  stats = [
    { label: 'Total Categories', value: 0, icon: '🗂️', color: '#e9d5ff', note: 'Loading...' },
    { label: 'Total Books', value: 0, icon: '📚', color: '#dbeafe', note: 'Loading...' },
    { label: 'Active Categories', value: 0, icon: '✅', color: '#dcfce7', note: 'Loading...' },
    { label: 'Inactive Categories', value: 0, icon: '⚠️', color: '#ffe4e6', note: 'No change' }
  ];

  categories: CategoryRow[] = [];
  quickActions = ['Add Category', 'Edit Category', 'Delete Category', 'Refresh'];
  categoryTree: { name: string; count: number }[] = [];
  searchTerm = '';
  isSubmitting = false;
  selectedCategoryId: number | null = null;
  showCategoryModal = false;
  modalTitle = 'Add New Category';
  errorMessage = '';
  successMessage = '';

  categoryForm: CategoryFormModel = {
    name: '',
    description: '',
    active: true,
    parentId: null
  };

  ngOnInit(): void {
    this.loadCategories();
  }

  onSearchChange(): void {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      this.loadCategories();
      return;
    }

    const url = `${environment.categoryBaseUrl}/search?name=${encodeURIComponent(this.searchTerm.trim())}`;
    this.http.get<any>(url).subscribe({
      next: (response) => this.setCategoryList(response),
      error: () => {
        this.categories = [];
        this.errorMessage = 'Search failed. Please try again.';
      }
    });
  }

  loadCategories(): void {
    this.http.get<any>(environment.categoryBaseUrl).subscribe({
      next: (response) => this.setCategoryList(response),
      error: () => {
        this.categories = [];
        this.errorMessage = 'Unable to load categories.';
      }
    });
  }

  openAddCategoryModal(): void {
    this.selectedCategoryId = null;
    this.modalTitle = 'Add New Category';
    this.categoryForm = { name: '', description: '', active: true, parentId: null };
    this.showCategoryModal = true;
    this.errorMessage = '';
    this.successMessage = '';
  }

  openEditCategory(id: number): void {
    this.selectedCategoryId = id;
    this.modalTitle = 'Edit Category';
    this.errorMessage = '';
    this.successMessage = '';

    this.http.get<any>(`${environment.categoryBaseUrl}/${id}`).subscribe({
      next: (response) => {
        const category = response?.data ?? response ?? {};
        this.categoryForm = {
          name: category.name ?? '',
          description: category.description ?? '',
          active: category.active ?? category.status === 'Active',
          parentId: category.parentId ?? null
        };
        this.showCategoryModal = true;
      },
      error: () => {
        this.errorMessage = 'Unable to load category details.';
      }
    });
  }

  saveCategory(): void {
    if (!this.categoryForm.name?.trim()) {
      this.errorMessage = 'Category name is required.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    const payload = {
      name: this.categoryForm.name.trim(),
      description: this.categoryForm.description?.trim() ?? '',
      active: this.categoryForm.active,
      parentId: this.categoryForm.parentId
    };

    const request = this.selectedCategoryId
      ? this.http.put<any>(`${environment.categoryBaseUrl}/${this.selectedCategoryId}`, payload)
      : this.http.post<any>(environment.categoryBaseUrl, payload);

    request.subscribe({
      next: () => {
        this.successMessage = this.selectedCategoryId ? 'Category updated successfully.' : 'Category added successfully.';
        this.isSubmitting = false;
        this.showCategoryModal = false;
        this.loadCategories();
      },
      error: () => {
        this.isSubmitting = false;
        this.errorMessage = 'Unable to save category. Please try again.';
      }
    });
  }

  deleteCategory(id: number): void {
    const confirmed = window.confirm('Are you sure you want to delete this category?');
    if (!confirmed) {
      return;
    }

    this.http.delete<any>(`${environment.categoryBaseUrl}/${id}`).subscribe({
      next: () => {
        this.successMessage = 'Category deleted successfully.';
        this.loadCategories();
      },
      error: () => {
        this.errorMessage = 'Unable to delete category.';
      }
    });
  }

  refreshCategories(): void {
    this.searchTerm = '';
    this.loadCategories();
  }

  private setCategoryList(response: any): void {
    const list = response?.data ?? response ?? [];
    this.categories = (Array.isArray(list) ? list : []).map((item, index) => this.mapCategory(item, index));
    this.updateStats();
    this.categoryTree = this.categories.map((category) => ({
      name: category.name,
      count: category.booksCount
    }));
  }

  private updateStats(): void {
    const total = this.categories.length;
    const active = this.categories.filter((category) => category.status === 'Active').length;
    const inactive = total - active;

    this.stats = [
      { label: 'Total Categories', value: total, icon: '🗂️', color: '#e9d5ff', note: `${total > 0 ? 'Updated now' : 'No categories yet'}` },
      { label: 'Total Books', value: this.categories.reduce((sum, category) => sum + category.booksCount, 0), icon: '📚', color: '#dbeafe', note: 'From category data' },
      { label: 'Active Categories', value: active, icon: '✅', color: '#dcfce7', note: `${active} active now` },
      { label: 'Inactive Categories', value: inactive, icon: '⚠️', color: '#ffe4e6', note: inactive === 0 ? 'No change' : `${inactive} inactive` }
    ];
  }

  private mapCategory(item: any, index: number): CategoryRow {
    const status = item.active === false || item.status === 'Inactive' ? 'Inactive' : 'Active';
    const icon = this.getCategoryIcon(item.name ?? `Category ${index + 1}`);

    return {
      id: item.id ?? index + 1,
      name: item.name ?? `Category ${index + 1}`,
      description: item.description ?? 'No description available.',
      booksCount: Number(item.booksCount ?? item.bookCount ?? 0),
      status,
      createdAt: item.createdAt ? new Date(item.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'N/A',
      icon,
      iconBg: this.getCategoryColor(index),
      active: item.active ?? status === 'Active',
      parentId: item.parentId ?? null
    };
  }

  private getCategoryIcon(name: string): string {
    const emojiMap = ['📚', '🧠', '🖥️', '🎨', '☁️', '📘', '⚙️', '💡'];
    const hash = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return emojiMap[hash % emojiMap.length];
  }

  private getCategoryColor(index: number): string {
    const colors = ['#dbeafe', '#f3e8ff', '#dcfce7', '#fef3c7', '#ddd6fe', '#fce7f3', '#bbf7d0', '#fee2e2'];
    return colors[index % colors.length];
  }
}
