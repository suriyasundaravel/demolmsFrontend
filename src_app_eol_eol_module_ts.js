"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_eol_eol_module_ts"],{

/***/ 23734:
/*!*******************************************!*\
  !*** ./src/app/eol/eol-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EOLPageRoutingModule": () => (/* binding */ EOLPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _eol_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eol.page */ 74285);




const routes = [
    {
        path: '',
        component: _eol_page__WEBPACK_IMPORTED_MODULE_0__.EOLPage
    }
];
let EOLPageRoutingModule = class EOLPageRoutingModule {
};
EOLPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EOLPageRoutingModule);



/***/ }),

/***/ 60965:
/*!***********************************!*\
  !*** ./src/app/eol/eol.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EOLPageModule": () => (/* binding */ EOLPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _eol_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eol-routing.module */ 23734);
/* harmony import */ var _eol_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eol.page */ 74285);







let EOLPageModule = class EOLPageModule {
};
EOLPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _eol_routing_module__WEBPACK_IMPORTED_MODULE_0__.EOLPageRoutingModule
        ],
        declarations: [_eol_page__WEBPACK_IMPORTED_MODULE_1__.EOLPage]
    })
], EOLPageModule);



/***/ }),

/***/ 74285:
/*!*********************************!*\
  !*** ./src/app/eol/eol.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EOLPage": () => (/* binding */ EOLPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_eol_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./eol.page.html */ 99077);
/* harmony import */ var _eol_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eol.page.scss */ 5860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 86219);









let EOLPage = class EOLPage {
    constructor(toastController, router, dataService, http, alertController, sanitizer) {
        this.toastController = toastController;
        this.router = router;
        this.dataService = dataService;
        this.http = http;
        this.alertController = alertController;
        this.sanitizer = sanitizer;
        this.pencountRes = [];
        this.resConfig = [];
        this.searchRes = [];
        this.searchResult = [];
        this.showDetails = true;
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
        this.getcount = this.dataService.getpacount;
        console.log("get count pa", this.getcount);
        this.resConfig = this.dataService.confData;
        this.userId = this.dataService.Uid;
        this.orgId = this.dataService.Oid;
        this.loadImage();
    }
    ionViweDidEnter() {
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
        else {
        }
    }
    searchData() {
        if (!this.start_date) {
            const toast = this.toastController.create({
                message: 'Please fill in all the required fields.',
                duration: 2000,
                position: 'middle'
            }).then(toast => {
                toast.present();
            });
            return;
        }
        let penAppData = {
            "org_id": this.orgId,
            "user_id": this.userId,
            "fromDate": this.start_date
        };
        this.pencountData = this.http.post(this.leavemngtUrl + '/lsupp/teamleaves', JSON.stringify(penAppData), this.dataService.jsonauthToken);
        this.pencountData.subscribe(res => {
            this.pencountRes = res.data;
            // this.leavemngtUrl.confData = data;
            this.historyCount = this.pencountRes.length;
            console.log("pending count Response Data" + JSON.stringify(this.pencountRes));
        });
    }
    getLeave(leaveId, orgId, userId) {
        console.log("pass data", leaveId);
        console.log("pass data", userId);
        console.log("pass data", orgId);
        this.router.navigate(['/approve', leaveId, userId, orgId]);
    }
};
EOLPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer }
];
EOLPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-eol',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_eol_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_eol_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EOLPage);



/***/ }),

/***/ 99077:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/eol/eol.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\n          <ion-avatar>\n            <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\n          </ion-avatar>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <div *ngIf=\"supervisorStatus\">\n        <ion-buttons slot=\"start\">\n          <ion-icon routerLink=\"/leave-application\" style=\"margin-left: 15px;\" slot=\"start\" name=\"notifications\"></ion-icon>\n          <ion-badge routerLink=\"/leave-application\" slot=\"start\" color=\"danger\" \n          style=\"position: absolute;margin-bottom:30px;border-radius: 10px;margin-left: 15px;\">{{this.dataService.getpacount}}\n          </ion-badge>\n          <ion-button routerLink=\"/search\" slot=\"start\">\n            <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        \n      </div>\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\n    </ion-buttons>\n </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"apply\">\n  <h1 class=\"title\">{{resConfig[\"eol_title\"]}}</h1><br>\n  <ion-grid class=\"ion-text-center\">\n\n    <ion-row class=\"ion-margin\">\n      <ion-col>\n        <ion-title>\n\n            <ion-item-divider class=\"phone\">\n              {{resConfig[\"emp_from\"]}}<ion-input  class=\"no\"  #f3=\"ngModel\"  type=\"text\" \n              [(ngModel)]=\"start_date\" (ionFocus)=\"openDatePicker('start_date')\" name=\"first3\" required></ion-input>\n      \n            </ion-item-divider>\n           <ion-button class=\"ion-float-right\" (click)=\"searchData()\">Get EOL</ion-button><br>\n\n        </ion-title>\n      </ion-col>\n    </ion-row>\n    <div style=\"margin-bottom: 10px;\">\n      <ion-row>\n        <h3 class=\"count\">Total Count:   {{historyCount}}</h3>\n      </ion-row>\n    </div>\n\n    <ion-row class=\"header-row\">\n      <ion-col>\n        <ion-text>From Date</ion-text>\n      </ion-col>\n\n      <ion-col>\n        <ion-text>To Date</ion-text>\n      </ion-col>\n\n      <ion-col>\n        <ion-text>Name</ion-text>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row *ngFor=\"let item of pencountRes\">\n      <ion-col>\n        <ion-text (click)=\"getLeave(item.leaveId, item.userId, item.orgId)\">\n          {{item.fromdt}}\n        </ion-text>\n      </ion-col>\n\n        <ion-col>\n          <ion-text>\n            {{item.todt}}\n          </ion-text>\n        </ion-col>\n  \n        <ion-col>\n          <ion-text>\n            {{item.name}}\n          </ion-text>\n        </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n</ion-content>\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\n    <ion-tab-button tab=\"Order History\" routerLink=\"/supervisor\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      <ion-label>Apply Leave</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/sup-dashboard\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Sup-Dash</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"login\" routerLink=\"/leave-application\">\n      <ion-icon name=\"create-outline\"></ion-icon>\n      <ion-label>Pending Approvals</ion-label>\n    </ion-tab-button>\n</ion-tab-bar>\n");

