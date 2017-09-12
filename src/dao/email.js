import {
  Promise,
} from '../libs/es6-promise'
import Email from '../model/email'

export default {
  /**
   * 团长导出信息
   * @returns
   */
  send(id, email) {
    return new Promise((resolve) => {
      resolve(Email.send(id, email))
    })
  },
}