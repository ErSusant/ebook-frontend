import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Category } from '../models/category.model';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private api = inject(ApiService);

  getCategories(): Observable<Category[]> {
    return this.api.get<Category[]>('/category-service/categories');
  }
}
