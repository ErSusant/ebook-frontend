"use strict";
(self["webpackChunkebook_management"] = self["webpackChunkebook_management"] || []).push([[125],{

/***/ 9245:
/*!***********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);





function DashboardComponent_mat_card_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 20)(1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.note);
  }
}
function DashboardComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td")(8, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.book);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", order_r2.status.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.date);
  }
}
function DashboardComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 31)(9, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const book_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", book_r3.accent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r3.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r3.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2B50 ", book_r3.rating, "");
  }
}
function DashboardComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34)(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36)(4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r4.tone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.time);
  }
}
let DashboardComponent = /*#__PURE__*/(() => {
  class DashboardComponent {
    constructor() {
      this.username = localStorage.getItem('username') || 'Susanta';
      this.today = 'Monday, 29 Sep 2025';
      this.stats = [{
        label: 'Total Books',
        value: 24,
        note: '2 new this week',
        icon: '📚',
        color: '#e0f2fe'
      }, {
        label: 'Categories',
        value: 8,
        note: 'No change',
        icon: '🗂️',
        color: '#ede9fe'
      }, {
        label: 'Orders',
        value: 12,
        note: '3 new this week',
        icon: '🛒',
        color: '#dcfce7'
      }, {
        label: 'Wishlist',
        value: 6,
        note: 'No change',
        icon: '💗',
        color: '#fce7f3'
      }, {
        label: 'Cart Items',
        value: 3,
        note: 'No change',
        icon: '🛍️',
        color: '#fef3c7'
      }, {
        label: 'Payments',
        value: '₹ 4,250',
        note: '2 new this week',
        icon: '💳',
        color: '#d1fae5'
      }];
      this.recentOrders = [{
        id: '#ORD1006',
        book: 'Clean Code',
        amount: '₹ 499',
        status: 'Delivered',
        date: '28 Sep 2025'
      }, {
        id: '#ORD1005',
        book: 'Design Patterns',
        amount: '₹ 699',
        status: 'Shipped',
        date: '26 Sep 2025'
      }, {
        id: '#ORD1004',
        book: 'Java Complete...',
        amount: '₹ 599',
        status: 'Processing',
        date: '24 Sep 2025'
      }, {
        id: '#ORD1003',
        book: 'Microservices',
        amount: '₹ 799',
        status: 'Delivered',
        date: '21 Sep 2025'
      }, {
        id: '#ORD1002',
        book: 'Spring Boot',
        amount: '₹ 499',
        status: 'Shipped',
        date: '19 Sep 2025'
      }];
      this.recommendedBooks = [{
        title: 'Clean Code',
        author: 'Robert C. Martin',
        price: '₹ 499',
        rating: '4.7 (1.2k)',
        accent: '#0b1e2d'
      }, {
        title: 'Design Patterns',
        author: 'Erich Gamma',
        price: '₹ 699',
        rating: '4.5 (856)',
        accent: '#1d4ed8'
      }, {
        title: 'Java Complete Reference',
        author: 'Herbert Schildt',
        price: '₹ 599',
        rating: '4.6 (2.3k)',
        accent: '#ef4444'
      }, {
        title: 'Spring Boot in Action',
        author: 'Craig Walls',
        price: '₹ 799',
        rating: '4.4 (1.1k)',
        accent: '#16a34a'
      }];
      this.notifications = [{
        title: 'Order #ORD1006 has been delivered',
        time: '2h ago',
        icon: '📦',
        tone: 'blue'
      }, {
        title: 'Payment received ₹ 499 for Order #ORD1006',
        time: '3h ago',
        icon: '💳',
        tone: 'green'
      }, {
        title: 'New book added Spring Security in Action',
        time: '5h ago',
        icon: '📘',
        tone: 'purple'
      }, {
        title: 'New review received 5 stars for Clean Code',
        time: '7h ago',
        icon: '⭐',
        tone: 'orange'
      }, {
        title: 'Book added to wishlist Design Patterns',
        time: '9h ago',
        icon: '💖',
        tone: 'pink'
      }];
    }
    static {
      this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DashboardComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 63,
        vars: 6,
        consts: [[1, "dashboard-shell"], [1, "welcome-bar"], [1, "welcome-user"], [1, "avatar"], [1, "date-box"], [1, "calendar"], [1, "date-text"], [1, "status-text"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "bottom-grid"], [1, "panel-card"], [1, "panel-header"], ["href", "javascript:void(0)"], [4, "ngFor", "ngForOf"], [1, "panel-footer"], [1, "book-grid"], ["class", "book-item", 4, "ngFor", "ngForOf"], [1, "notification-list"], ["class", "notification-item", 4, "ngFor", "ngForOf"], [1, "stat-card"], [1, "stat-header"], [1, "stat-icon"], [1, "stat-label"], [1, "stat-value"], [1, "stat-note"], [1, "badge", 3, "ngClass"], [1, "book-item"], [1, "book-cover"], [1, "book-name"], [1, "book-author"], [1, "book-row"], [1, "price"], [1, "rating"], [1, "notification-item"], [1, "notify-icon", 3, "ngClass"], [1, "notify-body"], [1, "notify-text"], [1, "notify-time"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "S");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Here's what happening with your e-book store today.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\uD83D\uDCC5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div")(14, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Happy Reading!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DashboardComponent_mat_card_19_Template, 10, 6, "mat-card", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 10)(21, "mat-card", 11)(22, "div", 12)(23, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Recent Orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "View All \u2192");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table")(28, "thead")(29, "tr")(30, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Order ID");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Book");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DashboardComponent_tr_41_Template, 12, 6, "tr", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15)(43, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Total Orders: 12");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "View All Orders \u2192");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card", 11)(48, "div", 12)(49, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Recommended Books");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "View All \u2192");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, DashboardComponent_div_54_Template, 13, 7, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card", 11)(56, "div", 12)(57, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Notifications & Activity");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "View All \u2192");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, DashboardComponent_div_62_Template, 8, 4, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome back, ", ctx.username, "!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.today);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stats);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recentOrders);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recommendedBooks);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 24px 28px 32px;\n  background: #eef4f8;\n  min-height: calc(100vh - 70px);\n}\n\n.dashboard-shell[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n\n.welcome-bar[_ngcontent-%COMP%] {\n  background: rgba(110, 202, 236, 0.18);\n  border: 1px solid rgba(17, 84, 120, 0.08);\n  border-radius: 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 22px 26px;\n  margin-bottom: 24px;\n  box-shadow: 0 8px 24px rgba(15, 76, 104, 0.06);\n}\n\n.welcome-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #3b82f6, #60a5fa);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1.4rem;\n}\n\n.welcome-user[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n\n.welcome-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #4b5563;\n  font-size: 1.02rem;\n}\n\n.date-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #374151;\n  font-weight: 600;\n  padding: 10px 14px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.34);\n}\n\n.calendar[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.date-text[_ngcontent-%COMP%] {\n  font-size: 0.96rem;\n}\n\n.status-text[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #4b5563;\n  margin-top: 3px;\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(160px, 1fr));\n  gap: 18px;\n  margin-bottom: 24px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(148, 163, 184, 0.24);\n  border-radius: 16px;\n  padding: 18px 18px 16px;\n  box-shadow: 0 6px 18px rgba(15, 76, 104, 0.04);\n}\n\n.stat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.35rem;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: #374151;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n}\n\n.stat-note[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #6b7280;\n}\n\n.bottom-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.15fr 1.2fr 1fr;\n  gap: 22px;\n}\n\n.panel-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(148, 163, 184, 0.24);\n  border-radius: 18px;\n  padding: 18px 18px 12px;\n  box-shadow: 0 6px 18px rgba(15, 76, 104, 0.04);\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.08rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n\n.panel-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.panel-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1860cf;\n  font-size: 0.82rem;\n  text-decoration: none;\n  font-weight: 600;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 12px;\n}\n\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 8px;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.25);\n  font-size: 0.9rem;\n  color: #374151;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #4b5563;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.72rem;\n  padding: 4px 8px;\n  border-radius: 999px;\n  font-weight: 700;\n  border: 1px solid transparent;\n}\n\n.badge.delivered[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #15803d;\n  border-color: rgba(34, 197, 94, 0.25);\n}\n\n.badge.shipped[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #1d4ed8;\n  border-color: rgba(59, 130, 246, 0.25);\n}\n\n.badge.processing[_ngcontent-%COMP%] {\n  background: rgba(251, 191, 36, 0.14);\n  color: #b45309;\n  border-color: rgba(245, 158, 11, 0.35);\n}\n\n.panel-footer[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding-top: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid rgba(148, 163, 184, 0.2);\n  font-size: 0.85rem;\n  color: #374151;\n}\n\n.book-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(140px, 1fr));\n  gap: 14px;\n  margin-top: 8px;\n}\n\n.book-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.book-cover[_ngcontent-%COMP%] {\n  height: 150px;\n  border-radius: 12px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  padding: 10px;\n  color: white;\n  font-weight: 700;\n  text-align: center;\n  box-shadow: inset 0 -30px 30px rgba(0, 0, 0, 0.12);\n}\n\n.book-name[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #111827;\n}\n\n.book-author[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n\n.book-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.75rem;\n  color: #374151;\n}\n\n.price[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.rating[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n\n.notification-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n.notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.18);\n}\n\n.notify-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  background: #dbeafe;\n}\n\n.notify-icon.blue[_ngcontent-%COMP%] { background: #dbeafe; }\n.notify-icon.green[_ngcontent-%COMP%] { background: #dcfce7; }\n.notify-icon.purple[_ngcontent-%COMP%] { background: #f3e8ff; }\n.notify-icon.orange[_ngcontent-%COMP%] { background: #fef3c7; }\n.notify-icon.pink[_ngcontent-%COMP%] { background: #fce7f3; }\n\n.notify-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.notify-text[_ngcontent-%COMP%] {\n  color: #1f2937;\n  font-size: 0.9rem;\n  line-height: 1.4;\n}\n\n.notify-time[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.78rem;\n  margin-top: 4px;\n}\n\n@media (max-width: 1100px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(150px, 1fr));\n  }\n\n  .bottom-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 700px) {\n  [_nghost-%COMP%] {\n    padding: 16px;\n  }\n\n  .welcome-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n\n  .welcome-user[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(150px, 1fr));\n  }\n\n  .book-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"]
      });
    }
  }
  return DashboardComponent;
})();

/***/ }),

