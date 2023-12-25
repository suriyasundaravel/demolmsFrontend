"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_list_list_module_ts"],{

/***/ 71247:
/*!*********************************************!*\
  !*** ./src/app/list/list-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageRoutingModule": () => (/* binding */ ListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.page */ 97894);




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_0__.ListPage
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListPageRoutingModule);



/***/ }),

/***/ 9206:
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageModule": () => (/* binding */ ListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-routing.module */ 71247);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page */ 97894);







let ListPageModule = class ListPageModule {
};
ListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListPageRoutingModule
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_1__.ListPage]
    })
], ListPageModule);



/***/ }),

/***/ 97894:
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPage": () => (/* binding */ ListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./list.page.html */ 15013);
/* harmony import */ var _list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page.scss */ 24711);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 23798);
var ListPage_1;








let ListPage = ListPage_1 = class ListPage {
    // public resConfig:any=[];
    constructor(dataService, modalctrl, router, http, toastController) {
        this.dataService = dataService;
        this.modalctrl = modalctrl;
        this.router = router;
        this.http = http;
        this.toastController = toastController;
        this.resConfig = [];
        this.doct = [];
        this.datas = [];
        this.subData = [];
        this.namelist = [];
        this.Place = [];
        this.empId = [];
        this.supervisorData = [];
        this.passNameTypePercent = [];
        this.showDetails = false;
        this.Details = false;
        this.searchlist = false;
        this.label = true;
        this.label1 = false;
        this.supervisor = [];
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-type': 'application/json' })
        };
        this.docts = [];
        this.Emp_data = [];
        this.leavemngtUrl = this.dataService.base_path;
    }
    ngOnInit() {
        this.logresData = this.http.get(this.leavemngtUrl + "/lres/lresources?orgcode=mag001&lang");
        this.logresData.subscribe(data => {
            this.resConfig = data;
            // this.leavemngtUrl.confData = data;
            // console.log("Login Response Data"+ JSON.stringify(this.resConfig));
        });
        this.datas;
    }
    openIonModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalctrl.create({
                component: ListPage_1,
                componentProps: {}
            });
            modal.onDidDismiss().then((modelData) => {
                this.passNameTypePercent = modelData.data;
                console.log("modal data" + JSON.stringify(this.passNameTypePercent));
                this.namelist = this.passNameTypePercent.search_info["name"];
                this.Place = this.passNameTypePercent.search_info["place"];
                this.empId = this.passNameTypePercent.search_info["emp_Id"];
                console.log("totl", this.namelist);
                if (this.namelist != undefined) {
                    this.showDetails = true;
                }
                if (this.namelist.length == 1) {
                    this.singleData = this.Place;
                    this.singleId = this.empId;
                    this.showDetails = false;
                    console.log("wedf", this.singleData);
                }
                else {
                    this.singleData = "";
                    this.singleId = "";
                }
            });
            return yield modal.present();
        });
    }
    presentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                //duration: 2000,
                position: 'middle',
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Close clicked..');
                            // this.router.navigate(['/form']);
                        }
                    }
                ]
                //color: 'green'
            });
            toast.present();
        });
    }
    openIonModals() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // this.openIonModal();
            const modal = yield this.modalctrl.create({
                component: ListPage_1,
                componentProps: {
                    "name": this.namelist,
                }
            });
            return yield modal.present();
        });
    }
    saveSupRecord() {
        this.Emp_data = { name: "Dinesh", id: 45, leave_balance: { SL: 5, CL: 4, PL: 10 } };
        var date1 = new Date(this.start_date);
        var date2 = new Date(this.end_date);
        console.log("sdc", date2.getDate());
        var dayMilliseconds = 1000 * 3600 * 24;
        this.Total_day = date2.getDate() - date1.getDate();
        ;
        var weekendDays = 0;
        while (date1 <= date2) {
            var remain = date1.getDay();
            if (remain == 0) {
                weekendDays++;
            }
            else if (remain == 6) {
                weekendDays++;
            }
            date1 = new Date(+date1 + dayMilliseconds);
        }
        this.day = this.Total_day - weekendDays;
        console.log("Total day", this.Total_day, "Week days", weekendDays, "Remain days", this.day);
        if (this.leave_type1 == "Sick" && this.day > this.Emp_data.leave_balance["SL"]) {
            this.presentToast("Your  Total sick leave 5 Days Only");
        }
        else if (this.leave_type1 == "Sick" && this.day <= this.Emp_data.leave_balance["SL"]) {
            let sick = this.Emp_data.leave_balance["SL"];
            var remaing = sick - this.day;
            console.log("remain" + remaing);
        }
        else if (this.leave_type1 == "Causal" && this.day > this.Emp_data.leave_balance["CL"]) {
            this.presentToast("Your Total causal leave 4 Days Only");
        }
        else if (this.leave_type1 == "Causal" && this.day <= this.Emp_data.leave_balance["CL"]) {
            let causal = this.Emp_data.leave_balance["CL"];
            var remaing = causal - this.day;
            console.log("remain" + remaing);
        }
        else if (this.leave_type1 == "Paid" && this.day > this.Emp_data.leave_balance["PL"]) {
            this.presentToast("Your Total Paid leave 10 Days Only");
        }
        else if (this.leave_type1 == "Paid" && this.day <= this.Emp_data.leave_balance["PL"]) {
            let paid = this.Emp_data.leave_balance["PL"];
            var remaing = paid - this.day;
            console.log("remain" + remaing);
        }
        this.docts = {
            "doc_id": this.doc_id,
            "doc_name": this.doc_name,
            "doc_status": this.doc_status,
            "upload_dt": this.file1,
            "comments": this.cmds,
            "reviewed_by": this.reviewed_by,
            "reviewed_dt": this.reviewed_dt
        };
        this.supervisorData = {
            "sup-name": this.sup_name,
            // "name":this.namelist,
            // "place":this.Place,
            "sup-id": this.sup_id,
            "leaveType": this.leave_type1,
            "start Date": this.start_date,
            "end Date": this.end_date,
            "cmds": this.cmds,
            "file": this.docts,
            "approver cmds": this.approve_cmds1,
            "days": this.day
        };
        this.records = JSON.stringify(this.supervisorData);
        //  console.log("data",);
        console.log("rec", this.records);
        this.subData.push(this.records);
    }
    saveEmpRecord() {
        this.Details = true;
        this.Emp_data = { name: "Dinesh", id: 45, leave_balance: { SL: 5, CL: 4, PL: 10 } };
        var date1 = new Date(this.from_date);
        var date2 = new Date(this.to_date);
        console.log("sdc", date2.getDate());
        var dayMilliseconds = 1000 * 3600 * 24;
        this.Total_day = date2.getDate() - date1.getDate();
        ;
        var weekendDays = 0;
        while (date1 <= date2) {
            var remain = date1.getDay();
            if (remain == 0) {
                weekendDays++;
            }
            else if (remain == 6) {
                weekendDays++;
            }
            date1 = new Date(+date1 + dayMilliseconds);
        }
        this.day = this.Total_day - weekendDays;
        console.log("Total day", this.Total_day, "Week days", weekendDays, "Remain days", this.day);
        if (this.leave_type == "sick" && this.day > this.Emp_data.leave_balance["SL"]) {
            this.presentToast("Your  Total sick leave 5 Days Only");
        }
        else if (this.leave_type == "sick" && this.day <= this.Emp_data.leave_balance["SL"]) {
            let sick = this.Emp_data.leave_balance["SL"];
            var remaing = sick - this.day;
            console.log("remain" + remaing);
        }
        else if (this.leave_type == "causal" && this.day > this.Emp_data.leave_balance["CL"]) {
            this.presentToast("Your Total causal leave 4 Days Only");
        }
        else if (this.leave_type == "causal" && this.day <= this.Emp_data.leave_balance["CL"]) {
            let causal = this.Emp_data.leave_balance["CL"];
            var remaing = causal - this.day;
            console.log("remain" + remaing);
        }
        else if (this.leave_type == "paid" && this.day > this.Emp_data.leave_balance["PL"]) {
            this.presentToast("Your Total Paid leave 10 Days Only");
        }
        else if (this.leave_type == "paid" && this.day <= this.Emp_data.leave_balance["PL"]) {
            let paid = this.Emp_data.leave_balance["PL"];
            var remaing = paid - this.day;
            console.log("remain" + remaing);
        }
        this.doct = {
            "doc_id": this.doc_id,
            "doc_name": this.doc_name,
            "doc_status": this.doc_status,
            "upload_dt": this.file,
            "comments": this.reson,
            "reviewed_by": this.reviewed_by,
            "reviewed_dt": this.reviewed_dt
        };
        this.leaveData = {
            "emp-name": this.emp_name,
            // "name":this.namelist,
            // "place":this.Place,
            "emp-id": this.emp_id,
            "leaveType": this.leave_type,
            "start Date": this.from_date,
            "end Date": this.to_date,
            "cmds": this.reson,
            "file": this.doct,
            "Days": this.day,
            "approver cmds": this.approve_cmds,
            "Read Date": this.read_date,
            "Read_by": this.read_by,
            "Status": this.status
        };
        this.record = JSON.stringify(this.leaveData);
        //  console.log("data",);
        console.log("rec", this.record, this.datas);
        this.datas.push(this.record);
    }
    toggleLang(togEvent) {
        console.log("value" + togEvent.target.checked);
        if (togEvent.target.checked) {
            this.searchlist = true;
            this.label = false;
            this.label1 = true;
            // this.logresData = this.http.get('http://localhost:port/assets/db.json')
        }
        else {
            this.searchlist = false;
            this.label = true;
            this.label1 = false;
            this.showDetails = false;
            // this.logresData = this.http.get(this.domainURL+"/resource?pageId=0&langCd=en&clientId=20000&modId=2");
        }
    }
};
ListPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
ListPage = ListPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-list',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListPage);



