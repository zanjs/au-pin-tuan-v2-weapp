// 页面跳转方法
export default {
  /**
   * wx.switchTab(OBJECT)
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   */
  switchTab(page) {
    wx.switchTab({
      url: page,
    })
  },
  /**
   * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
   * @param {any} page
   */
  navTo(page) {
    wx.navigateTo({
      url: page,
    })
  },
  /**
   * 关闭当前页跳转
   * @param {string} url 页面地址
   */
  navToOut(url) {
    wx.redirectTo({
      'url': url,
    })
  },
  /**
   * 返回上一页
   * @param {number} [delta=1]
   * @param {number} [time=1000]
   */
  navBack(delta = 1, time = 1000) {
    setTimeout(() => {
      wx.navigateBack({
        'delta': delta,
      })
    }, time)
  },
  /**
   * 提交成功后返回上一页
   * @param {string} [title='成功']
   * @param {number} [time=1000]
   */
  submitNavBack(title = 'Success', time = 1000) {
    const vm = this
    wx.showToast({
      'title': title,
      duration: time,
    })
    vm.navBack(1, time)
  },
}