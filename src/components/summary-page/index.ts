import Vue = require('vue')
import Component from 'vue-class-component'
const template: string = require('raw!./summary-page.html')

import '!!vue-style!css!animate.css/animate.css'
import 'fullpage.js/dist/jquery.fullpage.css'

const arrowIconURL = require('../../assets/Arrow.png')
const logoURL = require('../../assets/logo.png')
const map = require('./summary-page.css')
const infoMap = require('../info-page/info-page.css')
import Chart = require('chart.js')
import InfoModel from '../../model/InfoModel'

@Component({
    template: template,
    props: {
        'dataSource': String,
        'backgroundColor': Object,
        'shouldShowFooter': {
            type: Boolean,
            default: true
        },
        'childId': String,
        'dataResovler': Function
    }
})
export default class SummaryPage extends Vue {
    arrowIconURL = arrowIconURL
    logoURL = logoURL
    m = Object.assign({}, infoMap, map)
    lowDimensions = {"无": {
                    subjects: ["毫无缺点"]
                }}

    async mounted() {
        let summary
        try {
            const result = await InfoModel.getDimensionSummary((this as any).childId)
            summary = result.data.categories || [];
            (this as any).dataResovler()
            this.lowDimensions = result.data.low_categories
            if (Object.keys(this.lowDimensions).length == 0) {
                this.lowDimensions = {"无": {
                    subjects: ["毫无缺点"]
                }}
            }
        } catch (error) {
            console.log(error)
        }

        const labels = Object.keys(summary)
        const scores = labels.map((key) => summary[key].score_rate * 100)
        const meanScores = labels.map((key) => summary[key].mean_rate * 100)


        const data = {
            labels: labels,
            datasets: [
                {
                    label: "维度总结",
                    // backgroundColor: "#e6ee9c",
                    borderColor: '#ffcc80',
                    pointBackgroundColor: "#f9fbe7",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#f9fbe7",
                    data: scores
                },
                {
                    label: "平均值",
                    // backgroundColor: '#c5e1a5',
                    borderColor: '#81c784',
                    pointBackgroundColor: "#f9fbe7",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#f9fbe7",
                    data: meanScores
                },
            ]
        }

        var myBarChart = new Chart($("#summaryChart"), {
            type: 'radar',
            data: data,
            options: {
                responsive: true,
                responsiveAnimationDuration: 200,
                maintainAspectRatio: true,
                scale: {
                    ticks: {
                        display: false,
                        min: 0
                    },
                    pointLabels: {
                        display: false
                    }
                },
                legend: {
                    labels: {
                        fontSize: 15
                    }
                },
                animation: {
                    onComplete: function() {
                        // myBarChart.getDatasetMeta(0).controller.drawLineAtY(2)
                    }
                }
            }
        });
    }

    onTouchFooter(event) {
        this.$emit('footerTouched')
    }
}