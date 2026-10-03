"use strict";
(self["webpackChunkebook_management"] = self["webpackChunkebook_management"] || []).push([[41],{

/***/ 1619:
/*!*****************************************************************!*\
  !*** ./src/app/features/books/book-list/book-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookListComponent: () => (/* binding */ BookListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 9213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);






function BookListComponent_mat_card_27_Template(rf, ctx) {
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
function BookListComponent_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td")(4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\uD83D\uDCD8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "div", 27)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td")(15, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "In Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td")(22, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "In Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "28 Sep 2025");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td")(27, "div", 30)(28, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\uD83D\uDC41\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const book_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ISBN: ", book_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r2.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", book_r2.price, "");
  }
}
let BookListComponent = /*#__PURE__*/(() => {
  class BookListComponent {
    constructor() {
      this.books = [{
        id: '1',
        title: 'Clean Code',
        author: 'Robert C. Martin',
        category: 'Programming',
        price: 499,
        rating: 4.7
      }, {
        id: '2',
        title: 'Java Complete Reference',
        author: 'Herbert Schildt',
        category: 'Java',
        price: 599,
        rating: 4.6
      }, {
        id: '3',
        title: 'Spring Boot in Action',
        author: 'Craig Walls',
        category: 'Spring',
        price: 799,
        rating: 4.4
      }, {
        id: '4',
        title: 'Design Patterns',
        author: 'Erich Gamma',
        category: 'Software Engineering',
        price: 699,
        rating: 4.5
      }, {
        id: '5',
        title: 'Microservices',
        author: 'Sam Newman',
        category: 'Microservices',
        price: 799,
        rating: 4.5
      }];
      this.stats = [{
        label: 'Total Books',
        value: 24,
        icon: '📚',
        color: '#dbeafe',
        note: '2 new this week'
      }, {
        label: 'Categories',
        value: 8,
        icon: '🗂️',
        color: '#ede9fe',
        note: 'No change'
      }, {
        label: 'Orders (Related)',
        value: 12,
        icon: '🛒',
        color: '#dcfce7',
        note: '3 new this week'
      }, {
        label: 'Wishlist (Related)',
        value: 6,
        icon: '💗',
        color: '#fce7f3',
        note: 'No change'
      }, {
        label: 'Avg. Rating',
        value: 4.6,
        icon: '⭐',
        color: '#fef3c7',
        note: '0.2 this week'
      }];
    }
    static {
      this.ɵfac = function BookListComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || BookListComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BookListComponent,
        selectors: [["app-book-list"]],
        decls: 79,
        vars: 2,
        consts: [[1, "books-shell"], [1, "page-header"], [1, "page-title-wrap"], [1, "page-icon"], [1, "primary-btn"], [1, "toolbar-row"], [1, "search-box"], ["type", "text", "placeholder", "Search by title, author, or ISBN..."], [1, "filter-group"], [1, "primary-btn", "small-btn"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "table-panel"], [1, "table-head"], [1, "sort-select"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], [1, "pagination-row"], [1, "pager"], [1, "active"], [1, "stat-card"], [1, "stat-header"], [1, "stat-icon"], [1, "stat-label"], [1, "stat-value"], [1, "stat-note"], [1, "cover-box"], [1, "book-title-wrap"], [1, "tag", "tag-category"], [1, "status", "status-in"], [1, "action-cell"], [1, "action-btn", "view"], [1, "action-btn", "edit"], [1, "action-btn", "delete"]],
        template: function BookListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uD83D\uDCDA");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Books");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Manage all books in your store. Add, update, or remove books easily.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+ Add New Book");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 5)(13, "div", 6)(14, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\uD83D\uDD0E");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8)(18, "select")(19, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "All Categories");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select")(22, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "All Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BookListComponent_mat_card_27_Template, 10, 6, "mat-card", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 12)(29, "div", 13)(30, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Books List");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 14)(33, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sort by: Newest First");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15)(36, "table")(37, "thead")(38, "tr")(39, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "#");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Book Cover");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Author");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Category");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Price");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Stock");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Created At");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, BookListComponent_tr_60_Template, 34, 6, "tr", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 17)(62, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Showing 1 to 5 of 24 books");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18)(65, "button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u2039");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u203A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stats);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 24px 28px 32px;\n  background: #eef4f8;\n  min-height: calc(100vh - 70px);\n}\n\n.books-shell[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 18px;\n  background: rgba(148, 197, 255, 0.18);\n  border: 1px solid rgba(17, 84, 120, 0.08);\n  border-radius: 16px;\n  padding: 18px 20px;\n}\n\n.page-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.page-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #dbeafe;\n  font-size: 1.35rem;\n}\n\n.page-title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1f2937;\n  font-size: 2rem;\n}\n\n.page-title-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #4b5563;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: #2563eb;\n  color: white;\n  border-radius: 10px;\n  padding: 12px 20px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.2);\n}\n\n.small-btn[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n}\n\n.toolbar-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  border-radius: 14px;\n  margin-bottom: 22px;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: white;\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  border-radius: 10px;\n  padding: 10px 14px;\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  width: 100%;\n  font-size: 1rem;\n  background: transparent;\n}\n\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\nselect[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  border-radius: 10px;\n  padding: 10px 14px;\n  background: white;\n  color: #374151;\n  min-width: 170px;\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(180px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(148, 163, 184, 0.24);\n  border-radius: 16px;\n  padding: 18px 18px 14px;\n}\n\n.stat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 18px;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 1.04rem;\n  font-weight: 600;\n  color: #374151;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 8px;\n}\n\n.stat-note[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.82rem;\n}\n\n.table-panel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  border-radius: 18px;\n  padding: 18px 12px 14px;\n}\n\n.table-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 0 10px;\n}\n\n.table-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  color: #1f2937;\n}\n\n.sort-select[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 14px 10px;\n  text-align: left;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.2);\n  font-size: 0.92rem;\n  color: #374151;\n}\n\nth[_ngcontent-%COMP%] {\n  background: rgba(186, 230, 253, 0.2);\n  color: #1f2937;\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n\n.cover-box[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #e2e8f0, #cbd5e1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n\n.book-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.book-title-wrap[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827;\n}\n\n.book-title-wrap[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n\n.tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 999px;\n  padding: 6px 10px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n\n.tag-category[_ngcontent-%COMP%] {\n  background: #e9d5ff;\n  color: #6d28d9;\n}\n\n.status[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 999px;\n  padding: 5px 10px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n\n.status-in[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #15803d;\n}\n\n.status-low[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #b45309;\n}\n\n.action-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.action-btn.view[_ngcontent-%COMP%] { background: #dbeafe; }\n.action-btn.edit[_ngcontent-%COMP%] { background: #e0f2fe; }\n.action-btn.delete[_ngcontent-%COMP%] { background: #fee2e2; }\n\n.pagination-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n  padding: 0 10px;\n  color: #4b5563;\n  font-size: 0.9rem;\n}\n\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border: 1px solid rgba(148, 163, 184, 0.3);\n  background: white;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #374151;\n}\n\n.pager[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n  border-color: #2563eb;\n}\n\n@media (max-width: 1100px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(180px, 1fr));\n  }\n}\n\n@media (max-width: 700px) {\n  .page-header[_ngcontent-%COMP%], \n   .toolbar-row[_ngcontent-%COMP%], \n   .table-head[_ngcontent-%COMP%], \n   .pagination-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .filter-group[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"]
      });
    }
  }
  return BookListComponent;
})();

/***/ }),

/***/ 9041:
/*!************************************************!*\
  !*** ./src/app/features/books/books.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooksModule: () => (/* binding */ BooksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 3902);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 9213);
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-list/book-list.component */ 1619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);








const routes = [{
  path: '',
  component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_0__.BookListComponent
}];
let BooksModule = /*#__PURE__*/(() => {
  class BooksModule {
    static {
      this.ɵfac = function BooksModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || BooksModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: BooksModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_0__.BookListComponent]
      });
    }
  }
  return BooksModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BooksModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_0__.BookListComponent]
  });
})();

/***/ })

}]);