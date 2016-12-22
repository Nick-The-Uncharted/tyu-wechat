/// <reference types="fullpage.js" />

import Vue = require('Vue')
import Component from 'vue-class-component'
const template: string = require('raw!./vertical-pager.html')
import InfoPage from '../info-page'

import $ = require('jquery')
import 'fullpage.js'
// 不启用css module
import '!!vue-style!css!fullpage.js/dist/jquery.fullpage.css'

@Component({
    template: template,
    components: {
        'info-page': InfoPage,      
    }
})
export default class VerticalPager extends Vue {
    nextSection() {
        $.fn.fullpage.moveSectionDown();
    }
}

$(document).ready(function() {
    $('#fullpage').fullpage()
});