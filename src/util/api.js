import { Promise } from '../libs/es6-promise'
import CONFIG from '../config'
import INITDATA from '../util/initData'
import BASE64 from './base64'

export default {
  App: getApp(),
  /**
   * 关闭当前页面，跳转到应用内的某个页面
   * wx.redirectTo(OBJECT)
   * 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。
   * 参数与路径之间使用?分隔，参数键与参数值用=相连，
   * 不同参数用&分隔；如 'path?key=value&key2=value2'
   */
  redirectTo(obj) {
    wx.redirectTo(obj)
  },
  /**
   * 初始化页面
   * @param {page vm} page
   */
  intPagedata(page) {
    page.setData(INITDATA.data)
  },
  /**
   * 支付请求
   * @param {any} data
   * @returns
   */
  payment(data) {
    // const vm = this
    return new Promise((resolve) => {
      wx.requestPayment({
        timeStamp: data.TimeStamp.toString(),
        nonceStr: data.NonceStr,
        package: data.Package,
        signType: data.SignType,
        paySign: data.PaySign,
        success(res) {
          resolve(res)
        },
        fail(res) {
          resolve(res)
        },
      })
    })
  },
  /**
   * toast 显示文字、图标
   * @param {any} page
   * @param {string} [title='ok']
   * @param {number} [number=0]
   * @param {number} [duration=1500]
   */
  toast(page, title = 'ok', number = 0, duration = 1500) {
    const imgArr = [
      `${CONFIG.ImgHost}img/star.png`,
      // 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
    ]
    page.wetoast.toast({
      img: imgArr[number],
      'title': title,
      imgClassName: 'my_wetoast_img',
      'duration': duration,
      imgMode: 'scaleToFill',
    })
  },
  /**
   * toast loading
   * @param {any} page 页面栈
   * @param {number} [duration=0]
   */
  toastLoading(page, duration = 0) {
    console.log('toastLoading')
    page.wetoast.toast({
      // img: `https://weispp.github.io/img/balls.svg`,
      // img: `${CONFIG.ImgHost}img/balls.svg`,
      img: BASE64.loader,
      imgClassName: 'my_wetoast_img',
      'duration': duration,
      imgMode: 'scaleToFill',
    })
  },
  /**
   * toast 消息提示
   * @param {any} page 页面栈
   * @param {string} [title='ok']
   * @param {number} [duration=1500]
   */
  toastTitle(page, title = 'ok', duration = 1500) {
    page.wetoast.toast({
      'title': title,
      'duration': duration,
    })
  },
  /**
   * 返回数据错误统一处理
   * @param {any} page
   * @param {any} res
   * @returns
   */
  resData(page, res) {
    console.log(page + res)
  },
  /**
   * page error
   * @param {any} page
   * @param {any} msg
   */
  errorPage(page, msg) {
    const vm = page

    vm.wetoast.toast()

    page.setData({
      error: true,
      errorMsg: msg,
      emptyImg: `${CONFIG.ImgHost}img/empty.png`,
    })

    console.log('error: true,')
    vm.toastTitle(page, msg)
  },
  /**
   * 获取元素的 data 私有属性
   * @param {any} event
   * @param {any} key
   * @returns
   */
  event(event, key) {
    return event.currentTarget.dataset[key]
  },
  _isNone(s) {
    return s === '' || s == null || s === undefined
  },
}