/***/ 2125:
/*!********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ 6195);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 9245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);







const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}];
let DashboardModule = /*#__PURE__*/(() => {
  class DashboardModule {
    static {
      this.ɵfac = function DashboardModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DashboardModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: DashboardModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__.MatGridListModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent]
      });
    }
  }
  return DashboardModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__.MatGridListModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent]
  });
})();

/***/ }),

/***/ 6195:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/grid-list.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatGridAvatarCssMatStyler: () => (/* binding */ MatGridAvatarCssMatStyler),
/* harmony export */   MatGridList: () => (/* binding */ MatGridList),
/* harmony export */   MatGridListModule: () => (/* binding */ MatGridListModule),
/* harmony export */   MatGridTile: () => (/* binding */ MatGridTile),
/* harmony export */   MatGridTileFooterCssMatStyler: () => (/* binding */ MatGridTileFooterCssMatStyler),
/* harmony export */   MatGridTileHeaderCssMatStyler: () => (/* binding */ MatGridTileHeaderCssMatStyler),
/* harmony export */   MatGridTileText: () => (/* binding */ MatGridTileText),
/* harmony export */   MatLine: () => (/* reexport safe */ _line_Bm3zUbBF_mjs__WEBPACK_IMPORTED_MODULE_3__.M),
/* harmony export */   "ɵTileCoordinator": () => (/* reexport safe */ _public_api_BoO5eSq_mjs__WEBPACK_IMPORTED_MODULE_0__["ɵ"])
/* harmony export */ });
/* harmony import */ var _public_api_BoO5eSq_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api-BoO5eSq-.mjs */ 5627);
/* harmony import */ var _line_Bm3zUbBF_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-Bm3zUbBF.mjs */ 2432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 9355);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 1845);
/* harmony import */ var _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common-module-WayjW0Pb.mjs */ 777);

