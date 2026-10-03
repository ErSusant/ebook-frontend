"use strict";
(self["webpackChunkebook_management"] = self["webpackChunkebook_management"] || []).push([[509],{

/***/ 9370:
/*!***************************************************************!*\
  !*** ./src/app/features/file-upload/file-upload.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUploadComponent: () => (/* binding */ FileUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);





function FileUploadComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected file: ", ctx_r0.selectedFileName, "");
  }
}
let FileUploadComponent = /*#__PURE__*/(() => {
  class FileUploadComponent {
    constructor() {
      this.selectedFileName = '';
    }
    onFileChange(event) {
      const input = event.target;
      if (input.files?.length) {
        this.selectedFileName = input.files[0].name;
      }
    }
    static {
      this.ɵfac = function FileUploadComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FileUploadComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FileUploadComponent,
        selectors: [["app-file-upload"]],
        decls: 8,
        vars: 1,
        consts: [[1, "upload-shell"], ["type", "file", 3, "change"], [4, "ngIf"], ["mat-flat-button", "", "color", "primary"]],
        template: function FileUploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload Files");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0)(4, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_4_listener($event) {
              return ctx.onFileChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FileUploadComponent_div_5_Template, 2, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Upload");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFileName);
          }
        },
        dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
        styles: ["mat-card[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.upload-shell[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}"]
      });
    }
  }
  return FileUploadComponent;
})();

/***/ }),

/***/ 8509:
/*!************************************************************!*\
  !*** ./src/app/features/file-upload/file-upload.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUploadModule: () => (/* binding */ FileUploadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 8834);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 6704);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 9042);
/* harmony import */ var _file_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload.component */ 9370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);









const routes = [{
  path: '',
  component: _file_upload_component__WEBPACK_IMPORTED_MODULE_0__.FileUploadComponent
}];
let FileUploadModule = /*#__PURE__*/(() => {
  class FileUploadModule {
    static {
      this.ɵfac = function FileUploadModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FileUploadModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: FileUploadModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.M, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _file_upload_component__WEBPACK_IMPORTED_MODULE_0__.FileUploadComponent]
      });
    }
  }
  return FileUploadModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FileUploadModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.M, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _file_upload_component__WEBPACK_IMPORTED_MODULE_0__.FileUploadComponent]
  });
})();

/***/ })

}]);