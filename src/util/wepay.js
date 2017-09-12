import regeneratorRuntime from '../libs/runtime'
import co from '../libs/co'
import API from './api'
import LANG from '../lang/lang'
// model
import PAYMENT from '../model/payment'


export default {
  /**
   * 微信支付
   *
   * @param {any} page
   * @param {any} obj
   */
  Wechat(page, obj) {
    let vm = page
    console.log("pay wepay.js")
    console.log(obj)

    // co start
    co(function*() {

        let paymentWechat = yield PAYMENT.Wechat(obj)
        console.log("paymentWechat co")
        console.log(paymentWechat)

        if (!API.resData(vm, paymentWechat)) {
          return
        }

        vm.wetoast.toast()

        console.log(paymentWechat)
        let msg = ''

        let JsPay = paymentWechat.Data.JsPay

        if (!JsPay) {
          msg = LANG.CanNotPay
        } else {

          let wxpayapi = yield API.payment(JsPay)

          if (wxpayapi.errMsg) {
            msg = LANG.PayFail

          } else {
            msg = LANG.PaySuccess
          }
        }

        API.toastTitle(vm, msg)


      })
      // co end
  },
  /**
   * 微信支付 2
   * 
   * @param {any} page 
   * @param {any} obj 
   */
  WechatT(page, obj) {
    let vm = page
    co(function*() {

      console.log('wechat 22')

      API.toastLoading(vm)

      let paymentWechat = yield PAYMENT.Wechat(obj)

      if (!API.resData(vm, paymentWechat)) {
        return
      }

      vm.wetoast.toast()

      console.log(paymentWechat)

      let JsPay = paymentWechat.Data.JsPay

      if (!JsPay) {
        API.submitNavBack(LANG.CanNotPay, 2000)
        return
      }

      let wxpayapi = yield API.payment(JsPay)

      if (wxpayapi.errMsg) {

        API.submitNavBack(LANG.PayFail, 2000)

      } else {

        API.submitNavBack(LANG.PaySuccess, 2000)
      }


    })
  }
}