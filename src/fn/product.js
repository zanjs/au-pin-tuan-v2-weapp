export default {
  totalPrice(data) {
    const len = data.length
    let total = 0
    let i
    for (i = 0; i < len; i += 1) {
      const item = data[i]
      const price = item.price * item.quantity
      total += price
    }
    return total
  },
  commentProduct(products) {
    const len = products.length
    let str = ''
    let i
    for (i = 0; i < len; i += 1) {
      const item = products[i]
      const itemStr = `${item.name} x ${item.quantity}`
      if ((item.quantity - 0) > 0) {
        str += `${itemStr}\n`
      }
    }

    return str
  },
  getSubProducts(products) {
    const len = products.length
    const arr = []
    let i
    for (i = 0; i < len; i += 1) {
      const item = products[i]
      const newItem = {}
      newItem.product_id = item.product_id
      newItem.quantity = item.quantity

      arr.push(newItem)
    }

    return arr
  },
}