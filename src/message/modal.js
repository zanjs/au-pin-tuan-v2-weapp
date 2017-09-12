import Msg from '../mwx/msg'

export default {
  /**
   * 团截止
   */
  groupEnd() {
    const content = '已截止啦'
    Msg.showModal(content)
  },
  commentNull() {
    const content = '已截止啦'
    Msg.showModal(content)
  },
  productInput() {
    const content = '商品信息有没有输入的哦'
    Msg.showModal(content)
  },
  productAdd() {
    const content = '还没有添加商品哦'
    Msg.showModal(content)
  },
  productInputNull() {
    const content = '商品信息输入不完整'
    Msg.showModal(content)
  },
  openSetting() {
    const content = '授权失败, 请删除重新打开允许授权'
    Msg.showModal(content)
  },
  phoneNot() {
    const content = '联系方式仅团长可见'
    Msg.showModal(content)
  },
  nameNot() {
    const content = '怎么称呼您呢,输入您的姓名吧'
    Msg.showModal(content)
  },
  wechatNot() {
    const content = '填写微信号 方便跟团长沟通'
    Msg.showModal(content)
  },
  addressNot() {
    const content = '填写收货地址,才可以收到宝贝哦'
    Msg.showModal(content)
  },
}