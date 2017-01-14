/// <reference types="fullpage.js" />

import Vue = require('Vue')
import Component from 'vue-class-component'
const template: string = require('raw!./vertical-pager.html')
import InfoPage from '../info-page'
import ReportPage from '../report-page'
import SummaryPage from '../summary-page'
import LogoPage from '../logo-page'
import AdvicePage from '../advice-page/'
const map = require('./vertical-pager.css')
import InfoModel from '../../model/InfoModel'

import 'fullpage.js'
// 不启用css module
import '!!vue-style!css!fullpage.js/dist/jquery.fullpage.css'

@Component({
    template: template,
    components: {
        'info-page': InfoPage,   
        'report-page': ReportPage,   
        'summary-page': SummaryPage,
        'logo-page': LogoPage,
        'advice-page': AdvicePage
    }
})
export default class VerticalPager extends Vue {
    subjects = {}

    async mounted() {
        try {
            const result = await InfoModel.getTestSubjectDetail(this.$route.params['id'])
            this.subjects = result.data.subjects
        } catch (error) {
            console.log(error)
        }
    }

    async updated() {
        // 必须放在这， 因为只有这时report page才已经放在了dom上
        $('#fullpage').fullpage()
    }

    nextSection() {
        $.fn.fullpage.moveSectionDown();
    }
}