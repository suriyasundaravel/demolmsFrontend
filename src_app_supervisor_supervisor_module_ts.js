"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_supervisor_supervisor_module_ts"],{

/***/ 19426:
/*!*********************************************************!*\
  !*** ./src/app/supervisor/supervisor-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupervisorPageRoutingModule": () => (/* binding */ SupervisorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _supervisor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supervisor.page */ 85835);




const routes = [
    {
        path: '',
        component: _supervisor_page__WEBPACK_IMPORTED_MODULE_0__.SupervisorPage
    }
];
let SupervisorPageRoutingModule = class SupervisorPageRoutingModule {
};
SupervisorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SupervisorPageRoutingModule);



/***/ }),

/***/ 10883:
/*!*************************************************!*\
  !*** ./src/app/supervisor/supervisor.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupervisorPageModule": () => (/* binding */ SupervisorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _supervisor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supervisor-routing.module */ 19426);
/* harmony import */ var _supervisor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supervisor.page */ 85835);
/* harmony import */ var _list_list_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list/list.module */ 9206);








let SupervisorPageModule = class SupervisorPageModule {
};
SupervisorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _supervisor_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupervisorPageRoutingModule,
            _list_list_module__WEBPACK_IMPORTED_MODULE_2__.ListPageModule
        ],
        declarations: [_supervisor_page__WEBPACK_IMPORTED_MODULE_1__.SupervisorPage]
    })
], SupervisorPageModule);



/***/ }),

/***/ 85835:
/*!***********************************************!*\
  !*** ./src/app/supervisor/supervisor.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupervisorPage": () => (/* binding */ SupervisorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_supervisor_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./supervisor.page.html */ 37333);
/* harmony import */ var _supervisor_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supervisor.page.scss */ 79119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 86219);









let SupervisorPage = class SupervisorPage {
    constructor(activatedRoute, router, dataService, http, toastController, alertController, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dataService = dataService;
        this.http = http;
        this.toastController = toastController;
        this.alertController = alertController;
        this.sanitizer = sanitizer;
        this.resConfig = [];
        this.leavetype = [];
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
        this.getcount = this.dataService.getpacount;
        console.log("get count pa", this.getcount);
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
            "userId": this.userId,
            "fromdt": this.start_date,
            "todt": this.end_date,
            "ltype": this.leave_type,
            "hours": "0",
            "reason": this.leave_reason,
            "app_comments": "",
            "days": diff,
            "classif": "LEAVE",
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
            const toastc = this.toastController.create({
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
        }, (error) => {
            console.log("Error:", error);
            // Handle error case if needed
        });
    }
};
SupervisorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer }
];
SupervisorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-supervisor',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_supervisor_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_supervisor_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SupervisorPage);



/***/ }),

