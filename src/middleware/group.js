// stack
import Stack from '../mwx/stack'
// msg
import MSG from '../mwx/msg'
import Istorage from '../mwx/storage'
import Go from '../go'

export default {
  submit() {
    const vm = Stack.page()
    const description = vm.data.description
    const imgUpload = vm.data.loading
    if (description.length < 7) {
      MSG.showModal('多写点描述吧')
      return false
    }
    if (imgUpload) {
      MSG.showModal('图片在上传,等一下下咯')
      return false
    }
    return true
  },
  submitOk(obj) {
    Istorage.remove(Istorage.description)
    Istorage.remove(Istorage.image)
    Istorage.remove(Istorage.imageList)

    if (obj.type_id === 1) {
      Go.placardShowShare(obj.id)
    } else {
      Go.productShowShare(obj.id)
    }
  },
}