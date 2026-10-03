"use strict";
(self["webpackChunkebook_management"] = self["webpackChunkebook_management"] || []).push([[947],{

/***/ 9084:
/*!*********************************************************!*\
  !*** ./src/app/features/category/category.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryComponent: () => (/* binding */ CategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);





function CategoryComponent_mat_card_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 24)(1, "div", 25)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);
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
function CategoryComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td")(4, "div", 30)(5, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td")(14, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td")(19, "div", 33)(20, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u270E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\uD83D\uDDD1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", category_r2.iconBg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2.booksCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", category_r2.status.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r2.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2.createdAt);
  }
}
function CategoryComponent_li_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u203A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.count);
  }
}
let CategoryComponent = /*#__PURE__*/(() => {
  class CategoryComponent {
    constructor() {
      this.stats = [{
        label: 'Total Categories',
        value: 8,
        icon: '🗂️',
        color: '#e9d5ff',
        note: '2 new this week'
      }, {
        label: 'Total Books',
        value: 24,
        icon: '📚',
        color: '#dbeafe',
        note: '2 new this week'
      }, {
        label: 'Active Categories',
        value: 7,
        icon: '✅',
        color: '#dcfce7',
        note: '1 new this week'
      }, {
        label: 'Inactive Categories',
        value: 1,
        icon: '⚠️',
        color: '#ffe4e6',
        note: 'No change'
      }];
      this.categories = [{
        id: 1,
        name: 'Programming',
        description: 'Books on programming languages, frameworks and development tools.',
        booksCount: 8,
        status: 'Active',
        createdAt: '12 Sep 2025',
        icon: '⌨️',
        iconBg: '#dbeafe'
      }, {
        id: 2,
        name: 'Design Patterns',
        description: 'Common design patterns used in software development.',
        booksCount: 4,
        status: 'Active',
        createdAt: '14 Sep 2025',
        icon: '🎨',
        iconBg: '#f3e8ff'
      }, {
        id: 3,
        name: 'Software Engineering',
        description: 'System design, architecture and best practices.',
        booksCount: 5,
        status: 'Active',
        createdAt: '16 Sep 2025',
        icon: '🛠️',
        iconBg: '#dcfce7'
      }, {
        id: 4,
        name: 'Java',
        description: 'Core Java, Advanced Java and related technologies.',
        booksCount: 6,
        status: 'Active',
        createdAt: '18 Sep 2025',
        icon: '☕',
        iconBg: '#fef3c7'
      }, {
        id: 5,
        name: 'Spring Boot',
        description: 'Spring Boot framework, microservices and cloud development.',
        booksCount: 5,
        status: 'Active',
        createdAt: '20 Sep 2025',
        icon: '🌱',
        iconBg: '#bbf7d0'
      }, {
        id: 6,
        name: 'Database',
        description: 'MySQL, PostgreSQL, MongoDB and other databases.',
        booksCount: 3,
        status: 'Active',
        createdAt: '22 Sep 2025',
        icon: '🗄️',
        iconBg: '#ddd6fe'
      }, {
        id: 7,
        name: 'Cloud Computing',
        description: 'AWS, Azure, Docker, Kubernetes and distributed systems.',
        booksCount: 2,
        status: 'Active',
        createdAt: '25 Sep 2025',
        icon: '☁️',
        iconBg: '#dbeafe'
      }, {
        id: 8,
        name: 'Web Development',
        description: 'Angular, React, HTML, CSS, JavaScript and frontend frameworks.',
        booksCount: 4,
        status: 'Inactive',
        createdAt: '27 Sep 2025',
        icon: '💻',
        iconBg: '#fce7f3'
      }];
      this.quickActions = ['Add Category', 'Edit Category', 'Delete Category', 'Refresh'];
      this.categoryTree = [{
        name: 'Programming',
        count: 8
      }, {
        name: 'Design Patterns',
        count: 4
      }, {
        name: 'Software Engineering',
        count: 5
      }, {
        name: 'Java',
        count: 6
      }, {
        name: 'Spring Boot',
        count: 5
      }, {
        name: 'Database',
        count: 3
      }, {
        name: 'Cloud Computing',
        count: 2
      }, {
        name: 'Web Development',
        count: 4
      }];
    }
    static {
      this.ɵfac = function CategoryComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CategoryComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CategoryComponent,
        selectors: [["app-category"]],
        decls: 68,
        vars: 3,
        consts: [[1, "category-page"], [1, "page-header"], [1, "page-title-wrap"], [1, "page-icon"], [1, "primary-btn"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "content-grid"], [1, "table-panel"], [1, "table-header"], [1, "search-box"], ["type", "text", "placeholder", "Search categories..."], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "table-footer"], [1, "side-panel"], [1, "info-card"], [1, "info-icon"], [1, "quick-actions"], [1, "action-grid"], [1, "mini-btn", "primary"], [1, "mini-btn"], [1, "mini-btn", "danger"], [1, "tree-card"], [1, "stat-card"], [1, "stat-header"], [1, "stat-icon"], [1, "stat-label"], [1, "stat-value"], [1, "stat-note"], [1, "category-name-cell"], [1, "category-icon"], [1, "status-badge", 3, "ngClass"], [1, "action-icons"], ["aria-label", "Edit", 1, "icon-btn", "edit"], ["aria-label", "Delete", 1, "icon-btn", "delete"], [1, "tree-name"], [1, "tree-count"]],
        template: function CategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u25A6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Categories");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Manage book categories. Add, edit, or remove categories easily.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+ Add New Category");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CategoryComponent_mat_card_13_Template, 10, 6, "mat-card", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 7)(15, "mat-card", 8)(16, "div", 9)(17, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Categories List");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10)(20, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u2315");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12)(24, "table")(25, "thead")(26, "tr")(27, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "#");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Category Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Description");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Books Count");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Created At");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CategoryComponent_tr_42_Template, 24, 10, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Showing 1 to 8 of 8 categories ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "aside", 15)(46, "mat-card", 16)(47, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u2139\uFE0F");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Categories help you organize your books and make it easier for users to find what they need.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18)(52, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Quick Actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19)(55, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "+ Add Category");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u270E Edit Category");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\uD83D\uDDD1 Delete Category");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u21BB Refresh");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 23)(64, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Category Tree");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, CategoryComponent_li_67_Template, 7, 2, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stats);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryTree);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard],
        styles: [".category-page[_ngcontent-%COMP%] {\n  padding: 22px 18px 30px;\n  background: #eef3f8;\n  min-height: calc(100vh - 80px);\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n  padding: 6px 4px;\n}\n\n.page-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.page-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: linear-gradient(135deg, #7c3aed, #4f46e5);\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  box-shadow: 0 8px 18px rgba(86, 84, 196, 0.18);\n}\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2.1rem;\n  line-height: 1.2;\n  font-weight: 700;\n  color: #1f2937;\n}\n\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 0.92rem;\n}\n\n.primary-btn[_ngcontent-%COMP%], \n.mini-btn[_ngcontent-%COMP%], \n.icon-btn[_ngcontent-%COMP%] {\n  border: none;\n  cursor: pointer;\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4f46e5, #3b82f6);\n  color: #fff;\n  padding: 12px 18px;\n  border-radius: 10px;\n  font-weight: 600;\n  box-shadow: 0 8px 18px rgba(79, 70, 229, 0.22);\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(180px, 1fr));\n  gap: 18px;\n  margin-bottom: 20px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 14px !important;\n  padding: 18px 20px 14px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);\n  background: #fff;\n}\n\n.stat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  font-size: 1.1rem;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: #4b5563;\n  font-weight: 600;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #111827;\n  margin-bottom: 6px;\n}\n\n.stat-note[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #1f9d61;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 3.1fr) minmax(260px, 0.9fr);\n  gap: 20px;\n  align-items: start;\n}\n\n.table-panel[_ngcontent-%COMP%] {\n  border-radius: 14px !important;\n  background: #fff;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);\n  padding: 18px 18px 10px;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 14px;\n}\n\n.table-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.8rem;\n  color: #111827;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 10px 12px;\n  min-width: 280px;\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.92rem;\n  color: #111827;\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 14px 12px;\n  border-bottom: 1px solid #edf2f7;\n  vertical-align: middle;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n  text-transform: none;\n  font-weight: 700;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n.category-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: inline-grid;\n  place-items: center;\n  border-radius: 8px;\n  font-size: 0.9rem;\n}\n\ntd[_ngcontent-%COMP%] {\n  color: #374151;\n  font-size: 0.92rem;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 76px;\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n.status-badge.active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n\n.action-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.icon-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: #f3f4f6;\n  color: #374151;\n  font-size: 0.9rem;\n}\n\n.icon-btn.delete[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n\n.table-footer[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.82rem;\n  padding: 16px 6px 6px;\n}\n\n.side-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.info-card[_ngcontent-%COMP%], \n.quick-actions[_ngcontent-%COMP%], \n.tree-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);\n  padding: 18px 16px;\n}\n\n.info-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #eaf2ff;\n}\n\n.info-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: #dbeafe;\n  display: grid;\n  place-items: center;\n}\n\n.info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1f2937;\n  font-size: 0.9rem;\n  line-height: 1.55;\n}\n\n.quick-actions[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.tree-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  font-size: 1.2rem;\n  color: #111827;\n}\n\n.action-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.mini-btn[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.mini-btn.primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4f46e5, #3b82f6);\n  color: #fff;\n}\n\n.mini-btn.danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n\n.tree-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.tree-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #374151;\n  font-weight: 500;\n  padding: 4px 0;\n}\n\n.tree-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.tree-count[_ngcontent-%COMP%] {\n  min-width: 22px;\n  height: 22px;\n  display: inline-grid;\n  place-items: center;\n  border-radius: 999px;\n  background: #e5e7eb;\n  font-size: 0.77rem;\n  color: #374151;\n  padding: 0 6px;\n}\n\n@media (max-width: 1100px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(180px, 1fr));\n  }\n\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 700px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n\n  .search-box[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .table-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}"]
      });
    }
  }
  return CategoryComponent;
})();

/***/ }),

/***/ 1947:
/*!******************************************************!*\
  !*** ./src/app/features/category/category.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryModule: () => (/* binding */ CategoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ 6471);
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.component */ 9084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);







