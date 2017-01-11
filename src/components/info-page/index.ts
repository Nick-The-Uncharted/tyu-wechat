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
        'userId': String
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

    onChartClick() {
        $('#fullpage').addClass('none-transform');
        ($('.modal') as any).modal('open');
    }

    async mounted() {
        ($('.modal') as any).modal({
            complete: () => {
                $('#fullpage').removeClass('none-transform')
            }
        });

        console.log(1)
        let userInfo 
        try {
            userInfo = await InfoModel.getChildInfo((this as any).childId)
        } catch (error) {

        }
        this.name = userInfo.name
        this.gender = userInfo.gender

        Chart.defaults.global.fontSize = 15
        const data = {
            labels: ["身体机能", "粗大", "精细", "认知描述"],
            datasets: [
            {
                label: `动商总分: ${userInfo.MQ}`,
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: userInfo.scores || []
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