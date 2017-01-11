const baseUrl = "http://localhost:3000/service"
export const bindEndpoint = `${baseUrl}/bindPhoneNumber`

export const bindChildrenEndPoint = `${baseUrl}/bindChild`

export const bindedChildrenEndPoint = `${baseUrl}/user/childs`

export const getChildrenByNameEndPoint = `${baseUrl}/childs`

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