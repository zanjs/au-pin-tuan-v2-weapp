// stack
import Stack from '../mwx/stack'
import Print from '../fn/print'
// fn
import ArrayFn from '../fn/array'

export default {
  products(products) {
    const vm = Stack.page()
    vm.setData({
      products,
    })
  },
  push() {
    const vm = Stack.page()
    let products = vm.data.products

    Print.Log('in push')

    const product = {
      name: '',
      price: '',
      quantity: '',
    }
    if (!products) {
      products = []
    }

    products.push(product)

    vm.setData({
      products,
    })
  },
  removeIndex(index) {
    const vm = Stack.page()
    const products = vm.data.products
    ArrayFn.removeIndex(products, index)

    // products.splice(index, 1)
    vm.setData({
      products,
    })
  },
}