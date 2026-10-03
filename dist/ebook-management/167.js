"use strict";
(self["webpackChunkebook_management"] = self["webpackChunkebook_management"] || []).push([[167],{

/***/ 3080:
/*!*************************************************!*\
  !*** ./src/app/features/cart/cart.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartComponent: () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 8834);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 9213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4506);








function CartComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CartComponent_div_33_Template_input_change_2_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toggleSelected(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26)(4, "div")(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27)(8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 31)(15, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_33_Template_button_click_15_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.updateQuantity(item_r2, -1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_33_Template_button_click_20_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.updateQuantity(item_r2, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 36)(26, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_33_Template_button_click_26_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.removeItem(item_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r2.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("book-cover cover-", item_r2.cover, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", item_r2.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", item_r2.total, "");
  }
}
let CartComponent = /*#__PURE__*/(() => {
  class CartComponent {
    constructor() {
      this.items = [{
        id: 1,
        title: 'Clean Code',
        author: 'Robert C. Martin',
        price: 499,
        quantity: 1,
        total: 499,
        selected: true,
        cover: 'blue'
      }, {
        id: 2,
        title: 'Java Complete Reference',
        author: 'Herbert Schildt',
        price: 599,
        quantity: 2,
        total: 1198,
        selected: true,
        cover: 'navy'
      }, {
        id: 3,
        title: 'Spring Boot in Action',
        author: 'Craig Walls',
        price: 799,
        quantity: 1,
        total: 799,
        selected: true,
        cover: 'green'
      }, {
        id: 4,
        title: 'Design Patterns',
        author: 'Erich Gamma',
        price: 699,
        quantity: 1,
        total: 699,
        selected: true,
        cover: 'purple'
      }];
    }
    trackByItem(index, item) {
      return item.id;
    }
    get selectedCount() {
      return this.items.filter(item => item.selected).length;
    }
    get subtotal() {
      return this.items.reduce((sum, item) => sum + item.total, 0);
    }
    get shipping() {
      return 0;
    }
    get discount() {
      return 0;
    }
    get total() {
      return this.subtotal + this.shipping - this.discount;
    }
    toggleSelected(item) {
      item.selected = !item.selected;
    }
    updateQuantity(item, delta) {
      const next = item.quantity + delta;
      item.quantity = Math.max(1, next);
      item.total = item.price * item.quantity;
    }
    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id);
    }
    clearCart() {
      this.items = [];
    }
    static {
      this.ɵfac = function CartComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CartComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CartComponent,
        selectors: [["app-cart"]],
        decls: 88,
        vars: 9,
        consts: [[1, "cart-page"], [1, "page-header"], [1, "title-wrap"], [1, "icon-badge"], ["mat-stroked-button", "", "color", "primary", 1, "clear-cart", 3, "click"], [1, "content-grid"], [1, "cart-panel"], [1, "panel-title"], [1, "table-header"], [1, "header-select"], [1, "header-book"], ["class", "cart-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table-footer"], [1, "selection-indicator"], ["mat-stroked-button", "", "color", "primary", 1, "update-button"], [1, "summary-panel"], [1, "summary-row", "total-row"], [1, "summary-row"], [1, "summary-total"], ["mat-flat-button", "", "color", "primary", 1, "checkout-button"], [1, "info-box", "shipping-box"], [1, "info-icon"], [1, "info-box", "secure-box"], [1, "cart-row"], [1, "select-cell"], ["type", "checkbox", 3, "change", "checked"], [1, "cover-cell"], [1, "title-cell"], [1, "book-title"], [1, "book-author"], [1, "price-cell"], [1, "qty-cell"], ["mat-icon-button", "", "aria-label", "Decrease quantity", 1, "qty-button", 3, "click"], [1, "qty-number"], ["mat-icon-button", "", "aria-label", "Increase quantity", 1, "qty-button", 3, "click"], [1, "total-cell"], [1, "action-cell"], ["mat-icon-button", "", "aria-label", "Delete item", 1, "delete-button", 3, "click"]],
        template: function CartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "shopping_cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your Cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Review your selected books before checkout.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_11_listener() {
              return ctx.clearCart();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "delete_outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Clear Cart ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5)(16, "section", 6)(17, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Book");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Price");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Quantity");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Action");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CartComponent_div_33_Template, 29, 9, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12)(35, "div", 13)(36, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "check_circle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 14)(40, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "sync");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Update Cart ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "aside", 15)(44, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Order Summary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16)(47, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17)(52, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Discount");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17)(57, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Shipping Charge");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18)(62, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Total Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 19)(67, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "lock");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Proceed to Checkout ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 20)(71, "div", 21)(72, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "local_shipping");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div")(75, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Free Shipping");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "On orders above \u20B9 999");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 22)(80, "div", 21)(81, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "verified_user");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div")(84, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Secure Payment");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Your information is safe with us");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cart Items (", ctx.items.length, ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByItem);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedCount, " items selected ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Subtotal (", ctx.items.length, " items)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.subtotal, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- \u20B9 ", ctx.discount, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.shipping, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.total, "");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.M, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: #eaf3ff;\n  min-height: calc(100vh - 64px);\n  padding: 24px 22px 40px;\n  box-sizing: border-box;\n}\n\n.cart-page[_ngcontent-%COMP%] {\n  max-width: 1360px;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  background: rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  border-radius: 12px;\n  padding: 18px 26px;\n  margin-bottom: 24px;\n}\n\n.title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n\n.icon-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  background: linear-gradient(135deg, #5b8def, #6074ff);\n  color: #fff;\n  box-shadow: 0 8px 18px rgba(91, 141, 239, 0.25);\n}\n\n.title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #2d3b58;\n}\n\n.title-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #6d7d94;\n  font-size: 0.95rem;\n}\n\n.clear-cart[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-weight: 600;\n  padding: 0 18px;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 2.3fr) minmax(270px, 0.9fr);\n  gap: 22px;\n}\n\n.cart-panel[_ngcontent-%COMP%], \n.summary-panel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(15, 54, 108, 0.08);\n  border-radius: 12px;\n  box-shadow: 0 8px 18px rgba(31, 64, 106, 0.04);\n}\n\n.cart-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.panel-title[_ngcontent-%COMP%] {\n  padding: 18px 18px 14px;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1d2f4a;\n}\n\n.table-header[_ngcontent-%COMP%], \n.cart-row[_ngcontent-%COMP%], \n.table-footer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 38px 70px minmax(180px, 1.2fr) 90px 170px 90px 60px;\n  align-items: center;\n  column-gap: 8px;\n  padding: 0 18px;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  font-size: 0.87rem;\n  color: #5d6d87;\n  font-weight: 700;\n  background: rgba(136, 172, 255, 0.08);\n  border-top: 1px solid rgba(17, 85, 163, 0.08);\n  border-bottom: 1px solid rgba(17, 85, 163, 0.08);\n  min-height: 52px;\n}\n\n.cart-row[_ngcontent-%COMP%] {\n  min-height: 130px;\n  border-bottom: 1px solid rgba(17, 85, 163, 0.08);\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n\n.select-cell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #2f80ed;\n  cursor: pointer;\n}\n\n.cover-cell[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.book-cover[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 72px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);\n  color: #fff;\n  font-size: 0.58rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.cover-blue[_ngcontent-%COMP%] { background: linear-gradient(145deg, #2e4de1, #13297c); }\n.cover-navy[_ngcontent-%COMP%] { background: linear-gradient(145deg, #1d4e89, #0e2342); }\n.cover-green[_ngcontent-%COMP%] { background: linear-gradient(145deg, #2d8a6a, #1f5c4a); }\n.cover-purple[_ngcontent-%COMP%] { background: linear-gradient(145deg, #6d5ef4, #4b3cbe); }\n\n.title-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 6px;\n}\n\n.book-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 600;\n  color: #1b2331;\n}\n\n.book-author[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #5c6e86;\n}\n\n.price-cell[_ngcontent-%COMP%], \n.total-cell[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #1d2a39;\n}\n\n.qty-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.qty-button[_ngcontent-%COMP%] {\n  width: 28px !important;\n  height: 28px !important;\n  line-height: 28px !important;\n  border: 1px solid rgba(55, 75, 103, 0.22);\n  border-radius: 8px;\n  color: #355e8f;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.qty-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n\n.qty-number[_ngcontent-%COMP%] {\n  min-width: 26px;\n  text-align: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #24334d;\n}\n\n.action-cell[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  color: #ee5d6b !important;\n  background: rgba(253, 92, 109, 0.08);\n  border-radius: 10px;\n}\n\n.table-footer[_ngcontent-%COMP%] {\n  min-height: 72px;\n  align-items: center;\n  padding-top: 14px;\n  padding-bottom: 14px;\n}\n\n.selection-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  color: #3d7ad6;\n  font-weight: 600;\n}\n\n.selection-indicator[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n\n.update-button[_ngcontent-%COMP%] {\n  justify-self: end;\n  border-radius: 10px;\n  font-weight: 600;\n  padding: 0 18px;\n}\n\n.summary-panel[_ngcontent-%COMP%] {\n  padding: 18px 20px 20px;\n}\n\n.summary-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f2d46;\n}\n\n.summary-row[_ngcontent-%COMP%], \n.summary-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid rgba(31, 52, 81, 0.08);\n  color: #465a77;\n  font-size: 1.04rem;\n}\n\n.summary-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.summary-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1d2b3d;\n}\n\n.total-row[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.summary-total[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  border-bottom: none;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1c3047;\n}\n\n.checkout-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 18px;\n  border-radius: 10px;\n  font-size: 1.05rem;\n  font-weight: 700;\n  padding: 18px 16px;\n  text-transform: none;\n}\n\n.info-box[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 18px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.info-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.1rem;\n  color: #223c5d;\n  margin-bottom: 4px;\n}\n\n.info-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #586d88;\n  font-size: 0.9rem;\n}\n\n.info-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n}\n\n.shipping-box[_ngcontent-%COMP%] {\n  background: rgba(83, 156, 255, 0.08);\n}\n\n.shipping-box[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  background: rgba(57, 128, 240, 0.12);\n  color: #2774dd;\n}\n\n.secure-box[_ngcontent-%COMP%] {\n  background: rgba(43, 190, 118, 0.08);\n}\n\n.secure-box[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  background: rgba(12, 163, 97, 0.12);\n  color: #169d63;\n}\n\n@media (max-width: 980px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .table-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .cart-row[_ngcontent-%COMP%] {\n    grid-template-columns: 30px 70px minmax(0, 1fr) 80px ;\n  }\n\n  .price-cell[_ngcontent-%COMP%], \n   .qty-cell[_ngcontent-%COMP%], \n   .total-cell[_ngcontent-%COMP%], \n   .action-cell[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%] {\n    padding: 16px 12px 28px;\n  }\n\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n\n  .panel-title[_ngcontent-%COMP%], \n   .summary-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n\n  .cart-row[_ngcontent-%COMP%] {\n    grid-template-columns: 24px 56px 1fr;\n    row-gap: 10px;\n  }\n\n  .price-cell[_ngcontent-%COMP%], \n   .qty-cell[_ngcontent-%COMP%], \n   .total-cell[_ngcontent-%COMP%], \n   .action-cell[_ngcontent-%COMP%] {\n    grid-column: 2 / -1;\n  }\n\n  .table-footer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    row-gap: 12px;\n  }\n\n  .update-button[_ngcontent-%COMP%] {\n    justify-self: stretch;\n  }\n}"]
      });
    }
  }
  return CartComponent;
})();

/***/ }),

/***/ 2167:
/*!**********************************************!*\
  !*** ./src/app/features/cart/cart.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartModule: () => (/* binding */ CartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 3902);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 8834);
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.component */ 3080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);








const routes = [{
  path: '',
  component: _cart_component__WEBPACK_IMPORTED_MODULE_0__.CartComponent
}];
let CartModule = /*#__PURE__*/(() => {
  class CartModule {
    static {
      this.ɵfac = function CartModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CartModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: CartModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _cart_component__WEBPACK_IMPORTED_MODULE_0__.CartComponent]
      });
    }
  }
  return CartModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CartModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _cart_component__WEBPACK_IMPORTED_MODULE_0__.CartComponent]
  });
})();

/***/ })

}]);