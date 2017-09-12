// dao 层 公共
import {
  Promise,
} from '../libs/es6-promise'
// stroage
import Storage from '../util/storage'
import Login from '../middleware/login'
// Env
import Env from '../env'
import Print from '../fn/print'

export default {
  /**
   * AU微信用户一站式登陆
   * @returns
   */
  auLogin() {
    return new Promise((resolve) => {
      const ttl = Env.ttl * 1000 * 60
      const keyTime = Storage.get(Storage.userkeyTime)

      keyTime.then((val) => {
        const nowTime = new Date().getTime()
        const distance = nowTime - val
        if (distance > ttl) {
          resolve(Login.auth())
        } else {
          Print.Warn('不用登陆')
          resolve(false)
        }
      })
    })
  },
}