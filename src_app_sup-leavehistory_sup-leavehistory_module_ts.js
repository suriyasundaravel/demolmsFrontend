"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sup-leavehistory_sup-leavehistory_module_ts"],{

/***/ 27819:
/*!*********************************************************************!*\
  !*** ./src/app/sup-leavehistory/sup-leavehistory-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupLeavehistoryPageRoutingModule": () => (/* binding */ SupLeavehistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _sup_leavehistory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sup-leavehistory.page */ 25695);




const routes = [
    {
        path: '',
        component: _sup_leavehistory_page__WEBPACK_IMPORTED_MODULE_0__.SupLeavehistoryPage
    }
];
let SupLeavehistoryPageRoutingModule = class SupLeavehistoryPageRoutingModule {
};
SupLeavehistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SupLeavehistoryPageRoutingModule);



/***/ }),

/***/ 76611:
/*!*************************************************************!*\
  !*** ./src/app/sup-leavehistory/sup-leavehistory.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupLeavehistoryPageModule": () => (/* binding */ SupLeavehistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _sup_leavehistory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sup-leavehistory-routing.module */ 27819);
/* harmony import */ var _sup_leavehistory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sup-leavehistory.page */ 25695);







let SupLeavehistoryPageModule = class SupLeavehistoryPageModule {
};
SupLeavehistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sup_leavehistory_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupLeavehistoryPageRoutingModule
        ],
        declarations: [_sup_leavehistory_page__WEBPACK_IMPORTED_MODULE_1__.SupLeavehistoryPage]
    })
], SupLeavehistoryPageModule);



/***/ }),

/***/ 25695:
/*!***********************************************************!*\
  !*** ./src/app/sup-leavehistory/sup-leavehistory.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupLeavehistoryPage": () => (/* binding */ SupLeavehistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sup_leavehistory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sup-leavehistory.page.html */ 16588);
/* harmony import */ var _sup_leavehistory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sup-leavehistory.page.scss */ 61195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 67435);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 86219);










let SupLeavehistoryPage = class SupLeavehistoryPage {
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
        this.router.navigate(['/sup-leavedetails', id]);
    }
};
SupLeavehistoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer }
];
SupLeavehistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-sup-leavehistory',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sup_leavehistory_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sup_leavehistory_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SupLeavehistoryPage);



/***/ }),

/***/ 16588:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/sup-leavehistory/sup-leavehistory.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\n          <ion-avatar>\n            <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\n          </ion-avatar>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <div *ngIf=\"supervisorStatus\">\n        <ion-buttons slot=\"start\">\n          <ion-icon routerLink=\"/leave-application\" style=\"margin-left: 15px;\" slot=\"start\" name=\"notifications\"></ion-icon>\n          <ion-badge routerLink=\"/leave-application\" slot=\"start\" color=\"danger\" \n          style=\"position: absolute;margin-bottom:30px;border-radius: 10px;margin-left: 15px;\">{{this.dataService.getpacount}}\n          </ion-badge>\n          <ion-button routerLink=\"/search\" slot=\"start\">\n            <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        \n      </div>\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\n    </ion-buttons>\n </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"leave-history\">\n\n  <ion-card >\n    <ion-card-header>\n      <ion-card-title>Leave History</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"ion-text-center\">\n      <div>\n        <ion-row>\n          <h3 class=\"count\">Total Count:   {{historyCount}}</h3>\n        </ion-row>\n      </div>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-label class=\"header\">{{resConfig[\"emp_from\"]}}</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-label class=\"header\">To Date</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-label class=\"header\">Status</ion-label>\n        </ion-col>\n      </ion-row>\n      <!-- <div [ngClass]=\"{'limitTextHeight1': !showAllLeaveHistory}\">\n        <ion-row *ngFor=\"let item of filteredData\">\n          <ion-col size=\"4\">\n            <ion-label (click)=\"loadLeaveHis([item.leaveId])\">{{item.fromdt}}</ion-label>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label>{{item.todt}}</ion-label>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label>{{item.reason}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n      <button class=\"header\" type=\"button\" (click)=\"toggleLeaveHistory()\">\n        {{ showAllLeaveHistory ? 'Show Less' : 'Show More' }}\n      </button> -->\n      <div *ngIf=\"filteredData.length > 0 || filteredData.length === 0\">\n      \n        <ion-row *ngFor=\"let item of showAllDates ? getHistoryResData : filteredData\">\n          <ion-col size=\"4\">\n            <ion-label (click)=\"loadLeaveHis([item.leaveId])\">{{item.fromdt}}</ion-label>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label>{{item.todt}}</ion-label>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label>{{item.statusDesc}}</ion-label>\n          </ion-col>\n        </ion-row>\n        <!-- <div class=\"header\" *ngIf=\"filteredData.length === 0\">\n          No Leave History Found.\n        </div> -->\n\n      <button class=\"header\" type=\"button\" (click)=\"toggleShowDates()\">\n        {{ showAllDates ? 'Show less' : 'Show more' }}\n      </button>\n    </div>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\n    <ion-tab-button tab=\"Order History\" routerLink=\"/supervisor\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      <ion-label>Apply Leave</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/sup-dashboard\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Sup-Dash</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"login\" routerLink=\"/leave-application\">\n      <ion-icon name=\"create-outline\"></ion-icon>\n      <ion-label>Pending Approvals</ion-label>\n    </ion-tab-button>\n</ion-tab-bar>\n\n");

