import Go from '../go'

export default {
  groupShow(id, type) {
    if (type === 1) {
      Go.placardShow(id)
    } else {
      Go.productShow(id)
    }
  },
  groupEdit(id, type) {
    if (type === 1) {
      Go.placardEdit(id)
    }
  },
}