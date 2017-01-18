import Vue = require('vue')
import Component from 'vue-class-component'

import toastr = require('toastr')
//不启用css module
import '!!vue-style!css!toastr/build/toastr.css'

const template: string = require('raw!./dash-board.html')
const map = require('./dash-board.css')
const infoMap = require('../info-page/info-page.css')
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
            type: Object
        }
    }
})
export default class DashBoard extends Vue {
    logoURL = logoURL
    m = Object.assign({}, infoMap, map)
    bindedChildren = []
    newChildName = ""
    newChildren = []
    childToAdd = {id: ""}

    async mounted() {
        ($('.modal') as any).modal();
        let bindedChildren
        try {
            showLoading()
            const result = await InfoModel.getBindedChildren()
            if (result.code == 1) {
                this.$router.push('/bind')
                return
            }
            bindedChildren = result.data.students
        } catch (error) {
            console.log(error)
        } finally {
            dismissLoading()
        }
        
        this.bindedChildren = bindedChildren
    }

    viewChild(child) {
        this.$router.push(`/childs/${child.id}`)
    }

    showError(message: string) {
        message = message || "不好意思，出错了"
        toastr.options.positionClass = 'toast-bottom-center'
        // toastr.options.timeOut = 5000000
        toastr.error(message)
    }

    async addChildButtonTouched() {
        if (!this.newChildName) {
            this.showError("姓名不能为空")
            return
        }
        let newChildren
        try {
            showLoading()
            const result = await InfoModel.getChildrenByName(this.newChildName);
            ($("#child-table-modal") as any).modal('open')
            newChildren = result.data.students
            if (newChildren.length == 0) {
                ($("#child-table-modal") as any).modal('close')
                alert(`没有查询到姓名为${this.newChildName}的孩子`)
            }
        } catch(error) {
            console.log(error)
        } finally {
            dismissLoading()
        }
        this.newChildren = newChildren
    }

    async ensureAddChildButtonTouched() {
        try {
            showLoading()
            const result = await InfoModel.bindChild(this.childToAdd.id)
        } catch (error) {
            console.log(error)
        } finally {
            dismissLoading()
        }
        ($(".modal") as any).modal('close')
        this.$router.push(`/childs/${this.childToAdd.id}`)
    }

    childClicked(child) {
        ($("#ensure-modal") as any).modal('open')
        this.childToAdd = child
    }
}