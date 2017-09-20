// controller
import Product from '../../../controller/product'

Page({
  data: {
    description: '',
    image: [],
    currencyCode: 'AUD$',
    column: '编辑团购信息，分享到群，愉快的接龙吧！',
    placeholderTitle: '一句话标题 分享出去展现',
    placeholder: '团购描述...',
    submitName: '发起接龙',
    requiredTitle: '报名人必填信息,默认无需填写',
    imageLoad: true,
    imageList: [{}, {}, {}, {}],
  },
  onLoad() {
    Product.onLoad()
  },
  onShow() {
    Product.init()
  },
  bindTextAreaBlur(e) {
    Product.bindTextAreaBlur(e)
  },
  bindTitle(e) {
    Product.bindTitle(e)
  },
  bindUpload(e) {
    Product.bindUpload(e)
  },
  bindProduct(e) {
    Product.bindProduct(e)
  },
  bindPorudctDel(e) {
    Product.bindPorudctDel(e)
  },
  tapAddProduct() {
    Product.tapAddProduct()
  },
  bindImgDelete(e) {
    Product.bindImgDelete(e)
  },
  submit() {
    Product.submit()
  },
  switch1Change(e) {
    Product.switch1Change(e)
  },
  catchtap() {},
  onReady() {},
  onHide() {},
  onUnload() {},
})