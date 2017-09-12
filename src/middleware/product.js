// stack
import Stack from '../mwx/stack'
import Message from '../message/modal'

export default {
  add() {
    const vm = Stack.page()
    const data = vm.data
    const products = data.products
    if (!products) {
      return true
    }

    let bool = true
    let i
    const len = products.length

    for (i = 0; i < len; i += 1) {
      const item = products[i]
      const name = item.name
      const price = item.price
      if (name.length < 1 || price.length < 1) {
        bool = false
      }
    }

    return bool
  },
  submit() {
    const vm = Stack.page()
    const data = vm.data
    const products = data.products

    if (!products || !products.length) {
      Message.productAdd()
      return false
    }

    let bool = true
    let i
    const len = products.length

    for (i = 0; i < len; i += 1) {
      const item = products[i]
      const name = item.name
      const price = item.price
      if (name.length < 1 || price.length < 1) {
        bool = false
      }
    }

    if (!bool) {
      Message.productInputNull()
    }

    return bool
  },
}