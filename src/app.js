const { WeToast } = require('./libs/wetoast')
  // import {WeToast} from './template/toast/wetoast.js'

// 详细api 接口使用 到  https://github.com/oncletom/tld.js
// app.js
App({
  network: false,
  WeToast,
  /**
   * 生命周期函数--监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * @returns
   */
  onLaunch() {

  },
  /**
   * 生命周期函数--监听小程序显示
   * @returns
   */
  onShow() {
    return '当小程序启动，或从后台进入前台显示，会触发 onShow'
  },
  /**
   * 生命周期函数--监听小程序隐藏
   *
   * @returns
   */
  onHide() {
    // Do something when hide.
    return '当小程序从前台进入后台，会触发 onHide'
  },
  /**
   * 获取微信小程序自身登陆用户信息
   * @param {any} cb
   */
  getUserInfo(cb) {
    const that = this
    if (this.globalData.userInfo) {
      typeof cb === 'function' && cb(this.globalData.userInfo)
    } else {
      // 调用登录接口
      wx.login({
        success(code) {
          wx.getUserInfo({
            success(res) {
              const userInfo = res.userInfo
              userInfo.login = code
              that.globalData.userInfo = userInfo
              typeof cb === 'function' && cb(that.globalData.userInfo)
            },
          })
        },
      })
    }
  },
  /**
   * 错误监听函数
   * @param {any} msg
   * @returns
   */
  onError(msg) {
    console.log(msg)
    return '当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息'
  },
  globalData: {
    userCode: null,
    userInfo: null,
    systemInfo: null,
  },
})