"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Vue = require("Vue");
var vue_class_component_1 = require("vue-class-component");
var template = require('raw!./info-page.html');
require("animate.css/animate.css");
require("fullpage.js/dist/jquery.fullpage.css");
var arrowIconURL = require('../../assets/Arrow.png');
var logoURL = require('../../assets/logo.png');
require("./info-page.css");
var InfoPage = (function (_super) {
    __extends(InfoPage, _super);
    function InfoPage() {
        var _this = _super.apply(this, arguments) || this;
        _this.arrowIconURL = arrowIconURL;
        _this.logoURL = logoURL;
        return _this;
    }
    InfoPage.prototype.onTouchFooter = function (event) {
        this.$emit('footerTouched');
    };
    return InfoPage;
}(Vue));
InfoPage = __decorate([
    vue_class_component_1.default({
        template: template,
        props: {
            'backgroundColor': Object,
            'shouldShowFooter': {
                type: Boolean,
                default: true
            }
        }
    })
], InfoPage);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InfoPage;
//# sourceMappingURL=index.js.map