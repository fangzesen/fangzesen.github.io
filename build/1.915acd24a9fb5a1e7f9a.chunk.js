webpackJsonp([1],{

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkNewProcessListPageModule", function() { return WorkNewProcessListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_new_process_list__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WorkNewProcessListPageModule = /** @class */ (function () {
    function WorkNewProcessListPageModule() {
    }
    WorkNewProcessListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__work_new_process_list__["a" /* WorkNewProcessListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__work_new_process_list__["a" /* WorkNewProcessListPage */]), __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["j" /* LightOutModule */]
            ]
        })
    ], WorkNewProcessListPageModule);
    return WorkNewProcessListPageModule;
}());

//# sourceMappingURL=work-new-process-list.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkNewProcessListPage; });
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



var WorkNewProcessListPage = /** @class */ (function () {
    function WorkNewProcessListPage(navCtrl, navParams, flowServcie) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.flowServcie = flowServcie;
        // if(this.navCtrl.getViews().length==0){
        //   this.navCtrl.goToRoot({}); //此时会触发tabar的初始化方法.
        // }
    }
    /**
     * 内部初始化
     * @memberof WorkNewProcessListPage
     */
    WorkNewProcessListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.flowServcie.getStartFlowList().then(function (value) {
            _this.dataList = __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["e" /* LightJsonUtil */].toObject(value);
        });
    };
    WorkNewProcessListPage.prototype.newProcess = function (item) {
        this.navCtrl.push("WorkNewProcessPage", { item: item });
    };
    /**
     * 判断流程类型，显示对应图片
     *
     * @param {any} input
     * @returns {*}
     * @memberof NewDetailPage
     */
    WorkNewProcessListPage.prototype.flowImage = function (input) {
        var out = "";
        if (__WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["n" /* LightStringUtil */].contain(input, "公文办理")) {
            out = "icon1";
        }
        else if (__WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["n" /* LightStringUtil */].contain(input, "公章")) {
            out = "icon3";
        }
        else if (__WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["n" /* LightStringUtil */].contain(input, "车辆使用申请单")) {
            out = "icon20";
        }
        else if (__WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["n" /* LightStringUtil */].contain(input, "请假")) {
            out = "icon5";
        }
        else if (__WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["n" /* LightStringUtil */].contain(input, "软硬件采购")) {
            out = "icon15";
        }
        else if (__WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["n" /* LightStringUtil */].contain(input, "发文登记")) {
            out = "icon23";
        }
        else if (__WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["n" /* LightStringUtil */].contain(input, "来文登记")) {
            out = "icon24";
        }
        else {
            out = "icon1";
        }
        out = "assets/img/icon-work/" + out + ".png";
        return out;
    };
    WorkNewProcessListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-work-new-process-list',template:/*ion-inline-start:"D:\webapp\WeixinGuangKangYuang\src\pages\work\work-new-process-list\work-new-process-list.html"*/'<light-content titleName="创建流程">\n\n  <div class="mainTitleGroup">\n\n    <div class="titleGroupRow" *ngFor="let item of dataList" (click)=\'newProcess(item)\'>\n\n      <div text-center class="col">\n\n        <div class="item main-process">\n\n          <div class="main-process-image">\n\n            <!--<span class="sm-RedIcon" *ngIf="flag">{{showIconText}}</span>-->\n\n            <img class="titleImage" src="{{ flowImage(item.Title) }}" />\n\n          </div>\n\n          <p>{{item.Title}}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <!--titleGroupRow end-->\n\n  </div>\n\n</light-content>\n\n'/*ion-inline-end:"D:\webapp\WeixinGuangKangYuang\src\pages\work\work-new-process-list\work-new-process-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["c" /* LightFlowService */]])
    ], WorkNewProcessListPage);
    return WorkNewProcessListPage;
}());

//# sourceMappingURL=work-new-process-list.js.map

/***/ })

});
//# sourceMappingURL=1.915acd24a9fb5a1e7f9a.chunk.js.map