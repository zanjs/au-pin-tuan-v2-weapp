// provider 层 服务提供者
import {
  Promise,
} from '../libs/es6-promise'
import regeneratorRuntime from '../libs/runtime'
import co from '../libs/co'
// stack
import Stack from '../mwx/stack'
import Comment from '../dao/comment'
import Print from '../fn/print'
import Go from '../go'
// set
import SetGroup from '../set/group'
import SetUser from '../set/user'
// storage
import Storage from '../util/storage'
// doa
import Dao from '../dao/base'
import Group from '../dao/group'
import Product from '../dao/product'
import User from '../dao/user'
import Istorage from '../mwx/storage'
// filter
import ImageFilter from '../filter/image'
// middleware
import GroupMiddleware from '../middleware/group'
import Status from '../data/status'
// fn
import GroupFn from '../fn/group'

export default {
  editInit() {
    const vm = Stack.page()
    const data = vm.data

    co(function* c() {
      yield Dao.auLogin()

      const groupEdit = yield Group.edit(data.id)
      const group = groupEdit.group
      SetGroup.Group(group)
      Print.Log(group)
      SetUser.info()
      SetGroup.ImageListAdd()
      if (group.type_id !== 2) {
        return
      }

      const products = yield Product.show(group.id)
      SetGroup.products(products.products)
    })
  },
  store() {
    const vm = Stack.page()
    const data = vm.data
    const title = data.title
    const description = data.description
    const products = data.products
    const typeId = data.type_id
    let image = data.image

    if (!image.length) {
      image = ''
    }

    image = image.toString()

    const obj = {
      description,
      image,
      title,
      products,
      type_id: typeId,
      required_u_name: data.required_u_name || 0,
      required_u_phone: data.required_u_phone || 0,
      required_u_wechat: data.required_u_wechat || 0,
      required_u_address: data.required_u_address || 0,
    }

    const req = Group.store(obj)
    Print.Log(req)

    req.then((val) => {
      const id = val.group.id
      Print.Log(id)

      Istorage.remove(Istorage.description)
      Istorage.remove(Istorage.image)
      Istorage.remove(Istorage.imageList)

      if (typeId === 1) {
        Go.placardShowShare(id)
      } else {
        Go.productShowShare(id)
      }
    })
  },
  update() {
    Status.loading()
    const obj = ImageFilter.update()
    const req = Group.update(obj)
    req.then(() => {
      Status.loadingClone()
      GroupMiddleware.submitOk(obj)
    })
  },
  /**
   * @returns
   */
  commentDel(id) {
    return new Promise((resolve) => {
      const reqData = Comment.destroy(id)
      reqData.then((val) => {
        resolve(val)
      })
    })
  },
  /**
   * 更新接龙信息
   */
  upComment() {
    const vm = Stack.page()
    const data = vm.data
    const commentShow = Comment.show(data.id)

    commentShow.then((res) => {
      const commentsList = res.comments
      GroupFn.List(commentsList)
      vm.setData({
        commentsList,
      })
      Print.Log(commentsList)
    })
  },
  isOpen() {
    const userInfo = Storage.get(Storage.userInfo)

    userInfo.then((res) => {
      Print.Log(res)
      if (res) {
        Print.Log('you')
        SetGroup.isOpenAsyn(res)
      } else {
        Print.Log('mei you userinfo')
      }
    })
  },
  userInfo() {
    const vm = Stack.page()
    const user = User.me()

    user.then((res) => {
      Print.Log(res)
      const userInfo = res
      vm.setData({
        userInfo,
        name: userInfo.u_name || '',
        phone: userInfo.u_phone || '',
        wechat: userInfo.u_wechat || '',
        address: userInfo.u_address || '',
      })
    })
  },
}