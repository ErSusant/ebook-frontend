import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

interface PaymentStat {
  label: string;
  value: number | string;
  icon: string;
  color: string;
  note: string;
  accent: string;
}

interface PaymentRow {
  id: string;
  customerName: string;
  amount: number;
  method: string;
  status: 'Success' | 'Pending' | 'Failed';
  paymentDate: string;
  methodBadge: string;
  methodColor: string;
}

@Component({
  selector: 'app-payment',
  standalone: true,
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  imports: [CommonModule, MatCardModule]
})
export class PaymentComponent {
  stats: PaymentStat[] = [
    { label: 'Total Payments', value: '₹ 4,250', icon: '💰', color: '#dbeafe', accent: '#2563eb', note: '↑ 2 new this week' },
    { label: 'Successful Payments', value: 12, icon: '✅', color: '#dcfce7', accent: '#16a34a', note: '↑ 2 new this week' },
    { label: 'Pending Payments', value: 3, icon: '⏳', color: '#fef3c7', accent: '#d97706', note: '↑ 1 new this week' },
    { label: 'Failed Payments', value: 1, icon: '❌', color: '#fee2e2', accent: '#dc2626', note: 'No change' },
    { label: 'Total Revenue', value: '₹ 8,460', icon: '₹', color: '#d1fae5', accent: '#059669', note: '↑ 12% this week' },
    { label: 'Avg. Order Value', value: '₹ 708', icon: '💳', color: '#e0e7ff', accent: '#4f46e5', note: '↑ 5% this week' }
  ];

  payments: PaymentRow[] = [
    { id: '#ORD1006', customerName: 'Rahul Sharma', amount: 499, method: 'UPI', status: 'Success', paymentDate: '28 Sep 2025, 10:24 AM', methodBadge: 'UPI', methodColor: '#3b82f6' },
    { id: '#ORD1005', customerName: 'Priya Patel', amount: 699, method: 'Credit/Debit Card', status: 'Success', paymentDate: '26 Sep 2025, 04:12 PM', methodBadge: 'Card', methodColor: '#f59e0b' },
    { id: '#ORD1004', customerName: 'Amit Kumar', amount: 1198, method: 'UPI', status: 'Success', paymentDate: '24 Sep 2025, 11:45 AM', methodBadge: 'UPI', methodColor: '#3b82f6' },
    { id: '#ORD1003', customerName: 'Neha Singh', amount: 799, method: 'Net Banking', status: 'Pending', paymentDate: '21 Sep 2025, 02:18 PM', methodBadge: 'Bank', methodColor: '#a855f7' },
    { id: '#ORD1002', customerName: 'Sandeep Verma', amount: 799, method: 'UPI', status: 'Success', paymentDate: '19 Sep 2025, 09:36 AM', methodBadge: 'UPI', methodColor: '#3b82f6' },
    { id: '#ORD1001', customerName: 'Pooja Mehta', amount: 499, method: 'Wallet', status: 'Success', paymentDate: '16 Sep 2025, 06:21 PM', methodBadge: 'Wallet', methodColor: '#10b981' },
    { id: '#ORD1000', customerName: 'Vikas Yadav', amount: 1099, method: 'Credit/Debit Card', status: 'Failed', paymentDate: '14 Sep 2025, 01:17 PM', methodBadge: 'Card', methodColor: '#f59e0b' },
    { id: '#ORD0999', customerName: 'Sneha Rani', amount: 599, method: 'UPI', status: 'Success', paymentDate: '12 Sep 2025, 10:03 AM', methodBadge: 'UPI', methodColor: '#3b82f6' }
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'Success': return 'success';
      case 'Pending': return 'pending';
      case 'Failed': return 'failed';
      default: return 'default';
    }
  }

  paymentMethods = [
    { label: 'UPI', value: 7, percent: '7 (58%)', color: '#3b82f6' },
    { label: 'Credit/Debit Card', value: 3, percent: '3 (25%)', color: '#f59e0b' },
    { label: 'Net Banking', value: 1, percent: '1 (8%)', color: '#14b8a6' },
    { label: 'Wallet', value: 1, percent: '1 (8%)', color: '#a78bfa' }
  ];
}
