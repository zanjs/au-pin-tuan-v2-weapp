import {
  Promise,
} from '../libs/es6-promise'
import Product from '../model/product'

export default {
  /**
   * 查询一个团产品信息
   * @param {any} id
   * @returns
   */
  show(id) {
    return new Promise((resolve) => {
      resolve(Product.show(id))
    })
  },

}