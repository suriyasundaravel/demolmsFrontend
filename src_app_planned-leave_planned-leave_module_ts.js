"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_planned-leave_planned-leave_module_ts"],{

/***/ 37902:
/*!***************************************************************!*\
  !*** ./src/app/planned-leave/planned-leave-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlannedLeavePageRoutingModule": () => (/* binding */ PlannedLeavePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _planned_leave_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planned-leave.page */ 93825);




const routes = [
    {
        path: '',
        component: _planned_leave_page__WEBPACK_IMPORTED_MODULE_0__.PlannedLeavePage
    }
];
let PlannedLeavePageRoutingModule = class PlannedLeavePageRoutingModule {
};
PlannedLeavePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlannedLeavePageRoutingModule);



/***/ }),

/***/ 70007:
/*!*******************************************************!*\
  !*** ./src/app/planned-leave/planned-leave.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlannedLeavePageModule": () => (/* binding */ PlannedLeavePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _planned_leave_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planned-leave-routing.module */ 37902);
/* harmony import */ var _planned_leave_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planned-leave.page */ 93825);







let PlannedLeavePageModule = class PlannedLeavePageModule {
};
PlannedLeavePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _planned_leave_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlannedLeavePageRoutingModule
        ],
        declarations: [_planned_leave_page__WEBPACK_IMPORTED_MODULE_1__.PlannedLeavePage]
    })
], PlannedLeavePageModule);



/***/ }),

/***/ 93825:
/*!*****************************************************!*\
  !*** ./src/app/planned-leave/planned-leave.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlannedLeavePage": () => (/* binding */ PlannedLeavePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_planned_leave_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./planned-leave.page.html */ 86364);
/* harmony import */ var _planned_leave_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planned-leave.page.scss */ 64898);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 86219);









let PlannedLeavePage = class PlannedLeavePage {
    constructor(toastController, router, _Activatedroute, dataService, http, alertController, sanitizer) {
        this.toastController = toastController;
        this.router = router;
        this._Activatedroute = _Activatedroute;
        this.dataService = dataService;
        this.http = http;
        this.alertController = alertController;
        this.sanitizer = sanitizer;
        this.leavetype = [];
        this.resConfig = [];
        this.Emp_data = [];
        //  leave_Date:any;
        this.showDetails = false;
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-type': 'application/json' })
        };
        this.leavemngtUrl = this.dataService.base_path;
    }
    loadImage() {
        this.dataService.getImage('logo', '1001').subscribe((imageBlob) => {
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
            // console.log("initial data",data);
            this.leavetype = data['configValues'];
            // console.log("leave type config values",this.leave_type);
        });
    }
    openDatePicker(inputFieldName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
    calDifDate() {
        let d1 = new Date(this.start_date);
        let d2 = new Date(this.end_date);
        let diff = this.calDifDate1(d1, d2);
        console.log("difference date between d1 and d2", diff);
    }
    PlanedDate() {
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
        let diff = this.calDifDate1(d1, d2);
        console.log("difference date between d1 and d2", diff);
        if (d1 > d2) {
            const toastc = this.toastController.create({
                message: "End date must be greater than or equal to the start date.",
                duration: 2000,
                position: 'middle'
            }).then(toast => {
                toast.present();
            });
            return;
        }
        let Plannedleave = {
            "userId": this.userId,
            "orgId": this.orgId,
            "fromdt": this.start_date,
            "todt": this.end_date,
            "ltype": this.leave_type,
            "hours": "24",
            "reason": this.reason,
            "app_comments": "",
            "day": diff,
            // "classif":"PLAN"
        };
        this.planleaveRes = this.http.post(this.leavemngtUrl + '/leave/saveplan', JSON.stringify(Plannedleave), this.dataService.jsonauthToken);
        this.planleaveRes.subscribe(data => {
            this.planleaveResData = data;
            console.log("save record of planned leave", this.planleaveResData);
            // Clear input fields after saving the record
            this.start_date = '';
            this.end_date = '';
            this.leave_type = '';
            this.reason = '';
            let sucMsg = this.planleaveResData['status'];
            const toastc = this.toastController.create({
                message: this.planleaveResData['msg'],
                position: 'middle',
                buttons: [
                    {
                        text: 'OK',
                        role: 'ok',
                        handler: () => {
                            // Handle button click if needed
                            if (sucMsg === 'Success' || sucMsg === 'Failed') {
                                this.router.navigate(['/emp-dashboard']);
                                console.log('OK clicked');
                            }
                        }
                    }
                ]
            }).then(toast => {
                toast.present();
            });
        }, (error) => {
            console.log("Error:", error);
            // Handle error case if needed
            const errorMsg = error.error && error.error.msg ? error.error.msg : 'An error occurred.';
            const toastc = this.toastController.create({
                message: errorMsg,
                position: 'middle',
                buttons: [
                    {
                        text: 'OK',
                        role: 'ok',
                        handler: () => {
                            // Handle button click if needed
                        }
                    }
                ]
            }).then(toast => {
                toast.present();
            });
        });
    }
};
PlannedLeavePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer }
];
PlannedLeavePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-planned-leave',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_planned_leave_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_planned_leave_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlannedLeavePage);



