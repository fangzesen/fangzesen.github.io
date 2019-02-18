webpackJsonp([7],{

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeDetailPageModule", function() { return NoticeDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notice_detail__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_light_out_light_out_module__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NoticeDetailPageModule = /** @class */ (function () {
    function NoticeDetailPageModule() {
    }
    NoticeDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notice_detail__["a" /* NoticeDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notice_detail__["a" /* NoticeDetailPage */]), __WEBPACK_IMPORTED_MODULE_3__light_light_out_light_out_module__["j" /* LightOutModule */]
            ],
        })
    ], NoticeDetailPageModule);
    return NoticeDetailPageModule;
}());

//# sourceMappingURL=notice-detail.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_light_providers_providers_lightLoading__ = __webpack_require__(136);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var NoticeDetailPage = /** @class */ (function () {
    /**
     *
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @param {LightHttp} lightHttp
     * @memberof NoticeDetailPage
     */
    function NoticeDetailPage(navCtrl, navParams, lightHttp, lightLoading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lightHttp = lightHttp;
        this.lightLoading = lightLoading;
        //通知标题
        this.noticeTitle = {};
        this.code = navParams.data.item.CODE;
    }
    NoticeDetailPage.prototype.ngOnInit = function () {
        this.getNoticeDetail();
    };
    /**
     *获取通知标题、内容、附件
     *
     * @memberof NoticeDetailPage
     */
    NoticeDetailPage.prototype.getNoticeDetail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, newTitle, Content, attachList;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // 启用等待的遮罩层
                        this.lightLoading.presentLoading('', function () {
                            console.log('new detail loading ok');
                        });
                        return [4 /*yield*/, Promise.all([
                                this.lightHttp.get("Notice/GetNoticeInfo", { objectID: this.code }),
                                this.lightHttp.get("Notice/GetNoticeContent", { objectID: this.code }),
                                this.lightHttp.get("Attachment/GetAttachments", { objectID: this.code }),
                            ])
                            // 等三个请求的数据全部返回后再渲染页面
                        ];
                    case 1:
                        _a = _b.sent(), newTitle = _a[0], Content = _a[1], attachList = _a[2];
                        // 等三个请求的数据全部返回后再渲染页面
                        this.noticeTitle = __WEBPACK_IMPORTED_MODULE_1__light_light_out_light_out_module__["e" /* LightJsonUtil */].toObject(newTitle);
                        this.Content = Content;
                        this.attachList = __WEBPACK_IMPORTED_MODULE_1__light_light_out_light_out_module__["e" /* LightJsonUtil */].toObject(attachList);
                        // 关闭遮罩层
                        this.lightLoading.stopLoading();
                        return [2 /*return*/];
                }
            });
        });
    };
    NoticeDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-notice-detail',template:/*ion-inline-start:"D:\webapp\WeixinGuangKangYuang\src\pages\home\notice-detail\notice-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title text-center>\n\n            通知详情\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <!--通知标题-->\n\n        <ion-item class="new-title">\n\n            <h2>{{ noticeTitle.Title }}</h2>\n\n            <p float-left>{{ noticeTitle.whoissue }}</p>\n\n            <p float-right>{{ noticeTitle.issuetime }}</p>\n\n        </ion-item>\n\n        <!--通知内容 -->\n\n        <div class="new-content" [innerHTML]=\'Content\'>\n\n        </div>\n\n    </ion-list>\n\n    <light-attach *ngIf="attachList?.length != 0" [attachList]="attachList"></light-attach>\n\n</ion-content>'/*ion-inline-end:"D:\webapp\WeixinGuangKangYuang\src\pages\home\notice-detail\notice-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__light_light_out_light_out_module__["d" /* LightHttp */],
            __WEBPACK_IMPORTED_MODULE_0__light_light_providers_providers_lightLoading__["a" /* LightLoading */]])
    ], NoticeDetailPage);
    return NoticeDetailPage;
}());

//# sourceMappingURL=notice-detail.js.map

/***/ })

});
//# sourceMappingURL=7.e70ea737b167c52e2455.chunk.js.map