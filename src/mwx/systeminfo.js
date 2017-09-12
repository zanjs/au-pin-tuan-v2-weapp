/**
 * 设备系统信息
 */
import {
  Promise,
} from '../libs/es6-promise'

import LANG from '../lang/lang'

export default {
  /**
   * 获取系统设备信息
   *
   * @returns
   */
  getSystemInfo() {
    return new Promise((resolve) => {
      wx.getSystemInfo({
        success: (res) => {
          resolve(res)
        },
        fail: (err) => {
          resolve(false)
        },
      })
    })
  },
  /**
   * 小程序 API 接口是否可用
   *
   * @param {string} api
   * @returns
   */
  can(api) {
    if (wx.canIUse(api)) {
      return true
    }

    wx.showModal({
      title: LANG.Point,
      content: LANG.VersionTooLow,
    })

    return false
  },
}