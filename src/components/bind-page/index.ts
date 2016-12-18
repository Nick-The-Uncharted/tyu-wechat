/// <reference path="../../../snakebarjs.d.ts" />

import Vue = require('Vue')
import Component from 'vue-class-component'
const template: string = require('raw!./bind-page.html')

const logoURL = require('../../assets/logo.png')

// 防止toast的css冲突....
import '!!vue-style!css?sourceMap!replace?regex=toast&flags=g&sub=material-toast!materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
import './bind-page.css'

import $ = require('jquery')
import toastr = require('toastr')
import 'toastr/build/toastr.css'

@Component({
    template: template,
    props: {
        'backgroundColor': Object
    }
})
export default class BindPage extends Vue {
    logoURL = logoURL

    submitButtonTouched(event) {
        toastr.options.positionClass = 'toast-bottom-full-width'
        toastr.error('不好意思出错了')
    }
}