/***/ }),

/***/ 61195:
/*!*************************************************************!*\
  !*** ./src/app/sup-leavehistory/sup-leavehistory.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".flex {\n  display: flex;\n  margin: 10px;\n  font-weight: 600;\n}\n\n.icon {\n  font-size: 25px;\n  margin-left: 20px;\n}\n\n.search {\n  cursor: pointer;\n  font-size: 18px;\n  float: right;\n}\n\n.limitTextHeight1 {\n  height: 400px;\n  /* Set the desired height */\n  overflow-y: auto;\n  /* Enable vertical scrolling if necessary */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cC1sZWF2ZWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCRTtFQUVFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUF2Qko7O0FBNkJFO0VBRUUsZUFBQTtFQUNBLGlCQUFBO0FBM0JKOztBQThCRTtFQUNFLGVBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtBQTVCSjs7QUFnQ0U7RUFDRSxhQUFBO0VBQWUsMkJBQUE7RUFDZixnQkFBQTtFQUFrQiwyQ0FBQTtBQTNCdEIiLCJmaWxlIjoic3VwLWxlYXZlaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gLmxvZ28taW1hZ2Uge1xyXG4vLyAgIHdpZHRoOiA1MHB4OyBcclxuLy8gICBoZWlnaHQ6IDUwcHg7IFxyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5iYWNre1xyXG4vLyAgICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgICAvLyBjb2xvcjogIzAwMDA4MDtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLmJ1e1xyXG4vLyAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmx1ZXZpb2xldDtcclxuLy8gICAgIGZsb2F0OiByaWdodDtcclxuLy8gICB9XHJcbi8vICAgLm1lbnV7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICBmbG9hdDogcmlnaHQ7XHJcbi8vICAgICAvLyBjb2xvcjogIzAwMDA4MDtcclxuICAgIFxyXG4vLyAgIH1cclxuXHJcbiAgLmZsZXh7XHJcbiAgICAvLyBjb2xvcjogIzAwMDA4MDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgLy8gYm9yZGVyOjFweCBzb2xpZCB5ZWxsb3c7XHJcbiAgfVxyXG4gIC8vIC50aXR7XHJcbiAgLy8gICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgLy8gfVxyXG4gIC5pY29ue1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8vIGNvbG9yOiAjYTM1NTA0O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG4gIH1cclxuICAubGltaXRUZXh0SGVpZ2h0MSB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4OyAvKiBTZXQgdGhlIGRlc2lyZWQgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBFbmFibGUgdmVydGljYWwgc2Nyb2xsaW5nIGlmIG5lY2Vzc2FyeSAqL1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_sup-leavehistory_sup-leavehistory_module_ts.js.map