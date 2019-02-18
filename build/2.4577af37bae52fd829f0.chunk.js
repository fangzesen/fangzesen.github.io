webpackJsonp([2],{

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkFlowChartPageModule", function() { return WorkFlowChartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_flow_chart__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WorkFlowChartPageModule = /** @class */ (function () {
    function WorkFlowChartPageModule() {
    }
    WorkFlowChartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__work_flow_chart__["a" /* WorkFlowChartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__work_flow_chart__["a" /* WorkFlowChartPage */]), __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["j" /* LightOutModule */]
            ],
        })
    ], WorkFlowChartPageModule);
    return WorkFlowChartPageModule;
}());

//# sourceMappingURL=work-flow-chart.module.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkFlowChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkFlowChartPage = /** @class */ (function () {
    function WorkFlowChartPage(navCtrl, navParams, lightHttp, lightLocalCache) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lightHttp = lightHttp;
        this.lightLocalCache = lightLocalCache;
        if (this.navParams.data.objectID) {
            this.lightLocalCache.setObject('workFlowChartPageParams', this.navParams.data);
        }
        else {
            this.navParams.data = this.lightLocalCache.getObject('workFlowChartPageParams');
        }
        this.code = this.navParams.data.objectID;
    }
    WorkFlowChartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkFlowChartPage');
    };
    WorkFlowChartPage.prototype.ngOnInit = function () {
        var _this = this;
        this.lightHttp.get("Flow/GetFlowStepLog", { code: this.code }).then(function (data) {
            _this.chartData = JSON.parse(data);
        });
    };
    WorkFlowChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-work-flow-chart',template:/*ion-inline-start:"D:\webapp\WeixinGuangKangYuang\src\pages\work\work-flow-chart\work-flow-chart.html"*/'<light-content [titleName]="\'流程日志\'">\n\n  <ion-list-header text-center no-margin padding-right>\n\n    <h2 class="item-header">流程审批</h2>\n\n    <ion-icon name="ios-infinite-outline" color="primary"></ion-icon>\n\n  </ion-list-header>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of chartData">\n\n      <div class="log-icon">\n\n        <ion-icon name="checkmark-circle" color="secondary"></ion-icon>\n\n      </div>\n\n      <h2>{{item.StepTitle}}</h2>\n\n      <h3>{{item.Disposers}}</h3>\n\n      <p>\n\n        <ion-icon name="ios-time-outline" color="gray"></ion-icon>{{item.Time}}</p>\n\n      <div class="memberphoto" item-end>{{item.State}}</div>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</light-content>\n\n'/*ion-inline-end:"D:\webapp\WeixinGuangKangYuang\src\pages\work\work-flow-chart\work-flow-chart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["d" /* LightHttp */],
            __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["i" /* LightLocalCache */]])
    ], WorkFlowChartPage);
    return WorkFlowChartPage;
}());

//# sourceMappingURL=work-flow-chart.js.map

/***/ })

});
//# sourceMappingURL=2.4577af37bae52fd829f0.chunk.js.map