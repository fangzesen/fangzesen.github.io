webpackJsonp([15],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightFeedbackComponentModule", function() { return LightFeedbackComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_feedback_component__ = __webpack_require__(490);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LightFeedbackComponentModule = /** @class */ (function () {
    function LightFeedbackComponentModule() {
    }
    LightFeedbackComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__light_feedback_component__["a" /* LightFeedbackComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__light_feedback_component__["a" /* LightFeedbackComponent */]),
            ],
        })
    ], LightFeedbackComponentModule);
    return LightFeedbackComponentModule;
}());

//# sourceMappingURL=light-feedback.component.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightFeedbackComponent; });
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


var LightFeedbackComponent = /** @class */ (function () {
    function LightFeedbackComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LightFeedbackComponent.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LightFeedbackComponent');
    };
    LightFeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-advisory',template:/*ion-inline-start:"D:\webapp\WeixinGuangKangYuang\src\light\light-pages\light-feedback\light-feedback.component.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      意见反馈\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n <ion-list>\n\n   <div margin-top></div>\n\n    <ion-item>\n\n        <span class="input-label">姓名</span>\n\n        <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">手机</span>\n\n        <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">邮箱</span>\n\n        <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n\n    </ion-item>\n\n    <ion-item>\n\n        <span class="input-label">QQ</span>\n\n        <input class="input-text" type="text" name="" value="" placeholder="填写信息"/>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="input-label">留意信息</span>\n\n      <div class="input-textarea" contenteditable="true" placeholder=\'输入内容\'></div>\n\n      <button ion-button class="phraseButton">惯用语</button>\n\n    </ion-item>\n\n   </ion-list>\n\n</ion-content>\n\n<div class="submitbar">\n\n  <a ion-button block color="secondary">提交</a>\n\n</div>'/*ion-inline-end:"D:\webapp\WeixinGuangKangYuang\src\light\light-pages\light-feedback\light-feedback.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], LightFeedbackComponent);
    return LightFeedbackComponent;
}());

//# sourceMappingURL=light-feedback.component.js.map

/***/ })

});
//# sourceMappingURL=15.376fbb14645f2c71540d.chunk.js.map