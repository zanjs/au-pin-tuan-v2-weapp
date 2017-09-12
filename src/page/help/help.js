Page({
  data: {},
  onLoad(options) {
    const vm = this

  },
  onShow() {},
  /**
   * 监听用户下拉动作
   */
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },
  /**
   * 分享
   * @param {any} page
   * @returns
   */
  onShareAppMessage() {
    const vm = this
    const data = vm.data

    return {
      'title': 'title',
      'desc': 'desc',
      'path': '/page/group/group',
    }
  },
  onReady() {},
  onHide() {},
  onUnload() {},
})