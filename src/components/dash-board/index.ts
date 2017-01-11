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
            bindedChildren = await InfoModel.getBindedChildren()
        } catch (error) {
            console.log(error)
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
        const newChildren = await InfoModel.getChildrenByName(this.newChildName)
        this.newChildren = newChildren
    }

    async ensureAddChildButtonTouched() {
        // try {
        //     const result = await InfoModel.bindChild(this.childToAdd.id)
        // } catch (error) {
        //     console.log(error)
        // }
        InfoModel.bindChild(this.childToAdd.id).fail((jqXHR, textStatus, errorThrown) => {
            console.log(errorThrown)
        })
    }

    childClicked(child) {
        ($("#ensure-modal") as any).modal('open')
        this.childToAdd = child
    }

    submitButtonTouched(event: Event) {
        $.post(`${config.serverAddress}/service/bindPhoneNumber`, {
            
        })
            .done((data) => {
                const {userId} = data
                window.location.href = getWechatRedirectURL(`#/user/${userId}`)
            })
            .fail((xhr: JQueryXHR, textStatus) => {
                this.showError(xhr.responseJSON.message)
            })
    }
}