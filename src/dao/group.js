import {
  Promise,
} from '../libs/es6-promise'
import Group from '../model/group'

export default {
  /**
   * 我发起的
   * @returns
   */
  index() {
    return new Promise((resolve) => {
      resolve(Group.index())
    })
  },
  /**
   * 发起团信息
   * @returns
   */
  store(obj) {
    return new Promise((resolve) => {
      resolve(Group.store(obj))
    })
  },
  /**
   * 更新团信息
   * @returns
   */
  update(obj) {
    return new Promise((resolve) => {
      resolve(Group.update(obj))
    })
  },
  /**
   * 编辑一个团信息
   * @param {any} id
   * @returns
   */
  edit(id) {
    return new Promise((resolve) => {
      resolve(Group.edit(id))
    })
  },
  /**
   * 查询一个团信息
   * @param {any} id
   * @returns
   */
  show(id) {
    return new Promise((resolve) => {
      resolve(Group.show(id))
    })
  },
  /**
   * 删除一个团信息
   * @param {any} id
   * @returns
   */
  destroy(id) {
    return new Promise((resolve) => {
      resolve(Group.destroy(id))
    })
  },
  updateOpen(obj) {
    return new Promise((resolve) => {
      resolve(Group.updateOpen(obj))
    })
  },
}