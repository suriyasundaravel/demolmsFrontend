"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_holidays_holidays_module_ts"],{

/***/ 4389:
/*!*****************************************************!*\
  !*** ./src/app/holidays/holidays-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HolidaysPageRoutingModule": () => (/* binding */ HolidaysPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _holidays_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./holidays.page */ 76274);




const routes = [
    {
        path: '',
        component: _holidays_page__WEBPACK_IMPORTED_MODULE_0__.HolidaysPage
    }
];
let HolidaysPageRoutingModule = class HolidaysPageRoutingModule {
};
HolidaysPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HolidaysPageRoutingModule);



/***/ }),

/***/ 65678:
/*!*********************************************!*\
  !*** ./src/app/holidays/holidays.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HolidaysPageModule": () => (/* binding */ HolidaysPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _holidays_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./holidays-routing.module */ 4389);
/* harmony import */ var _holidays_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./holidays.page */ 76274);







let HolidaysPageModule = class HolidaysPageModule {
};
HolidaysPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _holidays_routing_module__WEBPACK_IMPORTED_MODULE_0__.HolidaysPageRoutingModule
        ],
        declarations: [_holidays_page__WEBPACK_IMPORTED_MODULE_1__.HolidaysPage]
    })
], HolidaysPageModule);



/***/ }),

/***/ 76274:
/*!*******************************************!*\
  !*** ./src/app/holidays/holidays.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HolidaysPage": () => (/* binding */ HolidaysPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_holidays_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./holidays.page.html */ 35365);
/* harmony import */ var _holidays_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./holidays.page.scss */ 333);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 86219);









let HolidaysPage = class HolidaysPage {
    constructor(toastController, router, dataService, http, sanitizer) {
        this.toastController = toastController;
        this.router = router;
        this.dataService = dataService;
        this.http = http;
        this.sanitizer = sanitizer;
        this.resConfig = [];
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
    //  loadImage() {
    //   const locallyStoredImage = localStorage.getItem('logoImage');
    //   if (locallyStoredImage) {
    //     // If the image is already stored locally, use it directly
    //     this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(locallyStoredImage);
    //   } else {
    //     // If the image is not available locally, fetch it from the server and store it locally
    //     this.dataService.getImage().subscribe(
    //       (imageBlob: Blob) => {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //           const base64data = reader.result as string;
    //           this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(base64data);
    //           // Store the image locally
    //           this.storeImageLocally(base64data);
    //         };
    //         reader.readAsDataURL(imageBlob);
    //       },
    //       (error) => {
    //         console.error('Failed to load image', error);
    //       }
    //     );
    //   }
    // }
    // Function to store the image in localStorage
    // storeImageLocally(base64data: string) {
    //   localStorage.setItem('logoImage', base64data);
    // }
    ngOnInit() {
        this.loadImage();
        this.resConfig = this.dataService.confData;
        // this.logresData = this.http.get(this.leavemngtUrl+"/lres/lresources?orgcode=mag001&lang");
        //   this.logresData.subscribe(data=>{
        //     this.resConfig=data;
        //     // this.leavemngtUrl.confData = data;
        //     // console.log("Login Response Data"+ JSON.stringify(this.resConfig));
        //   });
        this.http.post(this.leavemngtUrl + '/common/leave_calendar?year=2023&locid=TRY', '', this.dataService.jsonauthToken)
            .subscribe((res) => {
            // Handle successful response
            // console.log("response holiday", res);
            this.holidaysData = res['data'];
            console.log("the holiday list", this.holidaysData);
        }, (error) => {
            // Handle error
            console.error("Error fetching holidays:", error);
        });
    }
};
HolidaysPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer }
];
HolidaysPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-holidays',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_holidays_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_holidays_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HolidaysPage);



/***/ }),

