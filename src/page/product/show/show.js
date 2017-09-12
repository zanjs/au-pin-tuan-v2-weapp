import Product from '../../../controller/productShow'

Page({
  data: {
    submitName: '跟团购',
    comment: '',
    commentPlaceholder: '还有什么要说的可以告诉我哦',
    currencyCode: 'AUD$',
  },
  onLoad(options) {
    Product.onLoad(options)
  },
  onShow() {
    Product.init()
  },
  bindKeyInput(e) {
    Product.bindKeyInput(e)
  },
  bindKeyInputPhone(e) {
    Product.bindKeyInputPhone(e)
  },
  bindKeyInputName(e) {
    Product.bindKeyInputName(e)
  },
  bindKeyInputWechat(e) {
    Product.bindKeyInputWechat(e)
  },
  bindKeyInputAddress(e) {
    Product.bindKeyInputAddress(e)
  },
  tapOpen() {
    Product.tapOpen()
  },
  tapDesc() {
    Product.tapDesc()
  },
  tapEdit() {
    Product.tapEdit()
  },
  tapEmail() {
    Product.tapEmail()
  },
  tapImage(e) {
    Product.tapImage(e)
  },
  tapCodeImage() {
    Product.tapCodeImage()
  },
  tabAvatar() {
    Product.tabAvatar()
  },
  tabSecrecy() {
    Product.tabSecrecy()
  },
  tabCommentDel(e) {
    Product.tabCommentDel(e)
  },
  tabPlusCut(e) {
    Product.tabPlusCut(e)
  },
  formSubmit(e) {
    Product.formSubmit(e)
  },
  submit() {},
  /**
   * 监听用户下拉动作
   */
  onPullDownRefresh() {
    Product.init()
    wx.stopPullDownRefresh()
  },
  /**
   * 分享
   * @returns
   */
  onShareAppMessage() {
    const data = this.data
    const title = data.title || '澳洲群一键接龙'
    const desc = data.group ? data.group.description || '' : ''
    return {
      'title': title,
      'desc': desc,
      'path': `/page/product/show/show?id=${data.id}`,
    }
  },
  onReady() {},
  onHide() {},
  onUnload() {},
})