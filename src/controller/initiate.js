import regeneratorRuntime from '../libs/runtime'
import co from '../libs/co'
// dao
import Dao from '../dao/base'
import Group from '../dao/group'
// stack
import Stack from '../mwx/stack'
// mgs
import MSG from '../mwx/msg'
// event
import Event from '../mwx/event'
import GoType from '../provider/goType'
// page status
import Status from '../data/status'
// print
import Print from '../fn/print'
// fn
import GroupFn from '../fn/group'

export default {
  init() {
    const vm = Stack.page()
    Status.loading()

    co(function* c() {
      yield Dao.auLogin()

      const groupIndex = yield Group.index()

      Status.loadingClone()

      const groups = groupIndex.group

      GroupFn.List(groups)

      vm.setData({
        groups,
      })
      Print.Log(groupIndex)

      if (!groups.length) {
        Status.notfind(true)
      }
    })
  },
  /**
   * 查看详情
   * @param {any} e
   */
  tapDetail(e) {
    Print.Log(e)
    const id = Event.dataset(e, 'id')
    const type = Event.dataset(e, 'type')

    GoType.groupShow(id, type)
    Print.Log(id)
    Print.Log(type)
  },
  /**
   * 删除
   * @param {any} e
   */
  tapDel(e) {
    const id = Event.dataset(e, 'id')
    const that = this
    const content = `确定要删除 No: ${id} 吗?`
    const title = '删除确认'
    MSG.showModalCancel(content, title, (bool) => {
      if (bool) {
        that.delGroup(id)
      }
    })
  },
  delGroup(id) {
    const that = this
    co(function* c() {
      const delReq = yield Group.destroy(id)

      if (delReq.error) {
        MSG.showModal(delReq.message)
        return
      }

      MSG.title('ok')

      that.init()
      Print.Log(delReq)
    })
  },
}