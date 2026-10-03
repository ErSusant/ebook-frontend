# Frontend Workspace

This directory contains the Angular application scaffold for the E-Book Management Platform.

## Scaffold Summary

- Angular 19+ application with a standalone root component
- Feature modules for auth, dashboard, books, cart, wishlist, search, admin, notification, file upload, users, categories, orders, payments, and reviews
- Core auth service, guard, and HTTP interceptor
- Shared API service and domain models for `User`, `Book`, `Category`, `Order`, `Payment`, and `Review`
- Angular Material UI shell and responsive default styling

## Project Structure

- `frontend/package.json`
- `frontend/angular.json`
- `frontend/tsconfig*.json`
- `frontend/src/`
  - `main.ts`
  - `polyfills.ts`
  - `styles.css`
  - `environments/`
  - `app/`
    - `app.component.*`
    - `app-routing.module.ts`
    - `core/`
    - `shared/`
    - `features/`

## Run the frontend

1. Open a terminal in `frontend`
2. Run `npm install`
3. Run `npm start`

The app will start on the Angular dev server and proxy calls to the backend via `environment.apiBaseUrl`.

## Backend service mapping

- `user-service` → `/user-service/users`
- `category-service` → `/category-service/categories`
- `order-service` → `/order-service/orders`
- `payment-service` → `/payment-service/payments`
- `review-service` → `/review-service/reviews`

## Notes

- The frontend currently contains initial page shells and routing for the main backend services.
- New user, category, order, payment, and review feature modules are now wired to shared backend API services.
- Next work includes adding NgRx state management and implementing form validation and data persistence.
