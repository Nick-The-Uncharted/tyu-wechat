import Vue = require('Vue')
import Component from 'vue-class-component'
const template: string = require('raw!./example-page.html')

import '!!vue-style!css!animate.css/animate.css'
import 'fullpage.js/dist/jquery.fullpage.css'

const arrowIconURL = require('../../assets/Arrow.png')
const map = require('./example-page.css')
const infoMap = require('../info-page/info-page.css')
const logoURL = require('../../assets/logo.png')

import EvaluateStandardTable from '../evaluate-standard-table'
import Chart = require('chart.js')
import InfoModel from '../../model/InfoModel'
import ListItem from '../list-item'

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
        'list-item': ListItem,   
    }
})
export default class ExamplePage extends Vue {
    arrowIconURL = arrowIconURL
    logoURL = logoURL
    m = Object.assign({}, infoMap, map)
    examples = {}

    async mounted() {
        try {
            const result = await InfoModel.getAdvice((this as any).childId)
            // this.examples = {}
            try {
                const result = await InfoModel.getDimensionSummary((this as any).childId)
                const lowCategories = result && result.data && result.data.low_categories || []
                this.examples = result.data.low_categories 
            } catch (error) {
                console.log(error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    onTouchFooter(event) {
        this.$emit('footerTouched')
    }
}