/***/ 35365:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/holidays/holidays.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\n          <ion-avatar>\n            <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\n          </ion-avatar>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\n    </ion-buttons>\n </ion-toolbar>\n</ion-header>\n<ion-content class=\"holiday\">\n  <h2 style=\"text-align: center;font-weight: 600;\">{{resConfig[\"holiday_title\"]}}</h2>\n  <div style=\"padding-left: 1%;\">\n<ion-row class=\"row\">\n  <ion-col class=\"row\" size=\"6\">\n    <ion-label class=\"head\">{{resConfig[\"holiday_date\"]}}</ion-label>\n  </ion-col>\n  <!-- <ion-col  class=\"row\" size=\"4\">\n    <ion-label class=\"head\">{{resConfig[\"holiday_day\"]}}</ion-label>\n  </ion-col> -->\n  <ion-col class=\"row\" size=\"6\">\n    <ion-label class=\"head\">{{resConfig[\"holiday_reason\"]}}</ion-label>\n  </ion-col>\n</ion-row><br>\n<ion-row class=\"row\" *ngFor=\"let item of holidaysData\">\n  <ion-col class=\"row\" size=\"6\">\n    <ion-label class=\"head1\">{{item.fromdt}}</ion-label>\n  </ion-col><br>\n  <!-- <ion-col class=\"row\" size=\"4\">\n    <ion-label class=\"head1\">{{item.Day}}</ion-label>\n  </ion-col><br> -->\n  <ion-col class=\"row\" size=\"6\">\n    <ion-label class=\"head1\">{{item.name}}</ion-label>\n  </ion-col><br>\n</ion-row>\n</div>\n</ion-content>\n");

/***/ }),

/***/ 333:
/*!*********************************************!*\
  !*** ./src/app/holidays/holidays.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-weight: 600;\n}\n\n.select {\n  width: 80%;\n  height: 70%;\n  border-radius: 3px;\n  border: 1px solid black;\n}\n\n.search {\n  cursor: pointer;\n  font-size: 18px;\n  float: right;\n}\n\n.head {\n  font-weight: 600;\n}\n\n.head1 {\n  font-weight: 400;\n}\n\n.row {\n  border: 0.1px solid #e7dede;\n}\n\n.check {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbGlkYXlzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZRTtFQUNFLGtCQUFBO0VBRUEsZ0JBQUE7QUFaSjs7QUFlRTtFQUNFLFVBQUE7RUFFQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQWJKOztBQThCRTtFQUNFLGVBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtBQTVCSjs7QUFnQ0U7RUFDSSxnQkFBQTtBQTdCTjs7QUFpQ0U7RUFDRixnQkFBQTtBQTlCQTs7QUFpQ0U7RUFDSSwyQkFBQTtBQTlCTjs7QUFnQ0U7RUFDRSxlQUFBO0FBN0JKIiwiZmlsZSI6ImhvbGlkYXlzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyAubG9nby1pbWFnZSB7XHJcbi8vICAgd2lkdGg6IDUwcHg7IFxyXG4vLyAgIGhlaWdodDogNTBweDsgXHJcbi8vICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbnRlbnR7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9iZy9iZzEuanBnKTtcclxuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLy8gICB9XHJcbiAgLnRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gY29sb3I6ICMwMDAwODA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuIFxyXG4gIC5zZWxlY3R7XHJcbiAgICB3aWR0aDo4MCU7IFxyXG4gICAgLy8gY29sb3I6ICMwMDAwODA7XHJcbiAgICBoZWlnaHQ6IDcwJTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgLy8gLmJhY2t7XHJcbiAgLy8gICBmbG9hdDogbGVmdDtcclxuICAvLyAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4gIC8vIH1cclxuICBcclxuICAvLyAuYnV7XHJcbiAgLy8gICAvLyBib3JkZXI6IDFweCBzb2xpZCBibHVldmlvbGV0O1xyXG4gIC8vICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC8vIH1cclxuICAvLyAubWVudXtcclxuICAvLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAvLyAgIGZsb2F0OiByaWdodDtcclxuICAvLyAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4gICAgXHJcbiAgLy8gfVxyXG4gIC5zZWFyY2h7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyBjb2xvcjogI2EzNTUwNDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMTAwJTtcclxuICB9XHJcbiAgLmhlYWR7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIC8vIGNvbG9yOiBibGFjaztcclxuICAgIC8vICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgfVxyXG4gIC5oZWFkMXtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gY29sb3I6ICMwMDAwODA7XHJcbiAgfVxyXG4gIC5yb3d7XHJcbiAgICAgIGJvcmRlcjogMC4xcHggc29saWQgcmdiKDIzMSwgMjIyLCAyMjIpO1xyXG4gIH1cclxuICAuY2hlY2t7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxuICB9XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_holidays_holidays_module_ts.js.map