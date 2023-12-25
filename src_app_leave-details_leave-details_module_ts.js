"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_leave-details_leave-details_module_ts"],{

/***/ 58344:
/*!***************************************************************!*\
  !*** ./src/app/leave-details/leave-details-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveDetailsPageRoutingModule": () => (/* binding */ LeaveDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _leave_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-details.page */ 85322);




const routes = [
    {
        path: '',
        component: _leave_details_page__WEBPACK_IMPORTED_MODULE_0__.LeaveDetailsPage
    }
];
let LeaveDetailsPageRoutingModule = class LeaveDetailsPageRoutingModule {
};
LeaveDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LeaveDetailsPageRoutingModule);



/***/ }),

/***/ 66760:
/*!*******************************************************!*\
  !*** ./src/app/leave-details/leave-details.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveDetailsPageModule": () => (/* binding */ LeaveDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _leave_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-details-routing.module */ 58344);
/* harmony import */ var _leave_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-details.page */ 85322);







let LeaveDetailsPageModule = class LeaveDetailsPageModule {
};
LeaveDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _leave_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeaveDetailsPageRoutingModule
        ],
        declarations: [_leave_details_page__WEBPACK_IMPORTED_MODULE_1__.LeaveDetailsPage]
    })
], LeaveDetailsPageModule);



/***/ }),

/***/ 85322:
/*!*****************************************************!*\
  !*** ./src/app/leave-details/leave-details.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveDetailsPage": () => (/* binding */ LeaveDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_leave_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./leave-details.page.html */ 50517);
/* harmony import */ var _leave_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-details.page.scss */ 16583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 86219);









let LeaveDetailsPage = class LeaveDetailsPage {
    constructor(activatedRoute, router, http, dataService, toastController, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.dataService = dataService;
        this.toastController = toastController;
        this.sanitizer = sanitizer;
        this.isCancelEnabled = false;
        this.resConfig = [];
        this.cancelresData = [];
        this.getindividualdataRes = [];
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
        this.resConfig = this.dataService.confData;
        this.userId = this.dataService.Uid;
        this.orgId = this.dataService.Oid;
        this.loadImage();
        this.activatedRoute.paramMap.subscribe(params => {
            this.leaveId = +params.get('leaveId');
            // Call a function to fetch leave details using the leaveId
            this.getLeaveDetails();
        });
    }
    getLeaveDetails() {
        let leaveid = {
            "leaveId": this.leaveId,
            "orgId": this.orgId,
            "userId": this.userId
        };
        this.getindividualdata = this.http.post(this.leavemngtUrl + '/leave/getlinfo', leaveid, this.dataService.jsonauthToken);
        this.getindividualdata.subscribe((res) => {
            this.getindividualdataRes = res.data;
            console.log("individual leave", this.getindividualdataRes);
            // Compare "from" date with current date
            const leaveFromdt = new Date(this.getindividualdataRes[0].fromdt);
            const currentDate = new Date();
            let currentStatus = this.getindividualdataRes[0].status;
            this.isCancelEnabled = leaveFromdt > currentDate;
            if ("REJ" == currentStatus || "R" == currentStatus) {
                this.isCancelEnabled = false;
            }
        }, (error) => {
            console.error("Error retrieving individual leave", error);
        });
    }
    cancelLeave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let cancelId = {
                "leaveId": this.leaveId
            };
            console.log("leave id", this.leaveId);
            this.cancelres = yield this.http.post(this.leavemngtUrl + '/leave/leave_cancel', cancelId, Object.assign(Object.assign({}, this.dataService.jsonauthToken), { responseType: 'text' //  the response type is text
             }));
            this.cancelres.subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.cancelresData = res;
                console.log("cancel response", this.cancelresData);
                const toastc = yield this.toastController.create({
                    message: this.cancelresData,
                    position: 'middle',
                    buttons: [
                        {
                            text: 'OK',
                            role: 'cancel',
                            handler: () => {
                                // Emit the leaveBalanceUpdated event
                                this.dataService.leaveBalanceUpdated.emit();
                                // Handle button click if needed
                                this.router.navigate(['/emp-dashboard']);
                                console.log('OK clicked');
                            }
                        }
                    ]
                }).then(toast => {
                    toast.present();
                });
            }), (error) => {
                console.log("Error:", error);
            });
        });
    }
};
LeaveDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer }
];
LeaveDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-leave-details',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_leave_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_leave_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LeaveDetailsPage);



/***/ }),

/***/ 50517:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/leave-details/leave-details.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n          <ion-avatar>\r\n            <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\r\n          </ion-avatar>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n\r\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Leave Information</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ng-container *ngFor=\"let item of getindividualdataRes\">\r\n          <ion-item>\r\n            <ion-label>Dates</ion-label>\r\n            <ion-note slot=\"end\">{{ item.fromdt }} / {{ item.todt }}</ion-note>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Leave Type</ion-label>\r\n            <ion-note slot=\"end\">{{ item.leavetypeDesc }}</ion-note>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Reason</ion-label>\r\n            <ion-note slot=\"end\">{{ item.reason }}</ion-note>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Status</ion-label>\r\n            <ion-note slot=\"end\">{{ item.status }}</ion-note>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label class=\"comment-text\">Approver Comments</ion-label>\r\n            <ion-note slot=\"end\" class=\"comment-text\">{{ item.app_comments }}</ion-note>\r\n          </ion-item>\r\n        </ng-container>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-button expand=\"full\" color=\"tertiary\" (click)=\"cancelLeave()\" [disabled]=\"!isCancelEnabled\">Cancel Leave</ion-button>\r\n  </div>\r\n</ion-content>\r\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\r\n    <ion-tab-button tab=\"Order History\" routerLink=\"/apply-leave\">\r\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n      <ion-label>Apply Leave</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/planned-leave\">\r\n      <ion-icon name=\"browsers\"></ion-icon>\r\n      <ion-label>My Plan</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/permission-apply\">\r\n      <ion-icon name=\"logo-pinterest\"></ion-icon>\r\n      <ion-label>Permission</ion-label>\r\n    </ion-tab-button>\r\n  \r\n</ion-tab-bar>\r\n\r\n\r\n");

/***/ }),

/***/ 16583:
/*!*******************************************************!*\
  !*** ./src/app/leave-details/leave-details.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ion-note {\n  color: #080080;\n  font-size: 14px;\n}\n\n.comment-text {\n  white-space: normal;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFFRiIsImZpbGUiOiJsZWF2ZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ub3Rle1xyXG4gIGNvbG9yOiAjMDgwMDgwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uY29tbWVudC10ZXh0IHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLy8gLmxvZ28taW1hZ2Uge1xyXG4vLyAgIHdpZHRoOiA1MHB4OyBcclxuLy8gICBoZWlnaHQ6IDUwcHg7IFxyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gLmJhY2t7XHJcbi8vICAgICBmbG9hdDogbGVmdDtcclxuLy8gICAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuYnV7XHJcbi8vICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibHVldmlvbGV0O1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgIH1cclxuLy8gICAubWVudXtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgIGZsb2F0OiByaWdodDtcclxuLy8gICAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4gICAgXHJcbi8vICAgfVxyXG5cclxuICJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_leave-details_leave-details_module_ts.js.map