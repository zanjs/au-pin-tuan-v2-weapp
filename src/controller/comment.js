import regeneratorRuntime from '../libs/runtime'
import co from '../libs/co'
// dao
import Dao from '../dao/base'
import Comment from '../dao/comment'
// stack
import Stack from '../mwx/stack'
// event
import Event from '../mwx/event'
import GoType from '../provider/goType'
// page status
import Status from '../data/status'
// print
// import Print from '../fn/print'
// fn
import FnComment from '../fn/comment'

export default {
  init() {
    const vm = Stack.page()
    Status.loading()
    co(function* c() {
      yield Dao.auLogin()

      const commentIndex = yield Comment.index()

      Status.loadingClone()

      const groups = FnComment.recoverGroup(commentIndex.comments)

      vm.setData({
        groups,
      })

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
    const id = Event.dataset(e, 'id')
    const type = Event.dataset(e, 'type')
    GoType.groupShow(id, type)
  },
}