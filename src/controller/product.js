// stack
import Stack from '../mwx/stack'
// middleware
import GroupMiddleware from '../middleware/group'
import ProductMiddleware from '../middleware/product'
// provider
import GroupProvider from '../provider/group'
import LoginProvider from '../provider/login'
import StoragePro from '../provider/storage'
// print
import Print from '../fn/print'
// message
import Message from '../message/modal'
// envent
import Event from '../mwx/event'
// set
import SetGroup from '../set/group'
import SetProduct from '../set/product'
import SetRequired from '../set/required'
import ImagePro from '../provider/image'
// middle
import ImageMiddle from '../middleware/image'

export default {
  onLoad() {
    const vm = Stack.page()
    vm.setData({
      type_id: 2,
    })
  },
  init() {
    LoginProvider.initLoginUser()
    StoragePro.description()
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
    if (!ProductMiddleware.submit()) {
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
    const val = Event.value(e)
    const index = Event.dataset(e, 'index')
    const name = Event.dataset(e, 'name')
    const products = vm.data.products
    products[index][name] = val

    SetProduct.products(products)
  },
  bindPorudctDel(e) {
    const index = Event.dataset(e, 'index')
    SetProduct.removeIndex(index)
  },
  /**
   * 删除图片
   * @param {any} e
   */
  bindImgDelete(e) {
    ImagePro.destroy(e)
  },
  switch1Change(e) {
    SetRequired.u(e)
  },
}