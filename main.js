(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 28245)).then(m => m.HomePageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 69549)).then(m => m.LoginPageModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'form',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_form_form_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./form/form.module */ 36984)).then(m => m.FormPageModule)
    },
    {
        path: 'supervisor',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_list_list_module_ts"), __webpack_require__.e("src_app_supervisor_supervisor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./supervisor/supervisor.module */ 10883)).then(m => m.SupervisorPageModule)
    },
    {
        path: 'search',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_search_search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search/search.module */ 65044)).then(m => m.SearchPageModule)
    },
    {
        path: 'list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_list_list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./list/list.module */ 9206)).then(m => m.ListPageModule)
    },
    {
        path: 'emp-dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_emp-dashboard_emp-dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./emp-dashboard/emp-dashboard.module */ 13384)).then(m => m.EmpDashboardPageModule)
    },
    {
        path: 'sup-dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_sup-dashboard_sup-dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sup-dashboard/sup-dashboard.module */ 53466)).then(m => m.SupDashboardPageModule)
    },
    {
        path: 'check',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_check_check_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./check/check.module */ 10979)).then(m => m.CheckPageModule)
    },
    {
        path: 'planned-leave',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_planned-leave_planned-leave_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./planned-leave/planned-leave.module */ 70007)).then(m => m.PlannedLeavePageModule)
    },
    {
        path: 'role-setup/:sdate/:edate',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_role-setup_role-setup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./role-setup/role-setup.module */ 40833)).then(m => m.RoleSetupPageModule)
    },
    {
        path: 'report',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_report_report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./report/report.module */ 67622)).then(m => m.ReportPageModule)
    },
    {
        path: 'eol',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_eol_eol_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./eol/eol.module */ 60965)).then(m => m.EOLPageModule)
    },
    {
        path: 'approve/:leaveId/:userId/:orgId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_approve_approve_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./approve/approve.module */ 30496)).then(m => m.ApprovePageModule)
    },
    {
        path: 'leave-application',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_leave-application_leave-application_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./leave-application/leave-application.module */ 71777)).then(m => m.LeaveApplicationPageModule)
    },
    {
        path: 'calender',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_calender_calender_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./calender/calender.module */ 19872)).then(m => m.CalenderPageModule)
    },
    {
        path: 'holidays',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_holidays_holidays_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./holidays/holidays.module */ 65678)).then(m => m.HolidaysPageModule)
    },
    {
        path: 'example',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_example_example_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./example/example.module */ 79868)).then(m => m.ExamplePageModule)
    },
    {
        path: 'permission-apply',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_permission-apply_permission-apply_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./permission-apply/permission-apply.module */ 96719)).then(m => m.PermissionApplyPageModule)
    },
    {
        path: 'apply-leave',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_apply-leave_apply-leave_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./apply-leave/apply-leave.module */ 36081)).then(m => m.ApplyLeavePageModule)
    },
    {
        path: 'leave-details/:leaveId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_leave-details_leave-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./leave-details/leave-details.module */ 66760)).then(m => m.LeaveDetailsPageModule)
    },
    {
        path: 'plan-details/:leaveId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_plan-details_plan-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./plan-details/plan-details.module */ 51962)).then(m => m.PlanDetailsPageModule)
    },
    { path: 'leave-history',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_leave-history_leave-history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./leave-history/leave-history.module */ 18854)).then(m => m.LeaveHistoryPageModule)
    },
    { path: 'plan-history',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_plan-history_plan-history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./plan-history/plan-history.module */ 85607)).then(m => m.PlanHistoryPageModule)
    },
    {
        path: 'empleaveapply',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_empleaveapply_empleaveapply_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./empleaveapply/empleaveapply.module */ 69178)).then(m => m.EmpleaveapplyPageModule)
    },
    {
        path: 'sup-leavehistory',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_sup-leavehistory_sup-leavehistory_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sup-leavehistory/sup-leavehistory.module */ 76611)).then(m => m.SupLeavehistoryPageModule)
    },
    {
        path: 'sup-leavedetails/:leaveId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sup-leavedetails_sup-leavedetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sup-leavedetails/sup-leavedetails.module */ 33382)).then(m => m.SupLeavedetailsPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 44404)).then(m => m.ProfilePageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/data.service */ 23798);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);








let AppComponent = class AppComponent {
    constructor(menuCntl, router, dataService, http) {
        this.menuCntl = menuCntl;
        this.router = router;
        this.dataService = dataService;
        this.http = http;
        this.leavemngtUrl = this.dataService.base_path;
        this.supervisorStatus = this.dataService.isSupervisor;
    }
    closeMenu() {
        this.menuCntl.close();
    }
    // Method to check if the user is a supervisor
    isSupervisor() {
        return this.dataService.isSupervisor;
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-svg-round-progressbar */ 60763);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-circle-progress */ 91756);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 98980);







