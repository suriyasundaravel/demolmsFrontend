"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 62359:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 60955);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 69549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 62359);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 60955);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 60955:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 99403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6051);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);







let LoginPage = class LoginPage {
    constructor(router, dataService, http) {
        this.router = router;
        this.dataService = dataService;
        this.http = http;
        this.resConfig = [];
        this.loginResData = [];
        this.otpResData = [];
        this.rec = [];
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-type': 'application/json' })
        };
        this.leavemngtUrl = this.dataService.base_path;
    }
    ngOnInit() {
        this.logresData = this.http.get(this.leavemngtUrl + "/lres/lresources?orgcode=mag001&lang=en");
        this.logresData.subscribe(data => {
            this.resConfig = data;
            // this.leavemngtUrl.confData = data;
            this.dataService.confData = data;
            // console.log("Login Response Data"+ JSON.stringify(this.resConfig));  
        }, error => {
            console.error('Error response:', error.error);
        });
    }
    genOTP() {
        let loginotpauthData = {
            "phone": this.user_phone,
            "otpsrc": "LOG",
            "orgId": this.org_id,
            "email": this.user_mail
        };
        this.otpRes = this.http.post(this.leavemngtUrl + '/login/genotp', JSON.stringify(loginotpauthData), this.header);
        this.otpRes.subscribe((data) => {
            this.otpResData = data;
            console.log("otp Res >> ", JSON.stringify(this.otpResData));
            if (this.otpResData && this.otpResData['status'] === "Success") {
                // Fill the OTP value in the input field
                this.user_otp = this.otpResData['otp_gen'];
            }
            else {
                console.log("Failed to fetch OTP");
            }
        }, (error) => {
            console.error("Error fetching OTP", error);
        });
    }
    authenticate() {
        let loginresauthData = {
            "phone": this.user_phone,
            "otpsrc": "LOG",
            "otp": this.user_otp,
            "orgId": this.org_id,
            "email": this.user_mail
        };
        this.loginRes = this.http.post(this.leavemngtUrl + '/auth/gouser', JSON.stringify(loginresauthData), this.header);
        this.loginRes.subscribe(data => {
            this.loginResData = data;
            console.log("login res data", JSON.stringify(this.loginResData));
            // Accessing user_info array
            const user_info = this.loginResData["userinfo"].user_info;
            // console.log('User Info:', user_info);
            this.dataService.profileData = this.loginResData['userinfo'].user_info;
            console.log("profile data", this.dataService.profileData);
            // Accessing name (DIS_NAME) from profile data
            // if (this.dataService.profileData && this.dataService.profileData[0] && this.dataService.profileData[0]['DIS_NAME']) {
            //   const name = this.dataService.profileData[0]['DIS_NAME'];
            //   console.log("Name:", name);
            // } else {
            //   console.error("DIS_NAME is not present in profile data or profile data is undefined/null.");
            // }
            this.dataService.Uid = this.loginResData['userinfo'].userId;
            this.dataService.Oid = this.loginResData['userinfo'].orgId;
            this.dataService.companyName = this.loginResData['userinfo'].org_name;
            // console.log("company name",this.dataService.Uid);
            // console.log("company name",this.dataService.Oid);
            // console.log("company name",this.dataService.companyName);
            // console.log("status: " + this.loginResData['status']);
            let resStatus = this.loginResData['status'];
            if (!resStatus.undefined && "Success" == resStatus) {
                this.dataService.authHeader = this.loginResData['accessToken'];
                console.log("header >> " + this.dataService.authHeader);
                this.dataService.setToken();
                this.dataService.isSupervisor = this.loginResData["userinfo"].isSupervisor;
                console.log("supervisor status", this.dataService.isSupervisor);
                if (!this.dataService.isSupervisor) {
                    this.router.navigateByUrl('emp-dashboard');
                }
                else {
                    this.router.navigateByUrl('sup-dashboard');
                }
                //   // Clear input fields
                this.user_phone = '';
                this.user_otp = '';
                this.user_mail = '';
                this.org_id = '';
            }
            else {
                console.log("message : " + resStatus);
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 99403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-content padding class=\"login\">\r\n  \r\n\r\n    <div style=\"margin-top: 0px;\">\r\n      <h1 class=\"head\">{{resConfig[\"login_title\"]}}</h1>\r\n      <h4 class=\"sign\" routerLink=\"/form\">{{resConfig[\"login_sing\"]}}</h4>\r\n      <h6 class=\"new\" routerLink=\"/form\">{{resConfig[\"login_new\"]}}</h6>\r\n      <h6 class=\"or\">{{resConfig[\"login_or\"]}}</h6>\r\n      <h4 class=\"sign\">{{resConfig[\"login_reg\"]}}</h4>\r\n      <div class=\"center\">\r\n        <form style=\"margin-top: 30px;\">\r\n          <ion-item class=\"phone\">\r\n            <ion-input [(ngModel)]=\"org_id\" #s3=\"ngModel\"\r\n             placeholder=\"{{resConfig.login_orgid}}\" \r\n            class=\"no\" \r\n            name=\"first3\" required></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"phone\">\r\n            <ion-input #s1=\"ngModel\" type=\"number\" [(ngModel)]=\"user_phone\"\r\n             placeholder=\"{{resConfig.login_phone}}\" class=\"no\" \r\n             name=\"first1\" pattern=\"[0-9]{10}\" required></ion-input>\r\n          </ion-item>\r\n          <div class=\"otp\">\r\n            <ion-button color=\"tertiary\" (click)=\"genOTP()\">Send OTP</ion-button>\r\n          </div>\r\n          <ion-item class=\"phone\">\r\n            <ion-input #s2=\"ngModel\" class=\"no\" type=\"number\" [(ngModel)]=\"user_otp\"\r\n             placeholder=\"{{resConfig.login_otp}}\" name=\"first2\" required></ion-input>\r\n          </ion-item>\r\n          <!-- <h6 class=\"or\">(Or)</h6> -->\r\n          <ion-item class=\"phone\" hidden=\"true\">\r\n            <ion-input [(ngModel)]=\"user_mail\" #s=\"ngModel\"\r\n            size=\"10\" type=\"email\" placeholder=\"{{resConfig.login_email}}\" class=\"no\"\r\n            name=\"first\" required></ion-input>\r\n          </ion-item>\r\n      \r\n        </form>\r\n      </div>\r\n        <br>\r\n      <div class=\"clear\">\r\n        <ion-button [disabled]=\" (s1.invalid || s2.invalid || s3.invalid)&& s.invalid \" \r\n        class=\"go\" color=\"tertiary\" (click)=\"authenticate()\">{{resConfig[\"login_go\"]}}</ion-button>\r\n      </div>\r\n    </div>\r\n      <br><br>\r\n      <div style=\"text-align: center;\">\r\n        <ion-text style=\"text-align: center; font-size: 14px;  font-weight: 600;\"> \r\n          {{resConfig[\"login_com_name\"]}}</ion-text>\r\n      </div>  \r\n  \r\n\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ 6051:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = ".head {\n  text-align: center;\n  font-weight: 800;\n}\n\n#logo {\n  cursor: pointer;\n  height: 70px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  --background:transparent;\n}\n\n.sign {\n  text-align: center;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.new {\n  text-align: center;\n}\n\n.or {\n  text-align: center;\n}\n\n.otp {\n  text-align: right;\n}\n\n.company {\n  text-align: center;\n  font-weight: 600;\n}\n\n.center {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 10px;\n}\n\n.phone {\n  margin-top: 15px;\n  margin-bottom: 5px;\n  justify-content: center;\n  width: 80%;\n  border-radius: 8px;\n  border-width: thin;\n  border-style: solid;\n}\n\n.clear {\n  clear: both;\n}\n\n.go {\n  clear: both;\n  margin-top: 5px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 2px;\n  width: 90px;\n  height: 30px;\n  font-size: 11px;\n  font-weight: 900;\n}\n\n.no {\n  font-weight: 600;\n  color: #080080;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNJLGtCQUFBO0VBRUEsZ0JBQUE7QUFITjs7QUFNRTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUhGOztBQU1FO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7QUFKTjs7QUFPRTtFQUNJLGtCQUFBO0FBSk47O0FBUUU7RUFDSSxrQkFBQTtBQUxOOztBQVNFO0VBRUUsaUJBQUE7QUFQSjs7QUFjRTtFQUVHLGtCQUFBO0VBQ0EsZ0JBQUE7QUFaTDs7QUFjRTtFQUVJLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBWk47O0FBY0U7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBWE47O0FBaUJJO0VBQ0UsV0FBQTtBQWROOztBQWlCSTtFQUNFLFdBQUE7RUFHQSxlQUFBO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBakJOOztBQXFCSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQWxCTiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgXHJcbiAgLmhlYWR7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLy8gY29sb3I6ICMwMDAwODA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG5cclxuICAjbG9nb3tcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICBoZWlnaHQ6NzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4gIC5zaWdue1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgXHJcbiAgfVxyXG4gIC5uZXd7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLy8gY29sb3I6ICMwMDAwODA7XHJcbiAgXHJcbiAgfVxyXG4gIC5vcntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAvLyBjb2xvcjogIzAwMDA4MDtcclxuICBcclxuICB9XHJcbiAgLm90cHtcclxuICAgIC8vIGNvbG9yOiAjOWMwNDJhO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAvLyBtYXJnaW46IDAlO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDE2MHB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICAvLyBmb250LXNpemU6IDEycHg7XHJcbiAgICAvLyBmb250LXdlaWdodDogNjUwOy9cclxuICB9XHJcbiAgLmNvbXBhbnl7XHJcbiAgICAvLyBjb2xvcjogcmdiKDIwLCAxMTQsIDE1OCk7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgLmNlbnRlcntcclxuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgLnBob25le1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICAgIC5jbGVhcntcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdve1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgICAgLy8gY29sb3I6ICAjZThlZmRjO1xyXG4gICAgICBcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAvLyBtYXJnaW4tbGVmdDogMTIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDsgXHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDEwNjQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm5ve1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogIzA4MDA4MDtcclxuICAgIH1cclxuICAgICJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map