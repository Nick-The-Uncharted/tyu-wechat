import Vue = require('vue')
import Component from 'vue-class-component'
const template: string = require('raw!./logo-page.html')

import '!!vue-style!css!animate.css/animate.css'
import 'fullpage.js/dist/jquery.fullpage.css'

const arrowIconURL = require('../../assets/Arrow.png')
const logoURL = require('../../assets/logo.png')
const QRCodeURL = require('../../assets/QRCode.jpeg')
const map = require('./logo-page.css')
const infoMap = require('../info-page/info-page.css')

import EvaluateStandardTable from '../evaluate-standard-table'
import Chart = require('chart.js')

@Component({
    template: template,
    props: {
        'backgroundColor': Object ,
        'shouldShowFooter': {
            type: Boolean,
            default: true
        }
    },
    components: {
        'evaluate-standard-table': EvaluateStandardTable,   
    }
})
export default class LogoPage extends Vue {
    arrowIconURL = arrowIconURL
    logoURL = logoURL
    QRCodeURL = QRCodeURL
    m = Object.assign({}, infoMap, map)


    onChartClick() {
        $('#fullpage').addClass('none-transform');
        ($('.modal') as any).modal('open');
    }

    mounted() {
        ($('.modal') as any).modal({
            complete: () => {
                $('#fullpage').removeClass('none-transform')
            }
        });
    }

    onTouchFooter(event) {
        this.$emit('footerTouched')
    }
}