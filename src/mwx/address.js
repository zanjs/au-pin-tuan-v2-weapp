/**
 * 微信接口模型
 * 地理位置
 */
import {
  Promise,
} from '../libs/es6-promise'

import LANG from '../lang/lang'

export default {
  /**
   * 获取当前的地理位置、速度
   *
   * @服务接口返回字段
   * @apiSuccess {Number} latitude  纬度，浮点数，范围为-90~90，负数表示南纬.
   * @apiSuccess {Number} longitude  经度，浮点数，范围为-180~180，负数表示西经.
   * @apiSuccess {Number} speed  速度，浮点数，单位m/s.
   * @apiSuccess {Number} accuracy  位置的精确度.
   *
   * @param {string} [type='wgs84'] wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
   * @returns
   */
  getLocation(type = 'wgs84') {
    return new Promise((resolve) => {
      wx.getLocation({
        type,
        success(res) {
          resolve(res)
        },
      })
    })
  },
  /**
   * 打开地图选择位置
   *
   * @服务接口返回字段
   * @apiSuccess {String} name  位置名称.
   * @apiSuccess {String} address  详细地址.
   * @apiSuccess {Number} latitude  纬度，浮点数，范围为-90~90，负数表示南纬.
   * @apiSuccess {Number} longitude  经度，浮点数，范围为-180~180，负数表示西经.
   *
   * @returns
   */
  chooseLocation() {
    return new Promise((resolve) => {
      wx.chooseLocation({
        success(res) {
          resolve(res)
        },
        cancel() {
          resolve(false)
        },
      })
    })
  },
  /**
   * 使用微信内置地图查看位置
   *
   * @param {Float} latitude 纬度，范围为-90~90，负数表示南纬
   * @param {Float} longitude 经度，范围为-180~180，负数表示西经
   * @returns
   */
  openLocation(latitude, longitude) {
    return new Promise((resolve) => {
      wx.openLocation({
        latitude,
        longitude,
        scale: 28,
        success(res) {
          resolve(res)
        },
      })
    })
  },
  /**
   * 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址
   * api: https://mp.weixin.qq.com/debug/wxadoc/dev/api/address.html
   * code: 0=>无错误 1=> 取消 -1=> 通信地址授权失败
   *
   * @returns
   */
  chooseAddress() {
    return new Promise((resolve) => {
      wx.chooseAddress({
        success(res) {
          resolve({
            code: 0,
            data: res,
            msg: 'ok',
          })
          console.log(res)
        },
        fail(err) {
          console.log(err)
          const emsg = err.errMsg
          const indexofVal = emsg.indexOf('auth')
          const auth = indexofVal < 0 ? 1 : -1
          const msg = indexofVal < 0 ? LANG.Cancel : LANG.RefuseMailingAddress
          resolve({
            code: auth,
            msg,
          })
        },
      })
    })
  },

}