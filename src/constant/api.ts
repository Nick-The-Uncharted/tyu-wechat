const baseUrl = "https://private-031f53-tyu1.apiary-mock.com"
export const bindEndpoint = `${baseUrl}/bindPhoneNumber`
export const childInfoEndPointGetter = (childId) => {
    return `${baseUrl}/childs/${childId}`
}

export const testSubjectDetailEndPointGetter = (childId, subjectName) => {
    return `${baseUrl}/childs/${childId}/testSubject/${subjectName}`
}

export const dimensionSubmmaryEndpointGetter = (childId) => {
    return `${baseUrl}/childs/${childId}/dimensionSummary`
}

export const adviceEndpointGetter = (childId) => {
    return `${baseUrl}/childs/${childId}/advice`
}