const routes = [{
  path: '',
  component: _category_component__WEBPACK_IMPORTED_MODULE_0__.CategoryComponent
}];
let CategoryModule = /*#__PURE__*/(() => {
  class CategoryModule {
    static {
      this.ɵfac = function CategoryModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CategoryModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: CategoryModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__.MatChipsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _category_component__WEBPACK_IMPORTED_MODULE_0__.CategoryComponent]
      });
    }
  }
  return CategoryModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CategoryModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__.MatChipsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _category_component__WEBPACK_IMPORTED_MODULE_0__.CategoryComponent]
  });
})();

/***/ }),

/***/ 6471:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/chips.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_CHIP: () => (/* binding */ MAT_CHIP),
/* harmony export */   MAT_CHIPS_DEFAULT_OPTIONS: () => (/* binding */ MAT_CHIPS_DEFAULT_OPTIONS),
/* harmony export */   MAT_CHIP_AVATAR: () => (/* binding */ MAT_CHIP_AVATAR),
/* harmony export */   MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR: () => (/* binding */ MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR),
/* harmony export */   MAT_CHIP_REMOVE: () => (/* binding */ MAT_CHIP_REMOVE),
/* harmony export */   MAT_CHIP_TRAILING_ICON: () => (/* binding */ MAT_CHIP_TRAILING_ICON),
/* harmony export */   MatChip: () => (/* binding */ MatChip),
/* harmony export */   MatChipAvatar: () => (/* binding */ MatChipAvatar),
/* harmony export */   MatChipEditInput: () => (/* binding */ MatChipEditInput),
/* harmony export */   MatChipGrid: () => (/* binding */ MatChipGrid),
/* harmony export */   MatChipGridChange: () => (/* binding */ MatChipGridChange),
/* harmony export */   MatChipInput: () => (/* binding */ MatChipInput),
/* harmony export */   MatChipListbox: () => (/* binding */ MatChipListbox),
/* harmony export */   MatChipListboxChange: () => (/* binding */ MatChipListboxChange),
/* harmony export */   MatChipOption: () => (/* binding */ MatChipOption),
/* harmony export */   MatChipRemove: () => (/* binding */ MatChipRemove),
/* harmony export */   MatChipRow: () => (/* binding */ MatChipRow),
/* harmony export */   MatChipSelectionChange: () => (/* binding */ MatChipSelectionChange),
/* harmony export */   MatChipSet: () => (/* binding */ MatChipSet),
/* harmony export */   MatChipTrailingIcon: () => (/* binding */ MatChipTrailingIcon),
/* harmony export */   MatChipsModule: () => (/* binding */ MatChipsModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 5310);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ 9022);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/a11y */ 6407);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ 7035);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/keycodes */ 7336);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/private */ 4790);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/private */ 9046);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 7786);
/* harmony import */ var _structural_styles_BQUT6wsL_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./structural-styles-BQUT6wsL.mjs */ 4667);
/* harmony import */ var _ripple_BT3tzh6F_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ripple-BT3tzh6F.mjs */ 8512);
/* harmony import */ var _ripple_loader_Ce3DAhPW_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ripple-loader-Ce3DAhPW.mjs */ 7768);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 9172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 5558);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ 1845);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _error_options_Dm2JJUbF_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./error-options-Dm2JJUbF.mjs */ 4044);
/* harmony import */ var _error_state_Dtb1IHM_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./error-state-Dtb1IHM-.mjs */ 5483);
/* harmony import */ var _form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form-field-DqPi4knt.mjs */ 417);
/* harmony import */ var _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./common-module-WayjW0Pb.mjs */ 777);
/* harmony import */ var _index_SYVYjXwK_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./index-SYVYjXwK.mjs */ 8296);






















/** Injection token to be used to override the default options for the chips module. */
const _c0 = ["*", [["mat-chip-avatar"], ["", "matChipAvatar", ""]], [["mat-chip-trailing-icon"], ["", "matChipRemove", ""], ["", "matChipTrailingIcon", ""]]];
const _c1 = ["*", "mat-chip-avatar, [matChipAvatar]", "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];
function MatChip_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MatChip_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MatChipOption_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function MatChipOption_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c2 = ".mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}@media(forced-colors: active){.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{forced-color-adjust:none}}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-outline-width, 1px);border-radius:var(--mdc-chip-container-shape-radius, 8px);box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-outline-color, var(--mat-sys-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mdc-chip-focus-outline-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-flat-selected-outline-width, 0)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mdc-chip-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mdc-chip-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mdc-chip-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mdc-chip-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mdc-chip-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-label-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-selected-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mdc-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mdc-chip-with-avatar-avatar-size, 24px);height:var(--mdc-chip-with-avatar-avatar-size, 24px);font-size:var(--mdc-chip-with-avatar-avatar-size, 24px)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@media(forced-colors: active){.mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity, 1)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity, 1)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mat-mdc-standard-chip{border-radius:var(--mdc-chip-container-shape-radius, 8px);height:var(--mdc-chip-container-height, 32px)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-container-color, transparent)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-sys-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}@media(forced-colors: active){.mat-mdc-standard-chip{outline:solid 1px}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mdc-chip-with-avatar-avatar-shape-radius, 24px);width:var(--mdc-chip-with-icon-icon-size, 18px);height:var(--mdc-chip-with-icon-icon-size, 18px);font-size:var(--mdc-chip-with-icon-icon-size, 18px)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-highlighted{--mdc-chip-with-icon-icon-color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));--mdc-chip-elevated-container-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));--mdc-chip-label-text-color:var(--mdc-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));--mdc-chip-outline-width:var(--mdc-chip-flat-selected-outline-width, 0)}.mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mdc-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mdc-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mdc-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mdc-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mdc-chip-with-avatar-disabled-avatar-opacity, 0.38)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mdc-chip-with-icon-disabled-icon-opacity, 0.38)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity, 1)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity, 1)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity, 1)}.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mdc-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:\"\";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}@media(forced-colors: active){.mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}}.mat-mdc-chip-action:focus .mat-focus-indicator::before{content:\"\"}.mdc-evolution-chip__icon,.mat-mdc-chip-remove .mat-icon{min-height:fit-content}\n";
const _c3 = [[["mat-chip-avatar"], ["", "matChipAvatar", ""]], [["", "matChipEditInput", ""]], "*", [["mat-chip-trailing-icon"], ["", "matChipRemove", ""], ["", "matChipTrailingIcon", ""]]];
const _c4 = ["mat-chip-avatar, [matChipAvatar]", "[matChipEditInput]", "*", "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];
function MatChipRow_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
  }
}
function MatChipRow_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MatChipRow_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1);
  }
}
function MatChipRow_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
  }
}
function MatChipRow_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatChipRow_Conditional_4_Conditional_0_Template, 1, 0)(1, MatChipRow_Conditional_4_Conditional_1_Template, 1, 0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r0.contentEditInput ? 0 : 1);
  }
}
function MatChipRow_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 2);
  }
}
function MatChipRow_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c5 = ["*"];
const _c6 = ".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}\n";
const MAT_CHIPS_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-chips-default-options', {
  providedIn: 'root',
  factory: () => ({
    separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.c]
  })
});
/**
 * Injection token that can be used to reference instances of `MatChipAvatar`. It serves as
 * alternative token to the actual `MatChipAvatar` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_CHIP_AVATAR = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatChipAvatar');
/**
 * Injection token that can be used to reference instances of `MatChipTrailingIcon`. It serves as
 * alternative token to the actual `MatChipTrailingIcon` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_CHIP_TRAILING_ICON = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatChipTrailingIcon');
/**
 * Injection token that can be used to reference instances of `MatChipRemove`. It serves as
 * alternative token to the actual `MatChipRemove` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_CHIP_REMOVE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatChipRemove');
/**
 * Injection token used to avoid a circular dependency between the `MatChip` and `MatChipAction`.
 */
const MAT_CHIP = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatChip');

/**
 * Section within a chip.
 * @docs-private
 */
let MatChipAction = /*#__PURE__*/(() => {
  class MatChipAction {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _parentChip = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_CHIP);
    /** Whether the action is interactive. */
    isInteractive = true;
    /** Whether this is the primary action in the chip. */
    _isPrimary = true;
    /** Whether the action is disabled. */
    get disabled() {
      return this._disabled || this._parentChip?.disabled || false;
    }
    set disabled(value) {
      this._disabled = value;
    }
    _disabled = false;
    /** Tab index of the action. */
    tabIndex = -1;
    /**
     * Private API to allow focusing this chip when it is disabled.
     */
    _allowFocusWhenDisabled = false;
    /**
     * Determine the value of the disabled attribute for this chip action.
     */
    _getDisabledAttribute() {
      // When this chip action is disabled and focusing disabled chips is not permitted, return empty
      // string to indicate that disabled attribute should be included.
      return this.disabled && !this._allowFocusWhenDisabled ? '' : null;
    }
    /**
     * Determine the value of the tabindex attribute for this chip action.
     */
    _getTabindex() {
      return this.disabled && !this._allowFocusWhenDisabled || !this.isInteractive ? null : this.tabIndex.toString();
    }
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_2__._).load(_structural_styles_BQUT6wsL_mjs__WEBPACK_IMPORTED_MODULE_3__._);
      if (this._elementRef.nativeElement.nodeName === 'BUTTON') {
        this._elementRef.nativeElement.setAttribute('type', 'button');
      }
    }
    focus() {
      this._elementRef.nativeElement.focus();
    }
    _handleClick(event) {
      if (!this.disabled && this.isInteractive && this._isPrimary) {
        event.preventDefault();
        this._parentChip._handlePrimaryActionInteraction();
      }
    }
    _handleKeydown(event) {
      if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.c || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.S) && !this.disabled && this.isInteractive && this._isPrimary && !this._parentChip._isEditing) {
        event.preventDefault();
        this._parentChip._handlePrimaryActionInteraction();
      }
    }
    static ɵfac = function MatChipAction_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatChipAction)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatChipAction,
      selectors: [["", "matChipAction", ""]],
      hostAttrs: [1, "mdc-evolution-chip__action", "mat-mdc-chip-action"],
      hostVars: 9,
      hostBindings: function MatChipAction_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatChipAction_click_HostBindingHandler($event) {
            return ctx._handleClick($event);
          })("keydown", function MatChipAction_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._getTabindex())("disabled", ctx._getDisabledAttribute())("aria-disabled", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-evolution-chip__action--primary", ctx._isPrimary)("mdc-evolution-chip__action--presentational", !ctx.isInteractive)("mdc-evolution-chip__action--trailing", !ctx._isPrimary);
        }
      },
      inputs: {
        isInteractive: "isInteractive",
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? -1 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value)],
        _allowFocusWhenDisabled: "_allowFocusWhenDisabled"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
    });
  }
  return MatChipAction;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Avatar image within a chip. */
