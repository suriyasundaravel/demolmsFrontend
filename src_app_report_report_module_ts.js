"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_report_report_module_ts"],{

/***/ 25921:
/*!*************************************************!*\
  !*** ./src/app/report/report-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPageRoutingModule": () => (/* binding */ ReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.page */ 73097);




const routes = [
    {
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_0__.ReportPage
    }
];
let ReportPageRoutingModule = class ReportPageRoutingModule {
};
ReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReportPageRoutingModule);



/***/ }),

/***/ 67622:
/*!*****************************************!*\
  !*** ./src/app/report/report.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPageModule": () => (/* binding */ ReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-routing.module */ 25921);
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.page */ 73097);
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-svg-round-progressbar */ 60763);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-circle-progress */ 91756);









let ReportPageModule = class ReportPageModule {
};
ReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _report_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportPageRoutingModule, angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_7__.RoundProgressModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__.NgCircleProgressModule.forRoot({
                // set defaults here
                radius: 100,
                outerStrokeWidth: 16,
                innerStrokeWidth: 8,
                outerStrokeColor: "#78C000",
                innerStrokeColor: "#C7E596",
                animationDuration: 300,
            })
        ],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_1__.ReportPage]
    })
], ReportPageModule);



/***/ }),

/***/ 73097:
/*!***************************************!*\
  !*** ./src/app/report/report.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPage": () => (/* binding */ ReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./report.page.html */ 41706);
/* harmony import */ var _report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.page.scss */ 7173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let ReportPage = class ReportPage {
    constructor() {
        this.isBig = true;
        this.value = 0;
        this.color = 'green';
        this.classes = [];
    }
    ngOnInit() {
    }
};
ReportPage.ctorParameters = () => [];
ReportPage.propDecorators = {
    isBig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-report',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_report_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportPage);



/***/ }),

/***/ 41706:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/report/report.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"arc-container\">\n    <div class=\"arc-hider\"></div>\n    <div class=\"arc-inset\">\n        o\n    </div>\n    <div class=\"arc-lowerInset\">\n        o\n    </div>\n    <div class=\"arc-overlay\">\n        85%\n    </div>\n    <div class=\"arc-wrapper\">\n        <div class=\"arc2\"></div>\n        <div class=\"arc1\"></div>\n    </div>\n  </div>\n  <div class=\"clearfix\">\n\n    <div class=\"c100\" [ngClass]=\"['p' + value, isBig ? 'big' : 'small', color]\">\n      <span>{{value}}%</span>\n      <div class=\"slice\">\n          <div class=\"bar\"></div>\n          <div class=\"fill\"></div>\n      </div>\n  </div>\n  \n  </div>\n  <round-progress [current]=\"current\" [max]=\"max\"></round-progress>\n  <div class=\"positionRelative\">\n\n    <round-progress\n        max=\"100\"\n        current=\"[[myValue.percentage]]\"\n        color=\"#4AB7EC\"\n        bg-color=\"#56606B\"\n        radius=\"35\"\n        stroke=\"5\"\n        semi=\"false\"\n        rounded=\"false\"\n        clockwise=\"true\"\n        responsive=\"false\"\n        duration=\"800\"\n        animation=\"easeInOutQuart\"\n        animation-delay=\"0\">20%</round-progress>\n\n        <div class=\"percentageValue\">\n            20 % // text that comes in cetner\n        </div>\n\n</div>\n<circle-progress\n  [percent]=\"10\"\n  [radius]=\"100\"\n  [outerStrokeWidth]=\"16\"\n  [innerStrokeWidth]=\"8\"\n  [outerStrokeColor]=\"'#78C000'\"\n  [innerStrokeColor]=\"'#C7E596'\"\n  [animation]=\"true\"\n  [animationDuration]=\"300\"\n></circle-progress>\n</ion-content>\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\n  <ion-tab-button tab=\"Order History\" routerLink=\"/home\">\n    <ion-icon name=\"add-circle-outline\"></ion-icon>\n    <ion-label>Apply Leave</ion-label>\n  </ion-tab-button>\n  <ion-tab-button tab=\"View Brouchure\" routerLink=\"/planned-leave\">\n    <ion-icon name=\"browsers\"></ion-icon>\n    <ion-label>My Plan</ion-label>\n  </ion-tab-button>\n  <ion-tab-button tab=\"return\" routerLink=\"/emp-dashboard\">\n    \n    <ion-icon name=\"people\"></ion-icon>\n        <!-- <i class=\"fa fa-quote-right\"></i> -->\n        <ion-label>DashBoard</ion-label>\n     \n    \n  </ion-tab-button>\n  <ion-tab-button tab=\"login\" routerLink=\"/report\">\n    <ion-icon name=\"create-outline\"></ion-icon>\n    <ion-label>Reports</ion-label>\n  </ion-tab-button>\n  </ion-tab-bar>\n");

/***/ }),

/***/ 7173:
/*!*****************************************!*\
  !*** ./src/app/report/report.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = ".positionRelative {\n  position: relative;\n}\n\n.percentageValue {\n  left: 10px;\n  top: 40%;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  font-size: 13px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKIiwiZmlsZSI6InJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zaXRpb25SZWxhdGl2ZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuXHJcbi5wZXJjZW50YWdlVmFsdWUge1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_report_report_module_ts.js.map