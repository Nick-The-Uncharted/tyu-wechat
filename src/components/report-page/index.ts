import Vue = require('Vue')
import Component from 'vue-class-component'
const template: string = require('raw!./report-page.html')

import '!!vue-style!css!animate.css/animate.css'
import 'fullpage.js/dist/jquery.fullpage.css'

const arrowIconURL = require('../../assets/Arrow.png')
const logoURL = require('../../assets/logo.png')
const infoMap = require('../info-page/info-page.css')
const map = require('./report-page.css')
import Chart = require('chart.js')



const translations = {
    PhysicalFunction: "身体机能",
    GM: "粗大",
    SportsCognition: "运动认知",
    FM: "精细"
}

const cache = {}

@Component({
    template: template,
    props: {
        'backgroundColor': Object ,
        'shouldShowFooter': {
            type: Boolean,
            default: true
        },
        'childId': String,
        'chartId': String,
        'subject': Object,
        'subjectName': String
    }
})
export default class ReportPage extends Vue {
    arrowIconURL = arrowIconURL
    logoURL = logoURL
    m = Object.assign({}, infoMap, map)
    // note = "BMI 指数=体重/(身高)2，是目前国际上常用的衡量人体胖瘦程度以及是否健康的一个标准， 根据中国的 BMI 指数标准，最理想的 BMI 指数为 22。"
    get summary() {
        return (this as any).subject && (this as any).subject.summary || `计算中...`
    }

    mounted() {
        this.updateChart()
    }

    updated() {
        this.updateChart()
    }

    async updateChart() {
        const testSubject = (this as any).subject
        const subjectName = (this as any).subjectName

        const labels = testSubject.scores.map((val) => val.name)
        const scores = testSubject.scores.map((val) => val.score)


        const data = {
            labels: labels,
            datasets: [
                {
                    label: subjectName,
                    backgroundColor: "#e6ee9c",
                    borderColor: "#e6ee9c",
                    pointBackgroundColor: "#f9fbe7",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#f9fbe7",
                    data: scores
                }]
        }


        var myBarChart = new Chart($(`#${(this as any).chartId}`), {
            type: 'horizontalBar',
            data: data,
            options: {
                responsive: true,
                responsiveAnimationDuration: 200,
                maintainAspectRatio: true,
                scale: {
                    ticks: {
                        fontSize: 15
                    },
                    pointLabels: {
                        fontSize: 15
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    labels: {
                        fontSize: 15
                    }
                }
            }
        });
    }

    onTouchFooter(event) {
        this.$emit('footerTouched')
    }
}