/// <reference types="fullpage.js" />

import Vue = require('vue')
import Component from 'vue-class-component'
const template: string = require('raw!./vertical-pager.html')
import InfoPage from '../info-page'
import ReportPage from '../report-page'
import SummaryPage from '../summary-page'
import LogoPage from '../logo-page'
import AdvicePage from '../advice-page/'
import ExamplePage from '../example-page'
const map = require('./vertical-pager.css')
import InfoModel from '../../model/InfoModel'

require('fullpage.js/vendors/scrolloverflow.js')
require('imports?IScroll=iscroll!fullpage.js/dist/jquery.fullpage.extensions.min.js')

// 不启用css module
import '!!vue-style!css!fullpage.js/dist/jquery.fullpage.css'

@Component({
    template: template,
    components: {
        'info-page': InfoPage,   
        'report-page': ReportPage,   
        'summary-page': SummaryPage,
        'logo-page': LogoPage,
        'advice-page': AdvicePage,
        'example-page': ExamplePage
    }
})
export default class VerticalPager extends Vue {
    subjects = {}
    dataPromises = []
    dataResovlers = []

    constructor() {
        super()

        for (let i = 0 ; i < 4 ; ++i) {
            this.dataPromises.push(new Promise((resolve, reject) => {
                this.dataResovlers.push(resolve)
            }))
        }

        Promise.all(this.dataPromises).then(() => {
            setTimeout(function() {
                $.fn.fullpage.destroy && $.fn.fullpage.destroy('all');
                $('#fullpage').fullpage({
                    scrollOverflow: true,
                    scrollOverflowReset: true
                } as any)  
                console.log($.fn.fullpage.destroy)
            }, 400);
        })
    }

    async mounted() {
        try {
            const result = await InfoModel.getTestSubjectDetail(this.$route.params['id'])
            this.subjects = result.data.subjects
            this.dataResovlers[3]()
        } catch (error) {
            console.log(error)
        }
    }


    nextSection() {
        $.fn.fullpage.moveSectionDown();
    }
}