/***/ }),

/***/ 86364:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/planned-leave/planned-leave.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n          <ion-avatar>\r\n            <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\r\n          </ion-avatar>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n\r\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"apply\">\r\n  <h3 class=\"title\">Plan Details</h3>\r\n  <div > \r\n    <form>\r\n    <div class=\"center\">   \r\n      <ion-item-divider class=\"phone\">\r\n        {{resConfig[\"emp_from\"]}}\r\n        <ion-input class=\"no\" #f3=\"ngModel\" [(ngModel)]=\"start_date\" type=\"text\" name=\"first3\" required\r\n          (ionFocus)=\"openDatePicker('start_date')\"></ion-input>\r\n      </ion-item-divider>\r\n      \r\n      <ion-item-divider class=\"phone\">\r\n        {{resConfig[\"emp_to\"]}}\r\n        <ion-input class=\"no\" #f4=\"ngModel\" [(ngModel)]=\"end_date\" type=\"text\" name=\"first4\" required\r\n          (ionFocus)=\"openDatePicker('end_date')\"></ion-input>\r\n      </ion-item-divider>\r\n      \r\n      <ion-item-divider class=\"phone\">\r\n        {{ resConfig.emp_leave_type }}\r\n        <ion-select style=\"margin-left: 30px;\"  #f2=\"ngModel\" name=\"first2\" [(ngModel)]=\"leave_type\">\r\n          <ng-container *ngFor=\"let lt of leavetype\">\r\n            <ion-select-option [value]=\"lt.id\">{{ lt.value }}</ion-select-option>\r\n          </ng-container>\r\n        </ion-select>\r\n      </ion-item-divider>\r\n\r\n      <ion-item-divider class=\"phone\">\r\n        {{resConfig.emp_reason}}\r\n        <ion-input  class=\"no\"   #f5=\"ngModel\"  [(ngModel)]=\"reason\" type=\"text\" \r\n         name=\"first5\" required></ion-input>\r\n\r\n      </ion-item-divider>\r\n    </div>\r\n    <br>\r\n    <div style=\"margin-right: 10px;\">\r\n      <ion-button class=\"right\" name=\"2\"  style=\"float: right;\" \r\n      (click)=\" PlanedDate()\">Plan Leave</ion-button>\r\n    </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\r\n  <ion-tab-button tab=\"Order History\" routerLink=\"/apply-leave\">\r\n    <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n    <ion-label>Apply Leave</ion-label>\r\n  </ion-tab-button>\r\n  <ion-tab-button tab=\"return\" routerLink=\"/emp-dashboard\">\r\n    \r\n    <ion-icon name=\"person\"></ion-icon>\r\n        <ion-label>DashBoard</ion-label> \r\n  </ion-tab-button>\r\n  <ion-tab-button tab=\"View Brouchure\" routerLink=\"/permission-apply\">\r\n    <ion-icon name=\"logo-pinterest\"></ion-icon>\r\n    <ion-label>Permission</ion-label>\r\n  </ion-tab-button>\r\n  </ion-tab-bar>\r\n   \r\n  \r\n");

/***/ }),

/***/ 64898:
/*!*******************************************************!*\
  !*** ./src/app/planned-leave/planned-leave.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".center {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 10px;\n}\n\n.phone {\n  margin-top: 15px;\n  margin-bottom: 5px;\n  justify-content: center;\n  width: 100%;\n  border-radius: 8px;\n  border-width: thin;\n  border-style: solid;\n  border: 1px solid #080080;\n}\n\n.no {\n  color: #000080;\n  text-align: center;\n}\n\n.title {\n  text-align: center;\n  font-weight: 600;\n}\n\nion-item {\n  padding-right: 15px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW5uZWQtbGVhdmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQTtFQUVFLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBckJGOztBQXVCQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQXBCRjs7QUF1QkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFwQkY7O0FBd0JBO0VBQ0ksa0JBQUE7RUFFQSxnQkFBQTtBQXRCSjs7QUEwQkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBdkJKIiwiZmlsZSI6InBsYW5uZWQtbGVhdmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmxvZ28taW1hZ2Uge1xyXG4vLyAgIHdpZHRoOiA1MHB4OyBcclxuLy8gICBoZWlnaHQ6IDUwcHg7IFxyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5iYWNre1xyXG4vLyAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4vLyB9XHJcblxyXG4vLyAuYnV7XHJcbi8vICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmx1ZXZpb2xldDtcclxuLy8gICBmbG9hdDogcmlnaHQ7XHJcbi8vIH1cclxuLy8gLm1lbnV7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIGZsb2F0OiByaWdodDtcclxuLy8gICAvLyBjb2xvcjogIzAwMDA4MDtcclxuICBcclxuLy8gfVxyXG4uY2VudGVye1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ucGhvbmV7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwODAwODA7XHJcblxyXG59XHJcbi5ub3tcclxuICBjb2xvcjogIzAwMDA4MDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBjb2xvcjogIzAwMDA4MDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuIFxyXG4gIGlvbi1pdGVte1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuICAiXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_planned-leave_planned-leave_module_ts.js.map