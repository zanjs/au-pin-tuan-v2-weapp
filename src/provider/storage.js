// stack
import Stack from '../mwx/stack'
import Istorage from '../mwx/storage'

export default {
  description() {
    const vm = Stack.page()
    const description = Istorage.get(Istorage.description)
    if (description) {
      vm.setData({
        description,
      })
    }
    const imageList = Istorage.get(Istorage.imageList)
    const image = Istorage.get(Istorage.image)

    if (imageList) {
      vm.setData({
        imageList,
        image,
      })
    }
  },
}