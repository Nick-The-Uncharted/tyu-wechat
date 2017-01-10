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


function secureURLWithUserId(userId: string) {
    window.history.pushState("", "Title", `#/user/${userId}`);
}

@Component({
    template: template,
    props: {
        'dataSource': String,
        'backgroundColor': Object,
        'shouldShowFooter': {
            type: Boolean,
            default: true
        }
    }
})
export default class SummaryPage extends Vue {
    arrowIconURL = arrowIconURL
    logoURL = logoURL
    m = Object.assign({}, infoMap, map)

    mounted() {
        const data = {
            labels: ["身体机能", "粗大", "精细", "认知描述"],
            datasets: [
                {
                    label: (<any>this).dataSource,
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,99,132,1)",
                    data: [60, 80, 40, 19]
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