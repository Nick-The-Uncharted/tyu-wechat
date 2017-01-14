/// <reference types="fullpage.js" />

import Vue = require('Vue')
import Component from 'vue-class-component'
const template: string = require('raw!./vertical-pager.html')
import InfoPage from '../info-page'
import ReportPage from '../report-page'
import SummaryPage from '../summary-page'
import LogoPage from '../logo-page'
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
        'logo-page': LogoPage
    }
})
export default class VerticalPager extends Vue {
    subjects = {}

    async mounted() {
        $('#fullpage').fullpage()
        try {
            const result = await InfoModel.getTestSubjectDetail(this.$route.params['id'])
            this.subjects = result.data.subjects
        } catch (error) {
            console.log(error)
        }
    }

    nextSection() {
        $.fn.fullpage.moveSectionDown();
    }
}