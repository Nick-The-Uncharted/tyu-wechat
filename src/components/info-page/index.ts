import Vue = require('Vue')
import Component from 'vue-class-component'
const template: string = require('raw!./info-page.html')

import '!!vue-style!css!animate.css/animate.css'
import 'fullpage.js/dist/jquery.fullpage.css'

const arrowIconURL = require('../../assets/Arrow.png')
const logoURL = require('../../assets/logo.png')
const map = require('./info-page.css')

import EvaluateStandardTable from '../evaluate-standard-table'
import Chart = require('chart.js')
import InfoModel from '../../model/InfoModel'

@Component({
    template: template,
    props: {
        'backgroundColor': Object ,
        'shouldShowFooter': {
            type: Boolean,
            default: true
        },
        'childId': String
    },
    components: {
        'evaluate-standard-table': EvaluateStandardTable,   
    }
})
export default class InfoPage extends Vue {
    arrowIconURL = arrowIconURL
    logoURL = logoURL
    m = map
    name = "加载中……"
    gender = "加载中……"
    kindergaren = "加载中……"

    onChartClick() {
        $('#fullpage').addClass('none-transform');
        ($('#standard-table-modal') as any).modal('open');
    }

    async mounted() {
        ($('#standard-table-modal') as any).modal({
            complete: () => {
                $('#fullpage').removeClass('none-transform')
            }
        });

        let userInfo 
        try {
            userInfo = await InfoModel.getChildInfo((this as any).childId)
        } catch (error) {
            console.log(error)
        }
        this.name = userInfo.name
        this.gender = userInfo.gender
        this.kindergaren = userInfo.kindergaren
        document.title = `${this.name} 的健康报告`

        Chart.defaults.global.fontSize = 15
        const data = {
            labels: ["身体机能", "粗大", "精细", "认知描述"],
            datasets: [
            {
                label: `动商总分: ${userInfo.MQ}`,
                backgroundColor: "#dcedc8",
                borderColor: "#9ccc65",
                pointBackgroundColor: "#f9fbe7",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#f9fbe7",
                data: userInfo.scores || [20, 80 , 40 , 23]
            }]
        }
        var chartInstance = new Chart($("#overviewChart"), {
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