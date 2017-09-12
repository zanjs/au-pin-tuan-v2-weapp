import { Promise } from '../libs/es6-promise'

export default {
  userKey: 'userKey',
  userkeyTime: 'userkeyTime',
  userInfo: 'userInfo',
  wxUser: 'wxUser',
  wxUserInfo: 'wxUserInfo',
  address: 'address',
  telphone: 'telphone',
  /**
   * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容， 内置 Promise 对象
   * @param {any} key
   * @param {any} val
   * @returns
   */
  set(key, val) {
    return new Promise((resolve, reject) => {
      wx.setStorage({
        key,
        data: val,
        success(res) {
          console.log('storage set ok')
          console.log(res)
          resolve(res)
        },
        fail(res) {
          console.log('storage set error')
          console.log(res)
          reject(res)
        },
      })
    })
  },
  /**
   * 从本地缓存中异步获取指定 key 对应的内容。 内置 Promise 对象
   * @param {any} key
   * @returns
   */
  get(key) {
    return new Promise((resolve) => {
      wx.getStorage({
        key,
        success(res) {
          console.log('storage get ok')
          console.log(res)
          resolve(res.data)
        },
        fail(res) {
          console.log('storage get error')
          console.log(res)
          resolve(false)
        },
      })
    })
  },
  /**
   * 从本地缓存中异步移除指定 key.
   * @param {any} key
   * @returns
   */
  remove(key) {
    return new Promise((resolve, reject) => {
      wx.removeStorage({
        key,
        success(res) {
          console.log('storage get ok')
          console.log(res)
          resolve(res.data)
        },
        fail(res) {
          console.log('storage get error')
          console.log(res)
          reject(res)
        },
      })
    })
  },
}