// import { IonicStorageModule } from '@ionic/storage-angular';





let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_9__.RoundProgressModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_10__.NgCircleProgressModule
            // IonicStorageModule
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 23798:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);


// import { HttpClient } from '@angular/common/http';

let DataService = class DataService {
    constructor(http) {
        this.http = http;
        // public base_path="https://9085-157-51-166-213.ngrok-free.app/lmgmt";
        this.base_path = "http://localhost:8080/lmgmt";
        this.logopath = 'logo';
        this.leaveBalanceUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.authToken = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Authorization': 'Bearer '
            })
        };
        this.jsonauthToken = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json',
                'Authorization': 'Bearer '
            })
        };
    }
    setToken() {
        this.authToken.headers = this.authToken.headers.set('Authorization', 'Bearer ' + this.authHeader);
        console.log("Auth Header :: " + this.authToken.headers.get("Authorization"));
        //return this.token;  
        this.jsonauthToken.headers = this.jsonauthToken.headers.set('Authorization', 'Bearer ' + this.authHeader);
    }
    //config leave type
    getLeaveType() {
        return this.http.get(this.base_path + '/common/get_config?conf_Name=LEAVE_TYPE', this.jsonauthToken);
    }
    // getImage(): Observable<Blob> {
    //     // Retrieve the jsonauthToken header from the DataService
    //     const headers = this.jsonauthToken.headers;
    //     return this.http.get(this.base_path+`/common/getImage?imgType=logo&orgId=${1002}`, { headers, responseType: 'blob' });
    // }
    getImage(imgType, orgId) {
        const url = `${this.base_path}/common/getImage?imgType=${imgType}&orgId=${orgId}`;
        return this.http.get(url, { responseType: 'blob' });
    }
    // getLeaveBalance(userId: any): Observable<any> {
    //     const leaveblnc = {
    //       "userId": userId
    //     };
    //     return this.http.post(this.base_path + '/leave/getlbal', leaveblnc, this.jsonauthToken);
    //   }
    //   updateLeaveBalance(userId: any): Observable<any> {
    //     return this.http.post(this.base_path + '/leave/update-lbal', { "userId": userId }, this.jsonauthToken);
    //   }
    emitLeaveBalanceUpdated() {
        this.leaveBalanceUpdated.emit();
    }
    getPAcount() {
        let getCount = {
            "org_id": "1001",
            "user_id": "1006"
        };
        return this.http.post(this.base_path + '/lsupp/pfacount', JSON.stringify(getCount), this.jsonauthToken);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-menu swipe-gesture=\"false\" side=\"start\" menuId=\"first\" contentId=\"main\">\r\n    <ion-content>\r\n      <ion-row>\r\n        <ion-col size=\"3\">\r\n          <!-- <img id=\"logo\" style=\"width: 100%; height: 100%; align-items: center;\" routerLink=\"/home1\" src=\"./assets/images/login_bg1.png\" /> -->\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <!-- <img id=\"logo\" style=\"float: right;\" routerLink=\"/home1\" src=\"./assets/images/login_bg.png\" /> -->\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-buttons>\r\n            <ion-button (click)=\"closeMenu()\">\r\n              <ion-icon name=\"close\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-list>\r\n        <ion-menu-toggle>\r\n          <div *ngIf=\"!isSupervisor()\">\r\n            <ion-item style=\"cursor: pointer;\" routerLink=\"/holidays\">\r\n              <ion-icon name=\"calendar-number-outline\"></ion-icon>&nbsp;&nbsp;\r\n              <ion-label>Holidays</ion-label>\r\n            </ion-item>\r\n            <ion-item style=\"cursor: pointer;\" routerLink=\"/calender\">\r\n              <ion-icon name=\"calendar\"></ion-icon>&nbsp;&nbsp;\r\n              <ion-label>Report</ion-label>\r\n            </ion-item>\r\n            <ion-item style=\"cursor: pointer;\" routerLink=\"/permission-apply\">\r\n              <ion-icon  name=\"add-circle-outline\"></ion-icon>&nbsp;&nbsp;\r\n              <ion-label>Apply Permission</ion-label>\r\n            </ion-item>\r\n    \r\n            <ion-item style=\"cursor: pointer;\" routerLink=\"/leave-history\">\r\n              <ion-icon name=\"logo-deviantart\"></ion-icon>&nbsp;&nbsp;\r\n              <ion-label>Leave History</ion-label>\r\n            </ion-item>\r\n    \r\n            <ion-item style=\"cursor: pointer;\" routerLink=\"/plan-history\">\r\n              <ion-icon name=\"logo-pinterest\"></ion-icon>&nbsp;&nbsp;\r\n              <ion-label>Plan History</ion-label>\r\n            </ion-item>\r\n            \r\n\r\n          </div>\r\n          \r\n  \r\n          <div *ngIf=\"isSupervisor()\">\r\n            <ion-item style=\"cursor: pointer;\" routerLink=\"/holidays\">\r\n              <ion-icon name=\"calendar-number-outline\"></ion-icon>&nbsp;&nbsp;\r\n              <ion-label>Holidays</ion-label>\r\n            </ion-item>\r\n            <ion-item style=\"cursor: pointer;\" routerLink=\"/calender\">\r\n              <ion-icon name=\"calendar\"></ion-icon>&nbsp;&nbsp;\r\n              <ion-label>Report</ion-label>\r\n            </ion-item>\r\n            <ion-item style=\"cursor: pointer;\" routerLink=\"/eol\">\r\n              <ion-icon name=\"document\"></ion-icon>&nbsp;&nbsp;<ion-label>EOL</ion-label>\r\n            </ion-item>\r\n  \r\n            <ion-item style=\"cursor: pointer;\" routerLink=\"/supervisor\">\r\n              <ion-icon  name=\"add-circle-outline\"></ion-icon>&nbsp;&nbsp;<ion-label>Apply Leave</ion-label>\r\n            </ion-item>\r\n            <ion-item style=\"cursor: pointer;\" routerLink=\"/sup-leavehistory\">\r\n              <ion-icon name=\"logo-deviantart\"></ion-icon>&nbsp;&nbsp;\r\n              <ion-label>Leave History</ion-label>\r\n            </ion-item>\r\n    \r\n          </div>\r\n          <ion-item style=\"cursor: pointer;\" routerLink=\"/profile\">\r\n            <ion-icon name=\"person\"></ion-icon>&nbsp;&nbsp;\r\n            <ion-label>Profile</ion-label>\r\n          </ion-item>\r\n          <ion-item style=\"cursor: pointer;\" routerLink=\"/login\">\r\n            <ion-icon name='log-out-outline'></ion-icon>&nbsp;&nbsp;\r\n            <ion-label>Logout</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        \r\n        \r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = ".center {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 10px;\n}\n\n.logout {\n  cursor: pointer;\n}\n\n.class {\n  cursor: pointer;\n}\n\n.close {\n  margin-right: 60%;\n}\n\nion-menu {\n  height: 50%;\n  width: 60%;\n  border-radius: 10px;\n}\n\nion-menu ion-label {\n  font-size: 11px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTtFQUVFLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBT0U7RUFDRSxlQUFBO0FBSko7O0FBTUU7RUFDRSxlQUFBO0FBSEo7O0FBS0U7RUFDRSxpQkFBQTtBQUZKOztBQUlFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBRlIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnR7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9iZy9iZzEuanBnKTtcclxuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLy8gICB9XHJcbiAgLmNlbnRlcntcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5sb2dvdXR7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5jbGFzc3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmNsb3Nle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MCU7XHJcbiAgfVxyXG4gIGlvbi1tZW51e1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIFxyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiKDE5NywgMTkzLCAxOTMpO1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfSJdfQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map