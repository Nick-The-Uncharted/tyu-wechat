import Vue = require('Vue')
import Component from 'vue-class-component'
const template: string = require('raw!./info-page.html')

import 'animate.css/animate.css'
import 'fullpage.js/dist/jquery.fullpage.css'

const arrowIconURL = require('../../assets/Arrow.png')
import './info-pager.css'


@Component({
    template: template
})
export default class InfoPage extends Vue {
    arrowIconURL = arrowIconURL
}