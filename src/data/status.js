// stack
import Stack from '../mwx/stack'

export default {
  /**
   * 页面加载状态
   */
  loading() {
    const vm = Stack.page()
    vm.setData({
      loading: true,
    })
  },
  loadingClone() {
    const vm = Stack.page()
    vm.setData({
      loading: false,
    })
  },
  /**
   * 数据错误处理
   * @param {any} notfind
   * @param {string} [notfindMsg='没找到数据哎...']
   */
  notfind(notfind, notfindMsg = '没找到数据哎...') {
    const vm = Stack.page()
    vm.setData({
      notfind,
      notfindMsg,
    })
  },
}