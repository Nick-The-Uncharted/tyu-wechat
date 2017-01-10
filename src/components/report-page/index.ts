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

function secureURLWithUserId(userId: string) {
    window.history.pushState("", "Title", `#/user/${userId}`);
}

@Component({
    template: template,
    props: {
        'dataSource': String,
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
    m = Object.assign({}, infoMap, map)
    note = "BMI 指数=体重/(身高)2，是目前国际上常用的衡量人体胖瘦程度以及是否健康的一个标准， 根据中国的 BMI 指数标准，最理想的 BMI 指数为 22。"
    summary = `大宝的身体机能得分是 16(标准分)，BMI 指数 24.5 偏高，轻微超重，有肥胖的风险， 建议控制饮食，尤其是晚上要节制食欲，适当运 动，提高身体机能。大宝的肺活量是 1150 非常优秀，说明有充足 的睡眠，建议继续保持。`

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

        var myBarChart = new Chart($("#horizonBarChart"), {
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