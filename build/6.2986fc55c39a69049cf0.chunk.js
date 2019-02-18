webpackJsonp([6],{

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeListPageModule", function() { return NoticeListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notice_list__ = __webpack_require__(499);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NoticeListPageModule = /** @class */ (function () {
    function NoticeListPageModule() {
    }
    NoticeListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__notice_list__["a" /* NoticeListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__notice_list__["a" /* NoticeListPage */]), __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["j" /* LightOutModule */]
            ],
        })
    ], NoticeListPageModule);
    return NoticeListPageModule;
}());

//# sourceMappingURL=notice-list.module.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoticeListPage = /** @class */ (function () {
    function NoticeListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        ///标题名称
        this.titlename = "中心通知";
        ///数据的列表
        this.datalist = [];
        ///数据连接
        this.dataurl = "Notice/GetNoticeStatusByUserName";
        ///id的列信息
        this.idcol = "CODE";
        ///搜索的内容
        this.searchQuery = "";
        ///
        this.listType = "unread";
        ///数据的参数信息
        this.dataParam = {};
    }
    NoticeListPage.prototype.ngOnInit = function () {
        this._flush();
    };
    NoticeListPage.prototype.changePage = function () {
        this._flush();
    };
    NoticeListPage.prototype._flush = function () {
        var stateParam = {};
        stateParam["status"] = this._getStateInfo();
        this.dataParam = stateParam;
    };
    /**
     * 获取当前单项列表状态
     *
     * @private
     * @returns {string}
     * @memberof STaskListPage
     */
    NoticeListPage.prototype._getStateInfo = function () {
        var result = "未读";
        if (this.listType == "unread") {
            result = "未读";
        }
        else if (this.listType == "read") {
            result = "已读";
        }
        else {
            result = "";
        }
        return result;
    };
    NoticeListPage.prototype.noticeDetail = function (item) {
        this.navCtrl.push("NoticeDetailPage", { item: item });
    };
    NoticeListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notice-list',template:/*ion-inline-start:"D:\webapp\WeixinGuangKangYuang\src\pages\home\notice-list\notice-list.html"*/'<light-list [titleName]="titlename" [dataList]="datalist" [dataUrl]="dataurl" [idCol]="idcol" [dataParam]="dataParam">\n\n\n\n  <div class="lightHeader">\n\n    <ion-segment [(ngModel)]="listType">\n\n      <ion-segment-button value="unread" (click)="changePage()">未读</ion-segment-button>\n\n      <ion-segment-button value="read" (click)="changePage()">已读</ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="listType">\n\n    <ion-list *ngSwitchCase="\'unread\'" class="tab-content">\n\n      <ion-item *ngFor="let item of datalist" (click)="noticeDetail(item)">\n\n        <h2>{{ item.Title }}</h2>\n\n        <p float-left>{{ item.Department }}</p>\n\n        <p float-right>{{ item.SendTime }}</p>\n\n        <ion-icon item-end name="ios-arrow-forward-outline"></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'read\'" class="tab-content">\n\n      <ion-item *ngFor="let item of datalist" (click)="noticeDetail(item)">\n\n        <h2>{{ item.Title }}</h2>\n\n        <p float-left>{{ item.Department }}</p>\n\n        <p float-right>{{ item.SendTime }}</p>\n\n        <ion-icon item-end name="ios-arrow-forward-outline"></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n  </div>\n\n\n\n</light-list>\n\n'/*ion-inline-end:"D:\webapp\WeixinGuangKangYuang\src\pages\home\notice-list\notice-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], NoticeListPage);
    return NoticeListPage;
}());

//# sourceMappingURL=notice-list.js.map

/***/ })

});
//# sourceMappingURL=6.2986fc55c39a69049cf0.chunk.js.map