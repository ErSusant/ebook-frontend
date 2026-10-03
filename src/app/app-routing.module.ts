import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'books',
    loadChildren: () => import('./features/books/books.module').then((m) => m.BooksModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./features/cart/cart.module').then((m) => m.CartModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./features/wishlist/wishlist.module').then((m) => m.WishlistModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'search',
    loadChildren: () => import('./features/search/search.module').then((m) => m.SearchModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'notifications',
    loadChildren: () => import('./features/notification/notification.module').then((m) => m.NotificationModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'file-upload',
    loadChildren: () => import('./features/file-upload/file-upload.module').then((m) => m.FileUploadModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./features/user/user.module').then((m) => m.UserModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'categories',
    loadChildren: () => import('./features/category/category.module').then((m) => m.CategoryModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'orders',
    loadChildren: () => import('./features/order/order.module').then((m) => m.OrderModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'payments',
    loadChildren: () => import('./features/payment/payment.module').then((m) => m.PaymentModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'reviews',
    loadChildren: () => import('./features/review/review.module').then((m) => m.ReviewModule),
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];
