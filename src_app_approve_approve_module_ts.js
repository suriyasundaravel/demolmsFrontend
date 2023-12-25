"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_approve_approve_module_ts"],{

/***/ 58743:
/*!***************************************************!*\
  !*** ./src/app/approve/approve-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovePageRoutingModule": () => (/* binding */ ApprovePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _approve_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approve.page */ 99910);




const routes = [
    {
        path: '',
        component: _approve_page__WEBPACK_IMPORTED_MODULE_0__.ApprovePage
    }
];
let ApprovePageRoutingModule = class ApprovePageRoutingModule {
};
ApprovePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApprovePageRoutingModule);



/***/ }),

/***/ 30496:
/*!*******************************************!*\
  !*** ./src/app/approve/approve.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovePageModule": () => (/* binding */ ApprovePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _approve_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approve-routing.module */ 58743);
/* harmony import */ var _approve_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approve.page */ 99910);








let ApprovePageModule = class ApprovePageModule {
};
ApprovePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _approve_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApprovePageRoutingModule
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, // Add DatePipe to the providers array
            // your other services or providers
        ],
        declarations: [_approve_page__WEBPACK_IMPORTED_MODULE_1__.ApprovePage]
    })
], ApprovePageModule);



/***/ }),

/***/ 99910:
/*!*****************************************!*\
  !*** ./src/app/approve/approve.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovePage": () => (/* binding */ ApprovePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_approve_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./approve.page.html */ 7811);
/* harmony import */ var _approve_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approve.page.scss */ 83993);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);










