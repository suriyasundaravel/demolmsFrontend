"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_apply-leave_apply-leave_module_ts"],{

/***/ 49016:
/*!***********************************************************!*\
  !*** ./src/app/apply-leave/apply-leave-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyLeavePageRoutingModule": () => (/* binding */ ApplyLeavePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _apply_leave_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply-leave.page */ 18265);




const routes = [
    {
        path: '',
        component: _apply_leave_page__WEBPACK_IMPORTED_MODULE_0__.ApplyLeavePage
    }
];
let ApplyLeavePageRoutingModule = class ApplyLeavePageRoutingModule {
};
ApplyLeavePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApplyLeavePageRoutingModule);



/***/ }),

/***/ 36081:
/*!***************************************************!*\
  !*** ./src/app/apply-leave/apply-leave.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyLeavePageModule": () => (/* binding */ ApplyLeavePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _apply_leave_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply-leave-routing.module */ 49016);
/* harmony import */ var _apply_leave_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-leave.page */ 18265);







let ApplyLeavePageModule = class ApplyLeavePageModule {
};
ApplyLeavePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _apply_leave_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApplyLeavePageRoutingModule
        ],
        declarations: [_apply_leave_page__WEBPACK_IMPORTED_MODULE_1__.ApplyLeavePage]
    })
], ApplyLeavePageModule);



/***/ }),

/***/ 18265:
/*!*************************************************!*\
  !*** ./src/app/apply-leave/apply-leave.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyLeavePage": () => (/* binding */ ApplyLeavePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_apply_leave_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./apply-leave.page.html */ 70280);
/* harmony import */ var _apply_leave_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-leave.page.scss */ 3313);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 86219);









