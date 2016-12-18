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
var template = require('raw!./bind-page.html');
var logoURL = require('../../assets/logo.png');
require("materialize-css/bin/materialize.css");
require("materialize-css/bin/materialize.js");
require("./bind-page.css");
var BindPage = (function (_super) {
    __extends(BindPage, _super);
    function BindPage() {
        var _this = _super.apply(this, arguments) || this;
        _this.logoURL = logoURL;
        return _this;
    }
    BindPage.prototype.submitButtonTouched = function (event) {
    };
    return BindPage;
}(Vue));
BindPage = __decorate([
    vue_class_component_1.default({
        template: template,
        props: {
            'backgroundColor': Object
        }
    })
], BindPage);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BindPage;
//# sourceMappingURL=index.js.map