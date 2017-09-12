// stack
import Stack from '../mwx/stack'

export default {
  /**
   * 删除跟团信息
   * @param {any} index 数组主索引
   */
  commentDel(index) {
    const vm = Stack.page()
    const commentsList = vm.data.commentsList
    commentsList.splice(index, 1)
    vm.setData({
      commentsList,
    })
  },
}