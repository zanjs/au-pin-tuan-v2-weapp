export default {
  /**
   * 获取当前页面栈
   * @returns
   */
  page() {
    return getCurrentPages()[getCurrentPages().length - 1]
  },
}