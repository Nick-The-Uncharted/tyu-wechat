import Vue = require('Vue')
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
        'childId': String
    }
})
export default class SummaryPage extends Vue {
    arrowIconURL = arrowIconURL
    logoURL = logoURL
    m = Object.assign({}, infoMap, map)
    lowDimensions = {"无": ["毫无缺点"]}

    async mounted() {
        let summary
        try {
            const result = await InfoModel.getDimensionSummary((this as any).childId)
            summary = result.data.categories || []
            this.lowDimensions = result.data.low_categories
        } catch (error) {
            console.log(error)
        }

        const labels = Object.keys(summary)
        const scores = labels.map((key) => summary[key].score)

        const data = {
            labels: labels,
            datasets: [
                {
                    label: "维度总结",
                    backgroundColor: "#e6ee9c",
                    borderColor: "#e6ee9c",
                    pointBackgroundColor: "#f9fbe7",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#f9fbe7",
                    data: scores
                }]
        }

        var myBarChart = new Chart($("#summaryChart"), {
            type: 'bar',
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
                },
                animation: {
                    onComplete: function() {
                        myBarChart.getDatasetMeta(0).controller.drawLineAtY(2)
                    }
                }
            }
        });
    }

    onTouchFooter(event) {
        this.$emit('footerTouched')
    }
}