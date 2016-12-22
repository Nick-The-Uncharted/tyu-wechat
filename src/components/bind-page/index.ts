import Vue = require('Vue')
import Component from 'vue-class-component'

import $ = require('jquery')
import toastr = require('toastr')
//不启用css module
import '!!vue-style!css!toastr/build/toastr.css'

const template: string = require('raw!./bind-page.html')
const map = require('./bind-page.css')
const logoURL = require('../../assets/logo.png')
const config: any = require('../../../project-config.json')
import getQueryParamByName from '../../tools/getQueryParamByName'
import getWechatRedirectURL from '../../tools/getWechatRedirectURL'

@Component({
    template: template,
    props: {
        'backgroundColorStyle': {
            type: Object,
            default: () => {return {background: 'linear-gradient(#b2ff59, #ef6c00)'}}
        }
    }
})
export default class BindPage extends Vue {
    logoURL = logoURL
    m = map
    phoneNumber = ""
    smsCode = ""
    wechatAuthCode = ""

    mounted() {
        this.wechatAuthCode = getQueryParamByName('code')
    }

    showError(message: string) {
        message = message || "不好意思，出错了"
        toastr.options.positionClass = 'toast-bottom-center'
        // toastr.options.timeOut = 5000000
        toastr.error(message)
    }

    sendSmsCodeButtonTouched(event) {
        $.post(`${config.serverAddress}/service/smsCode`, {
            "phoneNumber": this.phoneNumber,
            "smsCode": this.smsCode,
            "wechatAuthCode": this.wechatAuthCode
        })
            .done(function(data, textStaus, xhr: JQueryXHR) {
                console.log("验证码发送成功");
            })
            .fail(function() {
                console.log("验证码发送失败");
            })
    }

    submitButtonTouched(event) {
        $.post(`${config.serverAddress}/service/bindPhoneNumber`, {
            "phoneNumber": this.phoneNumber,
            "smsCode": this.smsCode,
            "wechatAuthCode": this.wechatAuthCode
        })
            .done(function(data) {
                const {userId} = data
                window.location.href = getWechatRedirectURL()
            })
            .fail((xhr: JQueryXHR, textStatus) => {
                this.showError(xhr.responseJSON.message)
            })
    }
}