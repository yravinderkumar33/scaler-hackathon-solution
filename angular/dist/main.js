"use strict";
(self["webpackChunkangular_chrome_extension"] = self["webpackChunkangular_chrome_extension"] || []).push([["main"],{

/***/ 7970:
/*!***********************************************!*\
  !*** ./angular/src/app/app-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/auth/auth.component */ 2442);
/* harmony import */ var _components_commit_revisions_commit_revisions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/commit-revisions/commit-revisions.component */ 9083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: 'auth',
        component: _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent
    },
    {
        path: 'revisions',
        component: _components_commit_revisions_commit_revisions_component__WEBPACK_IMPORTED_MODULE_1__.CommitRevisionsComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 6197:
/*!******************************************!*\
  !*** ./angular/src/app/app.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        chrome.runtime.onMessage.addListener((message, sender, response) => {
            const { type, payload } = message;
            console.log(message);
            response({ acknowledged: true });
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3300:
/*!***************************************!*\
  !*** ./angular/src/app/app.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 7970);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6197);
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth/auth.component */ 2442);
/* harmony import */ var _components_commit_revisions_commit_revisions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/commit-revisions/commit-revisions.component */ 9083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__.AuthComponent, _components_commit_revisions_commit_revisions_component__WEBPACK_IMPORTED_MODULE_3__.CommitRevisionsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 2442:
/*!***********************************************************!*\
  !*** ./angular/src/app/components/auth/auth.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var src_app_providers_tab_id_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/providers/tab-id.provider */ 3154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class AuthComponent {
    constructor(tabId) {
        this.tabId = tabId;
    }
    ngOnInit() {
    }
    login() {
        console.log({ tabId: this.tabId });
        chrome.tabs.sendMessage(this.tabId, {
            type: "AUTHENTICATE",
            payload: {
                success: true
            },
        });
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_tab_id_provider__WEBPACK_IMPORTED_MODULE_0__.TAB_ID)); };
AuthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 20, vars: 0, consts: [[1, "text-center"], [1, "form-signin", "w-100", "m-auto"], ["src", "/assets/github.png", "alt", "", "width", "72", "height", "57", 1, "mb-4"], [1, "h3", "mb-3", "fw-normal"], [1, "form-floating", "mb-3"], ["type", "email", "id", "floatingInput", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInput"], ["type", "password", "id", "floatingPassword", "placeholder", "Password", 1, "form-control"], ["for", "floatingPassword"], [1, "checkbox", "mb-3"], ["type", "checkbox", "value", "remember-me"], [1, "w-100", "btn", "btn-lg", "btn-primary", 3, "click"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "main", 1)(2, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Please sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_Template_button_click_18_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } }, styles: [".bd-placeholder-img[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  text-anchor: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n@media (min-width: 768px) {\n  .bd-placeholder-img-lg[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n\n.b-example-divider[_ngcontent-%COMP%] {\n  height: 3rem;\n  background-color: rgba(0, 0, 0, 0.1);\n  border: solid rgba(0, 0, 0, 0.15);\n  border-width: 1px 0;\n  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1), inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);\n}\n\n.b-example-vr[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 100vh;\n}\n\n.bi[_ngcontent-%COMP%] {\n  vertical-align: -0.125em;\n  fill: currentColor;\n}\n\n.nav-scroller[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  height: 2.75rem;\n  overflow-y: hidden;\n}\n\n.nav-scroller[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  padding-bottom: 1rem;\n  margin-top: -1px;\n  overflow-x: auto;\n  text-align: center;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRTtJQUNFLGlCQUFBO0VBQ0o7QUFDRjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSw2RkFBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0U7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQUFKIiwiZmlsZSI6ImF1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmQtcGxhY2Vob2xkZXItaW1nIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmJkLXBsYWNlaG9sZGVyLWltZy1sZyB7XG4gICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICB9XG4gIH1cblxuICAuYi1leGFtcGxlLWRpdmlkZXIge1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICBib3JkZXI6IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjE1KTtcbiAgICBib3JkZXItd2lkdGg6IDFweCAwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLjVlbSAxLjVlbSByZ2JhKDAsIDAsIDAsIC4xKSwgaW5zZXQgMCAuMTI1ZW0gLjVlbSByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gIH1cblxuICAuYi1leGFtcGxlLXZyIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cblxuICAuYmkge1xuICAgIHZlcnRpY2FsLWFsaWduOiAtLjEyNWVtO1xuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgfVxuXG4gIC5uYXYtc2Nyb2xsZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGhlaWdodDogMi43NXJlbTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIH1cblxuICAubmF2LXNjcm9sbGVyIC5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 9083:
/*!***********************************************************************************!*\
  !*** ./angular/src/app/components/commit-revisions/commit-revisions.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommitRevisionsComponent": () => (/* binding */ CommitRevisionsComponent)
/* harmony export */ });
/* harmony import */ var _Users_ravinderkumar_personal_tech_scaler_hackathon_extension_scaler_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




function CommitRevisionsComponent_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td")(8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const submission_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](submission_r1 == null ? null : submission_r1.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](submission_r1 == null ? null : submission_r1.timeTaken);
  }
}

