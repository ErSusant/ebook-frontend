"use strict";
(self["webpackChunkebook_management"] = self["webpackChunkebook_management"] || []).push([[589],{

/***/ 9866:
/*!***************************************************!*\
  !*** ./src/app/features/order/order.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderComponent: () => (/* binding */ OrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);





function OrderComponent_mat_card_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 23)(1, "div", 24)(2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r1.color)("color", item_r1.accent);
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
function OrderComponent_tr_42_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td")(8, "div", 29)(9, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div")(12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td")(19, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td")(24, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\uD83D\uDC41\uFE0F View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", order_r2.bookColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.bookLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.book);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", order_r2.itemCount, " item)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", order_r2.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.getStatusClass(order_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.orderDate);
  }
}
function OrderComponent_li_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.value);
  }
}
function OrderComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 39)(4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r6.thumbBg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.thumbText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", item_r6.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.getStatusClass(item_r6.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.status);
  }
}
let OrderComponent = /*#__PURE__*/(() => {
  class OrderComponent {
    constructor() {
      this.stats = [{
        label: 'Total Orders',
        value: 12,
        icon: '🛒',
        color: '#ebe7ff',
        accent: '#6d5efc',
        note: '↑ 3 new this week'
      }, {
        label: 'Pending Orders',
        value: 3,
        icon: '📦',
        color: '#f3e8ff',
        accent: '#8b5cf6',
        note: 'No change'
      }, {
        label: 'Shipped Orders',
        value: 7,
        icon: '🚚',
        color: '#dcfce7',
        accent: '#22c55e',
        note: '↑ 2 new this week'
      }, {
        label: 'Delivered Orders',
        value: 10,
        icon: '✅',
        color: '#dcfce7',
        accent: '#16a34a',
        note: '↑ 4 new this week'
      }, {
        label: 'Cancelled Orders',
        value: 1,
        icon: '❌',
        color: '#fee2e2',
        accent: '#ef4444',
        note: 'No change'
      }, {
        label: 'Total Revenue',
        value: '₹ 8,460',
        icon: '₹',
        color: '#d1fae5',
        accent: '#10b981',
        note: '↑ 12% this week'
      }];
      this.recentOrders = [{
        id: '#ORD1006',
        customer: 'Ranul Sharma',
        book: 'Clean Code',
        itemCount: 1,
        amount: 499,
        status: 'Delivered',
        orderDate: '28 Sep 2025',
        bookColor: '#121b2a',
        bookLabel: 'C'
      }, {
        id: '#ORD1005',
        customer: 'Priya Patel',
        book: 'Design Patterns',
        itemCount: 1,
        amount: 699,
        status: 'Shipped',
        orderDate: '26 Sep 2025',
        bookColor: '#f3d5a5',
        bookLabel: 'D'
      }, {
        id: '#ORD1004',
        customer: 'Amit Kumar',
        book: 'Java Complete Reference',
        itemCount: 2,
        amount: 1198,
        status: 'Processing',
        orderDate: '24 Sep 2025',
        bookColor: '#ffc857',
        bookLabel: 'J'
      }, {
        id: '#ORD1003',
        customer: 'Neha Singh',
        book: 'Spring Boot in Action',
        itemCount: 1,
        amount: 799,
        status: 'Delivered',
        orderDate: '21 Sep 2025',
        bookColor: '#34d399',
        bookLabel: 'S'
      }, {
        id: '#ORD1002',
        customer: 'Sandeep Verma',
        book: 'Microservices',
        itemCount: 1,
        amount: 799,
        status: 'Shipped',
        orderDate: '19 Sep 2025',
        bookColor: '#c084fc',
        bookLabel: 'M'
      }, {
        id: '#ORD1001',
        customer: 'Pooja Mehta',
        book: 'Clean Code',
        itemCount: 1,
        amount: 499,
        status: 'Cancelled',
        orderDate: '16 Sep 2025',
        bookColor: '#7dd3fc',
        bookLabel: 'C'
      }];
      this.statusSummary = [{
        label: 'Delivered',
        value: '10 (83%)',
        color: '#2ec4b6'
      }, {
        label: 'Shipped',
        value: '7 (58%)',
        color: '#4dabf7'
      }, {
        label: 'Processing',
        value: '3 (25%)',
        color: '#f4b942'
      }, {
        label: 'Cancelled',
        value: '1 (8%)',
        color: '#ff5c8a'
      }];
      this.latestOrders = [{
        id: '#ORD1006',
        customer: 'Rahul Sharma',
        amount: 499,
        status: 'Delivered',
        thumbBg: '#1f2937',
        thumbText: 'C',
        timeAgo: '2h ago'
      }, {
        id: '#ORD1005',
        customer: 'Priya Patel',
        amount: 699,
        status: 'Shipped',
        thumbBg: '#f59e0b',
        thumbText: 'P',
        timeAgo: '3h ago'
      }, {
        id: '#ORD1004',
        customer: 'Amit Kumar',
        amount: 1198,
        status: 'Processing',
        thumbBg: '#2563eb',
        thumbText: 'J',
        timeAgo: '5h ago'
      }, {
        id: '#ORD1003',
        customer: 'Neha Singh',
        amount: 799,
        status: 'Delivered',
        thumbBg: '#10b981',
        thumbText: 'N',
        timeAgo: '7h ago'
      }, {
        id: '#ORD1002',
        customer: 'Sandeep Verma',
        amount: 799,
        status: 'Shipped',
        thumbBg: '#a78bfa',
        thumbText: 'S',
        timeAgo: '9h ago'
      }];
    }
    getStatusClass(status) {
      const normalized = status.toLowerCase();
      if (normalized.includes('delivered')) return 'delivered';
      if (normalized.includes('shipped')) return 'shipped';
      if (normalized.includes('processing')) return 'processing';
      if (normalized.includes('cancelled')) return 'cancelled';
      return 'default';
    }
    static {
      this.ɵfac = function OrderComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrderComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrderComponent,
        selectors: [["app-order"]],
        decls: 65,
        vars: 4,
        consts: [[1, "orders-page"], [1, "page-header"], [1, "page-title-wrap"], [1, "page-icon"], [1, "date-pill"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "content-grid"], [1, "orders-panel"], [1, "panel-header"], [1, "link-btn"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "table-footer"], [1, "side-panel"], [1, "mini-panel"], [1, "donut-chart"], [1, "donut-center"], [1, "legend-list"], [1, "mini-panel", "latest-panel"], [1, "panel-header", "small-header"], [1, "latest-list"], ["class", "latest-item", 4, "ngFor", "ngForOf"], [1, "stat-card"], [1, "stat-header"], [1, "stat-icon"], [1, "stat-label"], [1, "stat-value"], [1, "stat-note"], [1, "book-info"], [1, "book-thumb"], [1, "book-name"], [1, "status-pill", 3, "ngClass"], [1, "view-btn"], [1, "dot"], [1, "label"], [1, "value"], [1, "latest-item"], [1, "thumb"], [1, "latest-meta"], [1, "latest-id"], [1, "latest-customer"], [1, "latest-amount"], [1, "status-pill", "small", 3, "ngClass"]],
        template: function OrderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uD83D\uDED2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View and manage all customer orders in your store.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\uD83D\uDCC5 Sep 1, 2025 - Sep 30, 2025 \u25BE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OrderComponent_mat_card_13_Template, 10, 8, "mat-card", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 7)(15, "div", 8)(16, "div", 9)(17, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Recent Orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "View All \u2192");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11)(22, "table")(23, "thead")(24, "tr")(25, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "#");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Order ID");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Customer Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Books");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Order Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, OrderComponent_tr_42_Template, 26, 12, "tr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Showing 1 to 6 of 12 orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "aside", 14)(46, "div", 15)(47, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Order Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16)(50, "div", 17)(51, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "12");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Total Orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, OrderComponent_li_56_Template, 6, 4, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19)(58, "div", 20)(59, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Latest Orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "View All \u2192");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, OrderComponent_div_64_Template, 12, 8, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stats);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recentOrders);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statusSummary);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.latestOrders);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: #eef3f8;\n  min-height: calc(100vh - 80px);\n}\n\n.orders-page[_ngcontent-%COMP%] {\n  padding: 22px 18px 30px;\n  background: #eef3f8;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n  padding: 18px 20px;\n  background: rgba(255, 255, 255, 0.85);\n  border-radius: 14px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n}\n\n.page-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.page-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  background: linear-gradient(135deg, #d9d4ff, #c7d2fe);\n  box-shadow: 0 8px 18px rgba(99, 102, 241, 0.15);\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #1f2937;\n  line-height: 1.1;\n}\n\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #64748b;\n  font-size: 0.92rem;\n}\n\n.date-pill[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dbe3ee;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 0.95rem;\n  color: #334155;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(130px, 1fr));\n  gap: 18px;\n  margin-bottom: 20px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff !important;\n  border-radius: 14px !important;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04) !important;\n  padding: 18px 16px 14px !important;\n  min-height: 120px;\n}\n\n.stat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #4b5563;\n  font-weight: 600;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 1.15;\n  font-weight: 800;\n  color: #111827;\n  margin-bottom: 6px;\n}\n\n.stat-note[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #10b981;\n  font-weight: 600;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 3.1fr) minmax(280px, 0.92fr);\n  gap: 20px;\n  align-items: start;\n}\n\n.orders-panel[_ngcontent-%COMP%], \n.mini-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);\n  border: 1px solid rgba(148, 163, 184, 0.12);\n}\n\n.orders-panel[_ngcontent-%COMP%] {\n  padding: 14px 18px 8px;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.mini-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1f2937;\n}\n\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n\n.link-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #3b82f6;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 14px 12px;\n  text-align: left;\n  border-bottom: 1px solid #edf2f7;\n  vertical-align: middle;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n  font-weight: 700;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\ntd[_ngcontent-%COMP%] {\n  font-size: 0.93rem;\n  color: #374151;\n}\n\n.book-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.book-thumb[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  display: grid;\n  place-items: center;\n  color: #fff;\n  font-size: 0.76rem;\n  font-weight: 700;\n  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);\n}\n\n.book-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n}\n\nsmall[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 90px;\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n\n.status-pill.delivered[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n\n.status-pill.shipped[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n\n.status-pill.processing[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n\n.status-pill.cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n\n.view-btn[_ngcontent-%COMP%] {\n  background: #edf6ff;\n  border: 1px solid #dbeafe;\n  border-radius: 8px;\n  color: #1d4ed8;\n  font-weight: 600;\n  padding: 7px 12px;\n  cursor: pointer;\n}\n\n.table-footer[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.82rem;\n  padding: 16px 4px 6px;\n}\n\n.side-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.mini-panel[_ngcontent-%COMP%] {\n  padding: 18px 16px;\n}\n\n.donut-chart[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  margin: 18px auto 12px;\n  border-radius: 50%;\n  background: conic-gradient(\n    #2ec4b6 0 44%,\n    #4dabf7 44% 80%,\n    #f4b942 80% 92%,\n    #ff5c8a 92% 100%\n  );\n  display: grid;\n  place-items: center;\n  position: relative;\n}\n\n.donut-chart[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 28px;\n  background: #fff;\n  border-radius: 50%;\n}\n\n.donut-center[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n}\n\n.donut-center[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #1f2937;\n}\n\n.donut-center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #6b7280;\n}\n\n.legend-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.legend-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 12px 1fr auto;\n  align-items: center;\n  gap: 8px;\n  color: #374151;\n}\n\n.dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.legend-list[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #374151;\n}\n\n.legend-list[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n\n.small-header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.latest-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.latest-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 34px 1fr auto auto;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 0;\n  border-bottom: 1px solid #edf2f7;\n}\n\n.latest-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.thumb[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  display: grid;\n  place-items: center;\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n\n.latest-meta[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.latest-id[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #4b5563;\n  font-weight: 600;\n}\n\n.latest-customer[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #1f2937;\n  margin-top: 2px;\n}\n\n.latest-amount[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #374151;\n  font-weight: 700;\n  white-space: nowrap;\n}\n\n.status-pill.small[_ngcontent-%COMP%] {\n  min-width: 72px;\n  font-size: 0.7rem;\n  padding: 5px 8px;\n}\n\n@media (max-width: 1160px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(160px, 1fr));\n  }\n\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 760px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(140px, 1fr));\n  }\n\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}"]
      });
    }
  }
  return OrderComponent;
})();

/***/ }),

/***/ 8589:
/*!************************************************!*\
  !*** ./src/app/features/order/order.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderModule: () => (/* binding */ OrderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 3902);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 8834);
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.component */ 9866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);








const routes = [{
  path: '',
  component: _order_component__WEBPACK_IMPORTED_MODULE_0__.OrderComponent
}];
let OrderModule = /*#__PURE__*/(() => {
  class OrderModule {
    static {
      this.ɵfac = function OrderModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrderModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: OrderModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _order_component__WEBPACK_IMPORTED_MODULE_0__.OrderComponent]
      });
    }
  }
  return OrderModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrderModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _order_component__WEBPACK_IMPORTED_MODULE_0__.OrderComponent]
  });
})();

/***/ })

}]);