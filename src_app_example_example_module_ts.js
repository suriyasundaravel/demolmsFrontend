"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_example_example_module_ts"],{

/***/ 8760:
/*!***************************************************!*\
  !*** ./src/app/example/example-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamplePageRoutingModule": () => (/* binding */ ExamplePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _example_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example.page */ 87226);




const routes = [
    {
        path: '',
        component: _example_page__WEBPACK_IMPORTED_MODULE_0__.ExamplePage
    }
];
let ExamplePageRoutingModule = class ExamplePageRoutingModule {
};
ExamplePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExamplePageRoutingModule);



/***/ }),

/***/ 79868:
/*!*******************************************!*\
  !*** ./src/app/example/example.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamplePageModule": () => (/* binding */ ExamplePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _example_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example-routing.module */ 8760);
/* harmony import */ var _example_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example.page */ 87226);







let ExamplePageModule = class ExamplePageModule {
};
ExamplePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _example_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExamplePageRoutingModule
        ],
        declarations: [_example_page__WEBPACK_IMPORTED_MODULE_1__.ExamplePage]
    })
], ExamplePageModule);



/***/ }),

/***/ 87226:
/*!*****************************************!*\
  !*** ./src/app/example/example.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamplePage": () => (/* binding */ ExamplePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_example_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./example.page.html */ 57619);
/* harmony import */ var _example_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example.page.scss */ 45518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let ExamplePage = class ExamplePage {
    constructor() { }
    ngOnInit() {
    }
};
ExamplePage.ctorParameters = () => [];
ExamplePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-example',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_example_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_example_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExamplePage);



/***/ }),

/***/ 57619:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/example/example.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>example</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label position=\"stacked\">Stacked Label</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n\n  <div >\n    <form>\n      <ion-item >\n        <ion-label class=\"label\"  position=\"stacked\" class=\"label\">Employer Name</ion-label>\n        <ion-input  class=\"input\"  #f=\"ngModel\" \n        readonly\n        disabled\n        value=\"dinesh\"\n        [(ngModel)]=\"emp_name\" type=\"text\" name=\"first\" required>Dinesh</ion-input>\n      </ion-item><br>\n      \n      <ion-item>\n        <ion-label class=\"label\"  position=\"Stacked\" class=\"label\">Employer Id</ion-label>\n        <ion-input  class=\"input\"  #f1=\"ngModel\"  [(ngModel)]=\"emp_id\" type=\"number\"  maxLength=\"5\" name=\"first1\" required></ion-input>\n      </ion-item>\n      <br>\n      <ion-item>\n        <ion-label position=\"stacked\">Summary</ion-label>\n        <ion-textarea\n          disabled\n          readonly\n          value=\"Ionic enables developers to build performant, high-quality mobile apps.\">\n        </ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"label\"  position=\"stacked\" class=\"label\">Type of Leave</ion-label>\n        <ion-select placeholder=\"  Select type\"  class=\"select\" #f2=\"ngModel\"   name=\"first2\" [(ngModel)]=\"leave_type\">\n          <ion-select-option value=\"annual\">Annual Leave</ion-select-option>\n          <ion-select-option value=\"causal\">Causal Leave</ion-select-option>\n          <ion-select-option value=\"sick\">Sick Leave</ion-select-option>\n          <ion-select-option value=\"marraje\">Marraje Leave</ion-select-option>\n          <ion-select-option value=\"paid\">Paid Leave</ion-select-option>\n        </ion-select>\n      </ion-item><br>\n    <ion-item>\n      <ion-label class=\"label\" position=\"stacked\" >Date</ion-label>   \n      <ion-input  class=\"input2\" style=\"width: 40%;\" #f3=\"ngModel\"  [(ngModel)]=\"start_date\" type=\"date\" name=\"first3\" required></ion-input>\n      <ion-input  class=\"input2\" style=\"width: 40%;\"  #f4=\"ngModel\"  [(ngModel)]=\"end_date\" type=\"date\" name=\"first4\" required></ion-input>\n    </ion-item><br>\n    <ion-item>\n      <ion-label class=\"label\" position=\"stacked\"  class=\"label\" >Comments</ion-label>\n      <ion-input  class=\"input\"  #f5=\"ngModel\"  placeholder=\"Comments\" [(ngModel)]=\"cmds\" type=\"text\" name=\"first5\" required></ion-input>\n\n      \n      <!-- <ion-textarea class=\"input1\"  #f5=\"ngModel\"  [(ngModel)]=\"cmds\"  name=\"first5\" required ></ion-textarea> -->\n    </ion-item><br>\n    <ion-item>\n      <ion-label class=\"label\" position=\"stacked\" class=\"label\"> Upload Documents</ion-label>\n      <input    #f6=\"ngModel\" placeholder=\"Upload\"  [(ngModel)]=\"file\" type=\"file\" name=\"first4\" >\n\n    </ion-item><br>\n    <ion-item *ngIf=\"showDetails\">\n      <ion-label class=\"label\" position=\"stacked\"  class=\"label\" >Approver Comments</ion-label>\n      <ion-input  class=\"input\"  #f7=\"ngModel\" placeholder=\"Comments\"  [(ngModel)]=\"approve_cmds\" type=\"text\" name=\"first7\" required></ion-input>\n\n      <!-- <ion-textarea class=\"input1\" style=\"height: 60%;\"  #f7=\"ngModel\"  [(ngModel)]=\"approve_cmds\"  name=\"first7\" required ></ion-textarea> -->\n    </ion-item>\n    <br>\n    <div style=\"margin-right: 10px;\">\n      <ion-button class=\"ion-float-right\" type=\"reset\"  color=\"danger\" >Cancel</ion-button>\n      <ion-button class=\"ion-float-right\" name=\"2\"  style=\"float: right;\" color=\"success\" >Apply</ion-button>\n    </div>\n    </form>\n  </div>\n \n</ion-content>\n");

/***/ }),

/***/ 45518:
/*!*******************************************!*\
  !*** ./src/app/example/example.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_example_example_module_ts.js.map