/***/ 37333:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/supervisor/supervisor.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\n          <ion-avatar>\n            <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\n          </ion-avatar>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <div *ngIf=\"supervisorStatus\">\n        <ion-buttons slot=\"start\">\n          <ion-icon routerLink=\"/leave-application\" style=\"margin-left: 15px;\" slot=\"start\" name=\"notifications\"></ion-icon>\n          <ion-badge routerLink=\"/leave-application\" slot=\"start\" color=\"danger\" \n          style=\"position: absolute;margin-bottom:30px;border-radius: 10px;margin-left: 15px;\">{{this.dataService.getpacount}}\n          </ion-badge>\n          <ion-button routerLink=\"/search\" slot=\"start\">\n            <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        \n      </div>\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\n    </ion-buttons>\n </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"apply\">\n  <h3 class=\"title\">Leave Details</h3>\n  <div style=\"margin-top: 30px;\">\n    <form>\n      <div class=\"center\">  \n      <ion-item-divider class=\"phone\">\n      \n        {{resConfig[\"emp_from\"]}}<ion-input  class=\"no\"  #f3=\"ngModel\"  type=\"text\" (ionFocus)=\"openDatePicker('start_date')\"\n         [(ngModel)]=\"start_date\"  name=\"first3\" required></ion-input>\n\n      </ion-item-divider>\n      <ion-item-divider class=\"phone\">\n        {{resConfig[\"emp_to\"]}}\n        <ion-input  class=\"no\" style=\"width: 40%;\"  #f4=\"ngModel\"  [(ngModel)]=\"end_date\" type=\"text\"  (ionFocus)=\"openDatePicker('end_date')\"\n        name=\"first4\" required></ion-input>\n      </ion-item-divider>\n      <ion-item-divider class=\"phone\">\n        {{ resConfig.emp_leave_type }}\n        <ion-select style=\"margin-left: 30px;\"  #f2=\"ngModel\" name=\"first2\" [(ngModel)]=\"leave_type\">\n          <ng-container *ngFor=\"let lt of leavetype\">\n            <ion-select-option [value]=\"lt.id\">{{ lt.value }}</ion-select-option>\n          </ng-container>\n        </ion-select>\n      </ion-item-divider>\n      <ion-item-divider class=\"phone\">\n        {{resConfig.emp_reason}}\n        <ion-input class=\"no\"  #f5=\"ngModel\"  [(ngModel)]=\"leave_reason\" type=\"text\" \n        name=\"first5\" required></ion-input>\n\n      </ion-item-divider>\n    </div>\n    \n    \n    <div style=\"margin-right: 10px;\">\n      <ion-button class=\"right\" name=\"2\"  style=\"float: right;\" \n      (click)=\"saveRecord()\">Create Leave</ion-button>\n    </div>\n    </form>\n  </div>\n</ion-content>\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\n    <ion-tab-button tab=\"Order History\" routerLink=\"/holidays\">\n      <ion-icon name=\"calendar-number-outline\"></ion-icon>\n      <ion-label>Holidays</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/sup-dashboard\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Sup-Dash</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"login\" routerLink=\"/eol\">\n      <ion-icon name=\"create-outline\"></ion-icon>\n      <ion-label>EOL</ion-label>\n    </ion-tab-button>\n</ion-tab-bar>");

/***/ }),

/***/ 79119:
/*!*************************************************!*\
  !*** ./src/app/supervisor/supervisor.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".center {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 10px;\n}\n\n.phone {\n  margin-top: 15px;\n  margin-bottom: 5px;\n  justify-content: center;\n  width: 100%;\n  border-radius: 8px;\n  border-width: thin;\n  border-style: solid;\n  border: 1px solid #080080;\n}\n\n.no {\n  color: #000080;\n  text-align: center;\n}\n\n.title {\n  text-align: center;\n  font-weight: 600;\n}\n\nion-item {\n  padding-right: 15px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cGVydmlzb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQTtFQUVFLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBckJGOztBQXVCQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQXBCRjs7QUF3QkE7RUFDRSxjQUFBO0VBQ0Usa0JBQUE7QUFyQko7O0FBeUJBO0VBQ0ksa0JBQUE7RUFFQSxnQkFBQTtBQXZCSjs7QUEyQkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBeEJKIiwiZmlsZSI6InN1cGVydmlzb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmxvZ28taW1hZ2Uge1xyXG4vLyAgIHdpZHRoOiA1MHB4OyBcclxuLy8gICBoZWlnaHQ6IDUwcHg7IFxyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5iYWNre1xyXG4vLyAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4vLyB9XHJcblxyXG4vLyAuYnV7XHJcbi8vICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmx1ZXZpb2xldDtcclxuLy8gICBmbG9hdDogcmlnaHQ7XHJcbi8vIH1cclxuLy8gLm1lbnV7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIGZsb2F0OiByaWdodDtcclxuLy8gICAvLyBjb2xvcjogIzAwMDA4MDtcclxuICBcclxuLy8gfVxyXG4uY2VudGVye1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ucGhvbmV7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwODAwODA7XHJcblxyXG59XHJcblxyXG4ubm97XHJcbiAgY29sb3I6ICMwMDAwODA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgfVxyXG5cclxuLnRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gY29sb3I6ICMwMDAwODA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiBcclxuICBpb24taXRlbXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbiAgIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_supervisor_supervisor_module_ts.js.map