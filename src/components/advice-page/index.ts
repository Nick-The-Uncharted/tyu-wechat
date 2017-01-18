import Vue = require('vue')
import Component from 'vue-class-component'
const template: string = require('raw!./advice-page.html')

import '!!vue-style!css!animate.css/animate.css'
import 'fullpage.js/dist/jquery.fullpage.css'

const arrowIconURL = require('../../assets/Arrow.png')
const map = require('./advice-page.css')
const infoMap = require('../info-page/info-page.css')
const logoURL = require('../../assets/logo.png')

import EvaluateStandardTable from '../evaluate-standard-table'
import Chart = require('chart.js')
import InfoModel from '../../model/InfoModel'

@Component({
    template: template,
    props: {
        'backgroundColor': Object ,
        'shouldShowFooter': {
            type: Boolean,
            default: true
        },
        'childId': String
    },
    components: {
        'evaluate-standard-table': EvaluateStandardTable,   
    }
})
export default class AdvicePage extends Vue {
    arrowIconURL = arrowIconURL
    logoURL = logoURL
    m = Object.assign({}, infoMap, map)
    advice = "建议生成中..."

    async mounted() {
        try {
            const result = await InfoModel.getAdvice((this as any).childId)
            this.advice = result.data.advice
        } catch (error) {
            console.log(error)
        }
    }

    onTouchFooter(event) {
        this.$emit('footerTouched')
    }
}