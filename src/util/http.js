import { Promise } from '../libs/es6-promise'
import STORAGE from './storage'
import LOGIN from '../model/login'
import LANG from '../lang/lang'
// stack
import Status from '../data/status'
// import MSG from '../mwx/msg'


const REQ_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

const HEADER = {
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ',
}

const HEADERFile = {
  'Cache-Control': 'no-cache',
  'Content-Type': 'multipart/form-data',
  'Authorization': 'Bearer ',
}


export default {
  /**
   * 发起 POST 请求
   * @param {any} url
   * @param {any} [data={}]
   * @returns
   */
  post(url, data = {}) {
    const vm = this
    return new Promise((resolve, reject) => {
      const key = wx.getStorageSync(STORAGE.userKey)
        // let key = "123"
      if (!key) {
        const obj = {
          Success: false,
          Code: -9999,
          Message: LANG.LoginKeyNotFind,
        }
        resolve(obj)
        return
      }

      HEADER.Authorization = `Bearer ${key}`

      wx.request({
        url,
        data,
        header: HEADER,
        method: REQ_METHOD.POST,
        success(res) {
          const resData = res.data
          vm.serveReact(res)

          resolve(resData)
        },
        fail: (err) => {
          console.log('请求失败')
          vm.ErrorServe(err)
          reject(err)
        },
      })
    })
  },
  /**
   * 发起GET请求
   *
   * @param {any} url
   * @param {any} data
   * @returns
   */
  get(url, data = {}) {
    const vm = this
    return new Promise((resolve) => {
      console.log('get')
      console.log(url)

      const key = wx.getStorageSync(STORAGE.userKey)
        // let key = "123"
      if (!key) {
        const obj = {
          Success: false,
          Code: -9999,
          Message: LANG.LoginKeyNotFind,
        }
        resolve(obj)
        return
      }

      HEADER.Authorization = `Bearer ${key}`

      wx.request({
        url,
        data,
        header: HEADER,
        method: REQ_METHOD.GET,
        success(res) {
          resolve(res.data)
        },
        fail: (err) => {
          console.log('报错了')
          vm.ErrorServe(err)
          resolve(false)
        },
      })
    })
  },
  file(url, filePath) {
    return new Promise((resolve) => {
      const key = wx.getStorageSync(STORAGE.userKey)

      HEADERFile.Authorization = `Bearer ${key}`

      wx.uploadFile({
        url,
        filePath,
        header: HEADERFile,
        name: 'image',
        formData: {
          'user': 'test',
        },
        success(res) {
          const data = res.data
          console.log(data)
          resolve(data)
        },
      })
    })
  },
  /**
   * service 数据返回响应处理
   *
   * @param {any} res
   */
  serveReact(res) {
    const data = res.data
    if (typeof(res) !== 'object') {
      return
    }
    if (data.Code === -2000) {
      LOGIN.LOGINAll()

      const paeges = getCurrentPages()
      const vm = paeges[paeges.length - 1]
      vm.wetoast.toast()
      vm.setData({
        error: true,
        errorMsg: vm.data.LANG.LoginRefresh,
        emptyImg: vm.data.emptyImg,
      })
    }
  },
  ErrorServe(err) {
    Status.notfind(true, err)
      // MSG.showModal(err.errMsg, '网络发生了故障,请稍后再试')
  },
}