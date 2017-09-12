// stack
import Stack from '../mwx/stack'

export default {
  update() {
    const vm = Stack.page()
    const data = vm.data
    const title = data.title
    const description = data.description
    const products = data.products
    const id = data.group.id
    const typeId = data.type_id
    const image = data.image
    let arr = []
    const len = image.length
    let i
    for (i = 0; i < len; i += 1) {
      const item = image[i]
      if (item) {
        arr.push(item)
      }
    }

    if (!arr.length) {
      arr = ''
    }

    arr = arr.toString()

    const obj = {
      id,
      title,
      description,
      products,
      image: arr,
      type_id: typeId,
      required_u_name: data.required_u_name || 0,
      required_u_phone: data.required_u_phone || 0,
      required_u_wechat: data.required_u_wechat || 0,
      required_u_address: data.required_u_address || 0,
    }

    return obj
  },
}