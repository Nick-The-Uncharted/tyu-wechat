import Vue = require('Vue')
import Component from 'vue-class-component'
const template: string = require('raw!./report-page.html')

import '!!vue-style!css!animate.css/animate.css'
import 'fullpage.js/dist/jquery.fullpage.css'

const arrowIconURL = require('../../assets/Arrow.png')
const logoURL = require('../../assets/logo.png')
const map = require('./report-page.css')

import Chart = require('chart.js')

function secureURLWithUserId(userId: string) {
    window.history.pushState("", "Title", `#/user/${userId}`);
}

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
export default class ReportPage extends Vue {
    arrowIconURL = arrowIconURL
    logoURL = logoURL
    m = map

    mounted() {
        Chart.defaults.global.fontSize = 15
        const data = {
            labels: ["项目1", "项目2", "项目3", "test", "项目5", "项目6"],
            datasets: [
            {
                label: "测试报告",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [60, 80, 40, 19, 96, 27]
            }]
        }
        var chartInstance = new Chart($("#radarChart"), {
            type: 'radar',
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