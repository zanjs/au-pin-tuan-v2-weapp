// stack
import Stack from '../mwx/stack'
import Print from '../fn/print'
import Istorage from '../mwx/storage'
// event
import Event from '../mwx/event'
// procider
import EmailPro from '../provider/email'

export default {
  onLoad(options) {
    const vm = Stack.page()
    const id = options.id
    vm.setData({
      id,
    })
  },
  show() {
    const vm = Stack.page()
    const email = Istorage.get(Istorage.email)
    if (email) {
      vm.setData({
        email,
      })
    }
  },
  bindEmailInput(e) {
    const vm = Stack.page()
    const email = Event.value(e)
    vm.setData({
      email,
    })

    Istorage.set(Istorage.email, email)
  },
  submit() {
    const vm = Stack.page()
    const email = vm.data.email
    Print.Log(email)

    EmailPro.send()
  },
}