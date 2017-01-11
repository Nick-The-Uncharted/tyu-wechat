import {bindedChildrenEndPoint, bindChildrenEndPoint, getChildrenByNameEndPoint, childInfoEndPointGetter, testSubjectDetailEndPointGetter, dimensionSubmmaryEndpointGetter} from '../constant/api'

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
            data: {id: childId}
        })
    }

    static getChildInfo(childId) {
        return $.ajax(childInfoEndPointGetter(childId))
    }

    static getTestSubjectDetail(childId, subject) {
        return $.ajax(testSubjectDetailEndPointGetter(childId, subject))
    }

    static getDimensionSummary(childId) {
        return $.ajax(dimensionSubmmaryEndpointGetter(childId))
    }
}