import Vue = require('vue')
import Component from 'vue-class-component'
const template: string = require('raw!./evaluate-standard-table.html')

import '!!vue-style!css!animate.css/animate.css'
import 'fullpage.js/dist/jquery.fullpage.css'

const arrowIconURL = require('../../assets/Arrow.png')
const map = require('./evaluate-standard-table.css')

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
export default class EvaluateStandardTable extends Vue {
    m = map
    rawScores = [130, 113, 100, 81]

    get scores() {
        const scores = this.rawScores.map((val, index, array) => {
            if (index == 0) {
                return `${val}以上`
            } else {
                return `${val}-${array[index - 1] - 1}`
            }
        })

        scores.push(`${this.rawScores[this.rawScores.length - 1]}以下`)
        return scores
    }

    percents = [98, 81, 50, 10]
    types = ["健将", "达人", "良好", "一般","偏弱"]
}