/***/ }),

/***/ 15013:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/list/list.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-header>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-back-button  class=\"back\" defaultHref=\"/\"></ion-back-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col\">\n        <ion-buttons class=\"bu\">\n          <ion-button>\n            <ion-icon class=\"search\" name=\"notifications\"></ion-icon>\n          </ion-button>\n          <!-- <ion-button>\n            <ion-icon class=\"search\" name=\"search\"></ion-icon>\n          </ion-button> -->\n          <ion-menu-button slot=\"end\" class=\"menu\" class=\"menu\"></ion-menu-button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <h1 class=\"title\">{{resConfig[\"supervisor_title\"]}}</h1><br>\n  <h3 class=\"title\">{{resConfig[\"supervisor_sub\"]}}</h3>\n  <div  class=\"flex\">\n     <ion-icon class=\"eng\" name=\"person\"></ion-icon>\n    <ion-toggle (ionChange)=\"toggleLang($event)\" class=\"tog\" color=\"light\"></ion-toggle>\n    <ion-icon class=\"tamil\" name=\"people\"></ion-icon>\n  </div>\n   \n  <div *ngIf=\"label1\">\n    <form>\n      <ion-item>\n        <ion-label class=\"label\" *ngIf=\"label\"  position=\"fixed\" class=\"label\">Supervisor Name</ion-label>\n        <ion-label class=\"label\"   position=\"floating\" class=\"label\">Employee Name</ion-label> \n        <ion-input  class=\"input\"  *ngIf=\"label\" #f=\"ngModel\"  [(ngModel)]=\"sup_name\" type=\"text\" \n        name=\"first\" required></ion-input>\n        <ion-input #f=\"ngModel\" placeholder=\" Name\"  [(ngModel)]=\"emp_name\" type=\"text\" \n        name=\"first\" required>{{singleData}}</ion-input>\n        <ion-icon *ngIf=\"searchlist\" class=\"search1\" \n        slot=\"end\" (click)=\"openIonModal()\" name=\"search\"></ion-icon>\n      </ion-item>\n      <div class=\"otp\" *ngIf=\"showDetails\">\n        <a class=\"link\"  (click)=\"openIonModals()\" role=\"button\">list</a>\n      </div>\n      <!-- <br> -->\n      <!-- <ion-item>\n         <ion-label class=\"label\" *ngIf=\"label\"  position=\"fixed\" class=\"label\">Supervisor Id</ion-label> -->\n        <!-- <ion-label  position=\"floating\" class=\"label\">Employee Id</ion-label> -->\n        <!-- <ion-input class=\"label\" class=\"input\" *ngIf=\"label\" #f1=\"ngModel\"  [(ngModel)]=\"sup_id\" type=\"text\" maxLength=\"5\" name=\"first1\" required></ion-input>\n        <ion-input class=\"label\"   placeholder=\"  Id\" #f1=\"ngModel\"  [(ngModel)]=\"emp_id\" type=\"text\" maxLength=\"5\" name=\"first1\" required>{{singleId}}</ion-input>\n\n      </ion-item>\n      <br> -->\n      <ion-item>\n        <ion-label class=\"label\" position=\"floating\" class=\"label\">Type of Leave</ion-label>\n        <ion-select   #f2=\"ngModel\"   name=\"first2\" [(ngModel)]=\"leave_type\">\n          <ion-select-option value=\"annual\">Annual Leave</ion-select-option>\n          <ion-select-option value=\"causal\">Causal Leave</ion-select-option>\n          <ion-select-option value=\"sick\">Sick Leave</ion-select-option>\n          <ion-select-option value=\"marraje\">Marraje Leave</ion-select-option>\n          <ion-select-option value=\"paid\">Paid Leave</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <!-- <br> -->\n    <ion-item>\n      <ion-label class=\"label\" position=\"fixed\" class=\"label\">From Date</ion-label>   \n      <ion-input    #f3=\"ngModel\"  [(ngModel)]=\"from_date\" type=\"date\" name=\"first3\" required></ion-input>\n      <!-- <ion-input  class=\"input2\"  #f4=\"ngModel\"  [(ngModel)]=\"to_date\" type=\"date\" name=\"first4\" required></ion-input> -->\n    </ion-item>\n\n    <!-- <br> -->\n    <ion-item>\n      <ion-label class=\"label\" position=\"fixed\" class=\"label\">To Date</ion-label>   \n      <!-- <ion-input  class=\"input2\"  #f3=\"ngModel\"  [(ngModel)]=\"from_date\" type=\"date\" name=\"first3\" required></ion-input> -->\n      <ion-input   #f4=\"ngModel\"  [(ngModel)]=\"to_date\" type=\"date\" name=\"first4\" required></ion-input>\n    </ion-item>\n    <!-- <br> -->\n    <ion-item>\n      <ion-label class=\"label\" position=\"floating\"  class=\"label\" >Comments</ion-label>\n      <!-- <ion-input  class=\"input\"  #f5=\"ngModel\"   [(ngModel)]=\"reson\" type=\"text\" name=\"first5\" required></ion-input> -->\n\n      \n      <ion-textarea   #f5=\"ngModel\" placeholder=\" Comments\"  [(ngModel)]=\"reson\"  name=\"first5\" required ></ion-textarea>\n    </ion-item><br>\n    <ion-item>\n      <ion-label class=\"label\" position=\"fixed\" class=\"label\"> Upload Documents</ion-label>\n      <input    #f6=\"ngModel\" placeholder=\"Upload\"  [(ngModel)]=\"file\" type=\"file\" name=\"first4\" >\n\n    </ion-item>\n    <!-- <br> -->\n    <ion-item *ngIf=\"Details\">\n      <ion-label class=\"label\" position=\"floating\"  class=\"label\" >Approver Comments</ion-label>\n      <ion-input   #f7=\"ngModel\"  [(ngModel)]=\"approve_cmds\" type=\"text\" name=\"first7\" required></ion-input>\n\n      <!-- <ion-textarea class=\"input1\" style=\"height: 60%;\"  #f7=\"ngModel\"  [(ngModel)]=\"approve_cmds\"  name=\"first7\" required ></ion-textarea> -->\n    </ion-item>\n    <!-- <br> -->\n    <div style=\"margin-right: 10px;\">\n      <ion-button class=\"ion-float-right\" type=\"reset\"  color=\"danger\" >Cancel</ion-button>\n      <!-- <ion-button class=\"ion-float-right\" *ngIf=\"label\" name=\"2\"  style=\"float: right;\" color=\"success\" (click)=\"saveSupRecord()\">Apply</ion-button> -->\n\n      <ion-button class=\"ion-float-right\"  name=\"2\"  style=\"float: right;\" color=\"success\" (click)=\"saveEmpRecord()\">Apply</ion-button>\n    </div>\n    </form>\n  </div>\n\n\n  <div *ngIf=\"label\">\n    <form>\n      <!-- <ion-item-group> -->\n        <!-- <ion-item> -->\n      <!-- <ion-item > -->\n        <!-- <ion-label class=\"label\"  position=\"floating\" class=\"label\">{{resConfig[\"supervisor_name\"]}}</ion-label>\n        <ion-input   #f=\"ngModel\" placeholder=\"    Name\" [(ngModel)]=\"sup_name\" type=\"text\" name=\"first\" required></ion-input> -->\n      <!-- </ion-item> -->\n        <!-- </ion-item> -->\n      <!-- </ion-item-group> -->\n      <!-- <br> -->\n      <!-- <ion-item>\n      <ion-item>\n        <ion-label class=\"label\"  position=\"floating\" class=\"label\">Supervisor Id</ion-label>\n        <ion-input  #f1=\"ngModel\"  [(ngModel)]=\"sup_id\" type=\"number\" placeholder=\"   Id\" maxLength=\"5\" name=\"first1\" required></ion-input>\n      </ion-item>\n    </ion-item>\n      <br> -->\n      <ion-item>\n      <!-- <ion-item> -->\n        <ion-label class=\"label\"  position=\"floating\" class=\"label\">{{resConfig[\"supervisor_type\"]}}</ion-label>\n        <ion-select   #f2=\"ngModel\"   name=\"first2\" [(ngModel)]=\"leave_type1\">\n          <ion-select-option value=\"Annual\">Annual Leave</ion-select-option>\n          <ion-select-option value=\"Causal\">Causal Leave</ion-select-option>\n          <ion-select-option value=\"Sick\">Sick Leave</ion-select-option>  \n          <ion-select-option value=\"Marraje\">Marraje Leave</ion-select-option>\n          <ion-select-option value=\"Paid\">Paid Leave</ion-select-option>\n        </ion-select>\n      <!-- </ion-item> -->\n      </ion-item>\n      <!-- <br> -->\n    <!-- <ion-item> -->\n      <ion-item>\n      <ion-label class=\"label\" position=\"fixed\" >{{resConfig[\"supervisor_fdate\"]}}</ion-label>   \n      <ion-input    #f3=\"ngModel\"  [(ngModel)]=\"start_date\" type=\"date\" name=\"first3\" required></ion-input>\n      <!-- <ion-input  class=\"input2\" style=\"width: 40%;\"  #f4=\"ngModel\"  [(ngModel)]=\"end_date\" type=\"date\" name=\"first4\" required></ion-input> -->\n    <!-- </ion-item> -->\n      </ion-item>\n    <!-- <br> -->\n    <ion-item>\n      <ion-label class=\"label\" position=\"fixed\" >{{resConfig[\"supervisor_tdate\"]}}</ion-label>   \n      <!-- <ion-input  class=\"input2\" style=\"width: 40%;\" #f3=\"ngModel\"  [(ngModel)]=\"start_date\" type=\"date\" name=\"first3\" required></ion-input> -->\n      <ion-input    #f4=\"ngModel\"  [(ngModel)]=\"end_date\" type=\"date\" name=\"first4\" required></ion-input>\n    <!-- </ion-item> -->\n      </ion-item><br>\n    <ion-item>\n    <!-- <ion-item> -->\n      <ion-label class=\"label\" position=\"floating\"   class=\"label\" >{{resConfig[\"supervisor_comments\"]}}</ion-label>\n      <!-- <ion-input  class=\"input\"  #f5=\"ngModel\"  placeholder=\"Comments\" [(ngModel)]=\"cmds\" type=\"text\" name=\"first5\" required></ion-input> -->\n\n      \n      <ion-textarea   #f5=\"ngModel\" placeholder=\"  comments\"  [(ngModel)]=\"cmds\"  name=\"first5\" required ></ion-textarea>\n    <!-- </ion-item> -->\n    </ion-item>\n    <!-- <br> -->\n    <!-- <ion-item> -->\n      <ion-item>\n      <ion-label class=\"label\" position=\"fixed\" class=\"label\">{{resConfig[\"supervisor_\"]}}</ion-label>\n      <input    #f6=\"ngModel\" placeholder=\"Upload\"  [(ngModel)]=\"file\" type=\"file\" name=\"first4\" >\n\n    <!-- </ion-item> -->\n      </ion-item>\n    <!-- <br> -->\n    <ion-item *ngIf=\"showDetails\">\n      <ion-label class=\"label\" position=\"fixed\"  class=\"label\" >Approver Comments</ion-label>\n      <ion-input    #f7=\"ngModel\" placeholder=\"Comments\"  [(ngModel)]=\"approve_cmds1\" type=\"text\" name=\"first7\" required></ion-input>\n\n      <!-- <ion-textarea class=\"input1\" style=\"height: 60%;\"  #f7=\"ngModel\"  [(ngModel)]=\"approve_cmds\"  name=\"first7\" required ></ion-textarea> -->\n    </ion-item>\n    <!-- <br> -->\n    <div style=\"margin-right: 10px;\">\n      <ion-button class=\"ion-float-right\" type=\"reset\"  color=\"danger\" >Cancel</ion-button>\n      <ion-button class=\"ion-float-right\" name=\"2\"  style=\"float: right;\" color=\"success\"  (click)=\"saveSupRecord()\">Apply Leave</ion-button>\n    </div>\n    </form>\n  </div>\n \n</ion-content>\n<ion-tab-bar class=\"tab\" slot=\"bottom\">\n  <ion-tab-button tab=\"return\" routerLink=\"/sup-dashboard\">\n    \n    <ion-icon name=\"person\"></ion-icon>\n        <!-- <i class=\"fa fa-quote-right\"></i> -->\n        <ion-label>DashBoard</ion-label>\n     \n    \n  </ion-tab-button>\n  <ion-tab-button tab=\"Order History\" routerLink=\"/supervisor\">\n    <ion-icon name=\"add-circle-outline\"></ion-icon>\n    <ion-label>Apply Leave</ion-label>\n  </ion-tab-button>\n  <ion-tab-button tab=\"View Brouchure\" routerLink=\"/planned-leave\">\n    <ion-icon name=\"browsers\"></ion-icon>\n    <ion-label>Leave Planner</ion-label>\n  </ion-tab-button>\n \n  <ion-tab-button tab=\"login\" routerLink=\"/eol\">\n    <ion-icon name=\"people\"></ion-icon>\n    <ion-label>EOL</ion-label>\n  </ion-tab-button>\n  </ion-tab-bar>\n");

/***/ }),

/***/ 24711:
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = ".limitTextHeight {\n  height: 20px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoibGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGltaXRUZXh0SGVpZ2h0IHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_list_list_module_ts.js.map