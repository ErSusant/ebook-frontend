import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { environment } from '../../../environments/environment';

interface StatItem {
  label: string;
  value: number | string;
  icon: string;
  color: string;
  note: string;
  accent: string;
}

interface ApiOrderItem {
  id?: number;
  bookId?: number;
  quantity?: number;
  unitPrice?: number;
  totalPrice?: number;
  bookTitle?: string;
  title?: string;
  name?: string;
}

interface ApiOrder {
  id?: number;
  orderNumber?: string;
  userId?: number;
  userName?: string;
  customerName?: string;
  name?: string;
  status?: string;
  totalAmount?: number;
  paymentStatus?: string;
  shippingAddress?: string;
  billingAddress?: string;
  items?: ApiOrderItem[];
  createdAt?: string;
  orderDate?: string;
  orderedAt?: string;
}

interface ApiOrdersResponse {
  success: boolean;
  message: string;
  data: ApiOrder[];
}

interface RecentOrder {
  apiId?: number;
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
  status: 'Delivered' | 'Shipped' | 'Processing' | 'Cancelled';
  thumbBg: string;
  thumbText: string;
  timeAgo: string;
}

@Component({
  selector: 'app-order',
  standalone: true,
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  imports: [CommonModule, FormsModule, MatCardModule]
})
export class OrderComponent implements OnInit {
  private http = inject(HttpClient);

  startDate = '2026-10-01';
  endDate = '2026-10-03';

  stats: StatItem[] = [
    { label: 'Total Orders', value: 0, icon: '🛒', color: '#ebe7ff', accent: '#6d5efc', note: 'Loading...' },
    { label: 'Pending Orders', value: 0, icon: '📦', color: '#f3e8ff', accent: '#8b5cf6', note: 'No change' },
    { label: 'Shipped Orders', value: 0, icon: '🚚', color: '#dcfce7', accent: '#22c55e', note: 'No orders yet' },
    { label: 'Delivered Orders', value: 0, icon: '✅', color: '#dcfce7', accent: '#16a34a', note: 'No orders yet' },
    { label: 'Cancelled Orders', value: 0, icon: '❌', color: '#fee2e2', accent: '#ef4444', note: 'No change' },
    { label: 'Total Revenue', value: '₹ 0', icon: '₹', color: '#d1fae5', accent: '#10b981', note: 'Waiting for data' }
  ];

  recentOrders: RecentOrder[] = [];
  statusSummary: StatusSummary[] = [];
  latestOrders: LatestOrder[] = [];

  ngOnInit(): void {
    this.loadOrders();
  }

  onDateRangeChange(): void {
    if (!this.startDate || !this.endDate) {
      return;
    }

    if (new Date(this.startDate) > new Date(this.endDate)) {
      [this.startDate, this.endDate] = [this.endDate, this.startDate];
    }

    this.loadOrders();
  }

  loadOrders(): void {
    const url = `${environment.ordersBaseUrl}/users/1/between?startDate=${this.startDate}&endDate=${this.endDate}`;

    this.http.get<ApiOrdersResponse>(url).subscribe({
      next: (response) => {
        const orders = Array.isArray(response?.data) ? response.data : [];
        this.recentOrders = orders.map((order, index) => {
          const items = Array.isArray(order.items) ? order.items : [];
          const firstItem = items[0];
          const totalItems = items.reduce((sum, item) => sum + (item.quantity ?? 0), 0) || 1;
          const bookName = this.getBookDisplayName(order, firstItem);
          const normalizedStatus = this.normalizeStatus(order.status ?? 'PROCESSING');

          return {
            apiId: order.id,
            id: order.orderNumber ?? `#ORD${order.id ?? index + 1}`,
            customer: this.getCustomerDisplayName(order),
            book: bookName,
            itemCount: totalItems,
            amount: Number(order.totalAmount ?? 0),
            status: normalizedStatus,
            orderDate: this.getOrderDate(order),
            bookColor: this.getColor(index),
            bookLabel: bookName.charAt(0).toUpperCase() || 'B'
          };
        });

        this.updateSummary();
      },
      error: (error) => {
        console.error('Failed to fetch orders', error);
        this.recentOrders = [];
        this.statusSummary = [];
        this.latestOrders = [];
      }
    });
  }

  private normalizeStatus(status: string): 'Delivered' | 'Shipped' | 'Processing' | 'Cancelled' {
    const value = (status ?? '').toString().toUpperCase();

    if (value.includes('DELIVERED')) return 'Delivered';
    if (value.includes('SHIPPED')) return 'Shipped';
    if (value.includes('PROCESSING')) return 'Processing';
    if (value.includes('CANCELLED')) return 'Cancelled';
    return 'Processing';
  }

