import {bindedChildrenEndPoint, bindPhoneNumberEndPoint, bindChildrenEndPoint, getChildrenByNameEndPoint, childInfoEndPointGetter, testSubjectDetailEndPointGetter, dimensionSubmmaryEndpointGetter} from '../constant/api'

export default class InfoModel {
    static getBindedChildren() {
        return $.ajax(bindedChildrenEndPoint)
    }

    static getChildrenByName(name) {
        return $.ajax(getChildrenByNameEndPoint, {
            data: {
                name: name
            }
        })
    }

    static bindChild(childId) {
        return $.ajax(bindChildrenEndPoint, {
            method: 'POST',
            data: {studentID: childId}
        })
    }

    static bindPhoneNumber(phoneNumber, smsCode) {
        return $.ajax(bindPhoneNumberEndPoint, {
            method: 'POST',
            data: {
                phoneNumber: phoneNumber,
                smsCode: smsCode
            }
        })
    }

    static getChildInfo(childId) {
        return $.ajax(childInfoEndPointGetter(childId))
    }

    static getTestSubjectDetail(childId) {
        return $.ajax(testSubjectDetailEndPointGetter(childId))
    }

    static getDimensionSummary(childId) {
        return $.ajax(dimensionSubmmaryEndpointGetter(childId))
    }
}