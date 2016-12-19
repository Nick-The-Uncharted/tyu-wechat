import Vue = require('Vue')
import Component from 'vue-class-component'
const template: string = require('raw!./bind-page.html')

const logoURL = require('../../assets/logo.png')

import 'materialize-css/bin/materialize.js'
const map = require('./bind-page.css')

import $ = require('jquery')
import toastr = require('toastr')
//不启用css module
import '!!vue-style!css!toastr/build/toastr.css'

@Component({
    template: template,
    props: {
        'backgroundColorStyle': {
            type: Object,
            default: () => {return {background: 'linear-gradient(#b2ff59, #ef6c00)'}}
        }
    }
})
export default class BindPage extends Vue {
    logoURL = logoURL
    m = map

    submitButtonTouched(event) {
        toastr.options.positionClass = 'toast-bottom-center'
        toastr.options.timeOut = 5000000
        toastr.error('不好意思出错了')
    }
}