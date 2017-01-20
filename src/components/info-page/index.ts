import Vue = require('vue')
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
const  ProgressBar = require('progressbar.js');

@Component({
    template: template,
    props: {
        'backgroundColor': Object ,
        'shouldShowFooter': {
            type: Boolean,
            default: true
        },
        'childId': String,
        'dataResovler': Function
    },
    components: {
        'evaluate-standard-table': EvaluateStandardTable,   
    }
})
export default class InfoPage extends Vue {
    arrowIconURL = arrowIconURL
    logoURL = logoURL
    m = map
    userInfo = {
        name: "加载中……",
        gender: "加载中……",
        kindergarten: "加载中……"
    }

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
            const result = await InfoModel.getChildInfo((this as any).childId)
            userInfo = result.data.student;
            (this as any).dataResovler()
        } catch (error) {
            console.log(error)
        }
        this.userInfo = userInfo
        document.title = `${this.userInfo.name} 的运动能力评估报告`

        var bar = new ProgressBar.Circle(`#${this.m['score-circle']}`, {
            strokeWidth: 3,
            easing: 'easeInOut',
            duration: 1400,
            color: '#43a047',
            trailColor: '#e1bee7',
            trailWidth: 1,
            svgStyle: null
        });

        bar.animate(userInfo.mq / 100);  // Number from 0.0 to 1.0

        // const labels = Object.keys(userInfo.scores) ||  []
        // const scores = labels.map((val) => userInfo.scores[val])
        // Chart.defaults.global.fontSize = 15
        // const data = {
        //     labels: labels,
        //     datasets: [
        //     {
        //         label: `动商总分: ${userInfo.MQ}`,
        //         // backgroundColor: "#dcedc8",
        //         borderColor: "#ffa726",
        //         pointBackgroundColor: "#f9fbe7",
        //         pointBorderColor: "#fff",
        //         pointHoverBackgroundColor: "#fff",
        //         pointHoverBorderColor: "#f9fbe7",
        //         data: scores || []
        //     }]
        // }
        // var chartInstance = new Chart($("#overviewChart"), {
        //     type: 'radar',
        //     data: data,
        //     options: {
        //         responsive: true,
        //         responsiveAnimationDuration: 200,
        //         maintainAspectRatio: true,
        //         scale: {
        //             ticks: {
        //                 fontSize: 15
        //             },
        //             pointLabels: {
        //                 fontSize: 15
        //             }
        //         },
        //         legend: {
        //             labels: {
        //                 fontSize: 15
        //             }
        //         }
        //     }
        // });
    }

    onTouchFooter(event) {
        this.$emit('footerTouched')
    }
}