let MatChipAvatar = /*#__PURE__*/(() => {
  class MatChipAvatar {
    static ɵfac = function MatChipAvatar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatChipAvatar)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatChipAvatar,
      selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
      hostAttrs: ["role", "img", 1, "mat-mdc-chip-avatar", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--primary"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_CHIP_AVATAR,
        useExisting: MatChipAvatar
      }])]
    });
  }
  return MatChipAvatar;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Non-interactive trailing icon in a chip. */
let MatChipTrailingIcon = /*#__PURE__*/(() => {
  class MatChipTrailingIcon extends MatChipAction {
    /**
     * MDC considers all trailing actions as a remove icon,
     * but we support non-interactive trailing icons.
     */
    isInteractive = false;
    _isPrimary = false;
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatChipTrailingIcon_BaseFactory;
      return function MatChipTrailingIcon_Factory(__ngFactoryType__) {
        return (ɵMatChipTrailingIcon_BaseFactory || (ɵMatChipTrailingIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatChipTrailingIcon)))(__ngFactoryType__ || MatChipTrailingIcon);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatChipTrailingIcon,
      selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]],
      hostAttrs: ["aria-hidden", "true", 1, "mat-mdc-chip-trailing-icon", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--trailing"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_CHIP_TRAILING_ICON,
        useExisting: MatChipTrailingIcon
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatChipTrailingIcon;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive to remove the parent chip when the trailing icon is clicked or
 * when the ENTER key is pressed on it.
 *
 * Recommended for use with the Material Design "cancel" icon
 * available at https://material.io/icons/#ic_cancel.
 *
 * Example:
 *
 * ```
 * <mat-chip>
 *   <mat-icon matChipRemove>cancel</mat-icon>
 * </mat-chip>
 * ```
 */
let MatChipRemove = /*#__PURE__*/(() => {
  class MatChipRemove extends MatChipAction {
    _isPrimary = false;
    _handleClick(event) {
      if (!this.disabled) {
        event.stopPropagation();
        event.preventDefault();
        this._parentChip.remove();
      }
    }
    _handleKeydown(event) {
      if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.c || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.S) && !this.disabled) {
        event.stopPropagation();
        event.preventDefault();
        this._parentChip.remove();
      }
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatChipRemove_BaseFactory;
      return function MatChipRemove_Factory(__ngFactoryType__) {
        return (ɵMatChipRemove_BaseFactory || (ɵMatChipRemove_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatChipRemove)))(__ngFactoryType__ || MatChipRemove);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatChipRemove,
      selectors: [["", "matChipRemove", ""]],
      hostAttrs: ["role", "button", 1, "mat-mdc-chip-remove", "mat-mdc-chip-trailing-icon", "mat-focus-indicator", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--trailing"],
      hostVars: 1,
      hostBindings: function MatChipRemove_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", null);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_CHIP_REMOVE,
        useExisting: MatChipRemove
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatChipRemove;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Material design styled Chip base component. Used inside the MatChipSet component.
 *
 * Extended by MatChipOption and MatChipRow for different interaction patterns.
 */
let MatChip = /*#__PURE__*/(() => {
  class MatChip {
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.F);
    _globalRippleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ripple_BT3tzh6F_mjs__WEBPACK_IMPORTED_MODULE_5__.a, {
      optional: true
    });
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT);
    /** Emits when the chip is focused. */
    _onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    /** Emits when the chip is blurred. */
    _onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    /** Whether this chip is a basic (unstyled) chip. */
    _isBasicChip;
    /** Role for the root of the chip. */
    role = null;
    /** Whether the chip has focus. */
    _hasFocusInternal = false;
    /** Whether moving focus into the chip is pending. */
    _pendingFocus;
    /** Subscription to changes in the chip's actions. */
    _actionChanges;
    /** Whether animations for the chip are enabled. */
    _animationsDisabled;
    /** All avatars present in the chip. */
    _allLeadingIcons;
    /** All trailing icons present in the chip. */
    _allTrailingIcons;
    /** All remove icons present in the chip. */
    _allRemoveIcons;
    _hasFocus() {
      return this._hasFocusInternal;
    }
    /** A unique id for the chip. If none is supplied, it will be auto-generated. */
    id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__._).getId('mat-mdc-chip-');
    // TODO(#26104): Consider deprecating and using `_computeAriaAccessibleName` instead.
    // `ariaLabel` may be unnecessary, and `_computeAriaAccessibleName` only supports
    // datepicker's use case.
    /** ARIA label for the content of the chip. */
    ariaLabel = null;
    // TODO(#26104): Consider deprecating and using `_computeAriaAccessibleName` instead.
    // `ariaDescription` may be unnecessary, and `_computeAriaAccessibleName` only supports
    // datepicker's use case.
    /** ARIA description for the content of the chip. */
    ariaDescription = null;
    /** Id of a span that contains this chip's aria description. */
    _ariaDescriptionId = `${this.id}-aria-description`;
    /** Whether the chip list is disabled. */
    _chipListDisabled = false;
    _textElement;
    /**
     * The value of the chip. Defaults to the content inside
     * the `mat-mdc-chip-action-label` element.
     */
    get value() {
      return this._value !== undefined ? this._value : this._textElement.textContent.trim();
    }
    set value(value) {
      this._value = value;
    }
    _value;
    // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
    /**
     * Theme color of the chip. This API is supported in M2 themes only, it has no
     * effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/chips/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    color;
    /**
     * Determines whether or not the chip displays the remove styling and emits (removed) events.
     */
    removable = true;
    /**
     * Colors the chip for emphasis as if it were selected.
     */
    highlighted = false;
    /** Whether the ripple effect is disabled or not. */
    disableRipple = false;
    /** Whether the chip is disabled. */
    get disabled() {
      return this._disabled || this._chipListDisabled;
    }
    set disabled(value) {
      this._disabled = value;
    }
    _disabled = false;
    /** Emitted when a chip is to be removed. */
    removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emitted when the chip is destroyed. */
    destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** The unstyled chip selector for this component. */
    basicChipAttrName = 'mat-basic-chip';
    /** The chip's leading icon. */
    leadingIcon;
    /** The chip's trailing icon. */
    trailingIcon;
    /** The chip's trailing remove icon. */
    removeIcon;
    /** Action receiving the primary set of user interactions. */
    primaryAction;
    /**
     * Handles the lazy creation of the MatChip ripple.
     * Used to improve initial load time of large applications.
     */
    _rippleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ripple_loader_Ce3DAhPW_mjs__WEBPACK_IMPORTED_MODULE_9__.M);
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    constructor() {
      const styleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_2__._);
      styleLoader.load(_structural_styles_BQUT6wsL_mjs__WEBPACK_IMPORTED_MODULE_3__._);
      styleLoader.load(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_10__._VisuallyHiddenLoader);
      const animationMode = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, {
        optional: true
      });
      this._animationsDisabled = animationMode === 'NoopAnimations';
      this._monitorFocus();
      this._rippleLoader?.configureRipple(this._elementRef.nativeElement, {
        className: 'mat-mdc-chip-ripple',
        disabled: this._isRippleDisabled()
      });
    }
    ngOnInit() {
      // This check needs to happen in `ngOnInit` so the overridden value of
      // `basicChipAttrName` coming from base classes can be picked up.
      const element = this._elementRef.nativeElement;
      this._isBasicChip = element.hasAttribute(this.basicChipAttrName) || element.tagName.toLowerCase() === this.basicChipAttrName;
    }
    ngAfterViewInit() {
      this._textElement = this._elementRef.nativeElement.querySelector('.mat-mdc-chip-action-label');
      if (this._pendingFocus) {
        this._pendingFocus = false;
        this.focus();
      }
    }
    ngAfterContentInit() {
      // Since the styling depends on the presence of some
      // actions, we have to mark for check on changes.
      this._actionChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(this._allLeadingIcons.changes, this._allTrailingIcons.changes, this._allRemoveIcons.changes).subscribe(() => this._changeDetectorRef.markForCheck());
    }
    ngDoCheck() {
      this._rippleLoader.setDisabled(this._elementRef.nativeElement, this._isRippleDisabled());
    }
    ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this._elementRef);
      this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
      this._actionChanges?.unsubscribe();
      this.destroyed.emit({
        chip: this
      });
      this.destroyed.complete();
    }
    /**
     * Allows for programmatic removal of the chip.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     */
    remove() {
      if (this.removable) {
        this.removed.emit({
          chip: this
        });
      }
    }
    /** Whether or not the ripple should be disabled. */
    _isRippleDisabled() {
      return this.disabled || this.disableRipple || this._animationsDisabled || this._isBasicChip || !!this._globalRippleOptions?.disabled;
    }
    /** Returns whether the chip has a trailing icon. */
    _hasTrailingIcon() {
      return !!(this.trailingIcon || this.removeIcon);
    }
    /** Handles keyboard events on the chip. */
    _handleKeydown(event) {
      // Ignore backspace events where the user is holding down the key
      // so that we don't accidentally remove too many chips.
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.B && !event.repeat || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.i) {
        event.preventDefault();
        this.remove();
      }
    }
    /** Allows for programmatic focusing of the chip. */
    focus() {
      if (!this.disabled) {
        // If `focus` is called before `ngAfterViewInit`, we won't have access to the primary action.
        // This can happen if the consumer tries to focus a chip immediately after it is added.
        // Queue the method to be called again on init.
        if (this.primaryAction) {
          this.primaryAction.focus();
        } else {
          this._pendingFocus = true;
        }
      }
    }
    /** Gets the action that contains a specific target node. */
    _getSourceAction(target) {
      return this._getActions().find(action => {
        const element = action._elementRef.nativeElement;
        return element === target || element.contains(target);
      });
    }
    /** Gets all of the actions within the chip. */
    _getActions() {
      const result = [];
      if (this.primaryAction) {
        result.push(this.primaryAction);
      }
      if (this.removeIcon) {
        result.push(this.removeIcon);
      }
      if (this.trailingIcon) {
        result.push(this.trailingIcon);
      }
      return result;
    }
    /** Handles interactions with the primary action of the chip. */
    _handlePrimaryActionInteraction() {
      // Empty here, but is overwritten in child classes.
    }
    /** Starts the focus monitoring process on the chip. */
    _monitorFocus() {
      this._focusMonitor.monitor(this._elementRef, true).subscribe(origin => {
        const hasFocus = origin !== null;
        if (hasFocus !== this._hasFocusInternal) {
          this._hasFocusInternal = hasFocus;
          if (hasFocus) {
            this._onFocus.next({
              chip: this
            });
          } else {
            // When animations are enabled, Angular may end up removing the chip from the DOM a little
            // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
            // that moves focus to the next item. To work around the issue, we defer marking the chip
            // as not focused until after the next render.
            this._changeDetectorRef.markForCheck();
            setTimeout(() => this._ngZone.run(() => this._onBlur.next({
              chip: this
            })));
          }
        }
      });
    }
    static ɵfac = function MatChip_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatChip)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatChip,
      selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
      contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_AVATAR, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_TRAILING_ICON, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_REMOVE, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_AVATAR, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_TRAILING_ICON, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_REMOVE, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.leadingIcon = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trailingIcon = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.removeIcon = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allLeadingIcons = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allTrailingIcons = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allRemoveIcons = _t);
        }
      },
      viewQuery: function MatChip_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatChipAction, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.primaryAction = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-chip"],
      hostVars: 31,
      hostBindings: function MatChip_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatChip_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("aria-label", ctx.ariaLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mat-" + (ctx.color || "primary"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-evolution-chip", !ctx._isBasicChip)("mdc-evolution-chip--disabled", ctx.disabled)("mdc-evolution-chip--with-trailing-action", ctx._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic", ctx.leadingIcon)("mdc-evolution-chip--with-primary-icon", ctx.leadingIcon)("mdc-evolution-chip--with-avatar", ctx.leadingIcon)("mat-mdc-chip-with-avatar", ctx.leadingIcon)("mat-mdc-chip-highlighted", ctx.highlighted)("mat-mdc-chip-disabled", ctx.disabled)("mat-mdc-basic-chip", ctx._isBasicChip)("mat-mdc-standard-chip", !ctx._isBasicChip)("mat-mdc-chip-with-trailing-icon", ctx._hasTrailingIcon())("_mat-animation-noopable", ctx._animationsDisabled);
        }
      },
      inputs: {
        role: "role",
        id: "id",
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaDescription: [0, "aria-description", "ariaDescription"],
        value: "value",
        color: "color",
        removable: [2, "removable", "removable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        highlighted: [2, "highlighted", "highlighted", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        removed: "removed",
        destroyed: "destroyed"
      },
      exportAs: ["matChip"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_CHIP,
        useExisting: MatChip
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      ngContentSelectors: _c1,
      decls: 8,
      vars: 3,
      consts: [[1, "mat-mdc-chip-focus-overlay"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary"], ["matChipAction", "", 3, "isInteractive"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], [1, "mat-mdc-chip-primary-focus-indicator", "mat-focus-indicator"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"]],
      template: function MatChip_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1)(2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatChip_Conditional_3_Template, 2, 0, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MatChip_Conditional_7_Template, 2, 0, "span", 6);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isInteractive", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.leadingIcon ? 3 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasTrailingIcon() ? 7 : -1);
        }
      },
      dependencies: [MatChipAction],
      styles: [".mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}@media(forced-colors: active){.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{forced-color-adjust:none}}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-outline-width, 1px);border-radius:var(--mdc-chip-container-shape-radius, 8px);box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-outline-color, var(--mat-sys-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mdc-chip-focus-outline-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-flat-selected-outline-width, 0)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mdc-chip-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mdc-chip-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mdc-chip-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mdc-chip-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mdc-chip-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-label-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-selected-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mdc-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mdc-chip-with-avatar-avatar-size, 24px);height:var(--mdc-chip-with-avatar-avatar-size, 24px);font-size:var(--mdc-chip-with-avatar-avatar-size, 24px)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@media(forced-colors: active){.mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity, 1)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity, 1)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mat-mdc-standard-chip{border-radius:var(--mdc-chip-container-shape-radius, 8px);height:var(--mdc-chip-container-height, 32px)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-container-color, transparent)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-sys-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}@media(forced-colors: active){.mat-mdc-standard-chip{outline:solid 1px}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mdc-chip-with-avatar-avatar-shape-radius, 24px);width:var(--mdc-chip-with-icon-icon-size, 18px);height:var(--mdc-chip-with-icon-icon-size, 18px);font-size:var(--mdc-chip-with-icon-icon-size, 18px)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-highlighted{--mdc-chip-with-icon-icon-color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));--mdc-chip-elevated-container-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));--mdc-chip-label-text-color:var(--mdc-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));--mdc-chip-outline-width:var(--mdc-chip-flat-selected-outline-width, 0)}.mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mdc-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mdc-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mdc-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mdc-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mdc-chip-with-avatar-disabled-avatar-opacity, 0.38)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mdc-chip-with-icon-disabled-icon-opacity, 0.38)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity, 1)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity, 1)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity, 1)}.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mdc-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:\"\";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}@media(forced-colors: active){.mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}}.mat-mdc-chip-action:focus .mat-focus-indicator::before{content:\"\"}.mdc-evolution-chip__icon,.mat-mdc-chip-remove .mat-icon{min-height:fit-content}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatChip;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Event object emitted by MatChipOption when selected or deselected. */
class MatChipSelectionChange {
  source;
  selected;
  isUserInput;
  constructor(/** Reference to the chip that emitted the event. */
  source, /** Whether the chip that emitted the event is selected. */
  selected, /** Whether the selection change was a result of a user interaction. */
  isUserInput = false) {
    this.source = source;
    this.selected = selected;
    this.isUserInput = isUserInput;
  }
}
/**
 * An extension of the MatChip component that supports chip selection. Used with MatChipListbox.
 *
 * Unlike other chips, the user can focus on disabled chip options inside a MatChipListbox. The
 * user cannot click disabled chips.
 */
let MatChipOption = /*#__PURE__*/(() => {
  class MatChipOption extends MatChip {
    /** Default chip options. */
    _defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_CHIPS_DEFAULT_OPTIONS, {
      optional: true
    });
    /** Whether the chip list is selectable. */
    chipListSelectable = true;
    /** Whether the chip list is in multi-selection mode. */
    _chipListMultiple = false;
    /** Whether the chip list hides single-selection indicator. */
    _chipListHideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
    /**
     * Whether or not the chip is selectable.
     *
     * When a chip is not selectable, changes to its selected state are always
     * ignored. By default an option chip is selectable, and it becomes
     * non-selectable if its parent chip list is not selectable.
     */
    get selectable() {
      return this._selectable && this.chipListSelectable;
    }
    set selectable(value) {
      this._selectable = value;
      this._changeDetectorRef.markForCheck();
    }
    _selectable = true;
    /** Whether the chip is selected. */
    get selected() {
      return this._selected;
    }
    set selected(value) {
      this._setSelectedState(value, false, true);
    }
    _selected = false;
    /**
     * The ARIA selected applied to the chip. Conforms to WAI ARIA best practices for listbox
     * interaction patterns.
     *
     * From [WAI ARIA Listbox authoring practices guide](
     * https://www.w3.org/WAI/ARIA/apg/patterns/listbox/):
     *  "If any options are selected, each selected option has either aria-selected or aria-checked
     *  set to true. All options that are selectable but not selected have either aria-selected or
     *  aria-checked set to false."
     *
     * Set `aria-selected="false"` on not-selected listbox options that are selectable to fix
     * VoiceOver reading every option as "selected" (#25736).
     */
    get ariaSelected() {
      return this.selectable ? this.selected.toString() : null;
    }
    /** The unstyled chip selector for this component. */
    basicChipAttrName = 'mat-basic-chip-option';
    /** Emitted when the chip is selected or deselected. */
    selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    ngOnInit() {
      super.ngOnInit();
      this.role = 'presentation';
    }
    /** Selects the chip. */
    select() {
      this._setSelectedState(true, false, true);
    }
    /** Deselects the chip. */
    deselect() {
      this._setSelectedState(false, false, true);
    }
    /** Selects this chip and emits userInputSelection event */
    selectViaInteraction() {
      this._setSelectedState(true, true, true);
    }
    /** Toggles the current selected state of this chip. */
    toggleSelected(isUserInput = false) {
      this._setSelectedState(!this.selected, isUserInput, true);
      return this.selected;
    }
    _handlePrimaryActionInteraction() {
      if (!this.disabled) {
        // Interacting with the primary action implies that the chip already has focus, however
        // there's a bug in Safari where focus ends up lingering on the previous chip (see #27544).
        // We work around it by explicitly focusing the primary action of the current chip.
        this.focus();
        if (this.selectable) {
          this.toggleSelected(true);
        }
      }
    }
    _hasLeadingGraphic() {
      if (this.leadingIcon) {
        return true;
      }
      // The checkmark graphic communicates selected state for both single-select and multi-select.
      // Include checkmark in single-select to fix a11y issue where selected state is communicated
      // visually only using color (#25886).
      return !this._chipListHideSingleSelectionIndicator || this._chipListMultiple;
    }
    _setSelectedState(isSelected, isUserInput, emitEvent) {
      if (isSelected !== this.selected) {
        this._selected = isSelected;
        if (emitEvent) {
          this.selectionChange.emit({
            source: this,
            isUserInput,
            selected: this.selected
          });
        }
        this._changeDetectorRef.markForCheck();
      }
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatChipOption_BaseFactory;
      return function MatChipOption_Factory(__ngFactoryType__) {
        return (ɵMatChipOption_BaseFactory || (ɵMatChipOption_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatChipOption)))(__ngFactoryType__ || MatChipOption);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatChipOption,
      selectors: [["mat-basic-chip-option"], ["", "mat-basic-chip-option", ""], ["mat-chip-option"], ["", "mat-chip-option", ""]],
      hostAttrs: [1, "mat-mdc-chip", "mat-mdc-chip-option"],
      hostVars: 37,
      hostBindings: function MatChipOption_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("aria-label", null)("aria-description", null)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-evolution-chip", !ctx._isBasicChip)("mdc-evolution-chip--filter", !ctx._isBasicChip)("mdc-evolution-chip--selectable", !ctx._isBasicChip)("mat-mdc-chip-selected", ctx.selected)("mat-mdc-chip-multiple", ctx._chipListMultiple)("mat-mdc-chip-disabled", ctx.disabled)("mat-mdc-chip-with-avatar", ctx.leadingIcon)("mdc-evolution-chip--disabled", ctx.disabled)("mdc-evolution-chip--selected", ctx.selected)("mdc-evolution-chip--selecting", !ctx._animationsDisabled)("mdc-evolution-chip--with-trailing-action", ctx._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon", ctx.leadingIcon)("mdc-evolution-chip--with-primary-graphic", ctx._hasLeadingGraphic())("mdc-evolution-chip--with-avatar", ctx.leadingIcon)("mat-mdc-chip-highlighted", ctx.highlighted)("mat-mdc-chip-with-trailing-icon", ctx._hasTrailingIcon());
        }
      },
      inputs: {
        selectable: [2, "selectable", "selectable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        selected: [2, "selected", "selected", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        selectionChange: "selectionChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MatChip,
        useExisting: MatChipOption
      }, {
        provide: MAT_CHIP,
        useExisting: MatChipOption
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 10,
      vars: 8,
      consts: [[1, "mat-mdc-chip-focus-overlay"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary"], ["matChipAction", "", "role", "option", 3, "_allowFocusWhenDisabled"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], [1, "mat-mdc-chip-primary-focus-indicator", "mat-focus-indicator"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"], [1, "cdk-visually-hidden", 3, "id"], [1, "mdc-evolution-chip__checkmark"], ["viewBox", "-2 -3 30 30", "focusable", "false", "aria-hidden", "true", 1, "mdc-evolution-chip__checkmark-svg"], ["fill", "none", "stroke", "currentColor", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-evolution-chip__checkmark-path"]],
      template: function MatChipOption_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatChipOption_Conditional_3_Template, 5, 0, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MatChipOption_Conditional_7_Template, 2, 0, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("_allowFocusWhenDisabled", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", ctx.ariaSelected)("aria-label", ctx.ariaLabel)("aria-describedby", ctx._ariaDescriptionId);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasLeadingGraphic() ? 3 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasTrailingIcon() ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._ariaDescriptionId);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ariaDescription);
        }
      },
      dependencies: [MatChipAction],
      styles: [_c2],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatChipOption;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * A directive that makes a span editable and exposes functions to modify and retrieve the
 * element's contents.
 */
let MatChipEditInput = /*#__PURE__*/(() => {
  class MatChipEditInput {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT);
    constructor() {}
    initialize(initialValue) {
      this.getNativeElement().focus();
      this.setValue(initialValue);
    }
    getNativeElement() {
      return this._elementRef.nativeElement;
    }
    setValue(value) {
      this.getNativeElement().textContent = value;
      this._moveCursorToEndOfInput();
    }
    getValue() {
      return this.getNativeElement().textContent || '';
    }
    _moveCursorToEndOfInput() {
      const range = this._document.createRange();
      range.selectNodeContents(this.getNativeElement());
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
    static ɵfac = function MatChipEditInput_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatChipEditInput)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatChipEditInput,
      selectors: [["span", "matChipEditInput", ""]],
      hostAttrs: ["role", "textbox", "tabindex", "-1", "contenteditable", "true", 1, "mat-chip-edit-input"]
    });
  }
  return MatChipEditInput;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * An extension of the MatChip component used with MatChipGrid and
 * the matChipInputFor directive.
 */
let MatChipRow = /*#__PURE__*/(() => {
  class MatChipRow extends MatChip {
    basicChipAttrName = 'mat-basic-chip-row';
    /**
     * The editing action has to be triggered in a timeout. While we're waiting on it, a blur
     * event might occur which will interrupt the editing. This flag is used to avoid interruptions
     * while the editing action is being initialized.
     */
    _editStartPending = false;
    editable = false;
    /** Emitted when the chip is edited. */
    edited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** The default chip edit input that is used if none is projected into this chip row. */
    defaultEditInput;
    /** The projected chip edit input. */
    contentEditInput;
    _isEditing = false;
    constructor() {
      super();
      this.role = 'row';
      this._onBlur.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroyed)).subscribe(() => {
        if (this._isEditing && !this._editStartPending) {
          this._onEditFinish();
        }
      });
    }
    _hasTrailingIcon() {
      // The trailing icon is hidden while editing.
      return !this._isEditing && super._hasTrailingIcon();
    }
    /** Sends focus to the first gridcell when the user clicks anywhere inside the chip. */
    _handleFocus() {
      if (!this._isEditing && !this.disabled) {
        this.focus();
      }
    }
    _handleKeydown(event) {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.c && !this.disabled) {
        if (this._isEditing) {
          event.preventDefault();
          this._onEditFinish();
        } else if (this.editable) {
          this._startEditing(event);
        }
      } else if (this._isEditing) {
        // Stop the event from reaching the chip set in order to avoid navigating.
        event.stopPropagation();
      } else {
        super._handleKeydown(event);
      }
    }
    _handleDoubleclick(event) {
      if (!this.disabled && this.editable) {
        this._startEditing(event);
      }
    }
    _startEditing(event) {
      if (!this.primaryAction || this.removeIcon && this._getSourceAction(event.target) === this.removeIcon) {
        return;
      }
      // The value depends on the DOM so we need to extract it before we flip the flag.
      const value = this.value;
      this._isEditing = this._editStartPending = true;
      // Defer initializing the input until after it has been added to the DOM.
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
        this._getEditInput().initialize(value);
        this._editStartPending = false;
      }, {
        injector: this._injector
      });
    }
    _onEditFinish() {
      this._isEditing = this._editStartPending = false;
      this.edited.emit({
        chip: this,
        value: this._getEditInput().getValue()
      });
      // If the edit input is still focused or focus was returned to the body after it was destroyed,
      // return focus to the chip contents.
      if (this._document.activeElement === this._getEditInput().getNativeElement() || this._document.activeElement === this._document.body) {
        this.primaryAction.focus();
      }
    }
    _isRippleDisabled() {
      return super._isRippleDisabled() || this._isEditing;
    }
    /**
     * Gets the projected chip edit input, or the default input if none is projected in. One of these
     * two values is guaranteed to be defined.
     */
    _getEditInput() {
      return this.contentEditInput || this.defaultEditInput;
    }
    static ɵfac = function MatChipRow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatChipRow)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatChipRow,
      selectors: [["mat-chip-row"], ["", "mat-chip-row", ""], ["mat-basic-chip-row"], ["", "mat-basic-chip-row", ""]],
      contentQueries: function MatChipRow_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatChipEditInput, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentEditInput = _t.first);
        }
      },
      viewQuery: function MatChipRow_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatChipEditInput, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.defaultEditInput = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-chip", "mat-mdc-chip-row", "mdc-evolution-chip"],
      hostVars: 27,
      hostBindings: function MatChipRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatChipRow_focus_HostBindingHandler() {
            return ctx._handleFocus();
          })("dblclick", function MatChipRow_dblclick_HostBindingHandler($event) {
            return ctx._handleDoubleclick($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1)("aria-label", null)("aria-description", null)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-chip-with-avatar", ctx.leadingIcon)("mat-mdc-chip-disabled", ctx.disabled)("mat-mdc-chip-editing", ctx._isEditing)("mat-mdc-chip-editable", ctx.editable)("mdc-evolution-chip--disabled", ctx.disabled)("mdc-evolution-chip--with-trailing-action", ctx._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic", ctx.leadingIcon)("mdc-evolution-chip--with-primary-icon", ctx.leadingIcon)("mdc-evolution-chip--with-avatar", ctx.leadingIcon)("mat-mdc-chip-highlighted", ctx.highlighted)("mat-mdc-chip-with-trailing-icon", ctx._hasTrailingIcon());
        }
      },
      inputs: {
        editable: "editable"
      },
      outputs: {
        edited: "edited"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MatChip,
        useExisting: MatChipRow
      }, {
        provide: MAT_CHIP,
        useExisting: MatChipRow
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c4,
      decls: 10,
      vars: 9,
      consts: [[1, "mat-mdc-chip-focus-overlay"], ["role", "gridcell", "matChipAction", "", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary", 3, "disabled"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], ["aria-hidden", "true", 1, "mat-mdc-chip-primary-focus-indicator", "mat-focus-indicator"], ["role", "gridcell", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"], [1, "cdk-visually-hidden", 3, "id"], ["matChipEditInput", ""]],
      template: function MatChipRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatChipRow_Conditional_0_Template, 1, 0, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatChipRow_Conditional_2_Template, 2, 0, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatChipRow_Conditional_4_Template, 2, 1)(5, MatChipRow_Conditional_5_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MatChipRow_Conditional_7_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx._isEditing ? 0 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-describedby", ctx._ariaDescriptionId);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.leadingIcon ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._isEditing ? 4 : 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasTrailingIcon() ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._ariaDescriptionId);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ariaDescription);
        }
      },
      dependencies: [MatChipAction, MatChipEditInput],
      styles: [_c2],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatChipRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Basic container component for the MatChip component.
 *
 * Extended by MatChipListbox and MatChipGrid for different interaction patterns.
 */
