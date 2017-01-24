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
        'grade': String
    }
})
export default class EvaluateStandardTable extends Vue {
    m = map
    rawScores = [95, 90, 80, 70, 60]

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

    get rawPercents() {
        let grade = (this as any).grade
        if (grade == "小班") {
            return this.percents1
        } else if (grade == "中班") {
            return this.percents2
        } else {
            return this.percents3
        }
    }

    get percents() {
        let rawPercents = this.rawPercents
        let percents = []
        for (let i = 0; i < rawPercents.length ; ++i) {
            percents[i] = (percents[i - 1] || 0) + rawPercents[i] 
        }
        return percents
    }

    percents1 = [3.4, 9, 49.4, 16.7, 11.6, 9.9]
    percents2 = [2.2, 9.5, 59.2, 18.1, 7.6, 3.4]
    percents3 = [1.2, 9.5, 56.6, 17.7, 10.5, 4.1]
    types = ["健将", "达人", "正常", "中下", "偏弱", "较低"]
}