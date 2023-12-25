"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_role-setup_role-setup_module_ts"],{

/***/ 62768:
/*!*********************************************************!*\
  !*** ./src/app/role-setup/role-setup-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleSetupPageRoutingModule": () => (/* binding */ RoleSetupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _role_setup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-setup.page */ 35808);




const routes = [
    {
        path: '',
        component: _role_setup_page__WEBPACK_IMPORTED_MODULE_0__.RoleSetupPage
    }
];
let RoleSetupPageRoutingModule = class RoleSetupPageRoutingModule {
};
RoleSetupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RoleSetupPageRoutingModule);



/***/ }),

/***/ 40833:
/*!*************************************************!*\
  !*** ./src/app/role-setup/role-setup.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleSetupPageModule": () => (/* binding */ RoleSetupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _role_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-setup-routing.module */ 62768);
/* harmony import */ var _role_setup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-setup.page */ 35808);







let RoleSetupPageModule = class RoleSetupPageModule {
};
RoleSetupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _role_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoleSetupPageRoutingModule
        ],
        declarations: [_role_setup_page__WEBPACK_IMPORTED_MODULE_1__.RoleSetupPage]
    })
], RoleSetupPageModule);



/***/ }),

/***/ 35808:
/*!***********************************************!*\
  !*** ./src/app/role-setup/role-setup.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleSetupPage": () => (/* binding */ RoleSetupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_role_setup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./role-setup.page.html */ 26520);
/* harmony import */ var _role_setup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-setup.page.scss */ 96302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 86219);









let RoleSetupPage = class RoleSetupPage {
    constructor(router, leavemgmt, activatedRoute, modalController, dataService, http, sanitizer) {
        this.router = router;
        this.leavemgmt = leavemgmt;
        this.activatedRoute = activatedRoute;
        this.modalController = modalController;
        this.dataService = dataService;
        this.http = http;
        this.sanitizer = sanitizer;
        this.empNameresData = [];
        this.leavemngtUrl = this.dataService.base_path;
        this.supervisorStatus = this.dataService.isSupervisor;
    }
    loadImage() {
        this.dataService.getImage(this.dataService.logopath, this.dataService.Oid).subscribe((imageBlob) => {
            const imageUrl = URL.createObjectURL(imageBlob);
            // console.log("image url",imageUrl);
            this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
            // console.log("image src",this.imageSrc);
        }, (error) => {
            console.error('Failed to load image', error);
        });
    }
    ngOnInit() {
        this.getcount = this.dataService.getpacount;
        this.loadImage();
        this.activatedRoute.paramMap.subscribe(param => {
            this.sdate = param.get('sdate');
            this.edate = param.get('edate');
        });
    }
    search() {
        let emp_Name = {
            "srchbyname": this.name
        };
        this.empNameData = this.http.post(this.leavemngtUrl + '/lsupp/srchbyteam', JSON.stringify(emp_Name), this.dataService.jsonauthToken);
        this.empNameData.subscribe(data => {
            this.empNameresData = data;
            console.log("response emp search", this.empNameresData);
        });
    }
    goempleaveapply(userId, name) {
        console.log("user id ", userId);
        let id = userId;
        let ename = name;
        let s = this.sdate;
        let e = this.edate;
        this.router.navigate(['/calender', { userId: id, name: ename, s, e }]);
    }
};
RoleSetupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer }
];
RoleSetupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-role-setup',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_role_setup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_role_setup_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoleSetupPage);



/***/ }),

