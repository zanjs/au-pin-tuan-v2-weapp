// controller
import Initiate from '../../controller/comment'

Page({
  data: {},
  onLoad() {},
  onShow() {
    Initiate.init()
  },
  tapDetail(e) {
    Initiate.tapDetail(e)
  },
  /**
   * 监听用户下拉动作
   */
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },
  onReady() {},
  onHide() {},
  onUnload() {},
})