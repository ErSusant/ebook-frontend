"use strict";
(self["webpackChunkebook_management"] = self["webpackChunkebook_management"] || []).push([[663],{

/***/ 663:
/*!**********************************************!*\
  !*** ./src/app/features/auth/auth.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 8834);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 5596);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 6704);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 9042);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 461);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ 3807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);











const routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'signup',
  component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent
}];
let AuthModule = /*#__PURE__*/(() => {
  class AuthModule {
    static {
      this.ɵfac = function AuthModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AuthModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.M, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)]
      });
    }
  }
  return AuthModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.M, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 461:
/*!********************************************************!*\
  !*** ./src/app/features/auth/login/login.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/auth/auth.service */ 5524);







const _c0 = () => ["/auth/signup"];
let LoginComponent = /*#__PURE__*/(() => {
  class LoginComponent {
    constructor(authService, router) {
      this.authService = authService;
      this.router = router;
      this.email = '';
      this.password = '';
      this.loading = false;
      this.errorMessage = '';
    }
    login() {
      if (!this.email || !this.password) {
        console.log('Email and Password are required.');
        this.errorMessage = 'Email and Password are required.';
        return;
      }
      this.loading = true;
      this.errorMessage = '';
      const loginRequest = {
        email: this.email,
        password: this.password
      };
      this.authService.login(loginRequest).subscribe({
        next: user => {
          this.loading = false;
          const username = user?.username ?? user?.user?.username ?? user?.data?.username;
          const role = user?.role ?? user?.user?.role ?? user?.data?.role;
          if (username) {
            localStorage.setItem('username', username);
          }
          if (role) {
            localStorage.setItem('role', role);
          }
          // AuthService performs login -> refresh; navigate only when both succeed
          this.router.navigateByUrl('/dashboard');
        },
        error: error => {
          this.loading = false;
          if (error?.status === 401) {
            this.errorMessage = 'Invalid Email or Password';
          } else {
            this.errorMessage = 'Something went wrong. Please try again.';
          }
          console.error('Login error', error);
        }
      });
    }
    static {
      this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 23,
        vars: 4,
        consts: [["loginForm", "ngForm"], [1, "login-container"], [1, "holder"], [1, "box"], ["autocomplete", "off", 3, "ngSubmit"], [1, "inputBox"], ["type", "email", "name", "email", "required", "required", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "required", 3, "ngModelChange", "ngModel"], [1, "links"], ["href", "#"], [3, "routerLink"], ["type", "submit", "value", "Login"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "form", 4, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.login());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sign in");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5)(13, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8)(18, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Forgot Password ?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Signup");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
        styles: ["@import url(https://fonts.googleapis.com/css2?family=Inconsolata&display=swap);*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n    font-family: \"Poppins\", sans-serif;\n}\n  \n\n\n\n\n\n\n\n\n\n\n\n\n.login-container[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: calc(100vh - 64px); \n\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background: url(\"https://images.pexels.com/photos/1655166/pexels-photo-1655166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\")\n        center center/cover no-repeat;\n\n    padding: 30px;\n}\n\n.holder[_ngcontent-%COMP%] {\n  position: relative;\n  &:before,\n  &:after {\n    animation: _ngcontent-%COMP%_orbit 5s linear infinite;\n    border-radius: 50%;\n    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);\n    content: \"\";\n    height: 150px;\n    position: absolute;\n    width: 150px;\n  }\n  &:before {\n    background: #ffe897;\n    background: radial-gradient(to bottom left, #ffe897, #f98a05);\n    background: -webkit-radial-gradient(top right, #ffe897, #f98a05);\n  }\n  &:after {\n    animation-delay: -2.5s;\n    background: #e0e793;\n    background: radial-gradient(to top left, #e0e793, #6dd0f1);\n    background: -webkit-radial-gradient(bottom right, #e0e793, #6dd0f1);\n    right: 0;\n    top: 0;\n    z-index: -1;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_orbit {\n  from {\n    transform: rotate(0deg) translateX(100px) rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg) translateX(100px) rotate(-360deg);\n  }\n}\n\n\n  .box[_ngcontent-%COMP%] {\n    position: relative;\n    width: 380px;\n    height: 420px;\n    border-radius: 8px;\n    overflow: hidden;\n    box-shadow: 0px 0px 10px 10px rgba(81, 72, 72, 0.336);\n  }\n\n \n  .box[_ngcontent-%COMP%]::before {\n    content: \"\";\n    z-index: 1;\n    position: absolute;\n    top: -50%;\n    left: -50%;\n    width: 380px;\n    height: 420px;\n    transform-origin: bottom right;\n    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);\n    animation: _ngcontent-%COMP%_animate 6s linear infinite;\n  }\n  .box[_ngcontent-%COMP%]::after {\n    content: \"\";\n    z-index: 1;\n    position: absolute;\n    top: -50%;\n    left: -50%;\n    width: 380px;\n    height: 420px;\n    transform-origin: bottom right;\n    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);\n    animation: _ngcontent-%COMP%_animate 6s linear infinite;\n    animation-delay: -3s;\n  }\n  @keyframes _ngcontent-%COMP%_animate {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  form[_ngcontent-%COMP%] {\n    position: absolute;\n    inset: 2px;\n    background: transparent;\n    backdrop-filter: blur(1px);\n    padding: 50px 40px;\n    border-radius: 8px;\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n  }\n  h2[_ngcontent-%COMP%] {\n    color: #000;\n    font-weight: bold;\n    font-weight: 500;\n    text-align: center;\n    letter-spacing: 0.1em;\n  }\n  .inputBox[_ngcontent-%COMP%] {\n    position: relative;\n    width: 300px;\n    margin-top: 35px;\n  }\n  .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    padding: 20px 10px 10px;\n    background: transparent;\n    outline: none;\n    box-shadow: none;\n    border: none;\n    color: #000;\n    font-size: 1em;\n    letter-spacing: 0.05em;\n    transition: 0.5s;\n    z-index: 10;\n  }\n  .inputBox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    padding: 20px 0px 10px;\n    pointer-events: none;\n    font-size: 1em;\n    color: #000;\n    font-weight: bold   ;\n    letter-spacing: 0.05em;\n    transition: 0.5s;\n  }\n  .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ span[_ngcontent-%COMP%], \n   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%] {\n    color: #000;\n    transform: translateX(0px) translateY(-34px);\n    font-size: 0.75em;\n  }\n  .inputBox[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 2px;\n    background: #45f3ff;\n    border-radius: 4px;\n    overflow: hidden;\n    transition: 0.5s;\n    pointer-events: none;\n    z-index: 9;\n  }\n  .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ i[_ngcontent-%COMP%], \n   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ i[_ngcontent-%COMP%] {\n    height: 44px;\n  }\n  .links[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n  }\n  .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 10px 0;\n    font-size: 0.75em;\n    color: #000;\n    -webkit-text-decoration: beige;\n            text-decoration: beige;\n  }\n  .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2) {\n    color: #45f3ff;\n  }\n  input[type=\"submit\"][_ngcontent-%COMP%] {\n    border: none;\n    outline: none;\n    padding: 11px 25px;\n    background: #45f3ff;\n    cursor: pointer;\n    border-radius: 500px;\n    font-weight: 600;\n    width: 100px;\n    margin-top: 10px;\n  }\n  input[type=\"submit\"][_ngcontent-%COMP%]:active {\n    opacity: 0.8;\n  }"]
      });
    }
  }
  return LoginComponent;
})();

