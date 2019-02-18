webpackJsonp([10],{

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListPageModule", function() { return MessageListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_list__ = __webpack_require__(495);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessageListPageModule = /** @class */ (function () {
    function MessageListPageModule() {
    }
    MessageListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__message_list__["a" /* MessageListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__message_list__["a" /* MessageListPage */]), __WEBPACK_IMPORTED_MODULE_0__light_light_out_light_out_module__["j" /* LightOutModule */]
            ],
        })
    ], MessageListPageModule);
    return MessageListPageModule;
}());

//# sourceMappingURL=message-list.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageListPage = /** @class */ (function () {
    function MessageListPage(navCtrl, navParams, lightHttp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        ///标题名称
        this.titlename = "消息中心";
        ///数据的列表
        this.datalist = [];
        ///数据连接
        this.dataurl = "Message/GetMessageList";
        ///id的列信息
        this.idcol = "CODE";
        ///搜索的内容
        this.searchQuery = "";
        ///数据的参数信息
        this.dataParam = { "limit": 10, "offset": 0, "fiter": "true" };
    }
    MessageListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessageListPage');
    };
    /**
     * 判断文件类型，显示对应图片
     *
     * @param {any} input
     * @returns {*}
     * @memberof NewDetailPage
     */
    MessageListPage.prototype.fileType = function (input) {
        var out = "";
        switch (input) {
            case "1":
                out = "新闻";
                break;
            case "2":
                out = "公告";
                break;
            case "3":
                out = "内部邮件";
                break;
            case "4":
                out = "待办流程";
                break;
            case "5":
                out = "日程提醒";
                break;
            default:
                out = "消息";
                break;
        }
        return out;
    };
    MessageListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-message-list',template:/*ion-inline-start:"D:\webapp\WeixinGuangKangYuang\src\pages\home\message-list\message-list.html"*/'<light-list [titleName]="titlename" [dataList]="datalist" [dataUrl]="dataurl" [idCol]="idcol" [dataParam]="dataParam">\n\n  <div class="message" *ngFor="let item of datalist">\n\n    <p class="message-time">{{item.Sendtime}}</p>\n\n    <div class="message-main">\n\n      <h2 class="message-title">{{item.Content}}</h2>\n\n      <p class="message-sendUser">{{item.SendUser}}</p>\n\n      <p class="message-type">{{ fileType(item.Type) }}</p>\n\n    </div>\n\n  </div>\n\n</light-list>\n\n'/*ion-inline-end:"D:\webapp\WeixinGuangKangYuang\src\pages\home\message-list\message-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__light_light_out_light_out_module__["d" /* LightHttp */]])
    ], MessageListPage);
    return MessageListPage;
}());

//# sourceMappingURL=message-list.js.map

/***/ })

});
//# sourceMappingURL=10.d232daf01d6d002e24d8.chunk.js.map