class CommitRevisionsComponent {
  constructor() {
    this.data = [{
      version: "v1",
      timeTaken: "10 Mins"
    }, {
      version: "v2",
      timeTaken: "45 Mins"
    }, {
      version: "v3",
      timeTaken: "15 Mins"
    }, {
      version: "v4",
      timeTaken: "2 Mins"
    }];
  }

  getActiveTabURL() {
    return (0,_Users_ravinderkumar_personal_tech_scaler_hackathon_extension_scaler_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tabs = yield chrome.tabs.query({
        currentWindow: true,
        active: true
      });
      return tabs[0];
    })();
  }

  fetchRevisions() {
    var _this = this;

    return (0,_Users_ravinderkumar_personal_tech_scaler_hackathon_extension_scaler_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentTab = yield _this.getActiveTabURL();
      const currentUrl = currentTab.url;
      const regex = /.*\/class\/(.*)\/assignment\/problems\/(.*)\/.*/;
      const [, classId, problemId] = currentUrl.match(regex) || [];

      if (classId && problemId) {
        const key = `${classId}_${problemId}`;
        chrome.storage.sync.get([key], data => {
          _this.data = data[key] ? JSON.parse(data[key]) : [];
          ;
        });
      }
    })();
  }

  ngOnInit() {// this.fetchRevisions();
  }

}

CommitRevisionsComponent.ɵfac = function CommitRevisionsComponent_Factory(t) {
  return new (t || CommitRevisionsComponent)();
};

CommitRevisionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CommitRevisionsComponent,
  selectors: [["app-commit-revisions"]],
  decls: 13,
  vars: 1,
  consts: [[1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "button", 1, "btn", "btn-outline-primary"]],
  template: function CommitRevisionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Serial");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Revision");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Time Taken");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "View");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CommitRevisionsComponent_tr_12_Template, 10, 3, "tr", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21taXQtcmV2aXNpb25zLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 3154:
/*!******************************************************!*\
  !*** ./angular/src/app/providers/tab-id.provider.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TAB_ID": () => (/* binding */ TAB_ID)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const TAB_ID = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CHROME_TAB_ID');


/***/ }),

/***/ 8135:
/*!*************************************************!*\
  !*** ./angular/src/environments/environment.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false
};


/***/ }),

/***/ 919:
/*!*****************************!*\
  !*** ./angular/src/main.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 3300);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8135);
/* harmony import */ var _app_providers_tab_id_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/providers/tab-id.provider */ 3154);





chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
    }
    const { id: tabId } = [...tabs].pop();
    // provides the current Tab ID so you can send messages to the content page
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser([{ provide: _app_providers_tab_id_provider__WEBPACK_IMPORTED_MODULE_2__.TAB_ID, useValue: tabId }])
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(error => console.error(error));
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(919)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map