"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_permission-apply_permission-apply_module_ts"],{

/***/ 37245:
/*!*********************************************************************!*\
  !*** ./src/app/permission-apply/permission-apply-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionApplyPageRoutingModule": () => (/* binding */ PermissionApplyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _permission_apply_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permission-apply.page */ 66325);




const routes = [
    {
        path: '',
        component: _permission_apply_page__WEBPACK_IMPORTED_MODULE_0__.PermissionApplyPage
    }
];
let PermissionApplyPageRoutingModule = class PermissionApplyPageRoutingModule {
};
PermissionApplyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PermissionApplyPageRoutingModule);



/***/ }),

/***/ 96719:
/*!*************************************************************!*\
  !*** ./src/app/permission-apply/permission-apply.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionApplyPageModule": () => (/* binding */ PermissionApplyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _permission_apply_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permission-apply-routing.module */ 37245);
/* harmony import */ var _permission_apply_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission-apply.page */ 66325);







let PermissionApplyPageModule = class PermissionApplyPageModule {
};
PermissionApplyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _permission_apply_routing_module__WEBPACK_IMPORTED_MODULE_0__.PermissionApplyPageRoutingModule
        ],
        declarations: [_permission_apply_page__WEBPACK_IMPORTED_MODULE_1__.PermissionApplyPage]
    })
], PermissionApplyPageModule);



/***/ }),

/***/ 66325:
/*!***********************************************************!*\
  !*** ./src/app/permission-apply/permission-apply.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionApplyPage": () => (/* binding */ PermissionApplyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_permission_apply_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./permission-apply.page.html */ 54819);
/* harmony import */ var _permission_apply_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission-apply.page.scss */ 20037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 86219);









