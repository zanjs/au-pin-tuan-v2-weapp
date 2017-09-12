// stack
import Stack from '../mwx/stack'
// fn
import FnProduct from '../fn/product'
import FnOrder from '../fn/order'
import FnString from '../fn/string'

export default {
  products(data) {
    const vm = Stack.page()
    const len = data.length
      // const products = data
    let i
    const products = []
    for (i = 0; i < len; i += 1) {
      const item = data[i]
      const newItem = {
        product_id: item.id,
        product_quantity: item.quantity,
        product_order_count: FnOrder.orderCount(item.product_order),
        quantity: 0,
        name: item.name,
        price: item.price,
      }
      products.push(newItem)
    }

    vm.setData({
      products,
    })
  },
  productsIndex(bool, index) {
    const vm = Stack.page()
    const products = vm.data.products
    const product = products[index]
    let quantity = products[index].quantity
    if (bool) {
      quantity += 1
    } else {
      quantity -= 1
    }

    if (quantity < 0) {
      quantity = 0
    }

    const surplus = product.product_quantity - product.product_order_count

    if (surplus < quantity && product.product_quantity) {
      return
    }

    products[index].quantity = quantity

    let totalPrice = FnProduct.totalPrice(products)
    totalPrice = FnString.toDecimal2(totalPrice)

    vm.setData({ products, totalPrice })
  },
}