  private getCustomerDisplayName(order: ApiOrder): string {
    return order.userName || order.customerName || order.name || `User #${order.userId ?? order.id ?? 'Unknown'}`;
  }

  private getBookDisplayName(order: ApiOrder, item?: ApiOrderItem): string {
    if (item) {
      const title = item.bookTitle || item.title || item.name;
      if (title) return title;
      if (item.bookId) return `Book #${item.bookId}`;
    }

    return order.orderNumber ? `Order ${order.orderNumber}` : `Order #${order.id ?? 'Unknown'}`;
  }

  private getOrderDate(order: ApiOrder): string {
    const value = order.createdAt || order.orderDate || order.orderedAt;
    if (!value) return this.formatDate(new Date());

    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
      return this.formatDate(parsed);
    }

    return this.formatDate(new Date());
  }

  formatHeaderDate(dateString: string): string {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) {
      return dateString;
    }

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  private formatDate(date: Date): string {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }

  private formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(amount);
  }

  private getColor(index: number): string {
    const palette = ['#121b2a', '#f3d5a5', '#ffc857', '#34d399', '#c084fc', '#7dd3fc', '#a78bfa'];
    return palette[index % palette.length];
  }

  private updateSummary(): void {
    const total = this.recentOrders.length;
    const delivered = this.recentOrders.filter((order) => order.status === 'Delivered').length;
    const shipped = this.recentOrders.filter((order) => order.status === 'Shipped').length;
    const processing = this.recentOrders.filter((order) => order.status === 'Processing').length;
    const cancelled = this.recentOrders.filter((order) => order.status === 'Cancelled').length;
    const revenue = this.recentOrders.reduce((sum, order) => sum + order.amount, 0);

    this.stats = [
      { label: 'Total Orders', value: total, icon: '🛒', color: '#ebe7ff', accent: '#6d5efc', note: total ? `Loaded ${total} order${total > 1 ? 's' : ''}` : 'No orders found' },
      { label: 'Pending Orders', value: processing, icon: '📦', color: '#f3e8ff', accent: '#8b5cf6', note: processing ? `${processing} awaiting dispatch` : 'No pending orders' },
      { label: 'Shipped Orders', value: shipped, icon: '🚚', color: '#dcfce7', accent: '#22c55e', note: shipped ? `${shipped} in transit` : 'No shipments yet' },
      { label: 'Delivered Orders', value: delivered, icon: '✅', color: '#dcfce7', accent: '#16a34a', note: delivered ? `${delivered} completed` : 'No deliveries yet' },
      { label: 'Cancelled Orders', value: cancelled, icon: '❌', color: '#fee2e2', accent: '#ef4444', note: cancelled ? `${cancelled} cancelled` : 'No cancellations' },
      { label: 'Total Revenue', value: `₹ ${this.formatCurrency(revenue)}`, icon: '₹', color: '#d1fae5', accent: '#10b981', note: total ? 'Updated from API' : 'Waiting for data' }
    ];

    this.statusSummary = [
      { label: 'Delivered', value: `${delivered} (${total ? Math.round((delivered / total) * 100) : 0}%)`, color: '#2ec4b6' },
      { label: 'Shipped', value: `${shipped} (${total ? Math.round((shipped / total) * 100) : 0}%)`, color: '#4dabf7' },
      { label: 'Processing', value: `${processing} (${total ? Math.round((processing / total) * 100) : 0}%)`, color: '#f4b942' },
      { label: 'Cancelled', value: `${cancelled} (${total ? Math.round((cancelled / total) * 100) : 0}%)`, color: '#ff5c8a' }
    ];

    this.latestOrders = this.recentOrders.slice(0, 5).map((order, index) => ({
      id: order.id,
      customer: order.customer,
      amount: order.amount,
      status: order.status,
      thumbBg: this.getColor(index + 1),
      thumbText: order.bookLabel,
      timeAgo: 'just now'
    }));
  }

  viewOrder(orderId?: number): void {
    if (!orderId) {
      return;
    }

    const url = `${environment.ordersBaseUrl}/${orderId}`;
    this.http.get<ApiOrdersResponse>(url).subscribe({
      next: (response) => {
        const order = response?.data ?? response;
        console.log('Order details:', order);
        alert(`Order details loaded for ID ${orderId}`);
      },
      error: (error) => {
        console.error('Failed to fetch order details', error);
        alert('Unable to load order details.');
      }
    });
  }

  getStatusClass(status: string): string {
    const normalized = status.toLowerCase();
    if (normalized.includes('delivered')) return 'delivered';
    if (normalized.includes('shipped')) return 'shipped';
    if (normalized.includes('processing')) return 'processing';
    if (normalized.includes('cancelled')) return 'cancelled';
    return 'default';
  }
}
