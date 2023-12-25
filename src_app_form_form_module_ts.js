"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_form_form_module_ts"],{

/***/ 42466:
/*!*********************************************!*\
  !*** ./src/app/form/form-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageRoutingModule": () => (/* binding */ FormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.page */ 92768);




const routes = [
    {
        path: '',
        component: _form_page__WEBPACK_IMPORTED_MODULE_0__.FormPage
    }
];
let FormPageRoutingModule = class FormPageRoutingModule {
};
FormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormPageRoutingModule);



/***/ }),

/***/ 36984:
/*!*************************************!*\
  !*** ./src/app/form/form.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageModule": () => (/* binding */ FormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-routing.module */ 42466);
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.page */ 92768);







let FormPageModule = class FormPageModule {
};
FormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _form_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormPageRoutingModule
        ],
        declarations: [_form_page__WEBPACK_IMPORTED_MODULE_1__.FormPage]
    })
], FormPageModule);



/***/ }),

/***/ 92768:
/*!***********************************!*\
  !*** ./src/app/form/form.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPage": () => (/* binding */ FormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./form.page.html */ 95224);
/* harmony import */ var _form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.page.scss */ 32318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);







let FormPage = class FormPage {
    constructor(router, dataService, http) {
        this.router = router;
        this.dataService = dataService;
        this.http = http;
        this.resConfig = [];
        this.signotpResData = [];
        this.signResData = [];
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-type': 'application/json'
            })
        };
        this.leavemngtUrl = this.dataService.base_path;
    }
    ngOnInit() {
        this.resConfig = this.dataService.confData;
        // this.logresData = this.http.get(this.leavemngtUrl+"/lres/lresources?orgcode=mag001&lang");
        // this.logresData.subscribe(data=>{
        //   this.resConfig=data;
        //   // this.leavemngtUrl.confData = data;
        //   // console.log("Login Response Data"+ JSON.stringify(this.resConfig));
        // });
    }
    genOTP() {
        let signOTP = {
            "phone": this.ph_no1,
            "otpsrc": "SIG",
            "orgId": this.org_code,
            "email": this.u_email
        };
        this.signotpRes = this.http.post(this.leavemngtUrl + '/login/genotp', JSON.stringify(signOTP), this.header);
        this.signotpRes.subscribe(data => {
            this.signResData = data;
            console.log("otp Res >> " + JSON.stringify(this.signResData));
        });
    }
    regUser() {
        this.userData = {
            "phone": this.ph_no1,
            "otpSrc": "SIG",
            "orgId": this.org_code,
            "otp": this.user_otp,
            "name": this.u_name,
            "email": this.u_email
        };
        // this.dataService.datas=this.userData;
        //  console.log("userdata",JSON.stringify(this.userData)); 
        //  this.router.navigateByUrl('login'); 
        this.signRes = this.http.post(this.leavemngtUrl + '/login/signup', JSON.stringify(this.userData), this.header);
        this.signRes.subscribe(data => {
            this.signResData = data;
            console.log("sign Res >> " + JSON.stringify(this.signResData));
        });
    }
};
FormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
FormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-form',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_form_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_form_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormPage);



/***/ }),