let PermissionApplyPage = class PermissionApplyPage {
    constructor(router, dataService, http, toastController, alertController, sanitizer) {
        this.router = router;
        this.dataService = dataService;
        this.http = http;
        this.toastController = toastController;
        this.alertController = alertController;
        this.sanitizer = sanitizer;
        this.resConfig = [];
        this.leavemngtUrl = this.dataService.base_path;
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
        if (!this.start_date || !this.end_date || !this.leave_hour) {
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
        let datesAreEqual = false;
        // Compare the year, month, and day components of the dates
        if (this.start_date !== this.end_date) {
            const toast = this.toastController.create({
                message: 'start date must be equal to the end date.',
                duration: 2000,
                position: 'middle'
            }).then(toast => {
                toast.present();
            });
            return;
        }
        let diff = this.calDifDate1(d1, d2);
        console.log("difference date between d1 and d2", diff);
        this.leave_type = "PER";
        let applyLeave = {
            "fromdt": this.start_date,
            "todt": this.end_date,
            "ltype": this.leave_type,
            "hours": this.leave_hour,
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
            this.leave_hour = '';
            this.leave_reason = '';
            const toast = this.toastController.create({
                message: this.applyleaveResData['message'],
                position: 'middle',
                buttons: [
                    {
                        text: 'OK',
                        role: 'ok',
                        handler: () => {
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
PermissionApplyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer }
];
PermissionApplyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-permission-apply',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_permission_apply_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_permission_apply_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PermissionApplyPage);



/***/ }),

/***/ 54819:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/permission-apply/permission-apply.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n          <ion-avatar>\r\n            <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\r\n          </ion-avatar>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n\r\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"apply\">\r\n  <h3 class=\"title\">Permission Details</h3>\r\n  <div style=\"margin-top: 30px;\">\r\n    <form>\r\n      <div class=\"center\">  \r\n     \r\n        <ion-item-divider class=\"phone\">\r\n          {{resConfig[\"emp_from\"]}}\r\n          <ion-input class=\"no\" #f3=\"ngModel\" [(ngModel)]=\"start_date\" type=\"text\" name=\"first3\" required\r\n            (ionFocus)=\"openDatePicker('start_date')\"></ion-input>\r\n        </ion-item-divider>\r\n        \r\n        <ion-item-divider class=\"phone\">\r\n          {{resConfig[\"emp_to\"]}}\r\n          <ion-input class=\"no\" #f4=\"ngModel\" [(ngModel)]=\"end_date\" type=\"text\" name=\"first4\" required\r\n            (ionFocus)=\"openDatePicker('end_date')\"></ion-input>\r\n        </ion-item-divider>\r\n        <ion-item-divider class=\"phone\">\r\n          Select Hour\r\n          <ion-select  style=\"margin-left: 30px;\" #f2=\"ngModel\"   name=\"first2\" [(ngModel)]=\"leave_hour\">\r\n            <ion-select-option value=\"1\">1 Hour</ion-select-option>\r\n            <ion-select-option value=\"2\">2 Hour</ion-select-option>\r\n          </ion-select>\r\n        </ion-item-divider>\r\n      \r\n        <ion-item-divider class=\"phone\">\r\n          {{resConfig.emp_reason}}\r\n          <ion-input  class=\"no\"   #f5=\"ngModel\"  [(ngModel)]=\"leave_reason\" type=\"text\" \r\n           name=\"first5\" required></ion-input>\r\n  \r\n        </ion-item-divider>\r\n     \r\n    </div><br>\r\n    \r\n    \r\n    <div style=\"margin-right: 10px;\">\r\n      <ion-button class=\"right\" name=\"2\"  style=\"float: right;\" \r\n      (click)=\"saveRecord()\">Apply</ion-button>\r\n    </div>\r\n    </form>\r\n  </div>\r\n\r\n</ion-content>\r\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\r\n  <ion-tab-button tab=\"Order History\" routerLink=\"/planned-leave\">\r\n    <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n    <ion-label>Plan Leave</ion-label>\r\n  </ion-tab-button>\r\n  <ion-tab-button tab=\"return\" routerLink=\"/emp-dashboard\">\r\n    <ion-icon name=\"person\"></ion-icon>\r\n        <ion-label>DashBoard</ion-label> \r\n  </ion-tab-button>\r\n  <ion-tab-button tab=\"Order History\" routerLink=\"/apply-leave\">\r\n    <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n    <ion-label>Apply Leave</ion-label>\r\n  </ion-tab-button>\r\n  </ion-tab-bar>\r\n");

/***/ }),

/***/ 20037:
/*!*************************************************************!*\
  !*** ./src/app/permission-apply/permission-apply.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".center {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 10px;\n}\n\n.phone {\n  margin-top: 15px;\n  margin-bottom: 5px;\n  justify-content: center;\n  width: 100%;\n  border-radius: 8px;\n  border-width: thin;\n  border-style: solid;\n  border: 1px solid #080080;\n}\n\n.no {\n  color: #000080;\n  text-align: center;\n}\n\n.title {\n  text-align: center;\n  font-weight: 600;\n}\n\nion-item {\n  padding-right: 15px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcm1pc3Npb24tYXBwbHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQTtFQUVFLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBckJGOztBQXVCQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQXBCRjs7QUF3QkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFyQkY7O0FBeUJBO0VBQ0ksa0JBQUE7RUFFQSxnQkFBQTtBQXZCSjs7QUEyQkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBeEJKIiwiZmlsZSI6InBlcm1pc3Npb24tYXBwbHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmxvZ28taW1hZ2Uge1xyXG4vLyAgIHdpZHRoOiA1MHB4OyBcclxuLy8gICBoZWlnaHQ6IDUwcHg7IFxyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5iYWNre1xyXG4vLyAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4vLyB9XHJcblxyXG4vLyAuYnV7XHJcbi8vICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmx1ZXZpb2xldDtcclxuLy8gICBmbG9hdDogcmlnaHQ7XHJcbi8vIH1cclxuLy8gLm1lbnV7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIGZsb2F0OiByaWdodDtcclxuLy8gICAvLyBjb2xvcjogIzAwMDA4MDtcclxuICBcclxuLy8gfVxyXG4uY2VudGVye1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ucGhvbmV7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwODAwODA7XHJcblxyXG59XHJcblxyXG4ubm97XHJcbiAgY29sb3I6ICMwMDAwODA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gY29sb3I6ICMwMDAwODA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiBcclxuICBpb24taXRlbXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbiAgIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_permission-apply_permission-apply_module_ts.js.map