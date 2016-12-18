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
var bind_page_1 = require("./components/bind-page");
var logo = require("./assets/logo.png");
// <vertical-pager></vertical-pager>
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super.apply(this, arguments) || this;
    }
    return App;
}(Vue));
App = __decorate([
    vue_class_component_1.default({
        template: "\n    <div id=\"app\">\n      <bind-page :backgroundColor=\"{background: 'linear-gradient(#b2ff59, #ef6c00)'}\"></bind-page>\n    </div>\n   ",
        components: { BindPage: bind_page_1.default }
    })
], App);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
// <style>
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
// </style>
//# sourceMappingURL=App.js.map