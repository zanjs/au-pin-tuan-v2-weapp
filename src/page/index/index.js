Page({
  data: {},
  onLoad(options) {
    const vm = this
  },
  onShow() {},
  /**
   * 分享
   * @returns
   */
  onShareAppMessage() {
    const vm = this
    const data = vm.data

    return {
      'title': '澳洲群一键接龙',
      'desc': '澳洲群一键接龙',
      'path': '/page/index/index',
    }
  },
  onReady() {},
  onHide() {},
  onUnload() {},
})