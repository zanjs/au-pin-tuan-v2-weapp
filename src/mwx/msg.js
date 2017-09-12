import Lang from '../lang/lang'

export default {
  /**
   * loding 状态
   *
   * @param {any} string
   */
  loading(bool) {
    let title = bool
    if (bool) {
      title = title.toString()
      wx.showToast({
        title,
        icon: 'loading',
        duration: 10000,
      })
    } else {
      wx.hideToast()
    }
  },
  /**
   * 消息提示
   * @param {string} [title='成功']
   * @param {number} [time=1000]
   */
  title(title = Lang.Success, time = 1000) {
    wx.showToast({
      title,
      duration: time,
    })
  },
  /**
   * 微信模态框显示内容
   * @param {any} content
   */
  showModal(content, title = '') {
    wx.showModal({
      title,
      content,
      showCancel: false,
    })
  },
  /**
   * 微信模态框显示内容 是否执行操作
   * @param {any} content
   */
  showModalCancel(content, title = '', cb) {
    wx.showModal({
      title,
      content,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          cb(true)
        } else if (res.cancel) {
          console.log('用户点击取消')
          cb(false)
        }
      },
    })
  },
  /**
   * 关闭 toast
   * @param {any} page
   */
  toastClose(page) {
    const vm = page
    vm.wetoast.toast()
  },
}