/***/ 26520:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/role-setup/role-setup.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\n          <ion-avatar>\n            <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\n          </ion-avatar>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <div *ngIf=\"supervisorStatus\">\n        <ion-buttons slot=\"start\">\n          <ion-icon routerLink=\"/leave-application\" style=\"margin-left: 15px;\" slot=\"start\" name=\"notifications\"></ion-icon>\n          <ion-badge routerLink=\"/leave-application\" slot=\"start\" color=\"danger\" \n          style=\"position: absolute;margin-bottom:30px;border-radius: 10px;margin-left: 15px;\">{{this.dataService.getpacount}}\n          </ion-badge>\n          <ion-button routerLink=\"/search\" slot=\"start\">\n            <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        \n      </div>\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\n    </ion-buttons>\n </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<h3 style=\"font-weight: 800;text-align: center;\">Team Leave</h3>\n    <ion-grid class=\"ion-text-center\">\n\n      <ion-row class=\"ion-margin\">\n        <ion-col>\n          <ion-title>\n            <ion-text color=\"default\">\n              <ion-searchbar [(ngModel)]=\"name\" \n               showcancelButton=\"focus\" animated></ion-searchbar>\n             <ion-button class=\"ion-float-right\" (click)=\"search()\">Search</ion-button><br>\n            </ion-text>\n          </ion-title>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row class=\"header-row\">\n        <ion-col>\n          <ion-text>Emp_Id</ion-text>\n        </ion-col>\n  \n        <ion-col>\n          <ion-text>Name</ion-text>\n        </ion-col>\n  \n        <ion-col>\n          <ion-text>Email_Id</ion-text>\n        </ion-col>\n      </ion-row>\n  \n  \n      <ion-row *ngFor=\"let item of empNameresData.data\">\n        <ion-col>\n          <ion-text (click)=\"goempleaveapply(item.user_id, item.name)\">\n            {{item.empl_id}}\n          </ion-text>\n        </ion-col>\n  \n          <ion-col>\n            <ion-text>\n              {{item.name}}\n            </ion-text>\n          </ion-col>\n    \n          <ion-col>\n            <ion-text>\n              {{item.email_id}}\n            </ion-text>\n          </ion-col>\n      </ion-row>\n  \n    </ion-grid>\n\n\n  \n  \n</ion-content>\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\n  <div *ngIf=\"!supervisorStatus\" class=\"footer-buttons\">\n    <ion-tab-button tab=\"Order History\" routerLink=\"/apply-leave\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      <ion-label>Apply Leave</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/planned-leave\">\n      <ion-icon name=\"browsers\"></ion-icon>\n      <ion-label>My Plan</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/permission-apply\">\n      <ion-icon name=\"logo-pinterest\"></ion-icon>\n      <ion-label>Permission</ion-label>\n    </ion-tab-button>\n    \n  </div>\n  \n\n  <div *ngIf=\"supervisorStatus\" class=\"footer-buttons\">\n    <ion-tab-button tab=\"Order History\" routerLink=\"/supervisor\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      <ion-label>Apply Leave</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/sup-dashboard\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Sup-Dash</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"login\" routerLink=\"/leave-application\">\n      <ion-icon name=\"create-outline\"></ion-icon>\n      <ion-label>Pending Approvals</ion-label>\n    </ion-tab-button>\n  </div>\n</ion-tab-bar>\n\n");

/***/ }),

/***/ 96302:
/*!*************************************************!*\
  !*** ./src/app/role-setup/role-setup.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".header-row {\n  background: #d0ced8;\n  color: #fff;\n  font-size: 18px;\n}\n\nion-col {\n  border: 1px solid #ECEEEF;\n}\n\nion-button {\n  --background: #217901;\n  color: white;\n}\n\n.title {\n  text-align: center;\n  font-weight: 600;\n}\n\n.label {\n  font-size: 18px;\n}\n\n.back {\n  float: left;\n}\n\n.bu {\n  float: right;\n}\n\n.menu {\n  cursor: pointer;\n  float: right;\n}\n\n.search {\n  cursor: pointer;\n  font-size: 18px;\n  float: right;\n}\n\n.head {\n  font-weight: 600;\n}\n\n.input {\n  font-weight: 400;\n  font-size: 16px;\n}\n\nion-item {\n  padding-right: 15px;\n  padding-left: 10px;\n}\n\n.label {\n  margin-left: 15px;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGUtc2V0dXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQU9BO0VBQ0Usa0JBQUE7RUFFQSxnQkFBQTtBQUxGOztBQU9BO0VBQ0UsZUFBQTtBQUpGOztBQVFBO0VBQ0UsV0FBQTtBQUxGOztBQVNBO0VBRUUsWUFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFQRjs7QUFXQTtFQUNFLGVBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtBQVRGOztBQWFBO0VBQ0ksZ0JBQUE7QUFWSjs7QUFhQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBQVZEOztBQWFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQVZGOztBQWFBO0VBRUcsaUJBQUE7RUFDRCxtQkFBQTtBQVhGIiwiZmlsZSI6InJvbGUtc2V0dXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1yb3cge1xyXG4gIGJhY2tncm91bmQ6ICNkMGNlZDg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRUNFRUVGO1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIC0tYmFja2dyb3VuZDogIzIxNzkwMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8vIGlvbi1jb250ZW50e1xyXG4vLyAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYmcvYmcxLmpwZyk7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi8vICAgfVxyXG4udGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbn1cclxuXHJcbi5iYWNre1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG59XHJcblxyXG4uYnV7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgYmx1ZXZpb2xldDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLy8gY29sb3I6ICMwMDAwODA7XHJcbiAgXHJcbn1cclxuLnNlYXJjaHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gY29sb3I6ICNhMzU1MDQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG59XHJcbi5oZWFke1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIFxyXG59XHJcbi5pbnB1dHtcclxuIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubGFiZWx7XHJcbiAgLy8gY29sb3I6ICMwMDAwODA7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcblxyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_role-setup_role-setup_module_ts.js.map