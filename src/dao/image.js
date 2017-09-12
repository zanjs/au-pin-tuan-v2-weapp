import {
  Promise,
} from '../libs/es6-promise'
import Image from '../model/image'

export default {
  /**
   * 上传图片
   * @param {any} filepath
   * @returns
   */
  store(filepath) {
    return new Promise((resolve) => {
      resolve(Image.store(filepath))
    })
  },
  destroy(obj) {
    return new Promise((resolve) => {
      resolve(Image.destroy(obj))
    })
  },
  delete(obj) {
    return new Promise((resolve) => {
      resolve(Image.delete(obj))
    })
  },
}