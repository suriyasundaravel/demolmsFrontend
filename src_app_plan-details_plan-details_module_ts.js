"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_plan-details_plan-details_module_ts"],{

/***/ 98967:
/*!*************************************************************!*\
  !*** ./src/app/plan-details/plan-details-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanDetailsPageRoutingModule": () => (/* binding */ PlanDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _plan_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plan-details.page */ 22127);




const routes = [
    {
        path: '',
        component: _plan_details_page__WEBPACK_IMPORTED_MODULE_0__.PlanDetailsPage
    }
];
let PlanDetailsPageRoutingModule = class PlanDetailsPageRoutingModule {
};
PlanDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlanDetailsPageRoutingModule);



/***/ }),

/***/ 51962:
/*!*****************************************************!*\
  !*** ./src/app/plan-details/plan-details.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanDetailsPageModule": () => (/* binding */ PlanDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _plan_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plan-details-routing.module */ 98967);
/* harmony import */ var _plan_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plan-details.page */ 22127);







let PlanDetailsPageModule = class PlanDetailsPageModule {
};
PlanDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _plan_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlanDetailsPageRoutingModule
        ],
        declarations: [_plan_details_page__WEBPACK_IMPORTED_MODULE_1__.PlanDetailsPage]
    })
], PlanDetailsPageModule);



/***/ }),

/***/ 22127:
/*!***************************************************!*\
  !*** ./src/app/plan-details/plan-details.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanDetailsPage": () => (/* binding */ PlanDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_plan_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./plan-details.page.html */ 3598);
/* harmony import */ var _plan_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plan-details.page.scss */ 1490);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 86219);









let PlanDetailsPage = class PlanDetailsPage {
    constructor(activatedRoute, router, http, dataService, toastController, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.dataService = dataService;
        this.toastController = toastController;
        this.sanitizer = sanitizer;
        this.isCancelEnabled = false;
        this.resConfig = [];
        this.cancelresDataplan = [];
        this.plantoresData = [];
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
        this.activatedRoute.paramMap.subscribe(param => {
            this.leaveId = +param.get('leaveId');
            // Call a function to fetch leave details using the leaveId
            this.getLeaveDetails();
        });
    }
    getLeaveDetails() {
        let leaveid = {
            "planId": this.leaveId,
            "orgId": this.orgId,
            "userId": this.userId
        };
        this.getindividualdata = this.http.post(this.leavemngtUrl + '/leave/getpinfo', leaveid, this.dataService.jsonauthToken);
        this.getindividualdata.subscribe((res) => {
            this.getindividualdataRes = res.data;
            console.log("individual leave", this.getindividualdataRes);
            // Compare "from" date with current date
            const leaveFromdt = new Date(this.getindividualdataRes[0].fromdt);
            const currentDate = new Date();
            this.isCancelEnabled = leaveFromdt > currentDate;
        }, (error) => {
            console.error("Error retrieving individual leave", error);
        });
    }
    cancelLeavePlan() {
        let cancelId = {
            "leaveId": this.leaveId
        };
        this.cancelresplan = this.http.post(this.leavemngtUrl + '/leave/plan_cancel', cancelId, Object.assign(Object.assign({}, this.dataService.jsonauthToken), { responseType: 'text' // Specify the response type as text
         }));
        this.cancelresplan.subscribe((res) => {
            this.cancelresDataplan = res;
            console.log("cancel response", this.cancelresDataplan);
            const toastc = this.toastController.create({
                message: this.cancelresDataplan,
                position: 'middle',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'Cancel',
                        handler: () => {
                            this.router.navigate(['/emp-dashboard']);
                        }
                    }
                ]
            }).then(toast => {
                toast.present();
            });
        }, (error) => {
            console.log("Error:", error);
            // Handle error case if needed
        });
    }
    planToleave() {
        let cancelId = {
            "leaveId": this.leaveId
        };
        this.plantores = this.http.post(this.leavemngtUrl + '/leave/convert_leave', cancelId, this.dataService.jsonauthToken);
        this.plantores.subscribe((res) => {
            this.plantoresData = res;
            console.log("response", this.cancelresDataplan);
            const plantoleaveResponse = this.plantoresData['msg'];
            const toastc = this.toastController.create({
                message: plantoleaveResponse,
                position: 'middle',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'Cancel',
                        handler: () => {
                            // Emit the leaveBalanceUpdated event
                            this.dataService.leaveBalanceUpdated.emit();
                            this.router.navigate(['/emp-dashboard']);
                        }
                    }
                ]
            }).then(toast => {
                toast.present();
            });
        }, (error) => {
            console.log("Error:", error);
            // Handle error case if needed
        });
    }
};
PlanDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer }
];
PlanDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-plan-details',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_plan_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_plan_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlanDetailsPage);



/***/ }),

/***/ 3598:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/plan-details/plan-details.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n          <ion-avatar>\r\n            <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\r\n          </ion-avatar>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n\r\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Plan Information</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ng-container *ngFor=\"let item of getindividualdataRes\">\r\n          <ion-item>\r\n            <ion-label>Dates</ion-label>\r\n            <ion-note slot=\"end\">{{ item.fromdt }} / {{ item.todt }}</ion-note>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Plan Type</ion-label>\r\n            <ion-note slot=\"end\">{{ item.leavetypeDesc }}</ion-note>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Reason</ion-label>\r\n            <ion-note slot=\"end\">{{ item.reason }}</ion-note>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Status</ion-label>\r\n            <ion-note slot=\"end\">{{ item.status }}</ion-note>\r\n          </ion-item>\r\n          <!-- <ion-item>\r\n            <ion-label class=\"comment-text\">Approver Comments</ion-label>\r\n            <ion-note slot=\"end\" class=\"comment-text\">{{ item.app_comments }}</ion-note>\r\n          </ion-item> -->\r\n          <div style=\"float: right; display: flex;\">\r\n            <ion-button (click)=\"cancelLeavePlan()\" [disabled]=\"!isCancelEnabled || item.status === 'CON'\" color=\"danger\">Cancel Plan</ion-button>\r\n            <ion-button color=\"tertiary\" [disabled]=\"item.status === 'CON'\" (click)=\"planToleave()\">Convert to Leave</ion-button>\r\n          </div>\r\n        </ng-container>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\r\n    <ion-tab-button tab=\"Order History\" routerLink=\"/apply-leave\">\r\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n      <ion-label>Apply Leave</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/planned-leave\">\r\n      <ion-icon name=\"browsers\"></ion-icon>\r\n      <ion-label>My Plan</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/permission-apply\">\r\n      <ion-icon name=\"logo-pinterest\"></ion-icon>\r\n      <ion-label>Permission</ion-label>\r\n    </ion-tab-button>\r\n\r\n \r\n</ion-tab-bar>\r\n\r\n");

/***/ }),

/***/ 1490:
/*!*****************************************************!*\
  !*** ./src/app/plan-details/plan-details.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "ion-note {\n  color: #080080;\n  font-size: 14px;\n}\n\n.comment-text {\n  white-space: normal;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW4tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQUVKIiwiZmlsZSI6InBsYW4tZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbm90ZXtcclxuICAgIGNvbG9yOiAjMDgwMDgwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAuY29tbWVudC10ZXh0IHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG4gIC8vIC5sb2dvLWltYWdlIHtcclxuICAvLyAgIHdpZHRoOiA1MHB4OyBcclxuICAvLyAgIGhlaWdodDogNTBweDsgXHJcbiAgLy8gICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC8vIH1cclxuICJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_plan-details_plan-details_module_ts.js.map