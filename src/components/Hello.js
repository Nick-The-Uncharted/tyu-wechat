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
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        var _this = _super.apply(this, arguments) || this;
        _this.msg = 'Welcome to Your Vue.js App';
        return _this;
    }
    return Hello;
}(Vue));
Hello = __decorate([
    vue_class_component_1.default({
        template: "\n      <div class=\"hello\">\n      <h1>{{ msg }}</h1>\n      <h2>Essential Links</h2>\n      <ul>\n        <li><a href=\"https://vuejs.org\" target=\"_blank\">Core Docs</a></li>\n        <li><a href=\"https://forum.vuejs.org\" target=\"_blank\">Forum</a></li>\n        <li><a href=\"https://gitter.im/vuejs/vue\" target=\"_blank\">Gitter Chat</a></li>\n        <li><a href=\"https://twitter.com/vuejs\" target=\"_blank\">Twitter</a></li>\n        <br>\n        <li><a href=\"http://vuejs-templates.github.io/webpack/\" target=\"_blank\">Docs for This Template</a></li>\n      </ul>\n      <h2>Ecosystem</h2>\n      <ul>\n        <li><a href=\"http://router.vuejs.org/\" target=\"_blank\">vue-router</a></li>\n        <li><a href=\"http://vuex.vuejs.org/\" target=\"_blank\">vuex</a></li>\n        <li><a href=\"http://vue-loader.vuejs.org/\" target=\"_blank\">vue-loader</a></li>\n        <li><a href=\"https://github.com/vuejs/awesome-vue\" target=\"_blank\">awesome-vue</a></li>\n      </ul>\n    </div>\n    "
    })
], Hello);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hello;
// <!-- Add "scoped" attribute to limit CSS to this component only -->
// <style scoped>
// h1, h2 {
//   font-weight: normal;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
// </style>
//# sourceMappingURL=Hello.js.map