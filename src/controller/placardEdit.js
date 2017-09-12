// stack
import Stack from '../mwx/stack'
// set
import SetGroup from '../set/group'
// provider
import ImagePro from '../provider/image'
import GroupPro from '../provider/group'
// middleware
import ImageMiddle from '../middleware/image'
import GroupMiddleware from '../middleware/group'

export default {
  onLoad(ops) {
    const vm = Stack.page()
    vm.setData({
      id: ops.id,
      type_id: 1,
    })
  },
  init() {
    GroupPro.editInit()
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
    GroupPro.update()
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