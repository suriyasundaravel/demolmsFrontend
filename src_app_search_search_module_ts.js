"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_search_search_module_ts"],{

/***/ 73673:
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageRoutingModule": () => (/* binding */ SearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 83866);




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ 65044:
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ 73673);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 83866);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 24352);








let SearchPageModule = class SearchPageModule {
};
SearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
    })
], SearchPageModule);



/***/ }),

/***/ 83866:
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./search.page.html */ 18911);
/* harmony import */ var _search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.scss */ 88411);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 86219);









let SearchPage = class SearchPage {
    constructor(router, leavemgmt, modalController, dataService, http, sanitizer) {
        this.router = router;
        this.leavemgmt = leavemgmt;
        this.modalController = modalController;
        this.dataService = dataService;
        this.http = http;
        this.sanitizer = sanitizer;
        this.empNameresData = [];
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
        this.loadImage();
    }
    search() {
        let emp_Name = {
            "srchbyname": this.name
        };
        this.empNameData = this.http.post(this.leavemngtUrl + '/lsupp/srchbyteam', JSON.stringify(emp_Name), this.dataService.jsonauthToken);
        this.empNameData.subscribe(data => {
            this.empNameresData = data;
            console.log("response emp search", this.empNameresData);
        });
    }
    goempleaveapply(userId, name) {
        console.log("user id ", userId);
        let id = userId;
        let ename = name;
        const sourcePage = this.router.url; // Get the current page URL
        console.log("source page out", sourcePage);
        if (sourcePage === '/report-page') {
            // Navigate to the report page with the corresponding user ID
            this.router.navigate(['/report-page', { userId: id, name: ename }]);
        }
        else {
            // Navigate to the employee leave apply page with the corresponding user ID
            this.router.navigate(['/empleaveapply', { userId: id, name: ename }]);
        }
    }
};
SearchPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer }
];
SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-search',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchPage);



/***/ }),

/***/ 18911:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/search/search.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\n          <ion-avatar>\n            <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\n          </ion-avatar>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <div *ngIf=\"supervisorStatus\">\n        <ion-buttons slot=\"start\">\n          <ion-icon routerLink=\"/leave-application\" style=\"margin-left: 15px;\" slot=\"start\" name=\"notifications\"></ion-icon>\n          <ion-badge routerLink=\"/leave-application\" slot=\"start\" color=\"danger\" \n          style=\"position: absolute;margin-bottom:30px;border-radius: 10px;margin-left: 15px;\">{{this.dataService.getpacount}}\n          </ion-badge>\n          <ion-button routerLink=\"/search\" slot=\"start\">\n            <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        \n      </div>\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\n    </ion-buttons>\n </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<h3 style=\"font-weight: 800;text-align: center;\">Team Leave</h3>\n    <ion-grid class=\"ion-text-center\">\n\n      <ion-row class=\"ion-margin\">\n        <ion-col>\n          <ion-title>\n            <ion-text color=\"default\">\n              <ion-searchbar [(ngModel)]=\"name\" \n               showcancelButton=\"focus\" animated></ion-searchbar>\n             <ion-button class=\"ion-float-right\" (click)=\"search()\">Search</ion-button><br>\n            </ion-text>\n          </ion-title>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row class=\"header-row\">\n        <ion-col>\n          <ion-text>EmpId</ion-text>\n        </ion-col>\n  \n        <ion-col>\n          <ion-text>Name</ion-text>\n        </ion-col>\n  \n        <ion-col>\n          <ion-text>Email</ion-text>\n        </ion-col>\n      </ion-row>\n  \n  \n      <ion-row *ngFor=\"let item of empNameresData.data\">\n        <ion-col>\n          <ion-text (click)=\"goempleaveapply(item.user_id, item.name)\">\n            {{item.empl_id}}\n          </ion-text>\n        </ion-col>\n  \n          <ion-col>\n            <ion-text>\n              {{item.name}}\n            </ion-text>\n          </ion-col>\n    \n          <ion-col>\n            <ion-text>\n              {{item.email_id}}\n            </ion-text>\n          </ion-col>\n      </ion-row>\n  \n    </ion-grid>\n\n\n  \n  \n</ion-content>\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\n    <ion-tab-button tab=\"Order History\" routerLink=\"/supervisor\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      <ion-label>Apply Leave</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/sup-dashboard\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Sup-Dash</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"login\" routerLink=\"/leave-application\">\n      <ion-icon name=\"create-outline\"></ion-icon>\n      <ion-label>Pending Approvals</ion-label>\n    </ion-tab-button>\n\n</ion-tab-bar>\n\n");

/***/ }),

/***/ 88411:
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = ".header-row {\n  background: #d0ced8;\n  color: #fff;\n  font-size: 18px;\n}\n\nion-col {\n  border: 1px solid #ECEEEF;\n}\n\nion-button {\n  --background: #217901;\n  color: white;\n}\n\n.title {\n  text-align: center;\n  font-weight: 600;\n}\n\n.label {\n  font-size: 18px;\n}\n\n.search {\n  cursor: pointer;\n  font-size: 18px;\n  float: right;\n}\n\n.head {\n  font-weight: 600;\n}\n\n.input {\n  font-weight: 400;\n  font-size: 16px;\n}\n\nion-item {\n  padding-right: 15px;\n  padding-left: 10px;\n}\n\n.label {\n  margin-left: 15px;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTko7O0FBU0U7RUFDRSx5QkFBQTtBQU5KOztBQVNFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBTko7O0FBZUE7RUFDSSxrQkFBQTtFQUVBLGdCQUFBO0FBYko7O0FBZUU7RUFDRSxlQUFBO0FBWko7O0FBZ0NFO0VBQ0UsZUFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0FBOUJKOztBQWtDRTtFQUNJLGdCQUFBO0FBL0JOOztBQWtDRTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBQS9CSDs7QUFrQ0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBL0JKOztBQWtDRTtFQUVHLGlCQUFBO0VBQ0QsbUJBQUE7QUFoQ0oiLCJmaWxlIjoic2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyAubG9nby1pbWFnZSB7XHJcbi8vICAgd2lkdGg6IDUwcHg7IFxyXG4vLyAgIGhlaWdodDogNTBweDsgXHJcbi8vICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuLy8gfVxyXG5cclxuLmhlYWRlci1yb3cge1xyXG4gICAgYmFja2dyb3VuZDogI2QwY2VkODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY29sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFQ0VFRUY7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjE3OTAxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIGlvbi1jb250ZW50e1xyXG4vLyAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYmcvYmcxLmpwZyk7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi8vICAgfVxyXG4udGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBjb2xvcjogIzAwMDA4MDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLy8gLmJhY2t7XHJcbiAgLy8gICBmbG9hdDogbGVmdDtcclxuICAvLyAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4gIC8vIH1cclxuICBcclxuICAvLyAuYnV7XHJcbiAgLy8gICAvLyBib3JkZXI6IDFweCBzb2xpZCBibHVldmlvbGV0O1xyXG4gIC8vICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC8vIH1cclxuICBcclxuICAvLyAubWVudXtcclxuICAvLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAvLyAgIGZsb2F0OiByaWdodDtcclxuICAvLyAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4gICAgXHJcbiAgLy8gfVxyXG4gIC5zZWFyY2h7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyBjb2xvcjogI2EzNTUwNDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMTAwJTtcclxuICB9XHJcbiAgLmhlYWR7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIFxyXG4gIH1cclxuICAuaW5wdXR7XHJcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiBcclxuICBpb24taXRlbXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbHtcclxuICAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBcclxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_search_search_module_ts.js.map