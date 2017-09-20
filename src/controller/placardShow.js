import regeneratorRuntime from '../libs/runtime'
import co from '../libs/co'
// dao
import Dao from '../dao/base'
import Group from '../dao/group'
import Comment from '../dao/comment'
// stack
import Stack from '../mwx/stack'
// mgs
import MSG from '../mwx/msg'
// lang
import Lang from '../lang/lang'
import Config from '../config'

// image
import Image from '../mwx/image'
import Event from '../mwx/event'
// status
import Status from '../data/status'
// go
import Go from '../go'
// set
import SetGroup from '../set/group'
import SetComment from '../set/comment'
import Print from '../fn/print'
// provider
import GroupProvider from '../provider/group'
import PreviewPro from '../provider/preview'
// filter
import CommentFilter from '../filter/comment'


export default {
  onLoad(ops) {
    const vm = Stack.page()
    vm.setData({
      id: ops.id,
      FileHost: Config.FileHost,
    })
    if (ops.share) {
      MSG.showModal(Lang.ShareFriend, Lang.PostOK)
    }
  },
  init() {
    const vm = Stack.page()
    const data = vm.data

    Status.loading()

    co(function* c() {
      yield Dao.auLogin()

      const groupShow = yield Group.show(data.id)

      const group = groupShow.group

      if (!group) {
        Print.Log('group 错误了')
        return
      }

      SetGroup.Group(group)

      SetGroup.comment(groupShow.comment)

      Print.Log(groupShow.group)

      GroupProvider.upComment()
      GroupProvider.isOpen()

      Status.loadingClone()
    })
  },
  bindKeyInput(e) {
    const vm = Stack.page()
    vm.setData({
      comment: e.detail.value,
    })
    Print.Log(vm)
  },
  /**
   * 提交接龙
   */
  submit() {
    const vm = Stack.page()
    const comment = vm.data.comment
    const id = vm.data.id

    if (!CommentFilter.isSubmit()) {
      return
    }

    const obj = {
      comment,
      group_id: id,
    }

    Status.loading()

    co(function* c() {
      const req = yield Comment.store(obj)
      Print.Log(req)
      Status.loadingClone()
      GroupProvider.upComment()
    })
  },
  tapImage(e) {
    const vm = Stack.page()
    const images = vm.data.image || []
    const index = Event.dataset(e, 'index')
    Print.Log(images)
    Image.previewImage(images[index], images)
  },
  tapCodeImage() {
    const vm = Stack.page()
    const codeSrc = vm.data.codeSrc
    Image.previewImage(codeSrc, [codeSrc])
  },
  tabAvatar() {
    PreviewPro.avatar()
  },
  /**
   * 修改团状态 open
   */
  tapOpen() {
    const vm = Stack.page()
    const data = vm.data
    const group = data.group

    /* eslint no-unused-expressions: "error" */
    if (group.open === 1) {
      group.open = 2
    } else {
      group.open = 1
    }

    vm.setData({
      group,
    })

    Group.updateOpen(group)
  },
  /**
   * 显示更多描述
   */
  tapDesc() {
    const vm = Stack.page()
    const data = vm.data
    if (data.descMore) {
      vm.setData({
        descBtn: !data.descBtn,
      })
    }
  },
  tapEdit() {
    const vm = Stack.page()
    const data = vm.data
    const group = data.group
    Go.placardEdit(group.id)
  },
  tapEmail() {
    const vm = Stack.page()
    const data = vm.data
    const group = data.group
    Go.emailSend(group.id)
  },
  /**
   * 删除跟团信息
   * @param {any} e
   */
  tabCommentDel(e) {
    const id = Event.dataset(e, 'id')
    const alias = Event.dataset(e, 'alias')
    const index = Event.dataset(e, 'index')
    const content = `确定要删除 ${alias} 的信息吗?`
    const title = '删除确认'
    MSG.showModalCancel(content, title, (bool) => {
      if (bool) {
        SetComment.commentDel(index)
        GroupProvider.commentDel(id)
      }
    })

    Print.Log(id)
  },
}