export default {
  /**
   * 获取元素的 data 私有属性
   * @param {any} event
   * @param {any} key
   * @returns
   */
  dataset(event, key) {
    return event.currentTarget.dataset[key]
  },
  value(event) {
    return event.detail.value
  },
  formId(event) {
    return event.detail.formId
  },
}