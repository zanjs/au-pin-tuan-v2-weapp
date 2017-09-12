import Stack from '../mwx/stack'
import Message from '../message/modal'

export default {
  submit() {
    const vm = Stack.page()
    const data = vm.data

    // const totalPrice = data.totalPrice || 0
    const phone = data.phone || 0
    const name = data.name || 0
    const wechat = data.wechat || 0
    const address = data.address || 0

    const requiredName = data.required_u_name || false
    const requiredPhone = data.required_u_phone || false
    const requiredWechat = data.required_u_wechat || false
    const requiredAddress = data.required_u_address || false

    // if (!(totalPrice - 0)) {
    //   Message.productAdd()
    //   return false
    // }

    if (requiredName && !name) {
      Message.nameNot()
      vm.setData({
        secrecy: true,
      })
      return false
    }

    if (requiredPhone && !phone) {
      Message.phoneNot()
      vm.setData({
        secrecy: true,
      })
      return false
    }

    if (requiredWechat && !wechat) {
      Message.wechatNot()
      vm.setData({
        secrecy: true,
      })
      return false
    }

    if (requiredAddress && !address) {
      Message.addressNot()
      vm.setData({
        secrecy: true,
      })
      return false
    }

    return true
  },
  quantityCount() {
    const vm = Stack.page()
    const data = vm.data
    const products = data.products
    const len = products.length
    let i = 0
    let count = 0
    for (i = 0; i < len; i += 1) {
      const item = products[i]
      const quantity = item.quantity
      count += quantity
    }
    if (!count) {
      Message.productAdd()
    }

    return count
  },
}