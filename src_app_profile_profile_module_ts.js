"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 94084:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 14434);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 44404:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 94084);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 14434);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 14434:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.page.html */ 30259);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 80430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 86219);









let ProfilePage = class ProfilePage {
    constructor(router, dataService, http, toastController, sanitizer) {
        this.router = router;
        this.dataService = dataService;
        this.http = http;
        this.toastController = toastController;
        this.sanitizer = sanitizer;
        this.updRes = [];
        this.profileInfo = [];
        this.leavemngtUrl = this.dataService.base_path;
        this.supervisorStatus = this.dataService.isSupervisor;
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
        this.loadImage();
        this.profileInfo = this.dataService.profileData;
        // console.log("profile info",this.profileInfo);
        // Accessing properties
        this.Emp_name = this.profileInfo[0]['DIS_NAME'];
        this.Emp_phno = this.profileInfo[0]['PHONE_PRI'];
        this.Emp_Aphno = this.profileInfo[0]['PHONE_ALT'];
        this.Emp_eId = this.profileInfo[0]['EMAIL_PRI'];
        // console.log("Name:", this.Emp_name);
        // console.log("Phone:", this.Emp_phno);
        // console.log("Alternate Phone:", this.Emp_Aphno);
        // console.log("Email:", this.Emp_eId);
    }
    ionViewDidEnter() {
        // This method is called when the page is entered or reloaded
        // Reload the profileInfo object
        this.profileInfo = this.dataService.profileData;
        // Set the input values from the profileInfo object
        this.Emp_name = this.profileInfo[0]['DIS_NAME'];
        this.Emp_phno = this.profileInfo[0]['PHONE_PRI'];
        this.Emp_Aphno = this.profileInfo[0]['PHONE_ALT'];
        this.Emp_eId = this.profileInfo[0]['EMAIL_PRI'];
    }
    updateProfile() {
        const isModified = this.Emp_name !== this.profileInfo[0]['DIS_NAME'] || this.Emp_phno !== this.profileInfo[0]['PHONE_PRI'] || this.Emp_Aphno !== this.profileInfo[0]['PHONE_ALT']
            || this.Emp_eId !== this.profileInfo[0]['EMAIL_PRI'];
        if (isModified) {
            this.profileInfo[0]['DIS_NAME'] = this.Emp_name;
            this.profileInfo[0]['PHONE_PRI'] = this.Emp_phno;
            this.profileInfo[0]['PHONE_ALT'] = this.Emp_Aphno;
            this.profileInfo[0]['EMAIL_PRI'] = this.Emp_eId;
            let profiledata = {
                "user_id": this.userId,
                "org_id": this.orgId,
                "name": this.Emp_name,
                "phone": this.Emp_phno,
                "alt_phone": this.Emp_Aphno,
                "email_id": this.Emp_eId
            };
            this.updData = this.http.post(this.leavemngtUrl + '/common/updUser', JSON.stringify(profiledata), this.dataService.jsonauthToken);
            this.updData.subscribe(data => {
                this.updRes = data;
                const toast = this.toastController.create({
                    message: this.updRes['msg'],
                    duration: 2000,
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
            });
        }
        else {
            let profiledata = {
                "user_id": this.userId,
                "org_id": this.orgId,
                "name": this.Emp_name,
                "phone": this.Emp_phno,
                "alt_phone": this.Emp_Aphno,
                "email_id": this.Emp_eId
            };
            this.updData = this.http.post(this.leavemngtUrl + '/common/updUser', JSON.stringify(profiledata), this.dataService.jsonauthToken);
            this.updData.subscribe(data => {
                this.updRes = data;
                const toast = this.toastController.create({
                    message: this.updRes['msg'],
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
            });
        }
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 30259:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/profile/profile.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\n          <ion-avatar>\n            <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\n          </ion-avatar>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\n    </ion-buttons>\n </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Profile</ion-card-title>\n      <!-- <ion-card-subtitle>Profile</ion-card-subtitle> -->\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div class=\"center\">\n              <ion-item-divider class=\"phone\">\n                Name\n                <ion-input class=\"no\" type=\"text\"  #f1=\"ngModel\" [(ngModel)]=\"Emp_name\" placeholder=\"{{Emp_name}}\"\n                required></ion-input>\n              </ion-item-divider>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div class=\"center\">\n              <ion-item-divider class=\"phone\">\n                Phone No\n                <ion-input class=\"no\" type=\"text\" placeholder=\"{{Emp_phno}}\" #f2=\"ngModel\" [(ngModel)]=\"Emp_phno\"\n                required></ion-input>\n              </ion-item-divider>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div class=\"center\">\n              <ion-item-divider class=\"phone\">\n                Alternate Phone No\n                <ion-input class=\"no\" type=\"text\" placeholder=\"{{Emp_Aphno}}\" #f3=\"ngModel\" [(ngModel)]=\"Emp_Aphno\"\n                required></ion-input>\n              </ion-item-divider>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div class=\"center\">\n              <ion-item-divider class=\"phone\">\n                Email Id\n                <ion-input class=\"no\" type=\"text\" placeholder=\"{{Emp_eId}}\" #f4=\"ngModel\" [(ngModel)]=\"Emp_eId\"\n                required></ion-input>\n              </ion-item-divider>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n        <ion-button (click)=\"updateProfile()\" style=\"float: right;\" color=\"tertiary\">Save</ion-button>\n        <!-- <ion-button style=\"float: right;\" color=\"danger\">Cancel</ion-button> -->\n     \n    </ion-card-content>\n  </ion-card>\n \n  \n \n  \n \n\n</ion-content>\n\n");

/***/ }),

/***/ 80430:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = ".center {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 10px;\n}\n\n.phone {\n  justify-content: center;\n  width: 100%;\n  color: #000080;\n  font-weight: 400;\n}\n\n.no {\n  color: #000080;\n  text-align: center;\n  font-weight: 400;\n}\n\n.bu {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBRUksdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFSSjs7QUFVRTtFQUdFLHVCQUFBO0VBQ0EsV0FBQTtFQUtBLGNBQUE7RUFDQSxnQkFBQTtBQWJKOztBQWlCRTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZE47O0FBaUJJO0VBRUksWUFBQTtBQWZSIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIC5sb2dvLWltYWdlIHtcclxuLy8gICB3aWR0aDogNTBweDsgXHJcbi8vICAgaGVpZ2h0OiA1MHB4OyBcclxuLy8gICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyB9XHJcblxyXG5cclxuLmNlbnRlcntcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5waG9uZXtcclxuICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgLy8gYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwODAwODA7XHJcbiAgICBjb2xvcjogIzAwMDA4MDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5ub3tcclxuICAgICAgY29sb3I6ICMwMDAwODA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLmJ1e1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsdWV2aW9sZXQ7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map