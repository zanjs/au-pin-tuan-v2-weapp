// controller
import Initiate from '../../controller/initiate'

Page({
  data: {},
  onLoad() {},
  onShow() {
    Initiate.init()
  },
  tapDetail(e) {
    Initiate.tapDetail(e)
  },
  tapDel(e) {
    Initiate.tapDel(e)
  },
  handleTap2() {},
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