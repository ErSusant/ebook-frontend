"use strict";
(self["webpackChunkebook_management"] = self["webpackChunkebook_management"] || []).push([[483],{

/***/ 7711:
/*!*****************************************************!*\
  !*** ./src/app/features/review/review.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewComponent: () => (/* binding */ ReviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);





function ReviewComponent_mat_card_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 25)(1, "div", 26)(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
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
function ReviewComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td")(4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td")(11, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td")(18, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td")(21, "div", 35)(22, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\uD83D\uDC41\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const review_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", review_r2.bookCover === "C" ? "#1f2937" : review_r2.bookCover === "J" ? "#f59e0b" : review_r2.bookCover === "S" ? "#34d399" : review_r2.bookCover === "D" ? "#a78bfa" : "#7dd3fc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r2.bookCover);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r2.bookTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r2.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getStarIcons(review_r2.rating));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r2.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r2.reviewDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.getStatusClass(review_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r2.status);
  }
}
function ReviewComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r5.star, " \u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", item_r5.percent * 10, "%")("background", item_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.count);
  }
}
function ReviewComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44)(4, "div", 45)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r6.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.initials);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getStarIcons(item_r6.rating));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.comment);
  }
}
let ReviewComponent = /*#__PURE__*/(() => {
  class ReviewComponent {
    constructor() {
      this.stats = [{
        label: 'Total Reviews',
        value: 18,
        icon: '💬',
        color: '#e0e7ff',
        accent: '#4f46e5',
        note: '↑ 3 new this week'
      }, {
        label: 'Average Rating',
        value: 4.6,
        icon: '⭐',
        color: '#fef3c7',
        accent: '#f59e0b',
        note: '↑ 0.2 this week'
      }, {
        label: 'Positive Reviews',
        value: '16 (89%)',
        icon: '✅',
        color: '#dcfce7',
        accent: '#16a34a',
        note: '↑ 2 new this week'
      }, {
        label: 'Negative Reviews',
        value: '2 (11%)',
        icon: '❌',
        color: '#fee2e2',
        accent: '#ef4444',
        note: 'No change'
      }, {
        label: 'Total Customers',
        value: 18,
        icon: '👥',
        color: '#f3e8ff',
        accent: '#8b5cf6',
        note: '↑ 3 new this week'
      }];
      this.reviews = [{
        id: 1,
        bookCover: 'C',
        bookName: 'Clean Code',
        bookTitle: 'Clean Code',
        customerName: 'Rahul Sharma',
        rating: 5,
        comment: 'Excellent book! Very well explained and easy to understand.',
        reviewDate: '28 Sep 2025',
        status: 'Approved'
      }, {
        id: 2,
        bookCover: 'J',
        bookName: 'Java Complete Reference',
        bookTitle: 'Java Complete Reference',
        customerName: 'Priya Patel',
        rating: 4,
        comment: 'Good content, but could have more practical examples.',
        reviewDate: '26 Sep 2025',
        status: 'Approved'
      }, {
        id: 3,
        bookCover: 'S',
        bookName: 'Spring Boot in Action',
        bookTitle: 'Spring Boot in Action',
        customerName: 'Amit Kumar',
        rating: 5,
        comment: 'Best book for Spring Boot. Highly recommended!',
        reviewDate: '24 Sep 2025',
        status: 'Approved'
      }, {
        id: 4,
        bookCover: 'D',
        bookName: 'Design Patterns',
        bookTitle: 'Design Patterns',
        customerName: 'Neha Singh',
        rating: 4.5,
        comment: 'Great content and structure. Easy to follow.',
        reviewDate: '22 Sep 2025',
        status: 'Approved'
      }, {
        id: 5,
        bookCover: 'M',
        bookName: 'Microservices',
        bookTitle: 'Microservices',
        customerName: 'Sandeep Verma',
        rating: 4,
        comment: 'Good explanation of concepts. Useful for real projects.',
        reviewDate: '19 Sep 2025',
        status: 'Approved'
      }, {
        id: 6,
        bookCover: 'C',
        bookName: 'Clean Code',
        bookTitle: 'Clean Code',
        customerName: 'Vikas Yadav',
        rating: 5,
        comment: 'A must-read for every developer!',
        reviewDate: '16 Sep 2025',
        status: 'Approved'
      }, {
        id: 7,
        bookCover: 'J',
        bookName: 'Java Complete Reference',
        bookTitle: 'Java Complete Reference',
        customerName: 'Sneha Rani',
        rating: 4,
        comment: 'Helpful and well organized.',
        reviewDate: '12 Sep 2025',
        status: 'Pending'
      }, {
        id: 8,
        bookCover: 'S',
        bookName: 'Spring Boot in Action',
        bookTitle: 'Spring Boot in Action',
        customerName: 'Pooja Mehta',
        rating: 5,
        comment: 'Really good book. Loved it!',
        reviewDate: '10 Sep 2025',
        status: 'Approved'
      }];
      this.ratingBreakdown = [{
        star: 5,
        percent: 12,
        count: '12 (67%)',
        color: '#2563eb'
      }, {
        star: 4,
        percent: 4,
        count: '4 (22%)',
        color: '#60a5fa'
      }, {
        star: 3,
        percent: 1,
        count: '1 (6%)',
        color: '#93c5fd'
      }, {
        star: 2,
        percent: 1,
        count: '1 (6%)',
        color: '#dbeafe'
      }, {
        star: 1,
        percent: 0,
        count: '0 (0%)',
        color: '#e2e8f0'
      }];
      this.latestReviews = [{
        customer: 'Rahul Sharma',
        rating: 5,
        date: '28 Sep 2025',
        comment: 'Excellent book! Very well explained and easy to understand.',
        initials: 'R',
        color: '#8b5cf6'
      }, {
        customer: 'Priya Patel',
        rating: 4,
        date: '26 Sep 2025',
        comment: 'Good content, but could have more practical examples.',
        initials: 'P',
        color: '#f472b6'
      }, {
        customer: 'Amit Kumar',
        rating: 5,
        date: '24 Sep 2025',
        comment: 'Best book for Spring Boot. Highly recommended!',
        initials: 'A',
        color: '#10b981'
      }, {
        customer: 'Neha Singh',
        rating: 4.5,
        date: '22 Sep 2025',
        comment: 'Great content and structure. Easy to follow.',
        initials: 'N',
        color: '#f59e0b'
      }, {
        customer: 'Sandeep Verma',
        rating: 4,
        date: '19 Sep 2025',
        comment: 'Good explanation of concepts. Useful for real projects.',
        initials: 'S',
        color: '#0ea5e9'
      }];
    }
    getStatusClass(status) {
      return status === 'Approved' ? 'approved' : 'pending';
    }
    getStarIcons(value) {
      const full = Math.round(value);
      return '★'.repeat(full) + '☆'.repeat(5 - full);
    }
    static {
      this.ɵfac = function ReviewComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ReviewComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReviewComponent,
        selectors: [["app-review"]],
        decls: 71,
        vars: 4,
        consts: [[1, "reviews-page"], [1, "page-header"], [1, "page-title-wrap"], [1, "page-icon"], [1, "date-pill"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "content-grid"], [1, "reviews-panel"], [1, "panel-header"], [1, "link-btn"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "table-footer"], [1, "side-panel"], [1, "mini-panel"], [1, "panel-header", "small-header"], [1, "ring-wrap"], [1, "rating-ring"], [1, "ring-center"], [1, "rating-breakdown"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "mini-panel", "latest-panel"], [1, "latest-list"], ["class", "latest-item", 4, "ngFor", "ngForOf"], [1, "stat-card"], [1, "stat-header"], [1, "stat-icon"], [1, "stat-label"], [1, "stat-value"], [1, "stat-note"], [1, "cover-badge"], [1, "stars"], [1, "comment-cell"], [1, "status-pill", 3, "ngClass"], [1, "action-btns"], [1, "icon-btn", "view"], [1, "icon-btn", "delete"], [1, "row"], [1, "row-star"], [1, "bar"], [1, "row-percent"], [1, "latest-item"], [1, "avatar"], [1, "latest-body"], [1, "latest-head"], [1, "stars", "tiny"], [1, "date"]],
        template: function ReviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u2B50");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Reviews");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View and manage customer reviews for your books.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\uD83D\uDCC5 Sep 1, 2025 - Sep 30, 2025 \u25BE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ReviewComponent_mat_card_13_Template, 10, 8, "mat-card", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 7)(15, "div", 8)(16, "div", 9)(17, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Recent Reviews");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "View All \u2192");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11)(22, "table")(23, "thead")(24, "tr")(25, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "#");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Book Cover");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Book Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Customer Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Rating");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Review Comment");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ReviewComponent_tr_44_Template, 26, 11, "tr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Showing 1 to 8 of 18 reviews");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "aside", 14)(48, "div", 15)(49, "div", 16)(50, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Rating Overview");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "View All \u2192");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17)(55, "div", 18)(56, "div", 19)(57, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "4.6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Average Rating");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ReviewComponent_div_62_Template, 7, 6, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 22)(64, "div", 16)(65, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Latest Reviews");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "View All \u2192");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ReviewComponent_div_70_Template, 13, 7, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stats);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ratingBreakdown);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.latestReviews);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: #eef3f8;\n  min-height: calc(100vh - 80px);\n}\n\n.reviews-page[_ngcontent-%COMP%] {\n  padding: 22px 18px 30px;\n  background: #eef3f8;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n  padding: 18px 20px;\n  background: rgba(255, 255, 255, 0.86);\n  border-radius: 14px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n}\n\n.page-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.page-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  background: linear-gradient(135deg, #f5d0fe, #c7d2fe);\n  box-shadow: 0 8px 18px rgba(168, 85, 247, 0.18);\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #1f2937;\n  line-height: 1.1;\n}\n\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #64748b;\n  font-size: 0.92rem;\n}\n\n.date-pill[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dbe3ee;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 0.95rem;\n  color: #334155;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(130px, 1fr));\n  gap: 18px;\n  margin-bottom: 20px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff !important;\n  border-radius: 14px !important;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04) !important;\n  padding: 18px 16px 14px !important;\n  min-height: 120px;\n}\n\n.stat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #4b5563;\n  font-weight: 600;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 1.15;\n  font-weight: 800;\n  color: #111827;\n  margin-bottom: 6px;\n}\n\n.stat-note[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #10b981;\n  font-weight: 600;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 3.2fr) minmax(300px, 0.95fr);\n  gap: 20px;\n  align-items: start;\n}\n\n.reviews-panel[_ngcontent-%COMP%], \n.mini-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);\n  border: 1px solid rgba(148, 163, 184, 0.12);\n}\n\n.reviews-panel[_ngcontent-%COMP%] {\n  padding: 14px 18px 8px;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.mini-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1f2937;\n}\n\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n\n.link-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #3b82f6;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 14px 12px;\n  text-align: left;\n  border-bottom: 1px solid #edf2f7;\n  vertical-align: middle;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n  font-weight: 700;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\ntd[_ngcontent-%COMP%] {\n  font-size: 0.93rem;\n  color: #374151;\n}\n\n.cover-badge[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: inline-grid;\n  place-items: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.7rem;\n}\n\n.stars[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n}\n\n.comment-cell[_ngcontent-%COMP%] {\n  max-width: 240px;\n  line-height: 1.5;\n}\n\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 90px;\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n\n.status-pill.approved[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n\n.status-pill.pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.icon-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: 8px;\n  background: #f3f4f6;\n  cursor: pointer;\n}\n\n.icon-btn.delete[_ngcontent-%COMP%] {\n  background: #fee2e2;\n}\n\n.table-footer[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.82rem;\n  padding: 16px 4px 6px;\n}\n\n.side-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.mini-panel[_ngcontent-%COMP%] {\n  padding: 18px 16px;\n}\n\n.small-header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.ring-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 18px 0 14px;\n}\n\n.rating-ring[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  background: conic-gradient(#2563eb 0 82%, #e2e8f0 82% 100%);\n  display: grid;\n  place-items: center;\n  position: relative;\n}\n\n.rating-ring[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 18px;\n  background: #fff;\n  border-radius: 50%;\n}\n\n.ring-center[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n}\n\n.ring-center[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: #1f2937;\n}\n\n.ring-center[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #6b7280;\n}\n\n.rating-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 48px 1fr 70px;\n  gap: 10px;\n  align-items: center;\n}\n\n.row-star[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #374151;\n  font-weight: 600;\n}\n\n.bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #e2e8f0;\n  border-radius: 999px;\n  overflow: hidden;\n}\n\n.bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: 999px;\n}\n\n.row-percent[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  text-align: right;\n}\n\n.latest-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.latest-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #edf2f7;\n}\n\n.latest-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n\n.latest-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.latest-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 6px;\n}\n\n.latest-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #1f2937;\n}\n\n.stars.tiny[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n\n.date[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.72rem;\n  color: #6b7280;\n}\n\n.latest-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #374151;\n  font-size: 0.83rem;\n  line-height: 1.5;\n}\n\n@media (max-width: 1180px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(150px, 1fr));\n  }\n\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 760px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(140px, 1fr));\n  }\n\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}"]
      });
    }
  }
  return ReviewComponent;
})();

/***/ }),

/***/ 9483:
/*!**************************************************!*\
  !*** ./src/app/features/review/review.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewModule: () => (/* binding */ ReviewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 3902);
/* harmony import */ var _review_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review.component */ 7711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);







const routes = [{
  path: '',
  component: _review_component__WEBPACK_IMPORTED_MODULE_0__.ReviewComponent
}];
let ReviewModule = /*#__PURE__*/(() => {
  class ReviewModule {
    static {
      this.ɵfac = function ReviewModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ReviewModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ReviewModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _review_component__WEBPACK_IMPORTED_MODULE_0__.ReviewComponent]
      });
    }
  }
  return ReviewModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReviewModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _review_component__WEBPACK_IMPORTED_MODULE_0__.ReviewComponent]
  });
})();

/***/ })

}]);