// stack
import Stack from '../mwx/stack'
import Message from '../message/modal'

export default {
  /**
   * 判断跟团是否可以提交
   * @returns
   */
  isSubmit() {
    const vm = Stack.page()
    const open = vm.data.group.open - 0
    // const comment = vm.data.comment

    if (open === 2) {
      Message.groupEnd()
      return false
    }

    // if (!comment) {
    //   Message.groupEnd()
    //   return false
    // }

    return true
  },
}