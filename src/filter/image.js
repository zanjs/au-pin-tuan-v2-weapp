// stack
import Stack from '../mwx/stack'
import ImageFn from '../fn/image'

export default {
  update() {
    const vm = Stack.page()
    const data = vm.data
    const title = data.title
    const description = data.description
    const products = data.products
    const id = data.group.id
    const typeId = data.type_id
    let image = ImageFn.submitImage(data.imageList)


    if (!image.length) {
      image = ''
    }

    image = image.toString()

    const obj = {
      id,
      title,
      description,
      products,
      image,
      type_id: typeId,
      required_u_name: data.required_u_name || 0,
      required_u_phone: data.required_u_phone || 0,
      required_u_wechat: data.required_u_wechat || 0,
      required_u_address: data.required_u_address || 0,
    }

    return obj
  },
}