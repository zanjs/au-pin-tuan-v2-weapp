import Stack from '../mwx/stack'
import EventW from '../mwx/event'

export default {
  isUpload(e) {
    const vm = Stack.page()
    const index = EventW.dataset(e, 'id')
    const deletel = vm.data.imageList[index].delete
    return deletel
  },
}