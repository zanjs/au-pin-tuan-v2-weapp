// middleware 层
import {
  Promise,
} from '../libs/es6-promise'
import Config from '../config'
// stroage
import Storage from '../util/storage'
import Login from '../model/login'

export default {
  /**
   * AU微信用户一站式登陆
   * @returns
   */
  auth() {
    return new Promise((resolve) => {
      const wxUserInfo = Login.wxLoginGetUserInfo()

      wxUserInfo.then((resp) => {
        wx.request({
          url: `${Config.ApiHost}api/wx/login`,
          method: 'POST',
          data: {
            code: resp.code,
            iv: resp.iv,
            encryptedData: resp.encryptedData,
          },
          header: {
            'content-type': 'application/json',
          },
          success(res) {
            console.log(res.data)
            const nowTime = new Date().getTime()

            Storage.set(Storage.userKey, res.data.token)
            Storage.set(Storage.userkeyTime, nowTime)

            resolve(res)
          },
          fail(err) {
            console.log(err)
            resolve(false)
          },
        })

        console.log(resp)
      })

      wxUserInfo.catch((err) => {
        console.warn('err 拒绝了授权')
        console.log(err)
        resolve(false)
      })
    })
  },
}