let ApprovePage = class ApprovePage {
    constructor(activatedRoute, router, dataService, http, toastController, alertController, datePipe, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dataService = dataService;
        this.http = http;
        this.toastController = toastController;
        this.alertController = alertController;
        this.datePipe = datePipe;
        this.sanitizer = sanitizer;
        this.isCancelEnabled = false;
        this.getindividualdataRes = [];
        this.approveRes = [];
        this.rejectRes = [];
        this.cancelRes = [];
        this.resConfig = [];
        this.approval_comment = '';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
                // Add other headers if needed
            }),
        };
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
        this.dataService.getpacount;
        this.resConfig = this.dataService.confData;
        this.userId = this.dataService.Uid;
        this.orgId = this.dataService.Oid;
        this.loadImage();
        this.activatedRoute.paramMap.subscribe(params => {
            this.leaveId = +params.get('leaveId');
            this.Uid = +params.get('userId');
            this.Oid = +params.get('orgId');
            this.getLeaveDetails();
        });
    }
    getLeaveDetails() {
        let leaveid = {
            "leaveId": this.leaveId,
            "orgId": this.Uid,
            "userId": this.Oid
        };
        this.getindividualdata = this.http.post(this.leavemngtUrl + '/leave/getlinfo', leaveid, this.dataService.jsonauthToken);
        this.getindividualdata.subscribe((res) => {
            this.getindividualdataRes = res['data'];
            console.log("individual leave", this.getindividualdataRes);
            // Compare "from" date with current date
            const leaveFromdt = new Date(this.getindividualdataRes.fromdt);
            console.log("fronm date", leaveFromdt);
            const currentDate = new Date();
            this.isCancelEnabled = leaveFromdt > currentDate;
        }, (error) => {
            console.error("Error retrieving individual leave", error);
        });
    }
    approve(leaveId, userId, orgId, app_cmd) {
        //  if (!this.approval_comment.trim()) {
        //   // Show a toast message if the approval comment is empty
        //   this.showToast('Please enter an approval comment.');
        app_cmd = 'Approved';
        let approvedata = {
            "leaveId": leaveId,
            "orgId": orgId,
            "app_comments": app_cmd,
            "userId": userId
        };
        this.approveData = this.http.post(this.leavemngtUrl + '/lsupp/approve', JSON.stringify(approvedata), this.dataService.jsonauthToken);
        this.approveData.subscribe(res => {
            this.approveRes = res;
            console.log("approver Response Data" + JSON.stringify(this.approveRes));
            const appStatus = this.approveRes["status"];
            if (appStatus === 'Success') {
                const toastc = this.toastController.create({
                    message: this.approveRes['message'],
                    position: 'middle',
                    buttons: [
                        {
                            text: 'OK',
                            role: 'ok',
                            handler: () => {
                                // Handle button click if needed
                                this.router.navigate(['/sup-dashboard']);
                                console.log('OK clicked');
                            }
                        }
                    ]
                }).then(toast => {
                    toast.present();
                });
            }
            // Call updateCount() method
            this.updateCount(leaveId, status);
        }, (error) => {
            console.log("approve Error" + error);
            // Handle the error appropriately
        });
    }
    showToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        });
    }
    updateCount(leaveId, status) {
        if (status === 'NEW' && this.dataService.getpacount > 0 && leaveId === this.leaveId) {
            this.dataService.getpacount -= 1; // Update the count in the data service
        }
    }
    reject(leaveId, userId, orgId, ldays, ltype, app_cmd) {
        console.log("reject", leaveId);
        app_cmd = 'Rejected';
        this.alertController.create({
            header: 'Reject Leave Request',
            inputs: [
                {
                    name: 'comment',
                    type: 'text',
                    placeholder: 'Enter your comment',
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Reject',
                    handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        const rejectLeave = {
                            "leaveId": leaveId,
                            "orgId": orgId,
                            "app_comments": app_cmd,
                            "userId": userId,
                            "leave_type": ltype,
                            "leave_taken": ldays
                        };
                        try {
                            const res = yield this.http.post(this.leavemngtUrl + '/lsupp/reject', JSON.stringify(rejectLeave), this.dataService.jsonauthToken).toPromise();
                            this.rejectRes = res;
                            console.log("Reject Response Data" + JSON.stringify(this.rejectRes));
                            const rejStatus = this.rejectRes["status"];
                            if (rejStatus === 'Success') {
                                const toast = yield this.toastController.create({
                                    message: this.rejectRes['message'],
                                    position: 'middle',
                                    buttons: [
                                        {
                                            text: 'OK',
                                            role: 'ok',
                                            handler: () => {
                                                // Handle button click if needed
                                                this.router.navigate(['/sup-dashboard']);
                                                console.log('OK clicked');
                                            }
                                        }
                                    ]
                                });
                                toast.present();
                            }
                            // Update the 'deleted' property of the item to true
                            // const deletedItem = this.getindividualdataRes.data.find((item: any) => item.leaveId === leaveId);
                            // if (deletedItem) {
                            //  deletedItem.deleted = true;
                            //  }
                            // Call updateCount() method
                            this.updateCount(leaveId, status);
                        }
                        catch (error) {
                            console.log("reject Error" + error);
                            // Handle the error appropriately
                        }
                    })
                }
            ]
        }).then(alert => {
            alert.present();
        });
    }
    cancel(leaveId, userId, orgId) {
        console.log("cancel data", leaveId, userId, orgId);
        let cancelLeave = {
            "leaveId": leaveId,
            "orgId": orgId,
            "userId": userId
        };
        console.log('Cancel Request Payload', JSON.stringify(cancelLeave));
        this.cancelData = this.http.post(`${this.leavemngtUrl}/lsupp/leave_cancel`, JSON.stringify(cancelLeave), this.dataService.jsonauthToken);
        this.cancelData.subscribe((data) => {
            this.cancelRes = data;
            console.log('Cancel Response Data', JSON.stringify(this.cancelRes));
        });
        //     this.cancelRes = data;
        //     console.log("cancel Response Data" + this.cancelRes);
        //     const canstatus=this.cancelRes['status']
        //     if(canstatus==='Success'){
        //       const toastc = this.toastController.create({
        //         message: this.cancelRes['message'], // Use the response directly without parsing as JSON
        //         duration: 2000,
        //         position: 'middle'
        //       }).then(toast => {
        //         toast.present();
        //       });
        //     }
        //   // },
        //   // (error: HttpErrorResponse) => {
        //   //   console.log("cancel Error" + error);
        //   //   // Handle the error appropriately
        //   }
        // );
    }
    dateFormat(dateString) {
        const date = new Date(dateString);
        return this.datePipe.transform(date, 'yyyy-MM-dd');
    }
};
ApprovePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer }
];
ApprovePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-approve',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_approve_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_approve_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ApprovePage);



/***/ }),

