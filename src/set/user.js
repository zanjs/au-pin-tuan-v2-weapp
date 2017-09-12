// stack
import Stack from '../mwx/stack'
import IStorage from '../mwx/storage'

export default {
  info() {
    const vm = Stack.page()
    const userInfo = IStorage.get(IStorage.userInfo)
    vm.setData({
      userInfo,
    })
  },
}