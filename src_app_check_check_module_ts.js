"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_check_check_module_ts"],{

/***/ 39969:
/*!***********************************************!*\
  !*** ./src/app/check/check-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckPageRoutingModule": () => (/* binding */ CheckPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _check_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check.page */ 9242);




const routes = [
    {
        path: '',
        component: _check_page__WEBPACK_IMPORTED_MODULE_0__.CheckPage
    }
];
let CheckPageRoutingModule = class CheckPageRoutingModule {
};
CheckPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckPageRoutingModule);



/***/ }),

/***/ 10979:
/*!***************************************!*\
  !*** ./src/app/check/check.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckPageModule": () => (/* binding */ CheckPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _check_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-routing.module */ 39969);
/* harmony import */ var _check_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check.page */ 9242);







let CheckPageModule = class CheckPageModule {
};
CheckPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _check_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckPageRoutingModule
        ],
        declarations: [_check_page__WEBPACK_IMPORTED_MODULE_1__.CheckPage]
    })
], CheckPageModule);



/***/ }),

/***/ 9242:
/*!*************************************!*\
  !*** ./src/app/check/check.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckPage": () => (/* binding */ CheckPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_check_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./check.page.html */ 88361);
/* harmony import */ var _check_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check.page.scss */ 766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let CheckPage = class CheckPage {
    // form: FormGroup;
    // Data: Array<any> = [
    //   { name: 'Pear', value: 'pear' },
    //   { name: 'Plum', value: 'plum' },
    //   { name: 'Kiwi', value: 'kiwi' },
    //   { name: 'Apple', value: 'apple' },
    //   { name: 'Lime', value: 'lime' }
    // ];
    // constructor(private fb: FormBuilder) {
    //   this.form = this.fb.group({
    //     checkArray: this.fb.array([], [Validators.required])
    //   })
    // }
    // onCheckboxChange(e) {
    //   const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    //   if (e.target.checked) {
    //     checkArray.push(new FormControl(e.target.value));
    //   } else {
    //     let i: number = 0;
    //     checkArray.controls.forEach((item: FormControl) => {
    //       if (item.value == e.target.value) {
    //         checkArray.removeAt(i);
    //         return;
    //       }
    //       i++;
    //     });
    //   }
    // }
    // submitForm() {
    //   console.log(this.form.value)
    // }
    ngOnInit() {
    }
    toggoleEvent(event) {
        console.log(event.detail.checked);
        if (event.detail.checked) {
            document.body.setAttribute('color-theme', 'dark');
        }
        else {
            document.body.setAttribute('color-theme', 'light');
        }
    }
    toggoleEvent1(event) {
        console.log("warning", event.detail.checked);
        if (event.detail.checked) {
            document.body.setAttribute('color-theme', 'warning');
        }
        else {
            document.body.setAttribute('color-theme', 'light');
        }
    }
    toggoleEvent2(event) {
        console.log("warning", event.detail.checked);
        if (event.detail.checked) {
            document.body.setAttribute('color-theme', 'crystal');
        }
        else {
            document.body.setAttribute('color-theme', 'light');
        }
    }
    toggoleEvent3(event) {
        console.log("warning", event.detail.checked);
        if (event.detail.checked) {
            document.body.setAttribute('color-theme', 'lightTheme1');
        }
        else {
            document.body.setAttribute('color-theme', 'light');
        }
    }
    toggoleEvent4(event) {
        console.log("warning", event.detail.checked);
        if (event.detail.checked) {
            document.body.setAttribute('color-theme', 'lightTheme2');
        }
        else {
            document.body.setAttribute('color-theme', 'light');
        }
    }
    toggoleEvent5(event) {
        console.log("warning", event.detail.checked);
        if (event.detail.checked) {
            document.body.setAttribute('color-theme', 'light1');
        }
        else {
            document.body.setAttribute('color-theme', 'light');
        }
    }
};
CheckPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-check',
        template: _D_suriya_LMS_github_demolmsFrontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_check_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_check_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CheckPage);



/***/ }),

/***/ 88361:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/check/check.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"  class=\"back\" defaultHref=\"/\"></ion-back-button>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h3 style=\"text-align: center;\">Theme</h3>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label>\n            Dark Theme\n          </ion-label>\n          <ion-toggle (ionChange)=\"toggoleEvent($event)\"></ion-toggle>\n            \n        </ion-item>\n        <ion-item>\n          <ion-label>\n            Dark Blue Theme\n          </ion-label>\n          <ion-toggle (ionChange)=\"toggoleEvent1($event)\"></ion-toggle>\n            \n        </ion-item>\n        <ion-item>\n          <ion-label>\n            Crystal Theme\n          </ion-label>\n          <ion-toggle (ionChange)=\"toggoleEvent2($event)\"></ion-toggle>      \n        </ion-item>\n        <ion-item>\n          <ion-label>\n            light Theme 1\n          </ion-label>\n          <ion-toggle (ionChange)=\"toggoleEvent3($event)\"></ion-toggle>      \n        </ion-item>\n        <ion-item>\n          <ion-label>\n            light Theme 2\n          </ion-label>\n          <ion-toggle (ionChange)=\"toggoleEvent4($event)\"></ion-toggle>      \n        </ion-item>\n      </ion-col>\n      <ion-item>\n        <ion-label>\n          light1\n        </ion-label>\n        <ion-toggle (ionChange)=\"toggoleEvent5($event)\"></ion-toggle>      \n      </ion-item>\n    </ion-row>\n  </ion-grid>\n\n  \n  \n\n\n</ion-content>\n");

/***/ }),

/***/ 766:
/*!***************************************!*\
  !*** ./src/app/check/check.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_check_check_module_ts.js.map