/***/ }),

/***/ 5860:
/*!***********************************!*\
  !*** ./src/app/eol/eol.page.scss ***!
  \***********************************/
/***/ ((module) => {

module.exports = ".header-row {\n  background: #d0ced8;\n  color: #fff;\n  font-size: 18px;\n}\n\nion-col {\n  border: 1px solid #ECEEEF;\n}\n\nion-button {\n  --background: #217901;\n  color: white;\n}\n\n.phone {\n  margin-top: 15px;\n  margin-bottom: 5px;\n  justify-content: center;\n  width: 100%;\n  border-radius: 8px;\n  border-width: thin;\n  border-style: solid;\n  border-color: #080080;\n  color: #000080;\n  border: 1px solid #080080;\n}\n\n.no {\n  color: #000080;\n  text-align: center;\n}\n\n.title {\n  text-align: center;\n  font-weight: 600;\n}\n\n.select {\n  width: 80%;\n  height: 70%;\n  border-radius: 3px;\n  border: 1px solid black;\n}\n\n.search {\n  cursor: pointer;\n  font-size: 18px;\n  float: right;\n}\n\n.head {\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.check {\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.label {\n  font-size: 14px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVvbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFHQTtFQUNFLGNBQUE7RUFDRSxrQkFBQTtBQUFKOztBQWtCQTtFQUNFLGtCQUFBO0VBRUEsZ0JBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsVUFBQTtFQUVBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBakJGOztBQWtDQTtFQUNFLGVBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtBQWhDRjs7QUFvQ0E7RUFDSSxnQkFBQTtFQUVBLGVBQUE7QUFsQ0o7O0FBc0NBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBbkNGOztBQXNDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQW5DRiIsImZpbGUiOiJlb2wucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1yb3cge1xyXG4gIGJhY2tncm91bmQ6ICNkMGNlZDg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRUNFRUVGO1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIC0tYmFja2dyb3VuZDogIzIxNzkwMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnBob25le1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMwODAwODA7XHJcbiAgY29sb3I6ICMwMDAwODA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzA4MDA4MDtcclxuXHJcblxyXG59XHJcblxyXG4ubm97XHJcbiAgY29sb3I6ICMwMDAwODA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgfVxyXG4gIC8vIC5sb2dvLWltYWdlIHtcclxuICAvLyAgIHdpZHRoOiA1MHB4OyBcclxuICAvLyAgIGhlaWdodDogNTBweDsgXHJcbiAgLy8gICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBpb24tY29udGVudHtcclxuLy8gICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2JnL2JnMS5qcGcpO1xyXG4vLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuLy8gICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgIH1cclxuLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBjb2xvcjogIzAwMDA4MDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc2VsZWN0e1xyXG4gIHdpZHRoOjgwJTsgXHJcbiAgLy8gY29sb3I6ICMwMDAwODA7XHJcbiAgaGVpZ2h0OiA3MCU7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4vLyAuYmFja3tcclxuLy8gICBmbG9hdDogbGVmdDtcclxuLy8gICAvLyBjb2xvcjogIzAwMDA4MDtcclxuLy8gfVxyXG5cclxuLy8gLmJ1e1xyXG4vLyAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsdWV2aW9sZXQ7XHJcbi8vICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyB9XHJcbi8vIC5tZW51e1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICBmbG9hdDogcmlnaHQ7XHJcbi8vICAgLy8gY29sb3I6ICMwMDAwODA7XHJcbiAgXHJcbi8vIH1cclxuLnNlYXJjaHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gY29sb3I6ICNhMzU1MDQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG59XHJcbi5oZWFke1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC8vIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgLy8gICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG4uY2hlY2t7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgXHJcbn1cclxuLmxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_eol_eol_module_ts.js.map