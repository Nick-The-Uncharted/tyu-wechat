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

    async mounted() {
        let summary
        try {
            summary = await InfoModel.getDimensionSummary((this as any).childId)
        } catch (error) {

        }

        console.log(summary)

        const data = {
            labels: summary.map((dimension) => dimension.name),
            datasets: [
                {
                    label: "维度总结",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,99,132,1)",
                    data: summary.map((dimension) => dimension.score)
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
                }
            }
        });
    }

    onTouchFooter(event) {
        this.$emit('footerTouched')
    }
}