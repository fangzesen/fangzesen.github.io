webpackJsonp([0],{

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkNewProcessPageModule", function() { return WorkNewProcessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_new_process__ = __webpack_require__(504);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WorkNewProcessPageModule = /** @class */ (function () {
    function WorkNewProcessPageModule() {
    }
    WorkNewProcessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__work_new_process__["a" /* WorkNewProcessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__work_new_process__["a" /* WorkNewProcessPage */]), __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["j" /* LightOutModule */]
            ],
        })
    ], WorkNewProcessPageModule);
    return WorkNewProcessPageModule;
}());

//# sourceMappingURL=work-new-process.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkNewProcessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkNewProcessPage = /** @class */ (function () {
    /**
     * 创建一个新的流程信息初始化
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @param {LightFlowService} flowServcie
     * @memberof WorkNewProcessPage
     */
    function WorkNewProcessPage(navCtrl, navParams, lightload, flowServcie, lightpop, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lightload = lightload;
        this.flowServcie = flowServcie;
        this.lightpop = lightpop;
        this.http = http;
        this.sCode = this.navParams.data.item.Code;
    }
    WorkNewProcessPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //加载进度条
        var loadctrl = this.lightload.showLoading('正在加载中...');
        this.flowServcie.getStartFlow(this.sCode).then(function (value) {
            _this.writerFlow = value;
            _this.flowServcie.getWriterForm(_this.writerFlow).then(function (result) {
                //结束进度条,避免超时
                loadctrl.instance && loadctrl.dismiss();
                _this.writeData = __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["e" /* LightJsonUtil */].toObject(result);
            }).catch(function (err) {
                loadctrl.instance && loadctrl.dismiss();
                _this.lightpop.errMessage(err);
                _this.navCtrl.pop();
            });
            // this.http.get('http://172.16.50.81:8100/assets/json/customForm.json').subscribe(res => {
            //   loadctrl.instance && loadctrl.dismiss();
            //   console.log(this.writeData = res.json(), `test json1`)
            // })
        }).catch(function (err) {
            loadctrl.instance && loadctrl.dismiss();
            //this.lightpop.errMessage(err);
            _this.navCtrl.pop();
        });
    };
    /**
     * 提交任务的信息
     *
     * @memberof WorkNewProcessPage
     */
    WorkNewProcessPage.prototype.submitProcess = function () {
        this.flowServcie.submitFlow(this.navCtrl, this.writerFlow, this.writeData);
    };
    WorkNewProcessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-work-new-process',template:/*ion-inline-start:"D:\webapp\WeixinGuangKangYuang\src\pages\work\work-new-process\work-new-process.html"*/'<light-content titleName="新建流程">\n\n  <ion-grid class="list-grid">\n\n    <light-writer [writerData]="writeData"></light-writer>\n\n  </ion-grid>\n\n</light-content>\n\n<div class="processbar">\n\n  <a ion-button color="secondary" full class="task-button" (click)=\'submitProcess()\'>提交</a>\n\n</div>\n\n'/*ion-inline-end:"D:\webapp\WeixinGuangKangYuang\src\pages\work\work-new-process\work-new-process.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["h" /* LightLoading */],
            __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["c" /* LightFlowService */],
            __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["l" /* LightPop */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], WorkNewProcessPage);
    return WorkNewProcessPage;
}());

//# sourceMappingURL=work-new-process.js.map

/***/ })

});
//# sourceMappingURL=0.2aa2929c4160006671cc.chunk.js.map