let MatChipSet = /*#__PURE__*/(() => {
  class MatChipSet {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    _dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.D, {
      optional: true
    });
    /** Index of the last destroyed chip that had focus. */
    _lastDestroyedFocusedChipIndex = null;
    /** Used to manage focus within the chip list. */
    _keyManager;
    /** Subject that emits when the component has been destroyed. */
    _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    /** Role to use if it hasn't been overwritten by the user. */
    _defaultRole = 'presentation';
    /** Combined stream of all of the child chips' focus events. */
    get chipFocusChanges() {
      return this._getChipStream(chip => chip._onFocus);
    }
    /** Combined stream of all of the child chips' destroy events. */
    get chipDestroyedChanges() {
      return this._getChipStream(chip => chip.destroyed);
    }
    /** Combined stream of all of the child chips' remove events. */
    get chipRemovedChanges() {
      return this._getChipStream(chip => chip.removed);
    }
    /** Whether the chip set is disabled. */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._syncChipsState();
    }
    _disabled = false;
    /** Whether the chip list contains chips or not. */
    get empty() {
      return !this._chips || this._chips.length === 0;
    }
    /** The ARIA role applied to the chip set. */
    get role() {
      if (this._explicitRole) {
        return this._explicitRole;
      }
      return this.empty ? null : this._defaultRole;
    }
    /** Tabindex of the chip set. */
    tabIndex = 0;
    set role(value) {
      this._explicitRole = value;
    }
    _explicitRole = null;
    /** Whether any of the chips inside of this chip-set has focus. */
    get focused() {
      return this._hasFocusedChip();
    }
    /** The chips that are part of this chip set. */
    _chips;
    /** Flat list of all the actions contained within the chips. */
    _chipActions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    constructor() {}
    ngAfterViewInit() {
      this._setUpFocusManagement();
      this._trackChipSetChanges();
      this._trackDestroyedFocusedChip();
    }
    ngOnDestroy() {
      this._keyManager?.destroy();
      this._chipActions.destroy();
      this._destroyed.next();
      this._destroyed.complete();
    }
    /** Checks whether any of the chips is focused. */
    _hasFocusedChip() {
      return this._chips && this._chips.some(chip => chip._hasFocus());
    }
    /** Syncs the chip-set's state with the individual chips. */
    _syncChipsState() {
      this._chips?.forEach(chip => {
        chip._chipListDisabled = this._disabled;
        chip._changeDetectorRef.markForCheck();
      });
    }
    /** Dummy method for subclasses to override. Base chip set cannot be focused. */
    focus() {}
    /** Handles keyboard events on the chip set. */
    _handleKeydown(event) {
      if (this._originatesFromChip(event)) {
        this._keyManager.onKeydown(event);
      }
    }
    /**
     * Utility to ensure all indexes are valid.
     *
     * @param index The index to be checked.
     * @returns True if the index is valid for our list of chips.
     */
    _isValidIndex(index) {
      return index >= 0 && index < this._chips.length;
    }
    /**
     * Removes the `tabindex` from the chip set and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the set from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     */
    _allowFocusEscape() {
      const previous = this._elementRef.nativeElement.tabIndex;
      if (previous !== -1) {
        // Set the tabindex directly on the element, instead of going through
        // the data binding, because we aren't guaranteed that change detection
        // will run quickly enough to allow focus to escape.
        this._elementRef.nativeElement.tabIndex = -1;
        // Note that this needs to be a `setTimeout`, because a `Promise.resolve`
        // doesn't allow enough time for the focus to escape.
        setTimeout(() => this._elementRef.nativeElement.tabIndex = previous);
      }
    }
    /**
     * Gets a stream of events from all the chips within the set.
     * The stream will automatically incorporate any newly-added chips.
     */
    _getChipStream(mappingFunction) {
      return this._chips.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(...this._chips.map(mappingFunction))));
    }
    /** Checks whether an event comes from inside a chip element. */
    _originatesFromChip(event) {
      let currentElement = event.target;
      while (currentElement && currentElement !== this._elementRef.nativeElement) {
        if (currentElement.classList.contains('mat-mdc-chip')) {
          return true;
        }
        currentElement = currentElement.parentElement;
      }
      return false;
    }
    /** Sets up the chip set's focus management logic. */
    _setUpFocusManagement() {
      // Create a flat `QueryList` containing the actions of all of the chips.
      // This allows us to navigate both within the chip and move to the next/previous
      // one using the existing `ListKeyManager`.
      this._chips.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)(this._chips)).subscribe(chips => {
        const actions = [];
        chips.forEach(chip => chip._getActions().forEach(action => actions.push(action)));
        this._chipActions.reset(actions);
        this._chipActions.notifyOnChanges();
      });
      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__.F(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir ? this._dir.value : 'ltr').withHomeAndEnd().skipPredicate(action => this._skipPredicate(action));
      // Keep the manager active index in sync so that navigation picks
      // up from the current chip if the user clicks into the list directly.
      this.chipFocusChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroyed)).subscribe(({
        chip
      }) => {
        const action = chip._getSourceAction(document.activeElement);
        if (action) {
          this._keyManager.updateActiveItem(action);
        }
      });
      this._dir?.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroyed)).subscribe(direction => this._keyManager.withHorizontalOrientation(direction));
    }
    /**
     * Determines if key manager should avoid putting a given chip action in the tab index. Skip
     * non-interactive and disabled actions since the user can't do anything with them.
     */
    _skipPredicate(action) {
      // Skip chips that the user cannot interact with. `mat-chip-set` does not permit focusing disabled
      // chips.
      return !action.isInteractive || action.disabled;
    }
    /** Listens to changes in the chip set and syncs up the state of the individual chips. */
    _trackChipSetChanges() {
      this._chips.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroyed)).subscribe(() => {
        if (this.disabled) {
          // Since this happens after the content has been
          // checked, we need to defer it to the next tick.
          Promise.resolve().then(() => this._syncChipsState());
        }
        this._redirectDestroyedChipFocus();
      });
    }
    /** Starts tracking the destroyed chips in order to capture the focused one. */
    _trackDestroyedFocusedChip() {
      this.chipDestroyedChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroyed)).subscribe(event => {
        const chipArray = this._chips.toArray();
        const chipIndex = chipArray.indexOf(event.chip);
        // If the focused chip is destroyed, save its index so that we can move focus to the next
        // chip. We only save the index here, rather than move the focus immediately, because we want
        // to wait until the chip is removed from the chip list before focusing the next one. This
        // allows us to keep focus on the same index if the chip gets swapped out.
        if (this._isValidIndex(chipIndex) && event.chip._hasFocus()) {
          this._lastDestroyedFocusedChipIndex = chipIndex;
        }
      });
    }
    /**
     * Finds the next appropriate chip to move focus to,
     * if the currently-focused chip is destroyed.
     */
    _redirectDestroyedChipFocus() {
      if (this._lastDestroyedFocusedChipIndex == null) {
        return;
      }
      if (this._chips.length) {
        const newIndex = Math.min(this._lastDestroyedFocusedChipIndex, this._chips.length - 1);
        const chipToFocus = this._chips.toArray()[newIndex];
        if (chipToFocus.disabled) {
          // If we're down to one disabled chip, move focus back to the set.
          if (this._chips.length === 1) {
            this.focus();
          } else {
            this._keyManager.setPreviousItemActive();
          }
        } else {
          chipToFocus.focus();
        }
      } else {
        this.focus();
      }
      this._lastDestroyedFocusedChipIndex = null;
    }
    static ɵfac = function MatChipSet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatChipSet)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatChipSet,
      selectors: [["mat-chip-set"]],
      contentQueries: function MatChipSet_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatChip, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._chips = _t);
        }
      },
      hostAttrs: [1, "mat-mdc-chip-set", "mdc-evolution-chip-set"],
      hostVars: 1,
      hostBindings: function MatChipSet_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatChipSet_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role);
        }
      },
      inputs: {
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        role: "role",
        tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? 0 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value)]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      ngContentSelectors: _c5,
      decls: 2,
      vars: 0,
      consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
      template: function MatChipSet_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatChipSet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Change event object that is emitted when the chip listbox value has changed. */