/***/ 95224:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/form/form.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n<ion-buttons>\r\n\r\n  <ion-back-button class=\"back\" defaultHref=\"/\"></ion-back-button>\r\n\r\n</ion-buttons>\r\n    </ion-col>\r\n<ion-col>\r\n\r\n</ion-col>\r\n</ion-row>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"bg-class\">\r\n  <div class=\"bg_full\">\r\n    <!-- <div class=\"flex\"> -->\r\n      <h6 class=\"head\">{{resConfig[\"sign_title\"]}}</h6>\r\n  \r\n      <!-- <ion-label class=\"eng\">Eng</ion-label>\r\n      <ion-toggle (ionChange)=\"toggleLang($event)\" class=\"tog\" color=\"light\"></ion-toggle>\r\n      <ion-label class=\"tamil\">Tam</ion-label> -->\r\n    <!-- </div> -->\r\n      <!-- <br> -->\r\n    <div class=\"center\">\r\n      <form style=\"margin-top: 30px;\">\r\n        <ion-item class=\"phone\">\r\n          <ion-input #f=\"ngModel\" type=\"text\" [(ngModel)]=\"u_name\"\r\n          placeholder=\"{{resConfig.sign_name}}\" name=\"first\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"phone\">\r\n          <ion-input #f3=\"ngModel\" type=\"text\" [(ngModel)]=\"org_code\"\r\n          placeholder=\"{{resConfig.sign_org}}\" name=\"first3\" required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"phone\">\r\n          <ion-input #f4=\"ngModel\" type=\"text\" [(ngModel)]=\"email\"\r\n          placeholder=\"{{resConfig.sign_email}}\" name=\"first4\" required></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item class=\"phone\">\r\n          <ion-input #f2=\"ngModel\" type=\"text\" [(ngModel)]=\"ph_no1\"\r\n          placeholder=\"{{resConfig.sign_ph_pri}}\" name=\"first1\" required></ion-input>\r\n        </ion-item>\r\n        <h6 class=\"or\">(Or)</h6>\r\n        <ion-item class=\"phone\">\r\n          <ion-input #f1=\"ngModel\" type=\"text\" [(ngModel)]=\"Ph_no2\"\r\n          placeholder=\"{{resConfig.sign_ph}}\" name=\"first1\" required></ion-input>\r\n        </ion-item>\r\n        <div class=\"otp\">\r\n          <ion-button color=\"tertiary\" (click)=\"genOTP()\">{{resConfig[\"sign_sendotp\"]}}</ion-button>\r\n          <!-- <a href=\"#0\" role=\"button\" (click)=\"genOTP()\">Send OTP</a> -->\r\n        </div>\r\n\r\n        <ion-item class=\"phone\">\r\n          <ion-input #f5=\"ngModel\" class=\"no\" type=\"number\" [(ngModel)]=\"user_otp\"\r\n           placeholder=\"{{resConfig.sign_otp}}\" name=\"first5\" required></ion-input>\r\n        </ion-item>\r\n        \r\n        \r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button class=\"ion-float-right\" type=\"reset\"  color=\"danger\">{{resConfig.sign_cancel}}</ion-button>\r\n            <ion-button #subbtn  class=\"ion-float-right\" type=\"submit\"  color=\"success\" (click)=\"regUser()\">{{resConfig.sign_submit}}</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 32318:
/*!*************************************!*\
  !*** ./src/app/form/form.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = ".or {\n  text-align: center;\n}\n\n.center {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 10px;\n}\n\n.phone {\n  margin-top: 15px;\n  margin-bottom: 5px;\n  justify-content: center;\n  color: #040115fc;\n  width: 80%;\n  border-radius: 8px;\n  border-width: thin;\n  border-style: solid;\n}\n\n.otp {\n  text-align: right;\n  font-size: 12px;\n  font-weight: 650;\n}\n\n.head {\n  font-weight: 600;\n  font-size: 18px;\n  text-align: center;\n}\n\n.flex {\n  display: flex;\n  margin: 10px;\n  font-weight: 600;\n}\n\n.flex > .eng {\n  margin-left: 100px;\n}\n\n.tamil {\n  padding-top: 10px;\n}\n\n.eng {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0Usa0JBQUE7QUFWRjs7QUFhQTtFQUVFLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBWEY7O0FBY0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFYRjs7QUFjQTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBWkY7O0FBZUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVpGOztBQWNBO0VBRUUsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVpGOztBQWNBO0VBQ0Usa0JBQUE7QUFYRjs7QUFhQTtFQUVFLGlCQUFBO0FBWEY7O0FBY0E7RUFFRSxpQkFBQTtBQVpGIiwiZmlsZSI6ImZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmJnLWNsYXNze1xyXG4vLyAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywjNDlmN2MyIDMwJSwgI2ZhMzFhZCA3MCUpICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5iZ19mdWxse1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywjNDlmN2MyIDMwJSwgI2ZhMzFhZCA3MCUpO1xyXG4gICAgXHJcbi8vICAgfVxyXG4ub3J7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBob25le1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiMwNDAxMTVmYztcclxuICB3aWR0aDogODAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbn1cclxuLm90cHtcclxuICAvLyBjb2xvcjogIzljMDQyYTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDY1MDtcclxufVxyXG5cclxuLmhlYWR7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mbGV4e1xyXG4gIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmZsZXggPiAuZW5ne1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG4udGFtaWx7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZW5ne1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_form_form_module_ts.js.map