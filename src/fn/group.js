import Print from './print'
import DateTool from '../util/date'

export default {
  List(data) {
    const len = data.length
    const list = data
    let i
    for (i = 0; i < len; i += 1) {
      const item = list[i]
      const itime = item.created_at.replace(/-/g, '/')
      item.time = DateTool.format(itime)
      Print.Log(item)
    }
  },
  
}