const _c0 = ["*"];
const _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
const _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
const _c3 = ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n";










/**
 * Injection token used to provide a grid list to a tile and to avoid circular imports.
 * @docs-private
 */
const MAT_GRID_LIST = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MAT_GRID_LIST');
let MatGridTile = /*#__PURE__*/(() => {
  class MatGridTile {
    _element = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    _gridList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MAT_GRID_LIST, {
      optional: true
    });
    _rowspan = 1;
    _colspan = 1;
    constructor() {}
    /** Amount of rows that the grid tile takes up. */
    get rowspan() {
      return this._rowspan;
    }
    set rowspan(value) {
      this._rowspan = Math.round((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.c)(value));
    }
    /** Amount of columns that the grid tile takes up. */
    get colspan() {
      return this._colspan;
    }
    set colspan(value) {
      this._colspan = Math.round((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.c)(value));
    }
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     */
    _setStyle(property, value) {
      this._element.nativeElement.style[property] = value;
    }
    static ɵfac = function MatGridTile_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatGridTile)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatGridTile,
      selectors: [["mat-grid-tile"]],
      hostAttrs: [1, "mat-grid-tile"],
      hostVars: 2,
      hostBindings: function MatGridTile_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
        }
      },
      inputs: {
        rowspan: "rowspan",
        colspan: "colspan"
      },
      exportAs: ["matGridTile"],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "mat-grid-tile-content"]],
      template: function MatGridTile_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatGridTile;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatGridTileText = /*#__PURE__*/(() => {
  class MatGridTileText {
    _element = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    _lines;
    constructor() {}
    ngAfterContentInit() {
      (0,_line_Bm3zUbBF_mjs__WEBPACK_IMPORTED_MODULE_3__.s)(this._lines, this._element);
    }
    static ɵfac = function MatGridTileText_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatGridTileText)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatGridTileText,
      selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]],
      contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _line_Bm3zUbBF_mjs__WEBPACK_IMPORTED_MODULE_3__.M, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._lines = _t);
        }
      },
      ngContentSelectors: _c2,
      decls: 4,
      vars: 0,
      consts: [[1, "mat-grid-list-text"]],
      template: function MatGridTileText_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3, 2);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatGridTileText;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MatGridAvatarCssMatStyler = /*#__PURE__*/(() => {
  class MatGridAvatarCssMatStyler {
    static ɵfac = function MatGridAvatarCssMatStyler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatGridAvatarCssMatStyler)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatGridAvatarCssMatStyler,
      selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]],
      hostAttrs: [1, "mat-grid-avatar"]
    });
  }
  return MatGridAvatarCssMatStyler;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MatGridTileHeaderCssMatStyler = /*#__PURE__*/(() => {
  class MatGridTileHeaderCssMatStyler {
    static ɵfac = function MatGridTileHeaderCssMatStyler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatGridTileHeaderCssMatStyler)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatGridTileHeaderCssMatStyler,
      selectors: [["mat-grid-tile-header"]],
      hostAttrs: [1, "mat-grid-tile-header"]
    });
  }
  return MatGridTileHeaderCssMatStyler;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MatGridTileFooterCssMatStyler = /*#__PURE__*/(() => {
  class MatGridTileFooterCssMatStyler {
    static ɵfac = function MatGridTileFooterCssMatStyler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatGridTileFooterCssMatStyler)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatGridTileFooterCssMatStyler,
      selectors: [["mat-grid-tile-footer"]],
      hostAttrs: [1, "mat-grid-tile-footer"]
    });
  }
  return MatGridTileFooterCssMatStyler;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * RegExp that can be used to check whether a value will
 * be allowed inside a CSS `calc()` expression.
 */
const cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
/**
 * Sets the style properties for an individual tile, given the position calculated by the
 * Tile Coordinator.
 * @docs-private
 */
class TileStyler {
  _gutterSize;
  _rows = 0;
  _rowspan = 0;
  _cols;
  _direction;
  /**
   * Adds grid-list layout info once it is available. Cannot be processed in the constructor
   * because these properties haven't been calculated by that point.
   *
   * @param gutterSize Size of the grid's gutter.
   * @param tracker Instance of the TileCoordinator.
   * @param cols Amount of columns in the grid.
   * @param direction Layout direction of the grid.
   */
  init(gutterSize, tracker, cols, direction) {
    this._gutterSize = normalizeUnits(gutterSize);
    this._rows = tracker.rowCount;
    this._rowspan = tracker.rowspan;
    this._cols = cols;
    this._direction = direction;
  }
  /**
   * Computes the amount of space a single 1x1 tile would take up (width or height).
   * Used as a basis for other calculations.
   * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
   * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
   * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
   */
  getBaseTileSize(sizePercent, gutterFraction) {
    // Take the base size percent (as would be if evenly dividing the size between cells),
    // and then subtracting the size of one gutter. However, since there are no gutters on the
    // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
    // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
    // edge evenly among the cells).
    return `(${sizePercent}% - (${this._gutterSize} * ${gutterFraction}))`;
  }
  /**
   * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
   * @param offset Number of tiles that have already been rendered in the row/column.
   * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
   * @return Position of the tile as a CSS calc() expression.
   */
  getTilePosition(baseSize, offset) {
    // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
    // row/column (offset).
    return offset === 0 ? '0' : calc(`(${baseSize} + ${this._gutterSize}) * ${offset}`);
  }
  /**
   * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
   * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
   * @param span The tile's rowspan or colspan.
   * @return Size of the tile as a CSS calc() expression.
   */
  getTileSize(baseSize, span) {
    return `(${baseSize} * ${span}) + (${span - 1} * ${this._gutterSize})`;
  }
  /**
   * Sets the style properties to be applied to a tile for the given row and column index.
   * @param tile Tile to which to apply the styling.
   * @param rowIndex Index of the tile's row.
   * @param colIndex Index of the tile's column.
   */
  setStyle(tile, rowIndex, colIndex) {
    // Percent of the available horizontal space that one column takes up.
    let percentWidthPerTile = 100 / this._cols;
    // Fraction of the vertical gutter size that each column takes up.
    // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.
    let gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
    this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
    this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
  }
  /** Sets the horizontal placement of the tile in the list. */
  setColStyles(tile, colIndex, percentWidth, gutterWidth) {
    // Base horizontal size of a column.
    let baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
    // The width and horizontal position of each tile is always calculated the same way, but the
    // height and vertical position depends on the rowMode.
    let side = this._direction === 'rtl' ? 'right' : 'left';
    tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
    tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
  }
  /**
   * Calculates the total size taken up by gutters across one axis of a list.
   */
  getGutterSpan() {
    return `${this._gutterSize} * (${this._rowspan} - 1)`;
  }
  /**
   * Calculates the total size taken up by tiles across one axis of a list.
   * @param tileHeight Height of the tile.
   */
  getTileSpan(tileHeight) {
    return `${this._rowspan} * ${this.getTileSize(tileHeight, 1)}`;
  }
  /**
   * Calculates the computed height and returns the correct style property to set.
   * This method can be implemented by each type of TileStyler.
   * @docs-private
   */
  getComputedHeight() {
    return null;
  }
}
/**
 * This type of styler is instantiated when the user passes in a fixed row height.
 * Example `<mat-grid-list cols="3" rowHeight="100px">`
 * @docs-private
 */
