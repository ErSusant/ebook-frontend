import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Order } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private api = inject(ApiService);

  getOrders(): Observable<Order[]> {
    return this.api.get<Order[]>('/order-service/orders');
  }
}