/***/ }),

/***/ 3807:
/*!**********************************************************!*\
  !*** ./src/app/features/auth/signup/signup.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupComponent: () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/auth/auth.service */ 5524);








const _c0 = () => ["/auth/login"];
function SignupComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function SignupComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.successMessage);
  }
}
let SignupComponent = /*#__PURE__*/(() => {
  class SignupComponent {
    constructor(authService, router) {
      this.authService = authService;
      this.router = router;
      this.username = '';
      this.email = '';
      this.password = '';
      this.loading = false;
      this.errorMessage = '';
      this.successMessage = '';
    }
    register() {
      if (!this.username || !this.email || !this.password) {
        this.errorMessage = 'All fields are required.';
        this.successMessage = '';
        return;
      }
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.authService.register(payload).subscribe({
        next: () => {
          this.loading = false;
          this.successMessage = 'Registration successful';
          setTimeout(() => this.router.navigateByUrl('/auth/login'), 1200);
        },
        error: err => {
          this.loading = false;
          this.errorMessage = err?.error?.message || 'Registration failed. Please try again.';
          console.error('Register error', err);
        }
      });
    }
    static {
      this.ɵfac = function SignupComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 30,
        vars: 9,
        consts: [[1, "signup-page"], [1, "glass-card"], [1, "orb", "orb-one"], [1, "orb", "orb-two"], ["autocomplete", "off", "novalidate", "", 3, "ngSubmit"], [1, "input-box"], [1, "icon"], ["type", "text", "name", "username", "placeholder", "Username", "required", "", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "Email", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "placeholder", "Password", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 3, "disabled"], ["class", "message error", 4, "ngIf"], ["class", "message success", 4, "ngIf"], [1, "footer-link"], [3, "routerLink"], [1, "message", "error"], [1, "message", "success"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2)(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Create Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Join us and start your e-book journey");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_8_listener() {
              return ctx.register();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\uD83D\uDC64");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_12_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.username, $event) || (ctx.username = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5)(14, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u2709");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_16_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5)(18, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\uD83D\uDD12");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_20_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SignupComponent_div_23_Template, 2, 1, "div", 11)(24, SignupComponent_div_24_Template, 2, 1, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13)(26, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Already have an account?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Sign in");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.username);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Signing Up..." : "Sign Up", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: calc(100vh - 64px);\n}\n\n.signup-page[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(120deg, rgba(34, 119, 88, 0.6), rgba(2, 50, 95, 0.7)),\n    url('https://images.pexels.com/photos/1655166/pexels-photo-1655166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') center/cover no-repeat;\n  overflow: hidden;\n}\n\n.glass-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(92vw, 500px);\n  min-height: 460px;\n  padding: 42px 34px 28px;\n  border-radius: 18px;\n  background: rgba(58, 171, 190, 0.18);\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 1;\n}\n\n.orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(8px);\n  opacity: 0.95;\n}\n\n.orb-one[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  background: radial-gradient(circle at 30% 30%, #f8e7b1, #efb84a 60%, #ed9d1d 100%);\n  top: -46px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.orb-two[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 200px;\n  background: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02));\n  right: -40px;\n  top: 120px;\n  transform: rotate(12deg);\n}\n\nh2[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  margin: 30px 0 8px;\n  text-align: center;\n  font-size: clamp(2rem, 3vw, 3rem);\n  font-weight: 700;\n  color: #ffffff;\n}\n\np[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  margin: 0 0 20px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 1rem;\n}\n\nform[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  margin-top: 18px;\n}\n\n.input-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0 6px;\n  border-bottom: 2px solid rgba(255,255,255,0.5);\n}\n\n.icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 1.4rem;\n  width: 26px;\n  text-align: center;\n}\n\ninput[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 1.1rem;\n  padding: 8px 0;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255,255,255,0.75);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border: none;\n  border-radius: 999px;\n  background: linear-gradient(90deg, #5de0ff, #4ec5f4);\n  color: #0d3e64;\n  min-height: 52px;\n  font-size: 1.05rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  box-shadow: 0 10px 18px rgba(37, 166, 230, 0.35);\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.8;\n  cursor: wait;\n}\n\n.message[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  margin-top: 14px;\n  font-size: 0.92rem;\n  text-align: center;\n}\n\n.message.error[_ngcontent-%COMP%] {\n  color: #ffd8d8;\n}\n\n.message.success[_ngcontent-%COMP%] {\n  color: #d7ffe7;\n}\n\n.footer-link[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  margin-top: 16px;\n  text-align: center;\n  color: rgba(255,255,255,0.9);\n  font-size: 0.92rem;\n}\n\n.footer-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-decoration: none;\n  font-weight: 600;\n  margin-left: 6px;\n}\n\n@media (max-width: 520px) {\n  .glass-card[_ngcontent-%COMP%] {\n    padding: 34px 22px 22px;\n    min-height: 420px;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    margin-top: 24px;\n  }\n}"]
      });
    }
  }
  return SignupComponent;
})();

/***/ })

}]);