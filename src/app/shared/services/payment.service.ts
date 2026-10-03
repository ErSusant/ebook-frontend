import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Payment } from '../models/payment.model';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private api = inject(ApiService);

  getPayments(): Observable<Payment[]> {
    return this.api.get<Payment[]>('/payment-service/payments');
  }
}
