"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sup-leavedetails_sup-leavedetails_module_ts"],{

/***/ 90176:
/*!*********************************************************************!*\
  !*** ./src/app/sup-leavedetails/sup-leavedetails-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupLeavedetailsPageRoutingModule": () => (/* binding */ SupLeavedetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _sup_leavedetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sup-leavedetails.page */ 12146);




const routes = [
    {
        path: '',
        component: _sup_leavedetails_page__WEBPACK_IMPORTED_MODULE_0__.SupLeavedetailsPage
    }
];
let SupLeavedetailsPageRoutingModule = class SupLeavedetailsPageRoutingModule {
};
SupLeavedetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SupLeavedetailsPageRoutingModule);



/***/ }),

/***/ 33382:
/*!*************************************************************!*\
  !*** ./src/app/sup-leavedetails/sup-leavedetails.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupLeavedetailsPageModule": () => (/* binding */ SupLeavedetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _sup_leavedetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sup-leavedetails-routing.module */ 90176);
/* harmony import */ var _sup_leavedetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sup-leavedetails.page */ 12146);







let SupLeavedetailsPageModule = class SupLeavedetailsPageModule {
};
SupLeavedetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sup_leavedetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupLeavedetailsPageRoutingModule
        ],
        declarations: [_sup_leavedetails_page__WEBPACK_IMPORTED_MODULE_1__.SupLeavedetailsPage]
    })
], SupLeavedetailsPageModule);



/***/ }),

/***/ 12146:
/*!***********************************************************!*\
  !*** ./src/app/sup-leavedetails/sup-leavedetails.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupLeavedetailsPage": () => (/* binding */ SupLeavedetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sup_leavedetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sup-leavedetails.page.html */ 94517);
/* harmony import */ var _sup_leavedetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sup-leavedetails.page.scss */ 57625);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 86219);









let SupLeavedetailsPage = class SupLeavedetailsPage {
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
            "leaveId": this.leaveId
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
SupLeavedetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer }
];
SupLeavedetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-sup-leavedetails',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sup_leavedetails_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sup_leavedetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SupLeavedetailsPage);



/***/ }),

/***/ 94517:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/sup-leavedetails/sup-leavedetails.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\n          <ion-avatar>\n            <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\n          </ion-avatar>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <div *ngIf=\"supervisorStatus\">\n        <ion-buttons slot=\"start\">\n          <ion-icon routerLink=\"/leave-application\" style=\"margin-left: 15px;\" slot=\"start\" name=\"notifications\"></ion-icon>\n          <ion-badge routerLink=\"/leave-application\" slot=\"start\" color=\"danger\" \n          style=\"position: absolute;margin-bottom:30px;border-radius: 10px;margin-left: 15px;\">{{this.dataService.getpacount}}\n          </ion-badge>\n          <ion-button routerLink=\"/search\" slot=\"start\">\n            <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        \n      </div>\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\n    </ion-buttons>\n </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Leave Information</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ng-container *ngFor=\"let item of getindividualdataRes\">\n          <ion-item>\n            <ion-label>Dates</ion-label>\n            <ion-note slot=\"end\">{{ item.fromdt }} / {{ item.todt }}</ion-note>\n          </ion-item>\n          <ion-item>\n            <ion-label>Leave Type</ion-label>\n            <ion-note slot=\"end\">{{ item.leavetypeDesc }}</ion-note>\n          </ion-item>\n          <ion-item>\n            <ion-label>Reason</ion-label>\n            <ion-note slot=\"end\">{{ item.reason }}</ion-note>\n          </ion-item>\n          <ion-item>\n            <ion-label>Status</ion-label>\n            <ion-note slot=\"end\">{{ item.statusDesc }}</ion-note>\n          </ion-item>\n\n          <ion-item>\n            <ion-label class=\"comment-text\">Approver Comments</ion-label>\n            <ion-note slot=\"end\" class=\"comment-text\">{{ item.app_comments }}</ion-note>\n          </ion-item>\n        </ng-container>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"ion-padding\">\n    <ion-button expand=\"full\" color=\"tertiary\" (click)=\"cancelLeave()\" [disabled]=\"!isCancelEnabled\">Cancel Leave</ion-button>\n  </div>\n</ion-content>\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\n    <ion-tab-button tab=\"Order History\" routerLink=\"/supervisor\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      <ion-label>Apply Leave</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/sup-dashboard\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Sup-Dash</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"login\" routerLink=\"/leave-application\">\n      <ion-icon name=\"create-outline\"></ion-icon>\n      <ion-label>Pending Approvals</ion-label>\n    </ion-tab-button>\n</ion-tab-bar>\n\n\n");

/***/ }),

/***/ 57625:
/*!*************************************************************!*\
  !*** ./src/app/sup-leavedetails/sup-leavedetails.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "ion-note {\n  color: #080080;\n  font-size: 14px;\n}\n\n.comment-text {\n  white-space: normal;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cC1sZWF2ZWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFFSiIsImZpbGUiOiJzdXAtbGVhdmVkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ub3Rle1xyXG4gICAgY29sb3I6ICMwODAwODA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5jb21tZW50LXRleHQge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8gLmxvZ28taW1hZ2Uge1xyXG4gIC8vICAgd2lkdGg6IDUwcHg7IFxyXG4gIC8vICAgaGVpZ2h0OiA1MHB4OyBcclxuICAvLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIFxyXG4gIC8vIC5iYWNre1xyXG4gIC8vICAgICBmbG9hdDogbGVmdDtcclxuICAvLyAgICAgLy8gY29sb3I6ICMwMDAwODA7XHJcbiAgLy8gICB9XHJcbiAgICBcclxuICAvLyAgIC5idXtcclxuICAvLyAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmx1ZXZpb2xldDtcclxuICAvLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC8vICAgfVxyXG4gIC8vICAgLm1lbnV7XHJcbiAgLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAvLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC8vICAgICAvLyBjb2xvcjogIzAwMDA4MDtcclxuICAgICAgXHJcbiAgLy8gICB9XHJcbiAgXHJcbiAgICJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_sup-leavedetails_sup-leavedetails_module_ts.js.map