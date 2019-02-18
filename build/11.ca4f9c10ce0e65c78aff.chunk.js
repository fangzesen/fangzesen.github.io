webpackJsonp([11],{

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailListPageModule", function() { return EmailListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_list__ = __webpack_require__(494);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EmailListPageModule = /** @class */ (function () {
    function EmailListPageModule() {
    }
    EmailListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__email_list__["a" /* EmailListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__email_list__["a" /* EmailListPage */]), __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["j" /* LightOutModule */]
            ],
        })
    ], EmailListPageModule);
    return EmailListPageModule;
}());

//# sourceMappingURL=email-list.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailListPage; });
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


var EmailListPage = /** @class */ (function () {
    function EmailListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        ///标题名称
        this.titlename = "内部邮箱";
        ///数据的列表
        this.datalist = [];
        ///数据连接
        this.dataurl = "Email/GetEmailList";
        ///id的列信息
        this.idcol = "CODE";
        ///搜索的内容
        this.searchQuery = "";
        ///
        this.listType = "unread";
        ///数据的参数信息
        this.dataParam = {};
    }
    EmailListPage.prototype.ngOnInit = function () {
        this._flush();
    };
    EmailListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailListPage');
    };
    EmailListPage.prototype.changePage = function () {
        this._flush();
    };
    EmailListPage.prototype._flush = function () {
        var stateParam = {};
        stateParam["ReadState"] = this._getStateInfo();
        this.dataParam = stateParam;
    };
    /**
     * 获取当前单项列表状态
     *
     * @private
     * @returns {string}
     * @memberof STaskListPage
     */
    EmailListPage.prototype._getStateInfo = function () {
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
    EmailListPage.prototype.emailDetail = function (item) {
        this.navCtrl.push("EmailDetailPage", { item: item });
    };
    EmailListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-email-list',template:/*ion-inline-start:"D:\webapp\WeixinGuangKangYuang\src\pages\home\email-list\email-list.html"*/'<light-list [titleName]="titlename" [dataList]="datalist" [dataUrl]="dataurl" [idCol]="idcol" [dataParam]="dataParam">\n\n\n\n  <ion-list class="tab-content">\n\n    <ion-item *ngFor="let item of datalist" (click)="emailDetail(item)">\n\n      <div class="memberphoto" item-start="">{{item.Sender}}</div>\n\n      <h2>{{item.Sender}}</h2>\n\n      <h3>{{ item.Title }}</h3>\n\n      <p float-left>{{ item.SendTime}}</p>\n\n      <ion-icon item-end name="ios-arrow-forward-outline"></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</light-list>\n\n'/*ion-inline-end:"D:\webapp\WeixinGuangKangYuang\src\pages\home\email-list\email-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], EmailListPage);
    return EmailListPage;
}());

//# sourceMappingURL=email-list.js.map

/***/ })

});
//# sourceMappingURL=11.ca4f9c10ce0e65c78aff.chunk.js.map