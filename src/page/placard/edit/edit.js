// controller
import Placard from '../../../controller/placardEdit'

Page({
  data: {
    description: '',
    image: [],
    column: '编辑报名信息，分享到群，愉快的接龙吧！',
    placeholder: '1月12日， Opera House，聚会活动….',
    placeholderTitle: '一句话标题',
    submitName: '更新接龙',
    imageLoad: true,
    imageList: [],
  },
  onLoad(options) {
    Placard.onLoad(options)
  },
  onShow() {
    Placard.init()
  },
  bindTitle(e) {
    Placard.bindTitle(e)
  },
  bindTextAreaBlur(e) {
    Placard.bindTextAreaBlur(e)
  },
  bindUpload(e) {
    Placard.bindUpload(e)
  },
  bindImgDelete(e) {
    Placard.bindImgDelete(e)
  },
  catchtap() {},
  submit() {
    Placard.submit()
  },
  /**
   * 监听用户下拉动作
   */
  onPullDownRefresh() {
    // Placard.init()
    wx.stopPullDownRefresh()
  },
  onReady() {},
  onHide() {},
  onUnload() {},
})