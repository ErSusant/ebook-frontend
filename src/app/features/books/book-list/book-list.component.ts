import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Book } from '../../../shared/models/book.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  books: any[] = [];
  currentPage = 1;
  pageSize = 5;
  selectedSort = 'arrival';
  searchText = '';
  selectedCategory = 'all';
  selectedStatus = 'all';
  modalMode: 'create' | 'view' | 'edit' = 'create';
  selectedBookId: number | null = null;
  showBookModal = false;
  isSubmitting = false;
  apiError = '';
  successMessage = '';

  sortOptions = [
    { value: 'arrival', label: 'Newest First' },
    { value: 'featured', label: 'Featured' },
    { value: 'best-seller', label: 'Best Seller' },
    { value: 'trending', label: 'Trending' }
  ];

  stats = [
    { label: 'Total Books', value: 24, icon: '📚', color: '#dbeafe', note: '2 new this week' },
    { label: 'Categories', value: 8, icon: '🗂️', color: '#ede9fe', note: 'No change' },
    { label: 'Orders (Related)', value: 12, icon: '🛒', color: '#dcfce7', note: '3 new this week' },
    { label: 'Wishlist (Related)', value: 6, icon: '💗', color: '#fce7f3', note: 'No change' },
    { label: 'Avg. Rating', value: 4.6, icon: '⭐', color: '#fef3c7', note: '0.2 this week' }
  ];

  bookForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    subtitle: [''],
    isbn: ['', [Validators.required, Validators.minLength(5)]],
    description: [''],
    authorId: ['', [Validators.required, Validators.min(1)]],
    publisherId: ['', [Validators.required, Validators.min(1)]],
    categoryId: ['', [Validators.required, Validators.min(1)]],
    subCategoryId: ['', [Validators.min(1)]],
    language: [''],
    pages: ['', [Validators.min(1)]],
    edition: [''],
    price: ['', [Validators.required, Validators.min(0.01)]],
    discountPrice: ['', [Validators.min(0)]],
    rating: ['', [Validators.min(0), Validators.max(5)]],
    reviewCount: ['', [Validators.min(0)]],
    publicationDate: [''],
    thumbnailUrl: [''],
    previewUrl: [''],
    originalUrl: [''],
    fileSize: [''],
    tags: [''],
    featured: [false],
    bestSeller: [false],
    trending: [false],
    newArrival: [false]
  });

  ngOnInit(): void {
    this.loadBooks(this.selectedSort);
  }

  get paginatedBooks(): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.books.slice(start, start + this.pageSize);
  }

  get pageNumbers(): number[] {
    const totalPages = Math.max(1, Math.ceil(this.books.length / this.pageSize));
    return Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.books.length / this.pageSize));
  }

  get showingText(): string {
    const total = this.books.length;
    if (!total) {
      return 'Showing 0 to 0 of 0 books';
    }
    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, total);
    return `Showing ${start} to ${end} of ${total} books`;
  }

  previousPage(): void {
    this.currentPage = Math.max(1, this.currentPage - 1);
  }

  nextPage(): void {
    this.currentPage = Math.min(this.totalPages, this.currentPage + 1);
  }

  onSortChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedSort = target.value;
    this.loadBooks(this.selectedSort);
  }

  onCategoryChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;
  }

  onStatusChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedStatus = target.value;
  }

  searchBooks(): void {
    const params: string[] = [];

    const term = this.searchText?.trim();
    if (term) {
      params.push(`title=${encodeURIComponent(term)}`);
    }

    if (this.selectedCategory && this.selectedCategory !== 'all') {
      params.push(`categoryId=${encodeURIComponent(this.selectedCategory)}`);
    }

    if (this.selectedStatus && this.selectedStatus !== 'all') {
      params.push(`status=${encodeURIComponent(this.selectedStatus)}`);
    }

    const url = params.length
      ? `${environment.bookBaseUrl}/search?${params.join('&')}`
      : `${environment.bookBaseUrl}/search`;

    this.http.get<any>(url).subscribe({
      next: (response) => {
        const list = response?.data ?? response ?? [];
        this.books = Array.isArray(list) ? list : [];
        this.currentPage = 1;
      },
      error: (err) => {
        console.error('Search failed', err);
        this.books = [];
      }
    });
  }

  loadBooks(sortKey: string): void {
    const url = this.getSortUrl(sortKey);
    this.http.get<any>(url).subscribe({
      next: (response) => {
        const list = response?.data ?? response ?? [];
        this.books = Array.isArray(list) ? list : [];
        this.currentPage = 1;
      },
      error: (err) => {
        console.error('Failed to fetch books', err);
        this.books = [];
      }
    });
  }

  private getSortUrl(sortKey: string): string {
    switch (sortKey) {
      case 'featured':
        return `${environment.bookBaseUrl}/featured`;
      case 'best-seller':
        return `${environment.bookBaseUrl}/best-seller`;
      case 'trending':
        return `${environment.bookBaseUrl}/trending`;
      case 'arrival':
      default:
        return `${environment.bookBaseUrl}/arrival`;
    }
  }

  openCreateBookModal(): void {
    this.modalMode = 'create';
    this.selectedBookId = null;
    this.clearBookForm();
    this.bookForm.patchValue({ isbn: this.generateUniqueIsbn() }, { emitEvent: false });
    this.showBookModal = true;
    this.apiError = '';
    this.successMessage = '';
  }

  viewBook(id: number): void {
    this.modalMode = 'view';
    this.selectedBookId = id;
    this.showBookModal = true;
    this.apiError = '';
    this.successMessage = '';
    this.fetchBookById(id);
  }

  editBook(id: number): void {
    this.modalMode = 'edit';
    this.selectedBookId = id;
    this.showBookModal = true;
    this.apiError = '';
    this.successMessage = '';
    this.fetchBookById(id);
  }

  closeBookModal(): void {
    this.clearBookForm();
    this.showBookModal = false;
    this.apiError = '';
    this.successMessage = '';
    this.modalMode = 'create';
    this.selectedBookId = null;
  }

  clearBookForm(): void {
    this.bookForm.reset({
      title: '',
      subtitle: '',
      isbn: this.modalMode === 'create' ? this.generateUniqueIsbn() : '',
      description: '',
      authorId: '',
      publisherId: '',
      categoryId: '',
      subCategoryId: '',
      language: '',
      pages: '',
      edition: '',
      price: '',
      discountPrice: '',
      rating: '',
      reviewCount: '',
      publicationDate: '',
      thumbnailUrl: '',
      previewUrl: '',
      originalUrl: '',
      fileSize: '',
      tags: '',
      featured: false,
      bestSeller: false,
      trending: false,
      newArrival: false
    });
    this.bookForm.markAsPristine();
    this.bookForm.markAsUntouched();
  }

  fetchBookById(id: number): void {
    this.http.get<any>(`${environment.bookBaseUrl}/${id}`).subscribe({
      next: (response) => {
        const book = response?.data ?? response ?? {};
        this.populateBookForm(book);
      },
      error: (err) => {
        console.error('Failed to fetch book by id', err);
        this.apiError = 'Unable to load book details.';
      }
    });
  }

  private generateUniqueIsbn(): string {
    let candidate = '';
    do {
      candidate = '';
      for (let i = 0; i < 13; i++) {
        candidate += Math.floor(Math.random() * 10);
      }
    } while (this.books.some((book) => String(book.isbn) === candidate));

    return candidate;
  }

  populateBookForm(book: any): void {
    this.bookForm.patchValue({
      title: book?.title ?? '',
      subtitle: book?.subtitle ?? '',
      isbn: book?.isbn ?? '',
      description: book?.description ?? '',
      authorId: book?.authorId ?? '',
      publisherId: book?.publisherId ?? '',
      categoryId: book?.categoryId ?? '',
      subCategoryId: book?.subCategoryId ?? '',
      language: book?.language ?? '',
      pages: book?.pages ?? '',
      edition: book?.edition ?? '',
      price: book?.price ?? '',
      discountPrice: book?.discountPrice ?? '',
      rating: book?.rating ?? '',
      reviewCount: book?.reviewCount ?? '',
      publicationDate: book?.publicationDate ?? '',
      thumbnailUrl: book?.thumbnailUrl ?? '',
      previewUrl: book?.previewUrl ?? '',
      originalUrl: book?.originalUrl ?? '',
      fileSize: book?.fileSize ?? '',
      tags: book?.tags ?? '',
      featured: !!book?.featured,
      bestSeller: !!book?.bestSeller,
      trending: !!book?.trending,
      newArrival: !!book?.newArrival
    });
    this.bookForm.markAsPristine();
    this.bookForm.markAsUntouched();
  }

  deleteBook(id: number): void {
    const confirmed = window.confirm('Are you sure you want to delete this book?');
    if (!confirmed) {
      return;
    }

    this.http.delete(`${environment.bookBaseUrl}/${id}`).subscribe({
      next: () => {
        this.loadBooks(this.selectedSort);
      },
      error: (err) => {
        console.error('Delete failed', err);
        this.apiError = 'Failed to delete book.';
      }
    });
  }

  getFieldError(fieldName: string): string {
    const control = this.bookForm.get(fieldName);
    if (!control || !control.touched || !control.errors) {
      return '';
    }

    if (control.errors['required']) {
      return `${this.getLabel(fieldName)} is required.`;
    }

    if (control.errors['minLength']) {
      return `${this.getLabel(fieldName)} is too short.`;
    }

    if (control.errors['min']) {
      return `${this.getLabel(fieldName)} must be greater than zero.`;
    }

    return '';
  }

  private getLabel(fieldName: string): string {
    const labels: Record<string, string> = {
      title: 'Title',
      isbn: 'ISBN',
      price: 'Price'
    };
    return labels[fieldName] || fieldName;
  }

  submitBookForm(): void {
    if (this.modalMode === 'view') {
      return;
    }

    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.apiError = '';
    this.successMessage = '';

    const payload = {
      ...this.bookForm.value,
      price: this.toNumber(this.bookForm.get('price')?.value),
      discountPrice: this.toNumber(this.bookForm.get('discountPrice')?.value),
      rating: this.toNumber(this.bookForm.get('rating')?.value),
      reviewCount: this.toNumber(this.bookForm.get('reviewCount')?.value),
      pages: this.toNumber(this.bookForm.get('pages')?.value),
      authorId: this.toNumber(this.bookForm.get('authorId')?.value),
      publisherId: this.toNumber(this.bookForm.get('publisherId')?.value),
      categoryId: this.toNumber(this.bookForm.get('categoryId')?.value),
      subCategoryId: this.toNumber(this.bookForm.get('subCategoryId')?.value)
    };

    const request$ = this.modalMode === 'edit' && this.selectedBookId
      ? this.http.put(`${environment.bookBaseUrl}/${this.selectedBookId}`, payload)
      : this.http.post(`${environment.bookBaseUrl}/create`, payload);

    request$.subscribe({
      next: (response: any) => {
        this.isSubmitting = false;
        this.successMessage = response?.message || (this.modalMode === 'edit' ? 'Book updated successfully' : 'Book created successfully');
        this.clearBookForm();
        this.loadBooks(this.selectedSort);
        setTimeout(() => {
          this.closeBookModal();
        }, 700);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.apiError = err?.error?.message || err?.message || 'Operation failed. Please try again.';
      }
    });
  }

  private toNumber(value: any): number | null {
    if (value === '' || value === null || value === undefined) {
      return null;
    }
    return Number(value);
  }

  get modalTitle(): string {
    if (this.modalMode === 'view') {
      return 'Book Details';
    }
    if (this.modalMode === 'edit') {
      return 'Edit Book';
    }
    return 'Add New Book';
  }

  get submitButtonLabel(): string {
    if (this.modalMode === 'view') {
      return 'View Only';
    }
    if (this.modalMode === 'edit') {
      return 'Update Book';
    }
    return 'Create Book';
  }

  get isReadOnlyMode(): boolean {
    return this.modalMode === 'view';
  }
}
