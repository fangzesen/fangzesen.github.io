webpackJsonp([3],{

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkDetailPageModule", function() { return WorkDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_detail__ = __webpack_require__(500);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WorkDetailPageModule = /** @class */ (function () {
    function WorkDetailPageModule() {
    }
    WorkDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__work_detail__["a" /* WorkDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__work_detail__["a" /* WorkDetailPage */]), __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["j" /* LightOutModule */]
            ],
        })
    ], WorkDetailPageModule);
    return WorkDetailPageModule;
}());

//# sourceMappingURL=work-detail.module.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_light_providers_providers_lightNav__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_light_out_light_out_module__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkDetailPage = /** @class */ (function () {
    function WorkDetailPage(navCtrl, navParams, lightHttp, lightWriterService, lightNav, lightLocalCache) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lightHttp = lightHttp;
        this.lightWriterService = lightWriterService;
        this.lightNav = lightNav;
        this.lightLocalCache = lightLocalCache;
    }
    WorkDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        // TODO:如果是浏览器前进操作进入的页面，导航参数如何还原？
        console.log(location.href);
        if (this.navParams.data.item) {
            console.log(this.navParams.data);
            this.lightLocalCache.setObject('workDetailPageParams', this.navParams.data);
        }
        else {
            console.log('get from local');
            this.navParams.data = this.lightLocalCache.getObject('workDetailPageParams');
        }
        var data = this.navParams.data;
        this.code = data.item.CODE;
        this.JobType = data.item.JobType;
        this.showFlag = data.item.showFlag;
        this.lightHttp.get("Flow/GetCurStep", { objectID: this.code }).then(function (data) {
            var curStepData = __WEBPACK_IMPORTED_MODULE_1__light_light_out_light_out_module__["e" /* LightJsonUtil */].toObject(data);
            _this.curStepTitle = (JSON.stringify(curStepData) === '{}') ? "已经归档" : curStepData.Title;
        }).catch(function (err) {
            console.log(err);
        });
    };
    //流程日志
    WorkDetailPage.prototype.lookFlow = function () {
        this.navCtrl.push("WorkFlowChartPage", { objectID: this.code });
    };
    WorkDetailPage.prototype.ngOnDestroy = function () {
        // this.navCtrl.popToRoot()
    };
    WorkDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-work-detail',template:/*ion-inline-start:"D:\webapp\WeixinGuangKangYuang\src\pages\work\work-detail\work-detail.html"*/'<light-content [titleName]="JobType">\n    <button ion-button icon-only (click)=\'lookFlow()\' class="lightNavbar">\n    <ion-icon name="ios-list-box-outline"></ion-icon>\n  </button>\n    <ion-list-header text-center no-margin padding-right class="lightFormStep">\n        <h2 class="item-header">{{curStepTitle}}</h2>\n        <ion-icon name="ios-infinite-outline" color="primary"></ion-icon>\n    </ion-list-header>\n    <light-flow [showMenuFlag]="showFlag" [flowObjectID]="code"></light-flow>\n</light-content>'/*ion-inline-end:"D:\webapp\WeixinGuangKangYuang\src\pages\work\work-detail\work-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__light_light_out_light_out_module__["d" /* LightHttp */],
            __WEBPACK_IMPORTED_MODULE_1__light_light_out_light_out_module__["p" /* LightWriterService */],
            __WEBPACK_IMPORTED_MODULE_0__light_light_providers_providers_lightNav__["a" /* LightNav */],
            __WEBPACK_IMPORTED_MODULE_1__light_light_out_light_out_module__["i" /* LightLocalCache */]])
    ], WorkDetailPage);
    return WorkDetailPage;
}());

//# sourceMappingURL=work-detail.js.map

/***/ })

});
//# sourceMappingURL=3.545bd426932ea3441af0.chunk.js.map