class FixedTileStyler extends TileStyler {
  fixedRowHeight;
  constructor(fixedRowHeight) {
    super();
    this.fixedRowHeight = fixedRowHeight;
  }
  init(gutterSize, tracker, cols, direction) {
    super.init(gutterSize, tracker, cols, direction);
    this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
    if (!cssCalcAllowedValue.test(this.fixedRowHeight) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`);
    }
  }
  setRowStyles(tile, rowIndex) {
    tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));
    tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
  }
  getComputedHeight() {
    return ['height', calc(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)];
  }
  reset(list) {
    list._setListStyle(['height', null]);
    if (list._tiles) {
      list._tiles.forEach(tile => {
        tile._setStyle('top', null);
        tile._setStyle('height', null);
      });
    }
  }
}
/**
 * This type of styler is instantiated when the user passes in a width:height ratio
 * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
 * @docs-private
 */
class RatioTileStyler extends TileStyler {
  /** Ratio width:height given by user to determine row height. */
  rowHeightRatio;
  baseTileHeight;
  constructor(value) {
    super();
    this._parseRatio(value);
  }
  setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
    let percentHeightPerTile = percentWidth / this.rowHeightRatio;
    this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
    // Use padding-top and margin-top to maintain the given aspect ratio, as
    // a percentage-based value for these properties is applied versus the *width* of the
    // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
    tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));
    tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
  }
  getComputedHeight() {
    return ['paddingBottom', calc(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)];
  }
  reset(list) {
    list._setListStyle(['paddingBottom', null]);
    list._tiles.forEach(tile => {
      tile._setStyle('marginTop', null);
      tile._setStyle('paddingTop', null);
    });
  }
  _parseRatio(value) {
    const ratioParts = value.split(':');
    if (ratioParts.length !== 2 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error(`mat-grid-list: invalid ratio given for row-height: "${value}"`);
    }
    this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
  }
}
/**
 * This type of styler is instantiated when the user selects a "fit" row height mode.
 * In other words, the row height will reflect the total height of the container divided
 * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
 *
 * @docs-private
 */
class FitTileStyler extends TileStyler {
  setRowStyles(tile, rowIndex) {
    // Percent of the available vertical space that one row takes up.
    let percentHeightPerTile = 100 / this._rowspan;
    // Fraction of the horizontal gutter size that each column takes up.
    let gutterHeightPerTile = (this._rows - 1) / this._rows;
    // Base vertical size of a column.
    let baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
    tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));
    tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
  }
  reset(list) {
    if (list._tiles) {
      list._tiles.forEach(tile => {
        tile._setStyle('top', null);
        tile._setStyle('height', null);
      });
    }
  }
}
/** Wraps a CSS string in a calc function */
function calc(exp) {
  return `calc(${exp})`;
}
/** Appends pixels to a CSS string if no units are given. */
function normalizeUnits(value) {
  return value.match(/([A-Za-z%]+)$/) ? value : `${value}px`;
}

// TODO(kara): Conditional (responsive) column count / row size.
// TODO(kara): Re-layout on window resize / media change (debounced).
// TODO(kara): gridTileHeader and gridTileFooter.
const MAT_FIT_MODE = 'fit';
let MatGridList = /*#__PURE__*/(() => {
  class MatGridList {
    _element = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    _dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.D, {
      optional: true
    });
    /** Number of columns being rendered. */
    _cols;
    /** Used for determining the position of each tile in the grid. */
    _tileCoordinator;
    /**
     * Row height value passed in by user. This can be one of three types:
     * - Number value (ex: "100px"):  sets a fixed row height to that value
     * - Ratio value (ex: "4:3"): sets the row height based on width:height ratio
     * - "Fit" mode (ex: "fit"): sets the row height to total height divided by number of rows
     */
    _rowHeight;
    /** The amount of space between tiles. This will be something like '5px' or '2em'. */
    _gutter = '1px';
    /** Sets position and size styles for a tile */
    _tileStyler;
    /** Query list of tiles that are being rendered. */
    _tiles;
    constructor() {}
    /** Amount of columns in the grid list. */
    get cols() {
      return this._cols;
    }
    set cols(value) {
      this._cols = Math.max(1, Math.round((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.c)(value)));
    }
    /** Size of the grid list's gutter in pixels. */
    get gutterSize() {
      return this._gutter;
    }
    set gutterSize(value) {
      this._gutter = `${value == null ? '' : value}`;
    }
    /** Set internal representation of row height from the user-provided value. */
    get rowHeight() {
      return this._rowHeight;
    }
    set rowHeight(value) {
      const newValue = `${value == null ? '' : value}`;
      if (newValue !== this._rowHeight) {
        this._rowHeight = newValue;
        this._setTileStyler(this._rowHeight);
      }
    }
    ngOnInit() {
      this._checkCols();
      this._checkRowHeight();
    }
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     */
    ngAfterContentChecked() {
      this._layoutTiles();
    }
    /** Throw a friendly error if cols property is missing */
    _checkCols() {
      if (!this.cols && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error(`mat-grid-list: must pass in number of columns. ` + `Example: <mat-grid-list cols="3">`);
      }
    }
    /** Default to equal width:height if rowHeight property is missing */
    _checkRowHeight() {
      if (!this._rowHeight) {
        this._setTileStyler('1:1');
      }
    }
    /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
    _setTileStyler(rowHeight) {
      if (this._tileStyler) {
        this._tileStyler.reset(this);
      }
      if (rowHeight === MAT_FIT_MODE) {
        this._tileStyler = new FitTileStyler();
      } else if (rowHeight && rowHeight.indexOf(':') > -1) {
        this._tileStyler = new RatioTileStyler(rowHeight);
      } else {
        this._tileStyler = new FixedTileStyler(rowHeight);
      }
    }
    /** Computes and applies the size and position for all children grid tiles. */
    _layoutTiles() {
      if (!this._tileCoordinator) {
        this._tileCoordinator = new _public_api_BoO5eSq_mjs__WEBPACK_IMPORTED_MODULE_0__.T();
      }
      const tracker = this._tileCoordinator;
      const tiles = this._tiles.filter(tile => !tile._gridList || tile._gridList === this);
      const direction = this._dir ? this._dir.value : 'ltr';
      this._tileCoordinator.update(this.cols, tiles);
      this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
      tiles.forEach((tile, index) => {
        const pos = tracker.positions[index];
        this._tileStyler.setStyle(tile, pos.row, pos.col);
      });
      this._setListStyle(this._tileStyler.getComputedHeight());
    }
    /** Sets style on the main grid-list element, given the style name and value. */
    _setListStyle(style) {
      if (style) {
        this._element.nativeElement.style[style[0]] = style[1];
      }
    }
    static ɵfac = function MatGridList_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatGridList)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatGridList,
      selectors: [["mat-grid-list"]],
      contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatGridTile, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
        }
      },
      hostAttrs: [1, "mat-grid-list"],
      hostVars: 1,
      hostBindings: function MatGridList_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("cols", ctx.cols);
        }
      },
      inputs: {
        cols: "cols",
        gutterSize: "gutterSize",
        rowHeight: "rowHeight"
      },
      exportAs: ["matGridList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: MAT_GRID_LIST,
        useExisting: MatGridList
      }])],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      template: function MatGridList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: [_c3],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatGridList;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatGridListModule = /*#__PURE__*/(() => {
  class MatGridListModule {
    static ɵfac = function MatGridListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatGridListModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatGridListModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_line_Bm3zUbBF_mjs__WEBPACK_IMPORTED_MODULE_3__.a, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_5__.M, _line_Bm3zUbBF_mjs__WEBPACK_IMPORTED_MODULE_3__.a, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_5__.M]
    });
  }
  return MatGridListModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

//# sourceMappingURL=grid-list.mjs.map

/***/ }),

/***/ 2432:
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/line-Bm3zUbBF.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MatLine),
/* harmony export */   a: () => (/* binding */ MatLineModule),
/* harmony export */   s: () => (/* binding */ setLines)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9172);
/* harmony import */ var _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-module-WayjW0Pb.mjs */ 777);





/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a @ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */
let MatLine = /*#__PURE__*/(() => {
  class MatLine {
    static ɵfac = function MatLine_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatLine)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatLine,
      selectors: [["", "mat-line", ""], ["", "matLine", ""]],
      hostAttrs: [1, "mat-line"]
    });
  }
  return MatLine;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 */
function setLines(lines, element, prefix = 'mat') {
  // Note: doesn't need to unsubscribe, because `changes`
  // gets completed by Angular when the view is destroyed.
  lines.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)(lines)).subscribe(({
    length
  }) => {
    setClass(element, `${prefix}-2-line`, false);
    setClass(element, `${prefix}-3-line`, false);
    setClass(element, `${prefix}-multi-line`, false);
    if (length === 2 || length === 3) {
      setClass(element, `${prefix}-${length}-line`, true);
    } else if (length > 3) {
      setClass(element, `${prefix}-multi-line`, true);
    }
  });
}
/** Adds or removes a class from an element. */
function setClass(element, className, isAdd) {
  element.nativeElement.classList.toggle(className, isAdd);
}
let MatLineModule = /*#__PURE__*/(() => {
  class MatLineModule {
    static ɵfac = function MatLineModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatLineModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatLineModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_2__.M, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_2__.M]
    });
  }
  return MatLineModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

//# sourceMappingURL=line-Bm3zUbBF.mjs.map

/***/ }),

/***/ 5627:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/public-api-BoO5eSq-.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TileCoordinator),
/* harmony export */   "ɵ": () => (/* binding */ ɵTileCoordinator)
/* harmony export */ });
/**
 * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
 * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
 * because the tiles can have a rowspan.
 *
 * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
 * large enough to accommodate it so that the tiles still render in the same order in which they
 * are given.
 *
 * The basis of the algorithm is the use of an array to track the already placed tiles. Each
 * element of the array corresponds to a column, and the value indicates how many cells in that
 * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
 * decrements each value in the tracking array (indicating that the column is one cell closer to
 * being free).
 *
 * @docs-private
 */
class TileCoordinator {
  /** Tracking array (see class description). */
  tracker;
  /** Index at which the search for the next gap will start. */
  columnIndex = 0;
  /** The current row index. */
  rowIndex = 0;
  /** Gets the total number of rows occupied by tiles */
  get rowCount() {
    return this.rowIndex + 1;
  }
  /**
   * Gets the total span of rows occupied by tiles.
   * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
   */
  get rowspan() {
    const lastRowMax = Math.max(...this.tracker);
    // if any of the tiles has a rowspan that pushes it beyond the total row count,
    // add the difference to the rowcount
    return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
  }
  /** The computed (row, col) position of each tile (the output). */
  positions;
  /**
   * Updates the tile positions.
   * @param numColumns Amount of columns in the grid.
   * @param tiles Tiles to be positioned.
   */
  update(numColumns, tiles) {
    this.columnIndex = 0;
    this.rowIndex = 0;
    this.tracker = new Array(numColumns);
    this.tracker.fill(0, 0, this.tracker.length);
    this.positions = tiles.map(tile => this._trackTile(tile));
  }
  /** Calculates the row and col position of a tile. */
  _trackTile(tile) {
    // Find a gap large enough for this tile.
    const gapStartIndex = this._findMatchingGap(tile.colspan);
    // Place tile in the resulting gap.
    this._markTilePosition(gapStartIndex, tile);
    // The next time we look for a gap, the search will start at columnIndex, which should be
    // immediately after the tile that has just been placed.
    this.columnIndex = gapStartIndex + tile.colspan;
    return new TilePosition(this.rowIndex, gapStartIndex);
  }
  /** Finds the next available space large enough to fit the tile. */
  _findMatchingGap(tileCols) {
    if (tileCols > this.tracker.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error(`mat-grid-list: tile with colspan ${tileCols} is wider than ` + `grid with cols="${this.tracker.length}".`);
    }
    // Start index is inclusive, end index is exclusive.
    let gapStartIndex = -1;
    let gapEndIndex = -1;
    // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.
    do {
      // If we've reached the end of the row, go to the next row.
      if (this.columnIndex + tileCols > this.tracker.length) {
        this._nextRow();
        gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
        gapEndIndex = this._findGapEndIndex(gapStartIndex);
        continue;
      }
      gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
      // If there are no more empty spaces in this row at all, move on to the next row.
      if (gapStartIndex == -1) {
        this._nextRow();
        gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
        gapEndIndex = this._findGapEndIndex(gapStartIndex);
        continue;
      }
      gapEndIndex = this._findGapEndIndex(gapStartIndex);
      // If a gap large enough isn't found, we want to start looking immediately after the current
      // gap on the next iteration.
      this.columnIndex = gapStartIndex + 1;
      // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
      // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
    } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0);
    // If we still didn't manage to find a gap, ensure that the index is
    // at least zero so the tile doesn't get pulled out of the grid.
    return Math.max(gapStartIndex, 0);
  }
  /** Move "down" to the next row. */
  _nextRow() {
    this.columnIndex = 0;
    this.rowIndex++;
    // Decrement all spaces by one to reflect moving down one row.
    for (let i = 0; i < this.tracker.length; i++) {
      this.tracker[i] = Math.max(0, this.tracker[i] - 1);
    }
  }
  /**
   * Finds the end index (exclusive) of a gap given the index from which to start looking.
   * The gap ends when a non-zero value is found.
   */
  _findGapEndIndex(gapStartIndex) {
    for (let i = gapStartIndex + 1; i < this.tracker.length; i++) {
      if (this.tracker[i] != 0) {
        return i;
      }
    }
    // The gap ends with the end of the row.
    return this.tracker.length;
  }
  /** Update the tile tracker to account for the given tile in the given space. */
  _markTilePosition(start, tile) {
    for (let i = 0; i < tile.colspan; i++) {
      this.tracker[start + i] = tile.rowspan;
    }
  }
}
/**
 * Simple data structure for tile position (row, col).
 * @docs-private
 */
class TilePosition {
  row;
  col;
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
}

// Privately exported for the grid-list harness.
const ɵTileCoordinator = TileCoordinator;

//# sourceMappingURL=public-api-BoO5eSq-.mjs.map

/***/ })

}]);