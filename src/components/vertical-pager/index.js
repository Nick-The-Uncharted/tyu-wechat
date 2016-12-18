/// <reference types="fullpage.js" />
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
var template = require('raw!./vertical-pager.html');
var info_page_1 = require("../info-page");
require("fullpage.js");
var $ = require("jquery");
require("fullpage.js/dist/jquery.fullpage.css");
var VerticalPager = (function (_super) {
    __extends(VerticalPager, _super);
    function VerticalPager() {
        return _super.apply(this, arguments) || this;
    }
    VerticalPager.prototype.nextSection = function () {
        $.fn.fullpage.moveSectionDown();
    };
    return VerticalPager;
}(Vue));
VerticalPager = __decorate([
    vue_class_component_1.default({
        template: template,
        components: {
            'info-page': info_page_1.default,
        }
    })
], VerticalPager);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VerticalPager;
$(document).ready(function () {
    $('#fullpage').fullpage();
});
//# sourceMappingURL=index.js.map