/***/ 7811:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/approve/approve.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n          <ion-avatar>\r\n            <img [src]=\"imageSrc\" class=\"logo-image\" alt=\"Logo\">\r\n          </ion-avatar>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <div *ngIf=\"supervisorStatus\">\r\n        <ion-buttons slot=\"start\">\r\n          <ion-icon routerLink=\"/leave-application\" style=\"margin-left: 15px;\" slot=\"start\" name=\"notifications\"></ion-icon>\r\n          <ion-badge routerLink=\"/leave-application\" slot=\"start\" color=\"danger\" \r\n          style=\"position: absolute;margin-bottom:30px;border-radius: 10px;margin-left: 15px;\">{{this.dataService.getpacount}}\r\n          </ion-badge>\r\n          <ion-button routerLink=\"/search\" slot=\"start\">\r\n            <ion-icon slot=\"start\" name=\"search\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>      \r\n      </div>\r\n      <ion-menu-button slot=\"end\" class=\"menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Leave Information</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ng-container *ngFor=\"let item of getindividualdataRes\">\r\n          <ion-item>\r\n            <ion-label>Dates</ion-label>\r\n            <ion-note slot=\"end\">{{ dateFormat(item.fromdt) }} / {{ dateFormat(item.todt) }}</ion-note>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Leave Type</ion-label>\r\n            <ion-note slot=\"end\">{{ item.leavetypeDesc }}</ion-note>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Reason</ion-label>\r\n            <ion-note slot=\"end\">{{ item.reason }}</ion-note>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Status</ion-label>\r\n            <ion-note slot=\"end\">{{ item.status }}</ion-note>\r\n          </ion-item>\r\n          <div *ngIf=\"!item.app_comments\">\r\n            <ion-item>\r\n              <ion-label class=\"comment-text\">Approver Comments</ion-label>\r\n              <ion-input slot=\"end\" [(ngModel)]=\"approval_comment\"   placeholder=\"{{item.app_comments}}\"></ion-input>\r\n            </ion-item>\r\n          </div>\r\n          <div *ngIf=\"item.APP_COMMENTS\">\r\n            <ion-item>\r\n              <ion-label class=\"comment-text\">App_Comments</ion-label>\r\n              <ion-note slot=\"end\" class=\"comment-text\">{{ item.app_comments }}</ion-note>\r\n            </ion-item>\r\n          </div>\r\n          <br>\r\n        \r\n          <!-- <div class=\"ion-padding\"> -->\r\n            <ion-button color=\"tertiary\" [disabled]=\"item.status === 'APR'\" (click)=\"approve(item.leaveId,item.userId,item.orgId,item.app_comments)\">Approve</ion-button>\r\n            <ion-button  color=\"tertiary\" [disabled]=\"item.status === 'REJ'\" \r\n            (click)=\"reject(item.leaveId,item.userId,item.orgId,item.days,item.leavetypeDesc,item.app_comments)\">Reject</ion-button>\r\n            <ion-button   color=\"tertiary\" [disabled]=\"!isCancelEnabled\"  \r\n            (click)=\"cancel(item.leaveId,item.userId,item.orgId)\">Cancel </ion-button>\r\n          <!-- </div> -->\r\n        </ng-container>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\r\n  <div class=\"footer-buttons\">\r\n    <ion-tab-button tab=\"Order History\" routerLink=\"/supervisor\">\r\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n      <ion-label>Apply Leave</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"View Brouchure\" routerLink=\"/sup-dashboard\">\r\n      <ion-icon name=\"person\"></ion-icon>\r\n      <ion-label>Sup-Dash</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"login\" routerLink=\"/leave-application\">\r\n      <ion-icon name=\"create-outline\"></ion-icon>\r\n      <ion-label>Pending Approvals</ion-label>\r\n    </ion-tab-button>\r\n  </div>\r\n</ion-tab-bar>\r\n\r\n");

/***/ }),

/***/ 83993:
/*!*******************************************!*\
  !*** ./src/app/approve/approve.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "ion-note {\n  color: #080080;\n  font-size: 14px;\n}\n\n.search {\n  cursor: pointer;\n  font-size: 18px;\n  float: right;\n}\n\n.comment-text {\n  white-space: normal;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHJvdmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUE4QkE7RUFDRSxlQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7QUE1QkY7O0FBZ0NBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQTdCRiIsImZpbGUiOiJhcHByb3ZlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ub3Rle1xyXG4gIGNvbG9yOiAjMDgwMDgwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4vLyBpb24tYnV0dG9uIC5idG5ze1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuLy8gICAvLyBtYXJnaW4tdG9wOiAzNXB4O1xyXG4vLyAgIC8vIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbi8vICAgLy8gZmxvYXQ6IHJpZ2h0O1xyXG4vLyB9XHJcbi8vIC5sb2dvLWltYWdlIHtcclxuLy8gICB3aWR0aDogNTBweDsgXHJcbi8vICAgaGVpZ2h0OiA1MHB4OyBcclxuLy8gICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyB9XHJcblxyXG4gIFxyXG4vLyAuYmFja3tcclxuLy8gICBmbG9hdDogbGVmdDtcclxuLy8gICAvLyBjb2xvcjogIzAwMDA4MDtcclxuLy8gfVxyXG5cclxuLy8gLmJ1e1xyXG4vLyAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsdWV2aW9sZXQ7XHJcbi8vICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyB9XHJcblxyXG4vLyAubWVudXtcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgIC8vIGNvbG9yOiAjMDAwMDgwO1xyXG4gIFxyXG4vLyB9XHJcbi5zZWFyY2h7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vIGNvbG9yOiAjYTM1NTA0O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLy8gbWFyZ2luLXRvcDogMTBweDtcclxuICAvLyBtYXJnaW4tbGVmdDogMTAwJTtcclxufVxyXG4uY29tbWVudC10ZXh0IHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_approve_approve_module_ts.js.map