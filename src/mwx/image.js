/**
 * 微信接口模型
 * 图片操作
 */
import {
  Promise,
} from '../libs/es6-promise'

export default {
  /**
   * 从本地相册选择图片或使用相机拍照。
   * @服务接口返回字段
   * @apiSuccess {string} tempFilePaths  本地文件路径
   *
   * @param {string}
   * @returns
   */
  chooseImage() {
    return new Promise((resolve) => {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['compressed'], //  可以指定是原图还是压缩图，默认二者都有 'original', 'compressed'
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          resolve(res.tempFilePaths[0])
        },
        fail() {
          resolve(false)
        },
      })
    })
  },
  /**
   * 预览图片
   *
   * @param {string} current
   * @param {arrary} urls
   * @returns
   */
  previewImage(current, urls) {
    wx.previewImage({
      current, // 当前显示图片的http链接
      urls, // 需要预览的图片http链接列表
    })
  },

}