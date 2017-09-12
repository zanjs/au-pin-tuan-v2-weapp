// stack
import Stack from '../mwx/stack'
// middleware
import GroupMiddleware from '../middleware/group'
// provider
import GroupProvider from '../provider/group'
import LoginProvider from '../provider/login'
import StoragePro from '../provider/storage'
import Istorage from '../mwx/storage'
import Event from '../mwx/event'
import ImagePro from '../provider/image'
// set
import SetGroup from '../set/group'
// middle
import ImageMiddle from '../middleware/image'


export default {
  onLoad() {
    const vm = Stack.page()
    vm.setData({
      type_id: 1,
    })
  },
  init() {
    LoginProvider.initLoginUser()
    StoragePro.description()
  },
  bindTitle(e) {
    SetGroup.title(e)
  },
  bindTextAreaBlur(e) {
    SetGroup.description(e)
  },
  submit() {
    if (!GroupMiddleware.submit()) {
      return
    }
    GroupProvider.store()
  },
  /**
   * 点击选择图片上传
   * @param {any} e
   */
  bindUpload(e) {
    if (ImageMiddle.isUpload(e)) {
      ImagePro.editViewImg(e)
      return
    }
    ImagePro.Upload(e)
  },
  /**
   * 删除图片
   * @param {any} e
   */
  bindImgDelete(e) {
    ImagePro.destroy(e)
  },
}