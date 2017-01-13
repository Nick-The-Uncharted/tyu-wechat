import Vue = require('Vue')
import Component from 'vue-class-component'

import toastr = require('toastr')
//不启用css module
import '!!vue-style!css!toastr/build/toastr.css'

const template: string = require('raw!./dash-board.html')
const map = require('./dash-board.css')
const logoURL = require('../../assets/logo.png')
const config: any = require('../../../project-config.json')
import getQueryParamByName from '../../tools/getQueryParamByName'
import getWechatRedirectURL from '../../tools/getWechatRedirectURL'
import '../../tools/jquery-animation'
import InfoModel from '../../model/InfoModel'
import {showLoading, dismissLoading} from '../../tools/loadingController'

@Component({
    template: template,
    props: {
        'backgroundColorStyle': {
            type: Object,
            default: () => {return {background: 'linear-gradient(#b2ff59, #ef6c00)'}}
        }
    }
})
export default class DashBoard extends Vue {
    logoURL = logoURL
    m = map
    bindedChildren = []
    newChildName = ""
    newChildren = []
    childToAdd = {id: ""}

    async mounted() {
        ($('.modal') as any).modal();
        let bindedChildren
        try {
            showLoading()
            bindedChildren = await InfoModel.getBindedChildren()
        } catch (error) {
            console.log(error)
        } finally {
            dismissLoading()
        }
        
        this.bindedChildren = bindedChildren
    }

    showError(message: string) {
        message = message || "不好意思，出错了"
        toastr.options.positionClass = 'toast-bottom-center'
        // toastr.options.timeOut = 5000000
        toastr.error(message)
    }

    async addChildButtonTouched() {
        ($("#child-table-modal") as any).modal('open')
        let newChildren
        try {
            showLoading()
            newChildren = await InfoModel.getChildrenByName(this.newChildName)
        } catch(error) {
            console.log(error)
        } finally {
            dismissLoading()
        }
        this.newChildren = newChildren
    }

    async ensureAddChildButtonTouched() {
        try {
            const result = await InfoModel.bindChild(this.childToAdd.id)
        } catch (error) {
            console.log(error)
        }
        ($(".modal") as any).modal('close')
        this.$router.push(`/childs/${this.childToAdd.id}`)
    }

    childClicked(child) {
        ($("#ensure-modal") as any).modal('open')
        this.childToAdd = child
    }
}