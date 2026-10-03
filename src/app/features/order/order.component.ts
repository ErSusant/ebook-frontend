import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

interface StatItem {
  label: string;
  value: number | string;
  icon: string;
  color: string;
  note: string;
  accent: string;
}

interface RecentOrder {
  id: string;
  customer: string;
  book: string;
  itemCount: number;
  amount: number;
  status: 'Delivered' | 'Shipped' | 'Processing' | 'Cancelled';
  orderDate: string;
  bookColor: string;
  bookLabel: string;
}

interface StatusSummary {
  label: string;
  value: string;
  color: string;
}

interface LatestOrder {
  id: string;
  customer: string;
  amount: number;
  status: 'Delivered' | 'Shipped' | 'Processing';
  thumbBg: string;
  thumbText: string;
  timeAgo: string;
}

@Component({
  selector: 'app-order',
  standalone: true,
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  imports: [CommonModule, MatCardModule]
})
export class OrderComponent {
  stats: StatItem[] = [
    { label: 'Total Orders', value: 12, icon: '🛒', color: '#ebe7ff', accent: '#6d5efc', note: '↑ 3 new this week' },
    { label: 'Pending Orders', value: 3, icon: '📦', color: '#f3e8ff', accent: '#8b5cf6', note: 'No change' },
    { label: 'Shipped Orders', value: 7, icon: '🚚', color: '#dcfce7', accent: '#22c55e', note: '↑ 2 new this week' },
    { label: 'Delivered Orders', value: 10, icon: '✅', color: '#dcfce7', accent: '#16a34a', note: '↑ 4 new this week' },
    { label: 'Cancelled Orders', value: 1, icon: '❌', color: '#fee2e2', accent: '#ef4444', note: 'No change' },
    { label: 'Total Revenue', value: '₹ 8,460', icon: '₹', color: '#d1fae5', accent: '#10b981', note: '↑ 12% this week' }
  ];

  recentOrders: RecentOrder[] = [
    { id: '#ORD1006', customer: 'Ranul Sharma', book: 'Clean Code', itemCount: 1, amount: 499, status: 'Delivered', orderDate: '28 Sep 2025', bookColor: '#121b2a', bookLabel: 'C' },
    { id: '#ORD1005', customer: 'Priya Patel', book: 'Design Patterns', itemCount: 1, amount: 699, status: 'Shipped', orderDate: '26 Sep 2025', bookColor: '#f3d5a5', bookLabel: 'D' },
    { id: '#ORD1004', customer: 'Amit Kumar', book: 'Java Complete Reference', itemCount: 2, amount: 1198, status: 'Processing', orderDate: '24 Sep 2025', bookColor: '#ffc857', bookLabel: 'J' },
    { id: '#ORD1003', customer: 'Neha Singh', book: 'Spring Boot in Action', itemCount: 1, amount: 799, status: 'Delivered', orderDate: '21 Sep 2025', bookColor: '#34d399', bookLabel: 'S' },
    { id: '#ORD1002', customer: 'Sandeep Verma', book: 'Microservices', itemCount: 1, amount: 799, status: 'Shipped', orderDate: '19 Sep 2025', bookColor: '#c084fc', bookLabel: 'M' },
    { id: '#ORD1001', customer: 'Pooja Mehta', book: 'Clean Code', itemCount: 1, amount: 499, status: 'Cancelled', orderDate: '16 Sep 2025', bookColor: '#7dd3fc', bookLabel: 'C' }
  ];

  statusSummary: StatusSummary[] = [
    { label: 'Delivered', value: '10 (83%)', color: '#2ec4b6' },
    { label: 'Shipped', value: '7 (58%)', color: '#4dabf7' },
    { label: 'Processing', value: '3 (25%)', color: '#f4b942' },
    { label: 'Cancelled', value: '1 (8%)', color: '#ff5c8a' }
  ];

  latestOrders: LatestOrder[] = [
    { id: '#ORD1006', customer: 'Rahul Sharma', amount: 499, status: 'Delivered', thumbBg: '#1f2937', thumbText: 'C', timeAgo: '2h ago' },
    { id: '#ORD1005', customer: 'Priya Patel', amount: 699, status: 'Shipped', thumbBg: '#f59e0b', thumbText: 'P', timeAgo: '3h ago' },
    { id: '#ORD1004', customer: 'Amit Kumar', amount: 1198, status: 'Processing', thumbBg: '#2563eb', thumbText: 'J', timeAgo: '5h ago' },
    { id: '#ORD1003', customer: 'Neha Singh', amount: 799, status: 'Delivered', thumbBg: '#10b981', thumbText: 'N', timeAgo: '7h ago' },
    { id: '#ORD1002', customer: 'Sandeep Verma', amount: 799, status: 'Shipped', thumbBg: '#a78bfa', thumbText: 'S', timeAgo: '9h ago' }
  ];

  getStatusClass(status: string): string {
    const normalized = status.toLowerCase();
    if (normalized.includes('delivered')) return 'delivered';
    if (normalized.includes('shipped')) return 'shipped';
    if (normalized.includes('processing')) return 'processing';
    if (normalized.includes('cancelled')) return 'cancelled';
    return 'default';
  }
}
