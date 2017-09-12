import {
  Promise,
} from '../libs/es6-promise'
import Comment from '../model/comment'

export default {
  /**
   * 我参与的
   * @returns
   */
  index() {
    return new Promise((resolve) => {
      resolve(Comment.index())
    })
  },
  /**
   * 发起接龙信息
   * @returns
   */
  store(obj) {
    return new Promise((resolve) => {
      resolve(Comment.store(obj))
    })
  },
  /**
   * 查询一个跟龙信息
   * @param {any} id
   * @returns
   */
  show(id) {
    return new Promise((resolve) => {
      resolve(Comment.show(id))
    })
  },
  /**
   * 删除一个跟龙信息
   * @param {any} id
   * @returns
   */
  destroy(id) {
    return new Promise((resolve) => {
      resolve(Comment.destroy(id))
    })
  },
}