let ApplyLeavePage = class ApplyLeavePage {
    constructor(router, dataService, http, toastController, alertController, sanitizer) {
        this.router = router;
        this.dataService = dataService;
        this.http = http;
        this.toastController = toastController;
        this.alertController = alertController;
        this.sanitizer = sanitizer;
        this.resConfig = [];
        this.leavetype = [];
        this.leavemngtUrl = this.dataService.base_path;
        this.userId = this.dataService.Uid;
        this.orgId = this.dataService.Oid;
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
        this.dataService.getLeaveType().subscribe(data => {
            console.log("initial data", data);
            this.leavetype = data['configValues'];
            console.log("leave type config values", this.leave_type);
        });
    }
    openDatePicker(inputFieldName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Select Date',
                inputs: [
                    {
                        name: 'selectedDate',
                        type: 'date',
                        placeholder: 'Select Date',
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'OK',
                        handler: (data) => {
                            // Handle the selected date
                            this.handleSelectedDate(inputFieldName, data.selectedDate);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    handleSelectedDate(inputFieldName, selectedDate) {
        // Handle the selected date based on the input field name
        if (inputFieldName === 'start_date') {
            this.start_date = selectedDate;
        }
        else if (inputFieldName === 'end_date') {
            this.end_date = selectedDate;
        }
    }
    calDifDate1(start, end) {
        let count = 0;
        let currentDate = +start;
        let endDate = +end;
        while (currentDate <= endDate) {
            const dayofWeek = new Date(currentDate).getDay();
            const isWeekEnd = (dayofWeek === 6) || (dayofWeek === 0);
            if (!isWeekEnd) {
                count++;
            }
            currentDate = currentDate + 24 * 60 * 60 * 1000;
        }
        return count;
    }
    saveRecord() {
        if (!this.start_date || !this.end_date || !this.leave_type) {
            const toast = this.toastController.create({
                message: 'Please fill in all the required fields.',
                duration: 2000,
                position: 'middle'
            }).then(toast => {
                toast.present();
            });
            return;
        }
        let d1 = new Date(this.start_date);
        let d2 = new Date(this.end_date);
        if (d1 > d2) {
            const toast = this.toastController.create({
                message: 'End date must be greater than or equal to the start date.',
                duration: 2000,
                position: 'middle'
            }).then(toast => {
                toast.present();
            });
            return;
        }
        let diff = this.calDifDate1(d1, d2);
        console.log("difference date between d1 and d2", diff);
        let applyLeave = {
            "fromdt": this.start_date,
            "todt": this.end_date,
            "ltype": this.leave_type,
            "hours": "24",
            "reason": this.leave_reason,
            "app_comments": "",
            "days": diff,
            "userId": this.userId,
            "orgId": this.orgId
            // "classif": "LEAVE",
        };
        this.applyleaveRes = this.http.post(this.leavemngtUrl + '/leave/saveleave', JSON.stringify(applyLeave), this.dataService.jsonauthToken);
        this.applyleaveRes.subscribe(data => {
            this.applyleaveResData = data;
            console.log("save record of apply leave", this.applyleaveResData);
            // Clear input fields after saving the record
            this.start_date = '';
            this.end_date = '';
            this.leave_type = '';
            this.leave_reason = '';
            let sucMsg = this.applyleaveResData['status'];
            if (sucMsg === 'Success') {
                const toast = this.toastController.create({
                    message: this.applyleaveResData['message'],
                    position: 'middle',
                    buttons: [
                        {
                            text: 'OK',
                            role: 'ok',
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
            }
        }, (error) => {
            console.log("Error:", error);
            // Handle error case if needed
        });
    }
};
ApplyLeavePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer }
];
ApplyLeavePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-apply-leave',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_apply_leave_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_apply_leave_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ApplyLeavePage);



/***/ }),

/***/ 70280:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/apply-leave/apply-leave.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n          \r\n            <ion-avatar>\r\n              <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\r\n            </ion-avatar>\r\n          \r\n          \r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n\r\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"apply\">\r\n  <h3 class=\"title\">Leave Details</h3>\r\n  <div  style=\"margin-top: 30px;\">\r\n    <form>\r\n      <div class=\"center\">   \r\n        <ion-item-divider class=\"phone\">\r\n          {{resConfig[\"emp_from\"]}}\r\n          <ion-input class=\"no\" #f3=\"ngModel\" [(ngModel)]=\"start_date\" type=\"text\" name=\"first3\" required\r\n            (ionFocus)=\"openDatePicker('start_date')\"></ion-input>\r\n        </ion-item-divider>\r\n        \r\n        <ion-item-divider class=\"phone\">\r\n          {{resConfig[\"emp_to\"]}}\r\n          <ion-input class=\"no\" #f4=\"ngModel\" [(ngModel)]=\"end_date\" type=\"text\" name=\"first4\" required\r\n            (ionFocus)=\"openDatePicker('end_date')\"></ion-input>\r\n        </ion-item-divider>\r\n\r\n        <ion-item-divider class=\"phone\">\r\n          {{ resConfig.emp_leave_type }}\r\n          <ion-select style=\"margin-left: 30px;\"  #f2=\"ngModel\" name=\"first2\" [(ngModel)]=\"leave_type\">\r\n            <ng-container *ngFor=\"let lt of leavetype\">\r\n              <ion-select-option  [value]=\"lt.id\">{{ lt.value }}</ion-select-option>\r\n            </ng-container>\r\n          </ion-select>\r\n        </ion-item-divider>\r\n      \r\n      <ion-item-divider class=\"phone\">\r\n        {{resConfig.emp_reason}}\r\n        <ion-input class=\"no\"  #f5=\"ngModel\"  [(ngModel)]=\"leave_reason\" type=\"text\" \r\n         name=\"first5\" required></ion-input>\r\n\r\n      </ion-item-divider>\r\n    </div>\r\n    <br>\r\n  \r\n    <div style=\"margin-right: 10px;\">\r\n      <ion-button class=\"right\" name=\"2\"  style=\"float: right;\" \r\n      (click)=\"saveRecord()\">Apply Leave</ion-button>\r\n    </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\r\n  <ion-tab-button tab=\"Order History\" routerLink=\"/planned-leave\">\r\n    <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n    <ion-label>Plan Leave</ion-label>\r\n  </ion-tab-button>\r\n  <ion-tab-button tab=\"return\" routerLink=\"/emp-dashboard\">\r\n    <ion-icon name=\"person\"></ion-icon>\r\n        <ion-label>DashBoard</ion-label> \r\n  </ion-tab-button>\r\n  <ion-tab-button tab=\"View Brouchure\" routerLink=\"/permission-apply\">\r\n    <ion-icon name=\"logo-pinterest\"></ion-icon>\r\n    <ion-label>Permission</ion-label>\r\n  </ion-tab-button>\r\n  </ion-tab-bar>\r\n");

/***/ }),

/***/ 3313:
/*!***************************************************!*\
  !*** ./src/app/apply-leave/apply-leave.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".center {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 10px;\n}\n\n.phone {\n  margin-top: 15px;\n  margin-bottom: 5px;\n  justify-content: center;\n  width: 100%;\n  border-radius: 8px;\n  border-width: thin;\n  border-style: solid;\n  border: 1px solid #080080;\n}\n\n.no {\n  color: #000080;\n  text-align: center;\n}\n\n.title {\n  text-align: center;\n  font-weight: 600;\n}\n\nion-item {\n  padding-right: 15px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGx5LWxlYXZlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQkE7RUFFRSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXJCRjs7QUF1QkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFwQkY7O0FBd0JBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBckJKOztBQTBCQTtFQUNJLGtCQUFBO0VBRUEsZ0JBQUE7QUF4Qko7O0FBNEJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQXpCSiIsImZpbGUiOiJhcHBseS1sZWF2ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubG9nby1pbWFnZSB7XHJcbi8vICAgd2lkdGg6IDMwcHg7IFxyXG4vLyAgIGhlaWdodDogMzBweDsgXHJcbi8vICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuLy8gfVxyXG5cclxuLy8gLmJhY2t7XHJcbi8vICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgLy8gY29sb3I6ICMwMDAwODA7XHJcbi8vIH1cclxuXHJcbi8vIC5idXtcclxuLy8gICAvLyBib3JkZXI6IDFweCBzb2xpZCBibHVldmlvbGV0O1xyXG4vLyAgIGZsb2F0OiByaWdodDtcclxuLy8gfVxyXG4vLyAubWVudXtcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4gIFxyXG4vLyB9XHJcbi5jZW50ZXJ7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5waG9uZXtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzA4MDA4MDtcclxuXHJcbn1cclxuXHJcbi5ub3tcclxuICAgIGNvbG9yOiAjMDAwMDgwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gIH1cclxuICBcclxuXHJcbi50aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gXHJcbiAgaW9uLWl0ZW17XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuXHJcblxyXG4gICJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_apply-leave_apply-leave_module_ts.js.map