"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_plan-history_plan-history_module_ts"],{

/***/ 33462:
/*!*************************************************************!*\
  !*** ./src/app/plan-history/plan-history-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanHistoryPageRoutingModule": () => (/* binding */ PlanHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _plan_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plan-history.page */ 85928);




const routes = [
    {
        path: '',
        component: _plan_history_page__WEBPACK_IMPORTED_MODULE_0__.PlanHistoryPage
    }
];
let PlanHistoryPageRoutingModule = class PlanHistoryPageRoutingModule {
};
PlanHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlanHistoryPageRoutingModule);



/***/ }),

/***/ 85607:
/*!*****************************************************!*\
  !*** ./src/app/plan-history/plan-history.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanHistoryPageModule": () => (/* binding */ PlanHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _plan_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plan-history-routing.module */ 33462);
/* harmony import */ var _plan_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plan-history.page */ 85928);







let PlanHistoryPageModule = class PlanHistoryPageModule {
};
PlanHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _plan_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlanHistoryPageRoutingModule
        ],
        declarations: [_plan_history_page__WEBPACK_IMPORTED_MODULE_1__.PlanHistoryPage]
    })
], PlanHistoryPageModule);



/***/ }),

/***/ 85928:
/*!***************************************************!*\
  !*** ./src/app/plan-history/plan-history.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanHistoryPage": () => (/* binding */ PlanHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_plan_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./plan-history.page.html */ 79614);
/* harmony import */ var _plan_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plan-history.page.scss */ 63590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 67435);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 86219);










let PlanHistoryPage = class PlanHistoryPage {
    constructor(router, modalctrl, rs, http, dataService, toastController, sanitizer) {
        this.router = router;
        this.modalctrl = modalctrl;
        this.rs = rs;
        this.http = http;
        this.dataService = dataService;
        this.toastController = toastController;
        this.sanitizer = sanitizer;
        this.resConfig = [];
        this.showAllDates = false;
        this.filteredData = [];
        this.getHistoryResDataPlan = [];
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
    // loadImage() {
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
        this.resConfig = this.dataService.confData;
        this.userId = this.dataService.Uid;
        this.orgId = this.dataService.Oid;
        this.loadImage();
        this.getPlanHistory();
    }
    getPlanHistory() {
        let DashgetplanHistory = {
            "userId": this.userId,
            "orgId": this.orgId
        };
        this.getHistoryResPlan = this.http.post(this.leavemngtUrl + '/leave/getphistory', JSON.stringify(DashgetplanHistory), this.dataService.jsonauthToken);
        this.getHistoryResPlan.subscribe(res => {
            this.getHistoryResDataPlan = res.data;
            this.historyCount = this.getHistoryResDataPlan.length;
            console.log("employee dash get plan history", JSON.stringify(this.getHistoryResDataPlan));
            this.filterDates();
        });
    }
    filterDates() {
        const currentDate = new Date();
        this.filteredData = this.getHistoryResDataPlan.filter(item => {
            const fromDate = new Date(item.fromdt);
            return fromDate >= currentDate || fromDate.toDateString() === currentDate.toDateString();
        });
    }
    toggleShowDates() {
        this.showAllDates = !this.showAllDates;
    }
    loadPlanHis(leaveId) {
        const id = leaveId[0];
        console.log("leave id for plan", id);
        this.router.navigate(['/plan-details', id]);
    }
};
PlanHistoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer }
];
PlanHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-plan-history',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_plan_history_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_plan_history_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlanHistoryPage);



/***/ }),

/***/ 79614:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/plan-history/plan-history.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n          <ion-avatar>\r\n            <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\r\n          </ion-avatar>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n\r\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"leave-history\">\r\n  <ion-card >\r\n    <ion-card-header>\r\n      <ion-card-title>Plan History</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"ion-text-center\">\r\n      <div style=\"margin-bottom: 10px;\">\r\n        <ion-row>\r\n          <h3 class=\"count\">Total Count:   {{historyCount}}</h3>\r\n        </ion-row>\r\n      </div>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-label class=\"header\">{{resConfig[\"emp_from\"]}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-label class=\"header\">To Date</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-label class=\"header\">Status</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div *ngIf=\"filteredData.length > 0 || filteredData.length === 0\">\r\n      \r\n          <ion-row *ngFor=\"let item of showAllDates ? getHistoryResDataPlan : filteredData\">\r\n            <ion-col size=\"4\">\r\n              <ion-label (click)=\"loadPlanHis([item.leaveId])\">{{item.fromdt}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <ion-label>{{item.todt}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <ion-label>{{item.status}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <!-- <div class=\"header\" *ngIf=\"filteredData.length === 0\">\r\n            No Plan History Found.\r\n          </div>\r\n   -->\r\n  \r\n        <button class=\"header\" type=\"button\" (click)=\"toggleShowDates()\">\r\n          {{ showAllDates ? 'Show less' : 'Show more' }}\r\n        </button>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\r\n \r\n    <ion-tab-button tab=\"Order History\" routerLink=\"/apply-leave\">\r\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n      <ion-label>Apply Leave</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/planned-leave\">\r\n      <ion-icon name=\"browsers\"></ion-icon>\r\n      <ion-label>My Plan</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/permission-apply\">\r\n      <ion-icon name=\"logo-pinterest\"></ion-icon>\r\n      <ion-label>Permission</ion-label>\r\n    </ion-tab-button>\r\n \r\n</ion-tab-bar>\r\n");

/***/ }),

/***/ 63590:
/*!*****************************************************!*\
  !*** ./src/app/plan-history/plan-history.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".flex {\n  display: flex;\n  margin: 10px;\n  font-weight: 600;\n}\n\n.icon {\n  font-size: 25px;\n  margin-left: 20px;\n}\n\n.search {\n  cursor: pointer;\n  font-size: 18px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW4taGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JFO0VBRUUsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXRCSjs7QUE0QkU7RUFFRSxlQUFBO0VBQ0EsaUJBQUE7QUExQko7O0FBNkJFO0VBQ0UsZUFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0FBM0JKIiwiZmlsZSI6InBsYW4taGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubG9nby1pbWFnZSB7XHJcbi8vICAgd2lkdGg6IDUwcHg7IFxyXG4vLyAgIGhlaWdodDogNTBweDsgXHJcbi8vICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuLy8gfVxyXG5cclxuLy8gLmJhY2t7XHJcbi8vICAgICBmbG9hdDogbGVmdDtcclxuLy8gICAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuYnV7XHJcbi8vICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibHVldmlvbGV0O1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgIH1cclxuLy8gICAubWVudXtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgIGZsb2F0OiByaWdodDtcclxuLy8gICAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4gICAgXHJcbi8vICAgfVxyXG5cclxuICAuZmxleHtcclxuICAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAvLyBib3JkZXI6MXB4IHNvbGlkIHllbGxvdztcclxuICB9XHJcbiAgLy8gLnRpdHtcclxuICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAvLyB9XHJcbiAgLmljb257XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLy8gY29sb3I6ICNhMzU1MDQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgfVxyXG4gIC8vIC5saW1pdFRleHRIZWlnaHQxIHtcclxuICAvLyAgIGhlaWdodDogNDAwcHg7IC8qIFNldCB0aGUgZGVzaXJlZCBoZWlnaHQgKi9cclxuICAvLyAgIG92ZXJmbG93LXk6IGF1dG87IC8qIEVuYWJsZSB2ZXJ0aWNhbCBzY3JvbGxpbmcgaWYgbmVjZXNzYXJ5ICovXHJcbiAgLy8gfVxyXG4gICJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_plan-history_plan-history_module_ts.js.map