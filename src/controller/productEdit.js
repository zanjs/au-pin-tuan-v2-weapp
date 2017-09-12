// stack
import Stack from '../mwx/stack'
// set
import SetGroup from '../set/group'
import SetProduct from '../set/product'
import SetRequired from '../set/required'
// provider
import ImagePro from '../provider/image'
import GroupPro from '../provider/group'
// print
import Print from '../fn/print'
// middleware
import ImageMiddle from '../middleware/image'
import GroupMiddleware from '../middleware/group'
import ProductMiddleware from '../middleware/product'
// message
import Message from '../message/modal'
// event
import EventM from '../mwx/event'

export default {
  onLoad(ops) {
    const vm = Stack.page()
    vm.setData({
      id: ops.id,
      type_id: 2,
    })
  },
  init() {
    GroupPro.editInit()
  },
  bindTextAreaBlur(e) {
    SetGroup.description(e)
  },
  bindTitle(e) {
    SetGroup.title(e)
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
  /**
   * 添加商品
   */
  tapAddProduct() {
    if (!ProductMiddleware.add()) {
      Message.productInput()
      return
    }
    SetProduct.push()
    Print.Log('ok')
  },
  bindProduct(e) {
    const vm = Stack.page()
    const val = EventM.value(e)
    const index = EventM.dataset(e, 'index')
    const name = EventM.dataset(e, 'name')
    const products = vm.data.products
    products[index][name] = val

    SetProduct.products(products)
  },
  bindPorudctDel(e) {
    const index = EventM.dataset(e, 'index')
    SetProduct.removeIndex(index)
  },
  switch1Change(e) {
    SetRequired.u(e)
  },
}