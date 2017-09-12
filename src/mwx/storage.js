import Print from '../fn/print'

export default {
  title: 'title',
  description: 'description',
  imageList: 'imageList',
  image: 'image',
  email: 'email',
  userInfo: 'userInfo',
  set(key, val) {
    try {
      return wx.setStorageSync(key, val)
    } catch (e) {
      Print.Error(e)
      return false
    }
  },
  get(key) {
    try {
      return wx.getStorageSync(key)
    } catch (e) {
      Print.Error(e)
      return false
    }
  },
  remove(key) {
    try {
      return wx.removeStorageSync(key)
    } catch (e) {
      Print.Error(e)
      return false
    }
  },
}