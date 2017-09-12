/**
 * Created by Anla-E on 2017/7/24.
 */

export default {
  orderCount(list) {
    const len = list.length
    let i
    let count = 0
    for (i = 0; i < len; i += 1) {
      const item = list[i]
      count += item.quantity
    }
    return count
  },
}