"use strict";
(self["webpackChunkebook_management"] = self["webpackChunkebook_management"] || []).push([[11],{

/***/ 4460:
/*!*****************************************************!*\
  !*** ./src/app/features/search/search.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 8834);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 6704);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 9213);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 9042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 417);















function SearchComponent_mat_card_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 16)(1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18)(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 21)(14, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 23)(19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const book_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("book-cover cover-", book_r1.cover, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.title.split(" ")[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", book_r1.price, "");
  }
}
let SearchComponent = /*#__PURE__*/(() => {
  class SearchComponent {
    constructor() {
      this.query = '';
      this.books = [{
        id: 1,
        title: 'Clean Code',
        author: 'Robert C. Martin',
        category: 'Programming',
        price: 499,
        rating: 4.8,
        cover: 'blue',
        badge: 'Popular'
      }, {
        id: 2,
        title: 'Java Complete Reference',
        author: 'Herbert Schildt',
        category: 'Java',
        price: 599,
        rating: 4.7,
        cover: 'navy',
        badge: 'New'
      }, {
        id: 3,
        title: 'Spring Boot in Action',
        author: 'Craig Walls',
        category: 'Backend',
        price: 799,
        rating: 4.9,
        cover: 'green',
        badge: 'Trending'
      }, {
        id: 4,
        title: 'Design Patterns',
        author: 'Erich Gamma',
        category: 'Software Engineering',
        price: 699,
        rating: 4.6,
        cover: 'purple',
        badge: 'Classic'
      }];
    }
    onSearch() {
      console.log('Searching for', this.query);
    }
    get filteredBooks() {
      const searchText = this.query.trim().toLowerCase();
      if (!searchText) {
        return this.books;
      }
      return this.books.filter(book => {
        return book.title.toLowerCase().includes(searchText) || book.author.toLowerCase().includes(searchText) || book.category.toLowerCase().includes(searchText);
      });
    }
    static {
      this.ɵfac = function SearchComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SearchComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchComponent,
        selectors: [["app-search"]],
        decls: 39,
        vars: 3,
        consts: [[1, "search-page"], [1, "page-header"], [1, "title-wrap"], [1, "icon-badge"], [1, "search-shell"], [1, "search-bar"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "placeholder", "Search books, authors, or categories", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "search-button", 3, "click"], [1, "filter-row"], ["mat-stroked-button", "", 1, "filter-pill", "active"], ["mat-stroked-button", "", 1, "filter-pill"], [1, "results-header"], [1, "book-grid"], ["class", "book-card", 4, "ngFor", "ngForOf"], [1, "book-card"], [1, "book-badge"], [1, "book-content"], [1, "meta"], [1, "meta", "secondary"], [1, "rating-row"], [1, "star"], [1, "price-row"], ["mat-flat-button", "", "color", "primary", 1, "mini-btn"]],
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search Books");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Find the perfect book by title, author, or category.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 4)(12, "div", 5)(13, "mat-form-field", 6)(14, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search books, authors, or categories");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_16_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.query, $event) || (ctx.query = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_19_listener() {
              return ctx.onSearch();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Search ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10)(22, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "All");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Programming");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Java");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Backend");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Design");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13)(33, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Results");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SearchComponent_mat_card_38_Template, 23, 10, "mat-card", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.query);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.filteredBooks.length, " books found");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredBooks);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.M, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.j, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.M, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.g, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: #edf5ff;\n  min-height: calc(100vh - 64px);\n  padding: 24px 20px 40px;\n  box-sizing: border-box;\n}\n\n.search-page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid rgba(18, 43, 82, 0.05);\n  border-radius: 12px;\n  padding: 18px 26px;\n  margin-bottom: 22px;\n}\n\n.title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n\n.icon-badge[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background: linear-gradient(135deg, #5f8ef8, #3d64d8);\n  box-shadow: 0 10px 20px rgba(65, 108, 222, 0.2);\n}\n\n.title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c45;\n  font-size: 2rem;\n  font-weight: 700;\n}\n\n.title-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #617595;\n  font-size: 0.96rem;\n}\n\n.search-shell[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(17, 59, 112, 0.08);\n  border-radius: 14px;\n  padding: 20px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n\n.search-field[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n}\n\n.search-button[_ngcontent-%COMP%] {\n  height: 52px;\n  min-width: 140px;\n  border-radius: 12px;\n  font-weight: 600;\n  text-transform: none;\n}\n\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.filter-pill[_ngcontent-%COMP%] {\n  border-radius: 999px !important;\n  padding: 0 18px !important;\n  font-weight: 600;\n  color: #425a7c;\n}\n\n.filter-pill.active[_ngcontent-%COMP%] {\n  background: rgba(54, 114, 234, 0.08);\n  border-color: rgba(54, 114, 234, 0.3);\n  color: #2a66d7;\n}\n\n.results-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 18px;\n}\n\n.results-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e2d47;\n}\n\n.results-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #59718f;\n  font-weight: 600;\n}\n\n.book-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 18px;\n}\n\n.book-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  overflow: hidden;\n  padding: 16px;\n  background: #f9fbff;\n  border: 1px solid rgba(17, 71, 140, 0.08);\n}\n\n.book-cover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 170px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  box-shadow: inset 0 0 20px rgba(255,255,255,0.08);\n}\n\n.cover-blue[_ngcontent-%COMP%] { background: linear-gradient(145deg, #1d4fdd, #112f7b); }\n.cover-navy[_ngcontent-%COMP%] { background: linear-gradient(145deg, #183d8b, #081d42); }\n.cover-green[_ngcontent-%COMP%] { background: linear-gradient(145deg, #29a66b, #17684b); }\n.cover-purple[_ngcontent-%COMP%] { background: linear-gradient(145deg, #6c4ef9, #3a2f9c); }\n\n.book-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: 14px;\n  background: rgba(60, 121, 209, 0.08);\n  color: #2b69d7;\n  border: 1px solid rgba(60, 121, 209, 0.18);\n  border-radius: 999px;\n  padding: 5px 10px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n\n.book-content[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.book-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1f2d46;\n}\n\n.meta[_ngcontent-%COMP%] {\n  color: #4f617c;\n  font-size: 0.9rem;\n}\n\n.meta.secondary[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: #7184a3;\n}\n\n.rating-row[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #f0a100;\n  font-weight: 700;\n}\n\n.star[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n\n.price-row[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.price-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a2d47;\n  font-size: 1.3rem;\n}\n\n.mini-btn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 0 12px;\n  font-size: 0.8rem;\n  line-height: 36px;\n  min-width: auto;\n}\n\n@media (max-width: 720px) {\n  .search-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .search-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .results-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n}\n\n@media (max-width: 480px) {\n  [_nghost-%COMP%] {\n    padding: 16px 12px 24px;\n  }\n\n  .page-header[_ngcontent-%COMP%] {\n    padding: 16px 18px;\n  }\n\n  .title-wrap[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n\n  .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .results-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n\n  .book-cover[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n}"]
      });
    }
  }
  return SearchComponent;
})();

/***/ }),

/***/ 8011:
/*!**************************************************!*\
  !*** ./src/app/features/search/search.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchModule: () => (/* binding */ SearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 6704);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 9042);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 8834);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component */ 4460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);










const routes = [{
  path: '',
  component: _search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent
}];
let SearchModule = /*#__PURE__*/(() => {
  class SearchModule {
    static {
      this.ɵfac = function SearchModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SearchModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: SearchModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.M, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent]
      });
    }
  }
  return SearchModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.M, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent]
  });
})();

/***/ })

}]);