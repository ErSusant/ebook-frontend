"use strict";
(self["webpackChunkebook_management"] = self["webpackChunkebook_management"] || []).push([[37],{

/***/ 5706:
/*!*******************************************************!*\
  !*** ./src/app/features/payment/payment.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentComponent: () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);





function PaymentComponent_mat_card_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 30)(1, "div", 31)(2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);
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
function PaymentComponent_tr_42_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td")(10, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td")(14, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td")(19, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\uD83D\uDC41\uFE0F View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const payment_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payment_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payment_r2.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", payment_r2.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", payment_r2.methodColor + "22")("color", payment_r2.methodColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", payment_r2.methodBadge, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", payment_r2.method, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.getStatusClass(payment_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payment_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payment_r2.paymentDate);
  }
}
function PaymentComponent_li_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const method_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", method_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](method_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](method_r5.percent);
  }
}
let PaymentComponent = /*#__PURE__*/(() => {
  class PaymentComponent {
    constructor() {
      this.stats = [{
        label: 'Total Payments',
        value: '₹ 4,250',
        icon: '💰',
        color: '#dbeafe',
        accent: '#2563eb',
        note: '↑ 2 new this week'
      }, {
        label: 'Successful Payments',
        value: 12,
        icon: '✅',
        color: '#dcfce7',
        accent: '#16a34a',
        note: '↑ 2 new this week'
      }, {
        label: 'Pending Payments',
        value: 3,
        icon: '⏳',
        color: '#fef3c7',
        accent: '#d97706',
        note: '↑ 1 new this week'
      }, {
        label: 'Failed Payments',
        value: 1,
        icon: '❌',
        color: '#fee2e2',
        accent: '#dc2626',
        note: 'No change'
      }, {
        label: 'Total Revenue',
        value: '₹ 8,460',
        icon: '₹',
        color: '#d1fae5',
        accent: '#059669',
        note: '↑ 12% this week'
      }, {
        label: 'Avg. Order Value',
        value: '₹ 708',
        icon: '💳',
        color: '#e0e7ff',
        accent: '#4f46e5',
        note: '↑ 5% this week'
      }];
      this.payments = [{
        id: '#ORD1006',
        customerName: 'Rahul Sharma',
        amount: 499,
        method: 'UPI',
        status: 'Success',
        paymentDate: '28 Sep 2025, 10:24 AM',
        methodBadge: 'UPI',
        methodColor: '#3b82f6'
      }, {
        id: '#ORD1005',
        customerName: 'Priya Patel',
        amount: 699,
        method: 'Credit/Debit Card',
        status: 'Success',
        paymentDate: '26 Sep 2025, 04:12 PM',
        methodBadge: 'Card',
        methodColor: '#f59e0b'
      }, {
        id: '#ORD1004',
        customerName: 'Amit Kumar',
        amount: 1198,
        method: 'UPI',
        status: 'Success',
        paymentDate: '24 Sep 2025, 11:45 AM',
        methodBadge: 'UPI',
        methodColor: '#3b82f6'
      }, {
        id: '#ORD1003',
        customerName: 'Neha Singh',
        amount: 799,
        method: 'Net Banking',
        status: 'Pending',
        paymentDate: '21 Sep 2025, 02:18 PM',
        methodBadge: 'Bank',
        methodColor: '#a855f7'
      }, {
        id: '#ORD1002',
        customerName: 'Sandeep Verma',
        amount: 799,
        method: 'UPI',
        status: 'Success',
        paymentDate: '19 Sep 2025, 09:36 AM',
        methodBadge: 'UPI',
        methodColor: '#3b82f6'
      }, {
        id: '#ORD1001',
        customerName: 'Pooja Mehta',
        amount: 499,
        method: 'Wallet',
        status: 'Success',
        paymentDate: '16 Sep 2025, 06:21 PM',
        methodBadge: 'Wallet',
        methodColor: '#10b981'
      }, {
        id: '#ORD1000',
        customerName: 'Vikas Yadav',
        amount: 1099,
        method: 'Credit/Debit Card',
        status: 'Failed',
        paymentDate: '14 Sep 2025, 01:17 PM',
        methodBadge: 'Card',
        methodColor: '#f59e0b'
      }, {
        id: '#ORD0999',
        customerName: 'Sneha Rani',
        amount: 599,
        method: 'UPI',
        status: 'Success',
        paymentDate: '12 Sep 2025, 10:03 AM',
        methodBadge: 'UPI',
        methodColor: '#3b82f6'
      }];
      this.paymentMethods = [{
        label: 'UPI',
        value: 7,
        percent: '7 (58%)',
        color: '#3b82f6'
      }, {
        label: 'Credit/Debit Card',
        value: 3,
        percent: '3 (25%)',
        color: '#f59e0b'
      }, {
        label: 'Net Banking',
        value: 1,
        percent: '1 (8%)',
        color: '#14b8a6'
      }, {
        label: 'Wallet',
        value: 1,
        percent: '1 (8%)',
        color: '#a78bfa'
      }];
    }
    getStatusClass(status) {
      switch (status) {
        case 'Success':
          return 'success';
        case 'Pending':
          return 'pending';
        case 'Failed':
          return 'failed';
        default:
          return 'default';
      }
    }
    static {
      this.ɵfac = function PaymentComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PaymentComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaymentComponent,
        selectors: [["app-payment"]],
        decls: 77,
        vars: 3,
        consts: [[1, "payments-page"], [1, "page-header"], [1, "page-title-wrap"], [1, "page-icon"], [1, "date-pill"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "content-grid"], [1, "payments-panel"], [1, "panel-header"], [1, "link-btn"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "table-footer"], [1, "side-panel"], [1, "mini-panel", "analytics-panel"], [1, "panel-header", "analytics-header"], [1, "toggle-group"], [1, "toggle", "active"], [1, "toggle"], [1, "chart-box"], [1, "chart-lines"], [1, "chart-line"], [1, "mini-panel", "methods-panel"], [1, "donut-wrap"], [1, "donut-chart"], [1, "donut-center"], [1, "method-list"], [1, "mini-panel", "note-panel"], [1, "info-mark"], [1, "stat-card"], [1, "stat-header"], [1, "stat-icon"], [1, "stat-label"], [1, "stat-value"], [1, "stat-note"], [1, "method-badge"], [1, "status-pill", 3, "ngClass"], [1, "view-btn"], [1, "method-row"], [1, "dot"], [1, "label"], [1, "value"]],
        template: function PaymentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uD83D\uDCB3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Payments");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Track and manage all payment transactions in your store.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\uD83D\uDCC5 Sep 1, 2025 - Sep 30, 2025 \u25BE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PaymentComponent_mat_card_13_Template, 10, 8, "mat-card", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 7)(15, "div", 8)(16, "div", 9)(17, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Recent Payments");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Payment Method");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Payment Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Action");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PaymentComponent_tr_42_Template, 21, 13, "tr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Showing 1 to 8 of 8 payments");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "aside", 14)(46, "div", 15)(47, "div", 16)(48, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Payment Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17)(51, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Daily");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Weekly");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Monthly");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 21)(59, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23)(61, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Payment Methods");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24)(64, "div", 25)(65, "div", 26)(66, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "12");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Total Payments");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, PaymentComponent_li_71_Template, 7, 4, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 28)(73, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u2139\uFE0F");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "All payments are secure and processed through trusted payment gateways.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stats);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.payments);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paymentMethods);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: #eef3f8;\n  min-height: calc(100vh - 80px);\n}\n\n.payments-page[_ngcontent-%COMP%] {\n  padding: 22px 18px 30px;\n  background: #eef3f8;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n  padding: 18px 20px;\n  background: rgba(255, 255, 255, 0.86);\n  border-radius: 14px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n}\n\n.page-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.page-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  background: linear-gradient(135deg, #dbeafe, #c7d2fe);\n  box-shadow: 0 8px 18px rgba(59, 130, 246, 0.15);\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #1f2937;\n  line-height: 1.1;\n}\n\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #64748b;\n  font-size: 0.92rem;\n}\n\n.date-pill[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dbe3ee;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 0.95rem;\n  color: #334155;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(130px, 1fr));\n  gap: 18px;\n  margin-bottom: 20px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff !important;\n  border-radius: 14px !important;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04) !important;\n  padding: 18px 16px 14px !important;\n  min-height: 120px;\n}\n\n.stat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #4b5563;\n  font-weight: 600;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 1.15;\n  font-weight: 800;\n  color: #111827;\n  margin-bottom: 6px;\n}\n\n.stat-note[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #10b981;\n  font-weight: 600;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 3.2fr) minmax(290px, 0.95fr);\n  gap: 20px;\n  align-items: start;\n}\n\n.payments-panel[_ngcontent-%COMP%], \n.mini-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);\n  border: 1px solid rgba(148, 163, 184, 0.12);\n}\n\n.payments-panel[_ngcontent-%COMP%] {\n  padding: 14px 18px 8px;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.mini-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1f2937;\n}\n\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n\n.link-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #3b82f6;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 14px 12px;\n  text-align: left;\n  border-bottom: 1px solid #edf2f7;\n  vertical-align: middle;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n  font-weight: 700;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\ntd[_ngcontent-%COMP%] {\n  font-size: 0.93rem;\n  color: #374151;\n}\n\n.method-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 34px;\n  padding: 5px 8px;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  margin-right: 8px;\n}\n\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 90px;\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n\n.status-pill.success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n\n.status-pill.pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n\n.status-pill.failed[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n\n.view-btn[_ngcontent-%COMP%] {\n  background: #edf6ff;\n  border: 1px solid #dbeafe;\n  border-radius: 8px;\n  color: #1d4ed8;\n  font-weight: 600;\n  padding: 7px 12px;\n  cursor: pointer;\n}\n\n.table-footer[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.82rem;\n  padding: 16px 4px 6px;\n}\n\n.side-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.mini-panel[_ngcontent-%COMP%] {\n  padding: 18px 16px;\n}\n\n.analytics-header[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.toggle-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  background: #edf2ff;\n  border-radius: 10px;\n  padding: 4px;\n  gap: 2px;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #475569;\n  font-size: 0.78rem;\n  padding: 7px 10px;\n  border-radius: 7px;\n  cursor: pointer;\n}\n\n.toggle.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n}\n\n.chart-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n  background: linear-gradient(to top, rgba(59,130,246,0.05), rgba(59,130,246,0));\n}\n\n.chart-line[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 14px 12px 18px 12px;\n  border: 2px solid transparent;\n  border-radius: 12px;\n  background: linear-gradient(180deg, rgba(96,165,250,0.15), rgba(96,165,250,0.02));\n  clip-path: polygon(0% 71%, 15% 65%, 28% 58%, 43% 66%, 52% 42%, 66% 48%, 76% 38%, 90% 52%, 100% 34%, 100% 100%, 0% 100%);\n}\n\n.chart-lines[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image: linear-gradient(rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.25) 1px, transparent 1px);\n  background-size: 30px 30px;\n}\n\n.donut-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 18px 0 12px;\n}\n\n.donut-chart[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 170px;\n  border-radius: 50%;\n  background: conic-gradient(\n    #3b82f6 0 58%,\n    #f59e0b 58% 83%,\n    #14b8a6 83% 91%,\n    #a78bfa 91% 100%\n  );\n  display: grid;\n  place-items: center;\n  position: relative;\n}\n\n.donut-chart[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 28px;\n  background: #fff;\n  border-radius: 50%;\n}\n\n.donut-center[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n}\n\n.donut-center[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: #1f2937;\n}\n\n.donut-center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #6b7280;\n}\n\n.method-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.method-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  color: #374151;\n}\n\n.method-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n\n.dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n}\n\n.value[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n\n.note-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f0f9ff;\n  border: 1px solid #dbeafe;\n}\n\n.info-mark[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: grid;\n  place-items: center;\n  background: #dbeafe;\n  font-size: 1rem;\n}\n\n.note-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1f2937;\n  line-height: 1.5;\n  font-size: 0.9rem;\n}\n\n@media (max-width: 1160px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(160px, 1fr));\n  }\n\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 760px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(140px, 1fr));\n  }\n\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}"]
      });
    }
  }
  return PaymentComponent;
})();

/***/ }),

/***/ 1037:
/*!****************************************************!*\
  !*** ./src/app/features/payment/payment.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentModule: () => (/* binding */ PaymentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 3902);
/* harmony import */ var _payment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.component */ 5706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);







const routes = [{
  path: '',
  component: _payment_component__WEBPACK_IMPORTED_MODULE_0__.PaymentComponent
}];
let PaymentModule = /*#__PURE__*/(() => {
  class PaymentModule {
    static {
      this.ɵfac = function PaymentModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PaymentModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: PaymentModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _payment_component__WEBPACK_IMPORTED_MODULE_0__.PaymentComponent]
      });
    }
  }
  return PaymentModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaymentModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _payment_component__WEBPACK_IMPORTED_MODULE_0__.PaymentComponent]
  });
})();

/***/ })

}]);