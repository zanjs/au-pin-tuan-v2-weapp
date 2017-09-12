import Print from './print'
import DateTool from '../util/date'

export default {
  recoverGroup(comments) {
    const len = comments.length
    let i
    const group = []
    for (i = 0; i < len; i += 1) {
      const item = comments[i]
      group.push(item.group)
    }
    return group
  },
  List(data) {
    const len = data.length
    const list = data
    let i
    for (i = 0; i < len; i += 1) {
      const item = list[i]
      item.time = DateTool.format(item.created_at)
      Print.Log(item)
    }
  },
}