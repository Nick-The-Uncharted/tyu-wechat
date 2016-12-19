import Vue = require('Vue')
import Component from 'vue-class-component'
const template: string = require('raw!./info-page.html')

import '!!vue-style!css!animate.css/animate.css'
import 'fullpage.js/dist/jquery.fullpage.css'

const arrowIconURL = require('../../assets/Arrow.png')
const logoURL = require('../../assets/logo.png')
const map = require('./info-page.css')

@Component({
    template: template,
    props: {
        'backgroundColor': Object ,
        'shouldShowFooter': {
            type: Boolean,
            default: true
        }
    }
})
export default class InfoPage extends Vue {
    arrowIconURL = arrowIconURL
    logoURL = logoURL
    m = map
    onTouchFooter(event) {
        this.$emit('footerTouched')
    }
}