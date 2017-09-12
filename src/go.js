// 路由控制器
import Go from './mwx/go'
import Route from './route'

export default {
  /**
   * 跳转团详细页显示分享提示
   * @param {any} id
   */
  placardShowShare(id) {
    Go.navToOut(`${Route.placardShow}?share=true&id=${id}`)
  },
  /**
   * 跳转商品团购详细页显示分享提示
   * @param {any} id
   */
  productShowShare(id) {
    Go.navToOut(`${Route.productShow}?share=true&id=${id}`)
  },
  /**
   * 打开拼团详细页
   * @param {any} id
   */
  placardShow(id) {
    Go.navTo(`${Route.placardShow}?id=${id}`)
  },
  /**
   * 编辑拼团详细页
   * @param {any} id
   */
  placardEdit(id) {
    Go.navTo(`${Route.placardEdit}?id=${id}`)
  },
  /**
   * 打开拼团详细页
   * @param {any} id
   */
  productShow(id) {
    Go.navTo(`${Route.productShow}?id=${id}`)
  },
  /**
   * 编辑团购详细页
   * @param {any} id
   */
  productEdit(id) {
    Go.navTo(`${Route.productEdit}?id=${id}`)
  },
  /**
   * 打开导出
   * @param {any} id
   */
  emailSend(id) {
    Go.navTo(`${Route.email}${id}`)
  },
  /**
   * 提交成功后返回上一页
   */
  navBack(title) {
    Go.submitNavBack(title)
  },
}