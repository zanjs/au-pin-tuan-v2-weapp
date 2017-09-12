import {
  Promise,
} from '../libs/es6-promise'
import User from '../model/user'

export default {
  /**
   * 我的信息
   * @returns
   */
  me() {
    return new Promise((resolve) => {
      resolve(User.me())
    })
  },
}