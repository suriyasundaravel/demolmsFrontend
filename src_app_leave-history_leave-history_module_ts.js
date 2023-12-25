"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_leave-history_leave-history_module_ts"],{

/***/ 4123:
/*!***************************************************************!*\
  !*** ./src/app/leave-history/leave-history-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveHistoryPageRoutingModule": () => (/* binding */ LeaveHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _leave_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-history.page */ 3479);




const routes = [
    {
        path: '',
        component: _leave_history_page__WEBPACK_IMPORTED_MODULE_0__.LeaveHistoryPage
    }
];
let LeaveHistoryPageRoutingModule = class LeaveHistoryPageRoutingModule {
};
LeaveHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LeaveHistoryPageRoutingModule);



/***/ }),

/***/ 18854:
/*!*******************************************************!*\
  !*** ./src/app/leave-history/leave-history.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveHistoryPageModule": () => (/* binding */ LeaveHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _leave_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-history-routing.module */ 4123);
/* harmony import */ var _leave_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-history.page */ 3479);







let LeaveHistoryPageModule = class LeaveHistoryPageModule {
};
LeaveHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _leave_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeaveHistoryPageRoutingModule
        ],
        declarations: [_leave_history_page__WEBPACK_IMPORTED_MODULE_1__.LeaveHistoryPage]
    })
], LeaveHistoryPageModule);



/***/ }),

/***/ 3479:
/*!*****************************************************!*\
  !*** ./src/app/leave-history/leave-history.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveHistoryPage": () => (/* binding */ LeaveHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_leave_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./leave-history.page.html */ 94095);
/* harmony import */ var _leave_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-history.page.scss */ 86724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 67435);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 86219);










let LeaveHistoryPage = class LeaveHistoryPage {
    constructor(router, modalctrl, rs, http, dataService, toastController, sanitizer) {
        this.router = router;
        this.modalctrl = modalctrl;
        this.rs = rs;
        this.http = http;
        this.dataService = dataService;
        this.toastController = toastController;
        this.sanitizer = sanitizer;
        this.showAllDates = false;
        this.filteredData = [];
        this.getHistoryResData = [];
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
        this.getLeaveHistory();
    }
    getLeaveHistory() {
        const DashgetleaveHistory = {
            "userId": this.userId,
            "orgId": this.orgId
        };
        this.http.post(this.leavemngtUrl + '/leave/getlhistory', JSON.stringify(DashgetleaveHistory), this.dataService.jsonauthToken)
            .subscribe((response) => {
            this.getHistoryResData = response.data;
            this.historyCount = this.getHistoryResData.length;
            console.log("employee dash get leave history", JSON.stringify(this.getHistoryResData));
            this.filterDates();
        });
    }
    filterDates() {
        const currentDate = new Date();
        this.filteredData = this.getHistoryResData.filter(item => {
            const fromDate = new Date(item.fromdt);
            return fromDate >= currentDate || fromDate.toDateString() === currentDate.toDateString();
        });
    }
    toggleShowDates() {
        this.showAllDates = !this.showAllDates;
    }
    loadLeaveHis(leaveId) {
        const id = leaveId[0]; // Extract the leave ID from the array
        console.log("leave id", id);
        this.router.navigate(['/leave-details', id]);
    }
};
LeaveHistoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer }
];
LeaveHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-leave-history',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_leave_history_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_leave_history_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LeaveHistoryPage);



/***/ }),

/***/ 94095:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/leave-history/leave-history.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n          <ion-avatar>\r\n            <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\r\n          </ion-avatar>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n\r\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"leave-history\">\r\n  <ion-card >\r\n    <ion-card-header>\r\n      <ion-card-title>Leave History</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"ion-text-center\">\r\n      <div style=\"margin-bottom: 10px;\">\r\n        <ion-row>\r\n          <h3 class=\"count\">Total Count:   {{historyCount}}</h3>\r\n        </ion-row>\r\n      </div>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-label class=\"header\">{{resConfig[\"emp_from\"]}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-label class=\"header\">To Date</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-label class=\"header\">Status</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div *ngIf=\"filteredData.length > 0 || filteredData.length === 0\">\r\n      \r\n          <ion-row *ngFor=\"let item of showAllDates ? getHistoryResData : filteredData\">\r\n            <ion-col size=\"4\">\r\n              <ion-label (click)=\"loadLeaveHis([item.leaveId])\">{{item.fromdt}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <ion-label>{{item.todt}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <ion-label>{{item.status}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <!-- <div class=\"header\" *ngIf=\"filteredData.length === 0\">\r\n            No Leave History Found.\r\n          </div> -->\r\n  \r\n  \r\n        <button class=\"header\" type=\"button\" (click)=\"toggleShowDates()\">\r\n          {{ showAllDates ? 'Show less' : 'Show more' }}\r\n        </button>\r\n      </div>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\r\n    <ion-tab-button tab=\"Order History\" routerLink=\"/apply-leave\">\r\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n      <ion-label>Apply Leave</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/planned-leave\">\r\n      <ion-icon name=\"browsers\"></ion-icon>\r\n      <ion-label>My Plan</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/permission-apply\">\r\n      <ion-icon name=\"logo-pinterest\"></ion-icon>\r\n      <ion-label>Permission</ion-label>\r\n    </ion-tab-button>\r\n\r\n\r\n</ion-tab-bar>\r\n\r\n\r\n");

/***/ }),

/***/ 86724:
/*!*******************************************************!*\
  !*** ./src/app/leave-history/leave-history.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".flex {\n  display: flex;\n  margin: 10px;\n  font-weight: 600;\n}\n\n.icon {\n  font-size: 25px;\n  margin-left: 20px;\n}\n\n.search {\n  cursor: pointer;\n  font-size: 18px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlLWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCRTtFQUVFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUF6Qko7O0FBK0JFO0VBRUUsZUFBQTtFQUNBLGlCQUFBO0FBN0JKOztBQWdDRTtFQUNFLGVBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtBQTlCSiIsImZpbGUiOiJsZWF2ZS1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyAubG9nby1pbWFnZSB7XHJcbi8vICAgd2lkdGg6IDUwcHg7IFxyXG4vLyAgIGhlaWdodDogNTBweDsgXHJcbi8vICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyAuYmFja3tcclxuLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgICAgLy8gY29sb3I6ICMwMDAwODA7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5idXtcclxuLy8gICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsdWV2aW9sZXQ7XHJcbi8vICAgICBmbG9hdDogcmlnaHQ7XHJcbi8vICAgfVxyXG4vLyAgIC5tZW51e1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgICAgLy8gY29sb3I6ICMwMDAwODA7XHJcbiAgICBcclxuLy8gICB9XHJcblxyXG4gIC5mbGV4e1xyXG4gICAgLy8gY29sb3I6ICMwMDAwODA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC8vIGJvcmRlcjoxcHggc29saWQgeWVsbG93O1xyXG4gIH1cclxuICAvLyAudGl0e1xyXG4gIC8vICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIC8vIH1cclxuICAuaWNvbntcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIC5zZWFyY2h7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyBjb2xvcjogI2EzNTUwNDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMTAwJTtcclxuICB9XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_leave-history_leave-history_module_ts.js.map