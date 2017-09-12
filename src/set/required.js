// stack
import Stack from '../mwx/stack'
// envent
import Event from '../mwx/event'

export default {
  /**
   * 设置必填项
   * @param {any} e
   */
  u(e) {
    const vm = Stack.page()
    const data = vm.data
    const val = Event.value(e)
    const typeName = Event.dataset(e, 'name')

    const obj = {
      required_u_name: data.required_u_name || 0,
      required_u_phone: data.required_u_phone || 0,
      required_u_wechat: data.required_u_wechat || 0,
      required_u_address: data.required_u_address || 0,
    }

    obj[`required_u_${typeName}`] = val

    vm.setData(obj)
  },
}