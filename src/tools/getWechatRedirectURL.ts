const config =  require('../../project-config.json')

export default function(path = ""): string {
    const redirectUri = encodeURIComponent(`${location.origin}/${path}`)
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appId}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_base#wechat_redirect`
}