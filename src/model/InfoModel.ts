import {childInfoEndPointGetter, testSubjectDetailEndPointGetter, dimensionSubmmaryEndpointGetter} from '../constant/api.ts'

export default class InfoModel {
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