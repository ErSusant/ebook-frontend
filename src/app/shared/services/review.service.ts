import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Review } from '../models/review.model';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private api = inject(ApiService);

  getReviews(): Observable<Review[]> {
    return this.api.get<Review[]>('/review-service/reviews');
  }
}
