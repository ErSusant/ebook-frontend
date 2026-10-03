"use strict";
(self["webpackChunkebook_management"] = self["webpackChunkebook_management"] || []).push([[709],{

/***/ 9490:
/*!*********************************************************!*\
  !*** ./src/app/features/wishlist/wishlist.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WishlistComponent: () => (/* binding */ WishlistComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 8834);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 9213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);








function WishlistComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function WishlistComponent_div_40_Template_input_change_2_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toggleSelection(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32)(4, "div", 33)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 34)(8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 40)(19, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 42)(22, "button", 43)(23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 44)(26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r2.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "book-cover cover-" + item_r2.cover);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title.split(" ")[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", item_r2.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.addedOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r2.stock === "Low Stock" ? "low-stock" : "in-stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.stock, " ");
  }
}
function WishlistComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45)(1, "div", 33)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 46)(5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "recent-cover cover-" + item_r4.cover);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.title.split(" ")[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u20B9 ", item_r4.price, " \u00B7 ", item_r4.addedOn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r4.stock === "Low Stock" ? "low-stock" : "in-stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.stock, " ");
  }
}
let WishlistComponent = /*#__PURE__*/(() => {
  class WishlistComponent {
    constructor() {
      this.wishlist = [{
        id: 1,
        title: 'Clean Code',
        subtitle: 'Programming',
        author: 'Robert C. Martin',
        price: 499,
        addedOn: '28 Sep 2025',
        stock: 'In Stock',
        cover: 'blue',
        selected: true
      }, {
        id: 2,
        title: 'Java Complete Reference',
        subtitle: 'Java',
        author: 'Herbert Schildt',
        price: 599,
        addedOn: '26 Sep 2025',
        stock: 'In Stock',
        cover: 'navy',
        selected: true
      }, {
        id: 3,
        title: 'Spring Boot in Action',
        subtitle: 'Spring Boot',
        author: 'Craig Walls',
        price: 799,
        addedOn: '24 Sep 2025',
        stock: 'In Stock',
        cover: 'green',
        selected: true
      }, {
        id: 4,
        title: 'Design Patterns',
        subtitle: 'Software Engineering',
        author: 'Erich Gamma',
        price: 699,
        addedOn: '19 Sep 2025',
        stock: 'Low Stock',
        cover: 'purple',
        selected: true
      }, {
        id: 5,
        title: 'Microservices',
        subtitle: 'Cloud Computing',
        author: 'Sam Newman',
        price: 799,
        addedOn: '12 Sep 2025',
        stock: 'In Stock',
        cover: 'black',
        selected: true
      }, {
        id: 6,
        title: 'Effective Java',
        subtitle: 'Java',
        author: 'Joshua Bloch',
        price: 649,
        addedOn: '10 Sep 2025',
        stock: 'In Stock',
        cover: 'orange',
        selected: true
      }];
    }
    get selectedCount() {
      return this.wishlist.filter(book => book.selected).length;
    }
    get totalValue() {
      return this.wishlist.reduce((sum, item) => sum + item.price, 0);
    }
    get inStockCount() {
      return this.wishlist.filter(item => item.stock === 'In Stock').length;
    }
    trackByItem(index, item) {
      return item.id;
    }
    toggleSelection(item) {
      item.selected = !item.selected;
    }
    removeSelected() {
      this.wishlist = this.wishlist.filter(book => !book.selected);
    }
    addToCart() {
      console.log('Add selected books to cart');
    }
    static {
      this.ɵfac = function WishlistComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WishlistComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WishlistComponent,
        selectors: [["app-wishlist"]],
        decls: 91,
        vars: 8,
        consts: [[1, "wishlist-page"], [1, "page-header"], [1, "title-wrap"], [1, "icon-badge"], ["mat-stroked-button", "", "color", "primary", 1, "view-cart-btn"], [1, "content-grid"], [1, "wishlist-panel"], [1, "panel-topbar"], [1, "title-inline"], [1, "search-box"], ["type", "text", "placeholder", "Search by book title, author..."], [1, "table-header"], [1, "checkbox-col"], [1, "book-col"], ["class", "wishlist-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table-footer"], [1, "selection-indicator"], [1, "footer-actions"], ["mat-flat-button", "", "color", "warn", 1, "remove-selected-btn", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "add-cart-btn", 3, "click"], [1, "summary-panel"], [1, "summary-title"], [1, "summary-stats"], [1, "stat-box"], [1, "stat-value"], [1, "stat-label"], [1, "recently-added"], ["class", "recent-item", 4, "ngFor", "ngForOf"], [1, "empty-box"], [1, "wishlist-row"], [1, "select-cell"], ["type", "checkbox", 3, "change", "checked"], [1, "cover-cell"], [3, "ngClass"], [1, "title-cell"], [1, "book-title"], [1, "book-subtitle"], [1, "author-cell"], [1, "price-cell"], [1, "date-cell"], [1, "status-cell"], [1, "stock-badge", 3, "ngClass"], [1, "action-cell"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Add to cart", 1, "action-button", "cart-btn"], ["mat-mini-fab", "", "aria-label", "Delete from wishlist", 1, "action-button", "delete-btn"], [1, "recent-item"], [1, "recent-info"], [1, "recent-title"], [1, "recent-meta"], [1, "recent-status", 3, "ngClass"]],
        template: function WishlistComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "favorite");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Wishlist");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Your saved books. Keep track of what you love.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4)(12, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "shopping_cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " View Cart (4) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5)(16, "section", 6)(17, "div", 7)(18, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9)(21, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Book");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Author");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Price");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Added On");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Stock Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, WishlistComponent_div_40_Template, 28, 10, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15)(42, "div", 16)(43, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "check_circle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17)(47, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WishlistComponent_Template_button_click_47_listener() {
              return ctx.removeSelected();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "delete");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Remove Selected ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WishlistComponent_Template_button_click_51_listener() {
              return ctx.addToCart();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "add_shopping_cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Add to Cart ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "aside", 20)(56, "div", 21)(57, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "favorite");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Wishlist Summary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22)(62, "div", 23)(63, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Total Items");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 23)(68, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Total Value");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23)(73, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "In Stock");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 26)(78, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Recently Added");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, WishlistComponent_div_80_Template, 11, 7, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 28)(82, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "info");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div")(85, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Good to Know");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Items in your wishlist are kept for future purchase.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "You can move them to cart anytime!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Wishlist (", ctx.wishlist.length, ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wishlist)("ngForTrackBy", ctx.trackByItem);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedCount, " items selected ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wishlist.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.totalValue, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.inStockCount);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wishlist.slice(0, 3));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatMiniFabButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: #e9f3ff;\n  min-height: calc(100vh - 64px);\n  padding: 24px 20px 40px;\n  box-sizing: border-box;\n}\n\n.wishlist-page[_ngcontent-%COMP%] {\n  max-width: 1360px;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 16px 24px;\n  margin-bottom: 22px;\n}\n\n.title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n\n.icon-badge[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #ff8da4, #ea5ea8);\n  color: #fff;\n  box-shadow: 0 10px 20px rgba(234, 94, 168, 0.2);\n}\n\n.title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c44;\n  font-size: 2rem;\n  font-weight: 700;\n}\n\n.title-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #61738d;\n  font-size: 0.95rem;\n}\n\n.view-cart-btn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-weight: 600;\n  padding: 0 18px;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 2.3fr) minmax(260px, 0.85fr);\n  gap: 22px;\n}\n\n.wishlist-panel[_ngcontent-%COMP%], \n.summary-panel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(13, 41, 82, 0.08);\n  border-radius: 12px;\n  box-shadow: 0 8px 18px rgba(23, 53, 99, 0.04);\n}\n\n.wishlist-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.panel-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 18px 18px 14px;\n}\n\n.title-inline[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n  font-weight: 700;\n  color: #1f2f49;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(145, 170, 255, 0.08);\n  border: 1px solid rgba(60, 95, 164, 0.18);\n  border-radius: 10px;\n  padding: 10px 14px;\n  min-width: 320px;\n  max-width: 420px;\n  width: 100%;\n  color: #6780a7;\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  width: 100%;\n  font-size: 0.95rem;\n  outline: none;\n  color: #314867;\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #7790b0;\n}\n\n.table-header[_ngcontent-%COMP%], \n.wishlist-row[_ngcontent-%COMP%], \n.table-footer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 36px 58px minmax(150px, 1.2fr) minmax(120px, 0.9fr) minmax(80px, 0.6fr) minmax(110px, 0.7fr) minmax(110px, 0.7fr) 116px;\n  align-items: center;\n  gap: 8px;\n  padding: 0 18px;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  min-height: 52px;\n  background: rgba(120, 164, 255, 0.08);\n  border-top: 1px solid rgba(18, 69, 122, 0.08);\n  border-bottom: 1px solid rgba(18, 69, 122, 0.08);\n  color: #4f6890;\n  font-size: 0.86rem;\n  font-weight: 700;\n}\n\n.wishlist-row[_ngcontent-%COMP%] {\n  min-height: 122px;\n  border-bottom: 1px solid rgba(18, 69, 122, 0.08);\n  padding-top: 14px;\n  padding-bottom: 14px;\n}\n\n.select-cell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #2f80ed;\n  cursor: pointer;\n}\n\n.cover-cell[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.book-cover[_ngcontent-%COMP%], \n.recent-cover[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 72px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);\n  color: #fff;\n  font-size: 0.58rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.cover-blue[_ngcontent-%COMP%] { background: linear-gradient(145deg, #1f66ff, #0d2f8a); }\n.cover-navy[_ngcontent-%COMP%] { background: linear-gradient(145deg, #2c4bd6, #0d1f5f); }\n.cover-green[_ngcontent-%COMP%] { background: linear-gradient(145deg, #28ae69, #1d7047); }\n.cover-purple[_ngcontent-%COMP%] { background: linear-gradient(145deg, #7c4dff, #3c2a9d); }\n.cover-black[_ngcontent-%COMP%] { background: linear-gradient(145deg, #0f172a, #020b1b); }\n.cover-orange[_ngcontent-%COMP%] { background: linear-gradient(145deg, #f59e0b, #b45309); }\n\n.title-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 6px;\n}\n\n.book-title[_ngcontent-%COMP%] {\n  font-size: 1.08rem;\n  color: #1e2c44;\n  font-weight: 700;\n}\n\n.book-subtitle[_ngcontent-%COMP%] {\n  color: #6b7f96;\n  font-size: 0.82rem;\n}\n\n.author-cell[_ngcontent-%COMP%], \n.date-cell[_ngcontent-%COMP%], \n.price-cell[_ngcontent-%COMP%] {\n  color: #1f2c42;\n  font-size: 0.96rem;\n}\n\n.status-cell[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.stock-badge[_ngcontent-%COMP%], \n.recent-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  padding: 6px 10px;\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n\n.in-stock[_ngcontent-%COMP%] {\n  color: #1a8d54;\n  background: rgba(23, 171, 104, 0.12);\n}\n\n.low-stock[_ngcontent-%COMP%] {\n  color: #d17a24;\n  background: rgba(245, 158, 11, 0.12);\n}\n\n.action-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 8px;\n}\n\n.action-button[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.cart-btn[_ngcontent-%COMP%] {\n  background: rgba(78, 101, 205, 0.12) !important;\n  color: #2c5bda !important;\n}\n\n.delete-btn[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08) !important;\n  color: #d24a53 !important;\n}\n\n.table-footer[_ngcontent-%COMP%] {\n  min-height: 70px;\n  align-items: center;\n  padding-top: 14px;\n  padding-bottom: 18px;\n}\n\n.selection-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #4f7ed6;\n  font-weight: 600;\n}\n\n.selection-indicator[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n\n.footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  grid-column: 2 / -1;\n}\n\n.remove-selected-btn[_ngcontent-%COMP%], \n.add-cart-btn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-weight: 700;\n  padding: 0 18px;\n}\n\n.summary-panel[_ngcontent-%COMP%] {\n  padding: 18px 16px 16px;\n}\n\n.summary-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n  color: #1d2d46;\n}\n\n.summary-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 700;\n}\n\n.summary-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 18px;\n}\n\n.stat-box[_ngcontent-%COMP%] {\n  background: rgba(140, 174, 255, 0.08);\n  border: 1px solid rgba(75, 92, 140, 0.08);\n  border-radius: 10px;\n  padding: 14px 10px;\n  text-align: center;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 700;\n  color: #1f2e46;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  color: #5f738f;\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n\n.recently-added[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  border-top: 1px solid rgba(32, 60, 93, 0.1);\n  padding-top: 18px;\n}\n\n.recently-added[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #1e2c46;\n}\n\n.recent-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 52px 1fr auto;\n  gap: 10px;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(32, 60, 93, 0.08);\n}\n\n.recent-cover[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 56px;\n  font-size: 0.48rem;\n}\n\n.recent-info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.recent-title[_ngcontent-%COMP%] {\n  font-size: 0.96rem;\n  color: #1d2d46;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.recent-meta[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: #5d728a;\n  font-size: 0.82rem;\n  white-space: nowrap;\n}\n\n.empty-box[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: rgba(167, 204, 255, 0.12);\n  border: 1px solid rgba(55, 93, 161, 0.12);\n  border-radius: 12px;\n  padding: 16px 14px;\n  color: #3d5f92;\n}\n\n.empty-box[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #2d7ae0;\n}\n\n.empty-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 1.1rem;\n  color: #1d2d46;\n}\n\n.empty-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5b6e89;\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n\n@media (max-width: 1160px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 820px) {\n  .table-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .wishlist-row[_ngcontent-%COMP%] {\n    grid-template-columns: 30px 56px 1fr;\n    row-gap: 10px;\n  }\n\n  .author-cell[_ngcontent-%COMP%], \n   .price-cell[_ngcontent-%COMP%], \n   .date-cell[_ngcontent-%COMP%], \n   .status-cell[_ngcontent-%COMP%], \n   .action-cell[_ngcontent-%COMP%] {\n    grid-column: 2 / -1;\n  }\n\n  .panel-topbar[_ngcontent-%COMP%], \n   .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .search-box[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n\n@media (max-width: 560px) {\n  [_nghost-%COMP%] {\n    padding: 16px 12px 24px;\n  }\n\n  .summary-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .summary-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n   .title-inline[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n\n  .footer-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n\n  .remove-selected-btn[_ngcontent-%COMP%], \n   .add-cart-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"]
      });
    }
  }
  return WishlistComponent;
})();

/***/ }),

/***/ 8709:
/*!******************************************************!*\
  !*** ./src/app/features/wishlist/wishlist.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WishlistModule: () => (/* binding */ WishlistModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 3902);
/* harmony import */ var _wishlist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.component */ 9490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);







const routes = [{
  path: '',
  component: _wishlist_component__WEBPACK_IMPORTED_MODULE_0__.WishlistComponent
}];
let WishlistModule = /*#__PURE__*/(() => {
  class WishlistModule {
    static {
      this.ɵfac = function WishlistModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WishlistModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: WishlistModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _wishlist_component__WEBPACK_IMPORTED_MODULE_0__.WishlistComponent]
      });
    }
  }
  return WishlistModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WishlistModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _wishlist_component__WEBPACK_IMPORTED_MODULE_0__.WishlistComponent]
  });
})();

/***/ })

}]);