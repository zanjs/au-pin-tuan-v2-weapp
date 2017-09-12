/**
 * api 日志模型
 * log
 */
import HTTP from '../util/http'
import CONFIG from '../config'

export default {
  /**
   * 日志写入
   * name 记录类型
   * model 客户端页面
   * content 记录内容标记
   * app_id 客户端名称
   * version 客户端版本号
   * user 用户信息
   * serves 服务端信息
   * client 客户端信息
   * @returns
   */
  Write(obj = {}) {
    console.log('log in')
      // 无需写入日志
    if (!CONFIG.LogWrite) {
      console.log(obj)
      return
    }
    // let clientKey = ''
    try {
      const userinfo = wx.getStorageSync('wxUserInfo')
      if (userinfo) {
        obj.user = JSON.stringify(userinfo)
      }
    } catch (e) {
      obj.user = e
    }

    try {
      const userKey = wx.getStorageSync('userKey')
      if (userKey) {
        obj.client = obj.client ? obj.client : userKey
      }
    } catch (e) {

    }

    obj.iskey = 'YW5sYWdv'
    obj.version = CONFIG.Version
    obj.app_id = '六城海淘'
    const url = 'https://citygo.anla.io/api/log?iskey=YW5sYWdv'
      // const url = 'http://192.168.1.184:1222/api/log?iskey=YW5sYWdv'
    HTTP.post(url, obj)
      .then((res) => {
        console.log(`log++${res}`)
      })
  },
}