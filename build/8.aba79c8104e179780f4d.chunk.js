webpackJsonp([8],{

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewListPageModule", function() { return NewListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_list__ = __webpack_require__(497);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewListPageModule = /** @class */ (function () {
    function NewListPageModule() {
    }
    NewListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__new_list__["a" /* NewListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__new_list__["a" /* NewListPage */]), __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["j" /* LightOutModule */]
            ],
        })
    ], NewListPageModule);
    return NewListPageModule;
}());

//# sourceMappingURL=new-list.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewListPage; });
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


var NewListPage = /** @class */ (function () {
    function NewListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        ///标题名称
        this.titlename = "在线新闻";
        ///数据的列表
        this.datalist = [];
        ///数据连接
        this.dataurl = "News/GetNewsStatusList";
        ///id的列信息
        this.idcol = "CODE";
        ///搜索的内容
        this.searchQuery = "";
        ///
        this.listType = "unread";
        ///数据的参数信息
        this.dataParam = {};
    }
    NewListPage.prototype.ionViewCanEnter = function () {
        this._flush();
    };
    NewListPage.prototype.changePage = function () {
        this._flush();
    };
    NewListPage.prototype._flush = function () {
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
    NewListPage.prototype._getStateInfo = function () {
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
    NewListPage.prototype.newDetail = function (item) {
        this.navCtrl.push("NewDetailPage", { item: item });
    };
    NewListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-new-list',template:/*ion-inline-start:"D:\webapp\WeixinGuangKangYuang\src\pages\home\new-list\new-list.html"*/'<light-list [titleName]="titlename" [dataList]="datalist" [dataUrl]="dataurl" [idCol]="idcol" [dataParam]="dataParam">\n\n\n\n  <div class="lightHeader">\n\n    <ion-segment [(ngModel)]="listType">\n\n      <ion-segment-button value="unread" (click)="changePage()">未读</ion-segment-button>\n\n      <ion-segment-button value="read" (click)="changePage()">已读</ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="listType">\n\n    <ion-list *ngSwitchCase="\'unread\'" class="tab-content">\n\n      <ion-item *ngFor="let item of datalist" (click)="newDetail(item)">\n\n        <h2>{{ item.Title }}</h2>\n\n        <p float-left>{{ item.whoissue }}</p>\n\n        <p float-right>{{ item.issuetime }}</p>\n\n        <ion-icon item-end name="ios-arrow-forward-outline"></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'read\'" class="tab-content">\n\n      <ion-item *ngFor="let item of datalist" (click)="newDetail(item)">\n\n        <h2>{{ item.Title }}</h2>\n\n        <p float-left>{{ item.whoissue }}</p>\n\n        <p float-right>{{ item.issuetime }}</p>\n\n        <ion-icon item-end name="ios-arrow-forward-outline"></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n  </div>\n\n\n\n</light-list>\n\n'/*ion-inline-end:"D:\webapp\WeixinGuangKangYuang\src\pages\home\new-list\new-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], NewListPage);
    return NewListPage;
}());

//# sourceMappingURL=new-list.js.map

/***/ })

});
//# sourceMappingURL=8.aba79c8104e179780f4d.chunk.js.map