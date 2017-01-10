import Vue = require('Vue')
import Component from 'vue-class-component'
const template: string = require('raw!./logo-page.html')

import '!!vue-style!css!animate.css/animate.css'
import 'fullpage.js/dist/jquery.fullpage.css'

const arrowIconURL = require('../../assets/Arrow.png')
const logoURL = require('../../assets/logo.png')
const QRCodeURL = require('../../assets/QRCode.png')
const map = require('./logo-page.css')
const infoMap = require('../info-page/info-page.css')

import EvaluateStandardTable from '../evaluate-standard-table'
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
    },
    components: {
        'evaluate-standard-table': EvaluateStandardTable,   
    }
})
export default class LogoPage extends Vue {
    arrowIconURL = arrowIconURL
    logoURL = logoURL
    QRCodeURL = QRCodeURL
    m = Object.assign({}, infoMap, map)


    onChartClick() {
        $('#fullpage').addClass('none-transform');
        ($('.modal') as any).modal('open');
    }

    mounted() {
        ($('.modal') as any).modal({
            complete: () => {
                $('#fullpage').removeClass('none-transform')
            }
        });

        Chart.defaults.global.fontSize = 15
        const data = {
            labels: ["身体机能", "粗大", "精细", "认知描述"],
            datasets: [
            {
                label: "测试报告",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [60, 80, 40, 19]
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