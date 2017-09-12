import Email from '../../controller/email'

Page({
  data: {},
  bindEmailInput(e) {
    Email.bindEmailInput(e)
  },
  submit() {
    Email.submit()
  },
  onLoad(options) {
    Email.onLoad(options)
  },
  onShow() {
    Email.show()
  },
  onReady() {},
  onHide() {},
  onUnload() {},
})