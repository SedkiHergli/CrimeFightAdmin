(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"--background: rgb(82, 96, 158);\">\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content style=\"--background: url(assets/imgs/bg.jpg) center / 100%;\" padding>\n\n    <ion-card style=\"\tbox-shadow: none;background: rgba(42, 60, 143, 0.72);border-radius: 5px;\">\n        <ion-card-header style=\"color: #fff;text-align: center;font-weight: bold\">\n          Login Form\n        </ion-card-header>\n        <ion-card-content>\n            <ion-list style=\"background: transparent;\" no-line>\n              <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmit()\">\n            \n                <ion-item>\n                  <ion-input type=\"email\" formControlName=\"email\" style=\"color: #fff\" placeholder=\"Email\" autocomplete=\"on\"></ion-input>\n                </ion-item>\n            \n                <ion-item>\n                  <ion-input type=\"password\" formControlName=\"password\" style=\"color: #fff\" placeholder=\"Password\"></ion-input>\n                </ion-item>\n            \n                <ion-button style=\"--background: rgb(236, 58, 207);--background-focused: rgb(236, 58, 207);\" expand=\"full\" shape=\"round\" type=\"submit\" [disabled]=\"!credentialsForm.valid\">Login</ion-button>\n\n              </form>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-content {\n  align-content: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center; }\n\n.list > .item-block:first-child {\n  border: medium none; }\n\n.item:not(.reMode_selected) {\n  margin-bottom: 10px;\n  background: rgba(0, 0, 0, 0.5);\n  border: medium none; }\n\n.bottom {\n  position: absolute;\n  bottom: 0; }\n\nspan.notSign:hover {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxkZWxsXFxEZXNrdG9wXFxwcm9qZWN0a2EzXFxTbWFydENhcmVBZG1pbi9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxzQkFBcUI7RUFDckIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIsbUJBQWtCLEVBQ2xCOztBQUdEO0VBQ0Msb0JBQW1CLEVBQ25COztBQUVEO0VBQ0Msb0JBQW1CO0VBQ25CLCtCQUE4QjtFQUM5QixvQkFBbUIsRUFDbkI7O0FBR0Q7RUFDQyxtQkFBa0I7RUFDbEIsVUFBUyxFQUNUOztBQUVEO0VBQ0Msa0JBQWlCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHRcclxuXHQuc2Nyb2xsLWNvbnRlbnQge1xyXG5cdFx0YWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cclxuXHQubGlzdCA+IC5pdGVtLWJsb2NrOmZpcnN0LWNoaWxkIHtcclxuXHRcdGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcblx0fVxyXG5cclxuXHQuaXRlbTpub3QoLnJlTW9kZV9zZWxlY3RlZCkge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHRcdGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcblx0fVxyXG5cdFxyXG5cclxuXHQuYm90dG9tIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdHNwYW4ubm90U2lnbjpob3ZlcntcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var LoginPage = /** @class */ (function () {
    function LoginPage(storage, formBuilder, authService, navContrl, loadingController, locationService, network, toastCtrl) {
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.navContrl = navContrl;
        this.loadingController = loadingController;
        this.locationService = locationService;
        this.network = network;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.verifyConnection();
        this.credentialsForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    };
    LoginPage.prototype.ngOnDestroy = function () {
        this.disconnectSubscription.unsubscribe();
    };
    LoginPage.prototype.verifyConnection = function () {
        var _this = this;
        this.disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            _this.presentToast("Please turn on your connection !");
        });
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.credentialsForm.value).subscribe(function (resp) { return _this.presentLoadingWithOptions(); });
    };
    LoginPage.prototype.presentLoadingWithOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: "bubbles",
                            duration: 1000,
                            message: 'Please wait...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.presentToast = function (m) {
        var toast = this.toastCtrl.create({
            message: m,
            duration: 1500,
            position: 'bottom'
        });
        toast.then(function (res) { return res.present(); });
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map