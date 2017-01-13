import Vue = require('Vue')
import Component from 'vue-class-component'

import toastr = require('toastr')
//不启用css module
import '!!vue-style!css!toastr/build/toastr.css'

const template: string = require('raw!./bind-page.html')
const map = require('./bind-page.css')
const logoURL = require('../../assets/logo.png')
const config: any = require('../../../project-config.json')
import getQueryParamByName from '../../tools/getQueryParamByName'
import getWechatRedirectURL from '../../tools/getWechatRedirectURL'
import '../../tools/jquery-animation'

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
    countDown = 0

    get smsButtonText() {
        return this.countDown ? `${this.countDown}秒后可重发` : "发送验证码" 
    }

    mounted() {
        this.wechatAuthCode = getQueryParamByName('code')
    }

    validateInput(): boolean {
        if (!$("#phone-input.valid").length) {
            if (!$('#phone-input').val()) { // 内容为空（此时没有红字）
                $("#phone-input, label[for='phone-input']").animateCss('shake')
            }
            return false
        }
        return true
    }

    showError(message: string) {
        message = message || "不好意思，出错了"
        toastr.options.positionClass = 'toast-bottom-center'
        // toastr.options.timeOut = 5000000
        toastr.error(message)
    }

    startCountDown() {
        $("#smsCode-button").addClass('disabled')
        this.countDown = 60
        let timeIntervalId = setInterval(() => {
            --this.countDown
            console.log('count')
            if (this.countDown == 0) {
                clearInterval(timeIntervalId)
                $("#smsCode-button").removeClass('disabled')
            }
        }, 1000)
    }

    sendSmsCodeButtonTouched(event) {
        if (!this.validateInput()) {
            return
        }
        this.startCountDown()

        $.post(`${config.serverAddress}/service/smsCode`, {
            "phoneNumber": this.phoneNumber
        })
            .done((data, textStaus, xhr: JQueryXHR) => {
                console.log("验证码发送成功");
            })
            .fail((xhr: JQueryXHR) => {
                this.showError(xhr.responseJSON.message)
                console.log("验证码发送失败");
            })
    }

    submitButtonTouched(event: Event) {
        if (!this.validateInput()) {
            return
        }

        $.post(`${config.serverAddress}/service/bindPhoneNumber`, {
            "phoneNumber": this.phoneNumber,
            "smsCode": this.smsCode,
            "wechatAuthCode": this.wechatAuthCode
        })
            .done((data) => {
                window.location.href = getWechatRedirectURL()
            })
            .fail((xhr: JQueryXHR, textStatus) => {
                this.showError(xhr.responseJSON.message)
            })
    }
}