class MatChipListboxChange {
  source;
  value;
  constructor(/** Chip listbox that emitted the event. */
  source, /** Value of the chip listbox when the event was emitted. */
  value) {
    this.source = source;
    this.value = value;
  }
}
/**
 * Provider Expression that allows mat-chip-listbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
const MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatChipListbox),
  multi: true
};
/**
 * An extension of the MatChipSet component that supports chip selection.
 * Used with MatChipOption chips.
 */
let MatChipListbox = /*#__PURE__*/(() => {
  class MatChipListbox extends MatChipSet {
    /**
     * Function when touched. Set as part of ControlValueAccessor implementation.
     * @docs-private
     */
    _onTouched = () => {};
    /**
     * Function when changed. Set as part of ControlValueAccessor implementation.
     * @docs-private
     */
    _onChange = () => {};
    // TODO: MDC uses `grid` here
    _defaultRole = 'listbox';
    /** Default chip options. */
    _defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_CHIPS_DEFAULT_OPTIONS, {
      optional: true
    });
    /** Whether the user should be allowed to select multiple chips. */
    get multiple() {
      return this._multiple;
    }
    set multiple(value) {
      this._multiple = value;
      this._syncListboxProperties();
    }
    _multiple = false;
    /** The array of selected chips inside the chip listbox. */
    get selected() {
      const selectedChips = this._chips.toArray().filter(chip => chip.selected);
      return this.multiple ? selectedChips : selectedChips[0];
    }
    /** Orientation of the chip list. */
    ariaOrientation = 'horizontal';
    /**
     * Whether or not this chip listbox is selectable.
     *
     * When a chip listbox is not selectable, the selected states for all
     * the chips inside the chip listbox are always ignored.
     */
    get selectable() {
      return this._selectable;
    }
    set selectable(value) {
      this._selectable = value;
      this._syncListboxProperties();
    }
    _selectable = true;
    /**
     * A function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     */
    compareWith = (o1, o2) => o1 === o2;
    /** Whether this chip listbox is required. */
    required = false;
    /** Whether checkmark indicator for single-selection options is hidden. */
    get hideSingleSelectionIndicator() {
      return this._hideSingleSelectionIndicator;
    }
    set hideSingleSelectionIndicator(value) {
      this._hideSingleSelectionIndicator = value;
      this._syncListboxProperties();
    }
    _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
    /** Combined stream of all of the child chips' selection change events. */
    get chipSelectionChanges() {
      return this._getChipStream(chip => chip.selectionChange);
    }
    /** Combined stream of all of the child chips' blur events. */
    get chipBlurChanges() {
      return this._getChipStream(chip => chip._onBlur);
    }
    /** The value of the listbox, which is the combined value of the selected chips. */
    get value() {
      return this._value;
    }
    set value(value) {
      if (this._chips && this._chips.length) {
        this._setSelectionByValue(value, false);
      }
      this._value = value;
    }
    _value;
    /** Event emitted when the selected chip listbox value has been changed by the user. */
    change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    _chips = undefined;
    ngAfterContentInit() {
      this._chips.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroyed)).subscribe(() => {
        if (this.value !== undefined) {
          Promise.resolve().then(() => {
            this._setSelectionByValue(this.value, false);
          });
        }
        // Update listbox selectable/multiple properties on chips
        this._syncListboxProperties();
      });
      this.chipBlurChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroyed)).subscribe(() => this._blur());
      this.chipSelectionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroyed)).subscribe(event => {
        if (!this.multiple) {
          this._chips.forEach(chip => {
            if (chip !== event.source) {
              chip._setSelectedState(false, false, false);
            }
          });
        }
        if (event.isUserInput) {
          this._propagateChanges();
        }
      });
    }
    /**
     * Focuses the first selected chip in this chip listbox, or the first non-disabled chip when there
     * are no selected chips.
     */
    focus() {
      if (this.disabled) {
        return;
      }
      const firstSelectedChip = this._getFirstSelectedChip();
      if (firstSelectedChip && !firstSelectedChip.disabled) {
        firstSelectedChip.focus();
      } else if (this._chips.length > 0) {
        this._keyManager.setFirstItemActive();
      } else {
        this._elementRef.nativeElement.focus();
      }
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    writeValue(value) {
      if (value != null) {
        this.value = value;
      } else {
        this.value = undefined;
      }
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    registerOnChange(fn) {
      this._onChange = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    registerOnTouched(fn) {
      this._onTouched = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    /** Selects all chips with value. */
    _setSelectionByValue(value, isUserInput = true) {
      this._clearSelection();
      if (Array.isArray(value)) {
        value.forEach(currentValue => this._selectValue(currentValue, isUserInput));
      } else {
        this._selectValue(value, isUserInput);
      }
    }
    /** When blurred, marks the field as touched when focus moved outside the chip listbox. */
    _blur() {
      if (!this.disabled) {
        // Wait to see if focus moves to an individual chip.
        setTimeout(() => {
          if (!this.focused) {
            this._markAsTouched();
          }
        });
      }
    }
    _keydown(event) {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.T) {
        super._allowFocusEscape();
      }
    }
    /** Marks the field as touched */
    _markAsTouched() {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    }
    /** Emits change event to set the model value. */
    _propagateChanges() {
      let valueToEmit = null;
      if (Array.isArray(this.selected)) {
        valueToEmit = this.selected.map(chip => chip.value);
      } else {
        valueToEmit = this.selected ? this.selected.value : undefined;
      }
      this._value = valueToEmit;
      this.change.emit(new MatChipListboxChange(this, valueToEmit));
      this._onChange(valueToEmit);
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Deselects every chip in the listbox.
     * @param skip Chip that should not be deselected.
     */
    _clearSelection(skip) {
      this._chips.forEach(chip => {
        if (chip !== skip) {
          chip.deselect();
        }
      });
    }
    /**
     * Finds and selects the chip based on its value.
     * @returns Chip that has the corresponding value.
     */
    _selectValue(value, isUserInput) {
      const correspondingChip = this._chips.find(chip => {
        return chip.value != null && this.compareWith(chip.value, value);
      });
      if (correspondingChip) {
        isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
      }
      return correspondingChip;
    }
    /** Syncs the chip-listbox selection state with the individual chips. */
    _syncListboxProperties() {
      if (this._chips) {
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then(() => {
          this._chips.forEach(chip => {
            chip._chipListMultiple = this.multiple;
            chip.chipListSelectable = this._selectable;
            chip._chipListHideSingleSelectionIndicator = this.hideSingleSelectionIndicator;
            chip._changeDetectorRef.markForCheck();
          });
        });
      }
    }
    /** Returns the first selected chip in this listbox, or undefined if no chips are selected. */
    _getFirstSelectedChip() {
      if (Array.isArray(this.selected)) {
        return this.selected.length ? this.selected[0] : undefined;
      } else {
        return this.selected;
      }
    }
    /**
     * Determines if key manager should avoid putting a given chip action in the tab index. Skip
     * non-interactive actions since the user can't do anything with them.
     */
    _skipPredicate(action) {
      // Override the skip predicate in the base class to avoid skipping disabled chips. Allow
      // disabled chip options to receive focus to align with WAI ARIA recommendation. Normally WAI
      // ARIA's instructions are to exclude disabled items from the tab order, but it makes a few
      // exceptions for compound widgets.
      //
      // From [Developing a Keyboard Interface](
      // https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
      //   "For the following composite widget elements, keep them focusable when disabled: Options in a
      //   Listbox..."
      return !action.isInteractive;
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatChipListbox_BaseFactory;
      return function MatChipListbox_Factory(__ngFactoryType__) {
        return (ɵMatChipListbox_BaseFactory || (ɵMatChipListbox_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatChipListbox)))(__ngFactoryType__ || MatChipListbox);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatChipListbox,
      selectors: [["mat-chip-listbox"]],
      contentQueries: function MatChipListbox_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatChipOption, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._chips = _t);
        }
      },
      hostAttrs: [1, "mdc-evolution-chip-set", "mat-mdc-chip-listbox"],
      hostVars: 10,
      hostBindings: function MatChipListbox_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatChipListbox_focus_HostBindingHandler() {
            return ctx.focus();
          })("blur", function MatChipListbox_blur_HostBindingHandler() {
            return ctx._blur();
          })("keydown", function MatChipListbox_keydown_HostBindingHandler($event) {
            return ctx._keydown($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("tabIndex", ctx.disabled || ctx.empty ? -1 : ctx.tabIndex);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-multiselectable", ctx.multiple)("aria-orientation", ctx.ariaOrientation);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-chip-list-disabled", ctx.disabled)("mat-mdc-chip-list-required", ctx.required);
        }
      },
      inputs: {
        multiple: [2, "multiple", "multiple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        ariaOrientation: [0, "aria-orientation", "ariaOrientation"],
        selectable: [2, "selectable", "selectable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        compareWith: "compareWith",
        required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        value: "value"
      },
      outputs: {
        change: "change"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c5,
      decls: 2,
      vars: 0,
      consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
      template: function MatChipListbox_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [_c6],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatChipListbox;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Change event object that is emitted when the chip grid value has changed. */
class MatChipGridChange {
  source;
  value;
  constructor(/** Chip grid that emitted the event. */
  source, /** Value of the chip grid when the event was emitted. */
  value) {
    this.source = source;
    this.value = value;
  }
}
/**
 * An extension of the MatChipSet component used with MatChipRow chips and
 * the matChipInputFor directive.
 */
let MatChipGrid = /*#__PURE__*/(() => {
  class MatChipGrid extends MatChipSet {
    ngControl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControl, {
      optional: true,
      self: true
    });
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    controlType = 'mat-chip-grid';
    /** The chip input to add more chips */
    _chipInput;
    _defaultRole = 'grid';
    _errorStateTracker;
    /**
     * List of element ids to propagate to the chipInput's aria-describedby attribute.
     */
    _ariaDescribedbyIds = [];
    /**
     * Function when touched. Set as part of ControlValueAccessor implementation.
     * @docs-private
     */
    _onTouched = () => {};
    /**
     * Function when changed. Set as part of ControlValueAccessor implementation.
     * @docs-private
     */
    _onChange = () => {};
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get disabled() {
      return this.ngControl ? !!this.ngControl.disabled : this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._syncChipsState();
      this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get id() {
      return this._chipInput.id;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get empty() {
      return (!this._chipInput || this._chipInput.empty) && (!this._chips || this._chips.length === 0);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get placeholder() {
      return this._chipInput ? this._chipInput.placeholder : this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
      this.stateChanges.next();
    }
    _placeholder;
    /** Whether any chips or the matChipInput inside of this chip-grid has focus. */
    get focused() {
      return this._chipInput.focused || this._hasFocusedChip();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get required() {
      return this._required ?? this.ngControl?.control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required) ?? false;
    }
    set required(value) {
      this._required = value;
      this.stateChanges.next();
    }
    _required;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() {
      return !this.empty || this.focused;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get value() {
      return this._value;
    }
    set value(value) {
      this._value = value;
    }
    _value = [];
    /** An object used to control when error messages are shown. */
    get errorStateMatcher() {
      return this._errorStateTracker.matcher;
    }
    set errorStateMatcher(value) {
      this._errorStateTracker.matcher = value;
    }
    /** Combined stream of all of the child chips' blur events. */
    get chipBlurChanges() {
      return this._getChipStream(chip => chip._onBlur);
    }
    /** Emits when the chip grid value has been changed by the user. */
    change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits whenever the raw value of the chip-grid changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * @docs-private
     */
    valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    _chips = undefined;
    /**
     * Emits whenever the component state changes and should cause the parent
     * form-field to update. Implemented as part of `MatFormFieldControl`.
     * @docs-private
     */
    stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    /** Whether the chip grid is in an error state. */
    get errorState() {
      return this._errorStateTracker.errorState;
    }
    set errorState(value) {
      this._errorStateTracker.errorState = value;
    }
    constructor() {
      super();
      const parentForm = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, {
        optional: true
      });
      const parentFormGroup = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, {
        optional: true
      });
      const defaultErrorStateMatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_error_options_Dm2JJUbF_mjs__WEBPACK_IMPORTED_MODULE_18__.E);
      if (this.ngControl) {
        this.ngControl.valueAccessor = this;
      }
      this._errorStateTracker = new _error_state_Dtb1IHM_mjs__WEBPACK_IMPORTED_MODULE_19__._(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
    }
    ngAfterContentInit() {
      this.chipBlurChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroyed)).subscribe(() => {
        this._blur();
        this.stateChanges.next();
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(this.chipFocusChanges, this._chips.changes).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroyed)).subscribe(() => this.stateChanges.next());
    }
    ngAfterViewInit() {
      super.ngAfterViewInit();
      if (!this._chipInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('mat-chip-grid must be used in combination with matChipInputFor.');
      }
    }
    ngDoCheck() {
      if (this.ngControl) {
        // We need to re-evaluate this on every change detection cycle, because there are some
        // error triggers that we can't subscribe to (e.g. parent form submissions). This means
        // that whatever logic is in here has to be super lean or we risk destroying the performance.
        this.updateErrorState();
      }
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this.stateChanges.complete();
    }
    /** Associates an HTML input element with this chip grid. */
    registerInput(inputElement) {
      this._chipInput = inputElement;
      this._chipInput.setDescribedByIds(this._ariaDescribedbyIds);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    onContainerClick(event) {
      if (!this.disabled && !this._originatesFromChip(event)) {
        this.focus();
      }
    }
    /**
     * Focuses the first chip in this chip grid, or the associated input when there
     * are no eligible chips.
     */
    focus() {
      if (this.disabled || this._chipInput.focused) {
        return;
      }
      if (!this._chips.length || this._chips.first.disabled) {
        // Delay until the next tick, because this can cause a "changed after checked"
        // error if the input does something on focus (e.g. opens an autocomplete).
        Promise.resolve().then(() => this._chipInput.focus());
      } else {
        const activeItem = this._keyManager.activeItem;
        if (activeItem) {
          activeItem.focus();
        } else {
          this._keyManager.setFirstItemActive();
        }
      }
      this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) {
      // We must keep this up to date to handle the case where ids are set
      // before the chip input is registered.
      this._ariaDescribedbyIds = ids;
      this._chipInput?.setDescribedByIds(ids);
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    writeValue(value) {
      // The user is responsible for creating the child chips, so we just store the value.
      this._value = value;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    registerOnChange(fn) {
      this._onChange = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    registerOnTouched(fn) {
      this._onTouched = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
      this.stateChanges.next();
    }
    /** Refreshes the error state of the chip grid. */
    updateErrorState() {
      this._errorStateTracker.updateErrorState();
    }
    /** When blurred, mark the field as touched when focus moved outside the chip grid. */
    _blur() {
      if (!this.disabled) {
        // Check whether the focus moved to chip input.
        // If the focus is not moved to chip input, mark the field as touched. If the focus moved
        // to chip input, do nothing.
        // Timeout is needed to wait for the focus() event trigger on chip input.
        setTimeout(() => {
          if (!this.focused) {
            this._propagateChanges();
            this._markAsTouched();
          }
        });
      }
    }
    /**
     * Removes the `tabindex` from the chip grid and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the grid from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     */
    _allowFocusEscape() {
      if (!this._chipInput.focused) {
        super._allowFocusEscape();
      }
    }
    /** Handles custom keyboard events. */
    _handleKeydown(event) {
      const keyCode = event.keyCode;
      const activeItem = this._keyManager.activeItem;
      if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.T) {
        if (this._chipInput.focused && (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_20__.hasModifierKey)(event, 'shiftKey') && this._chips.length && !this._chips.last.disabled) {
          event.preventDefault();
          if (activeItem) {
            this._keyManager.setActiveItem(activeItem);
          } else {
            this._focusLastChip();
          }
        } else {
          // Use the super method here since it doesn't check for the input
          // focused state. This allows focus to escape if there's only one
          // disabled chip left in the list.
          super._allowFocusEscape();
        }
      } else if (!this._chipInput.focused) {
        // The up and down arrows are supposed to navigate between the individual rows in the grid.
        // We do this by filtering the actions down to the ones that have the same `_isPrimary`
        // flag as the active action and moving focus between them ourseles instead of delegating
        // to the key manager. For more information, see #29359 and:
        // https://www.w3.org/WAI/ARIA/apg/patterns/grid/examples/layout-grids/#ex2_label
        if ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.U || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.D) && activeItem) {
          const eligibleActions = this._chipActions.filter(action => action._isPrimary === activeItem._isPrimary && !this._skipPredicate(action));
          const currentIndex = eligibleActions.indexOf(activeItem);
          const delta = event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.U ? -1 : 1;
          event.preventDefault();
          if (currentIndex > -1 && this._isValidIndex(currentIndex + delta)) {
            this._keyManager.setActiveItem(eligibleActions[currentIndex + delta]);
          }
        } else {
          super._handleKeydown(event);
        }
      }
      this.stateChanges.next();
    }
    _focusLastChip() {
      if (this._chips.length) {
        this._chips.last.focus();
      }
    }
    /** Emits change event to set the model value. */
    _propagateChanges() {
      const valueToEmit = this._chips.length ? this._chips.toArray().map(chip => chip.value) : [];
      this._value = valueToEmit;
      this.change.emit(new MatChipGridChange(this, valueToEmit));
      this.valueChange.emit(valueToEmit);
      this._onChange(valueToEmit);
      this._changeDetectorRef.markForCheck();
    }
    /** Mark the field as touched */
    _markAsTouched() {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
    }
    static ɵfac = function MatChipGrid_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatChipGrid)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatChipGrid,
      selectors: [["mat-chip-grid"]],
      contentQueries: function MatChipGrid_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatChipRow, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._chips = _t);
        }
      },
      hostAttrs: [1, "mat-mdc-chip-set", "mat-mdc-chip-grid", "mdc-evolution-chip-set"],
      hostVars: 10,
      hostBindings: function MatChipGrid_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatChipGrid_focus_HostBindingHandler() {
            return ctx.focus();
          })("blur", function MatChipGrid_blur_HostBindingHandler() {
            return ctx._blur();
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx.disabled || ctx._chips && ctx._chips.length === 0 ? -1 : ctx.tabIndex)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-chip-list-disabled", ctx.disabled)("mat-mdc-chip-list-invalid", ctx.errorState)("mat-mdc-chip-list-required", ctx.required);
        }
      },
      inputs: {
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        placeholder: "placeholder",
        required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        value: "value",
        errorStateMatcher: "errorStateMatcher"
      },
      outputs: {
        change: "change",
        valueChange: "valueChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_21__.k,
        useExisting: MatChipGrid
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c5,
      decls: 2,
      vars: 0,
      consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
      template: function MatChipGrid_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [_c6],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatChipGrid;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
 * May be placed inside or outside of a `<mat-chip-grid>`.
 */
let MatChipInput = /*#__PURE__*/(() => {
  class MatChipInput {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    /** Whether the control is focused. */
    focused = false;
    /** Register input for chip list */
    get chipGrid() {
      return this._chipGrid;
    }
    set chipGrid(value) {
      if (value) {
        this._chipGrid = value;
        this._chipGrid.registerInput(this);
      }
    }
    _chipGrid;
    /**
     * Whether or not the chipEnd event will be emitted when the input is blurred.
     */
    addOnBlur = false;
    /**
     * The list of key codes that will trigger a chipEnd event.
     *
     * Defaults to `[ENTER]`.
     */
    separatorKeyCodes;
    /** Emitted when a chip is to be added. */
    chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** The input's placeholder text. */
    placeholder = '';
    /** Unique id for the input. */
    id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__._).getId('mat-mdc-chip-list-input-');
    /** Whether the input is disabled. */
    get disabled() {
      return this._disabled || this._chipGrid && this._chipGrid.disabled;
    }
    set disabled(value) {
      this._disabled = value;
    }
    _disabled = false;
    /** Whether the input is empty. */
    get empty() {
      return !this.inputElement.value;
    }
    /** The native input element to which this directive is attached. */
    inputElement;
    constructor() {
      const defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_CHIPS_DEFAULT_OPTIONS);
      const formField = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_form_field_DqPi4knt_mjs__WEBPACK_IMPORTED_MODULE_21__.h, {
        optional: true
      });
      this.inputElement = this._elementRef.nativeElement;
      this.separatorKeyCodes = defaultOptions.separatorKeyCodes;
      if (formField) {
        this.inputElement.classList.add('mat-mdc-form-field-input-control');
      }
    }
    ngOnChanges() {
      this._chipGrid.stateChanges.next();
    }
    ngOnDestroy() {
      this.chipEnd.complete();
    }
    /** Utility method to make host definition/tests more clear. */
    _keydown(event) {
      if (this.empty && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.B) {
        // Ignore events where the user is holding down backspace
        // so that we don't accidentally remove too many chips.
        if (!event.repeat) {
          this._chipGrid._focusLastChip();
        }
        event.preventDefault();
      } else {
        this._emitChipEnd(event);
      }
    }
    /** Checks to see if the blur should emit the (chipEnd) event. */
    _blur() {
      if (this.addOnBlur) {
        this._emitChipEnd();
      }
      this.focused = false;
      // Blur the chip list if it is not focused
      if (!this._chipGrid.focused) {
        this._chipGrid._blur();
      }
      this._chipGrid.stateChanges.next();
    }
    _focus() {
      this.focused = true;
      this._chipGrid.stateChanges.next();
    }
    /** Checks to see if the (chipEnd) event needs to be emitted. */
    _emitChipEnd(event) {
      if (!event || this._isSeparatorKey(event) && !event.repeat) {
        this.chipEnd.emit({
          input: this.inputElement,
          value: this.inputElement.value,
          chipInput: this
        });
        event?.preventDefault();
      }
    }
    _onInput() {
      // Let chip list know whenever the value changes.
      this._chipGrid.stateChanges.next();
    }
    /** Focuses the input. */
    focus() {
      this.inputElement.focus();
    }
    /** Clears the input */
    clear() {
      this.inputElement.value = '';
    }
    setDescribedByIds(ids) {
      const element = this._elementRef.nativeElement;
      // Set the value directly in the DOM since this binding
      // is prone to "changed after checked" errors.
      if (ids.length) {
        element.setAttribute('aria-describedby', ids.join(' '));
      } else {
        element.removeAttribute('aria-describedby');
      }
    }
    /** Checks whether a keycode is one of the configured separators. */
    _isSeparatorKey(event) {
      return !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_20__.hasModifierKey)(event) && new Set(this.separatorKeyCodes).has(event.keyCode);
    }
    static ɵfac = function MatChipInput_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatChipInput)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatChipInput,
      selectors: [["input", "matChipInputFor", ""]],
      hostAttrs: [1, "mat-mdc-chip-input", "mat-mdc-input-element", "mdc-text-field__input", "mat-input-element"],
      hostVars: 6,
      hostBindings: function MatChipInput_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatChipInput_keydown_HostBindingHandler($event) {
            return ctx._keydown($event);
          })("blur", function MatChipInput_blur_HostBindingHandler() {
            return ctx._blur();
          })("focus", function MatChipInput_focus_HostBindingHandler() {
            return ctx._focus();
          })("input", function MatChipInput_input_HostBindingHandler() {
            return ctx._onInput();
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipGrid && ctx._chipGrid.ngControl ? ctx._chipGrid.ngControl.invalid : null)("aria-required", ctx._chipGrid && ctx._chipGrid.required || null)("required", ctx._chipGrid && ctx._chipGrid.required || null);
        }
      },
      inputs: {
        chipGrid: [0, "matChipInputFor", "chipGrid"],
        addOnBlur: [2, "matChipInputAddOnBlur", "addOnBlur", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        separatorKeyCodes: [0, "matChipInputSeparatorKeyCodes", "separatorKeyCodes"],
        placeholder: "placeholder",
        id: "id",
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        chipEnd: "matChipInputTokenEnd"
      },
      exportAs: ["matChipInput", "matChipInputFor"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
  return MatChipInput;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const CHIP_DECLARATIONS = [MatChip, MatChipAvatar, MatChipEditInput, MatChipGrid, MatChipInput, MatChipListbox, MatChipOption, MatChipRemove, MatChipRow, MatChipSet, MatChipTrailingIcon];
let MatChipsModule = /*#__PURE__*/(() => {
  class MatChipsModule {
    static ɵfac = function MatChipsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatChipsModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatChipsModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [_error_options_Dm2JJUbF_mjs__WEBPACK_IMPORTED_MODULE_18__.E, {
        provide: MAT_CHIPS_DEFAULT_OPTIONS,
        useValue: {
          separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.c]
        }
      }],
      imports: [_common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_22__.M, _index_SYVYjXwK_mjs__WEBPACK_IMPORTED_MODULE_23__.M, _common_module_WayjW0Pb_mjs__WEBPACK_IMPORTED_MODULE_22__.M]
    });
  }
  return MatChipsModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

//# sourceMappingURL=chips.mjs.map

/***/ })

}]);