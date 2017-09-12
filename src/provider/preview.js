// stack
import Stack from '../mwx/stack'
// image
import Image from '../mwx/image'
import Print from '../fn/print'

export default {
  /**
   * 预览头像
   */
  avatar() {
    const vm = Stack.page()

    let avatar

    try {
      avatar = !vm.data.group.avatar
    } catch (error) {
      Print.Error(error)
      return
    }
    if (avatar) {
      Image.previewImage(avatar, [avatar])
    }
  },
}