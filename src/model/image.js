import {
  Promise,
} from '../libs/es6-promise'
import HTTP from '../util/http'
import CONFIG from '../config'

export default {
  /**
   * Store a newly created resource in storage
   * @returns
   */
  store(filepath) {
    return new Promise((resolve) => {
      const url = `${CONFIG.ApiHost}api/image/upload`

      const resData = HTTP.file(url, filepath)

      resData.then((res) => {
        console.log(`store++${res}`)
        resolve(JSON.parse(res))
      })

      resData.catch((err) => {
        console.log(`store++${err}`)
        resolve(false)
      })
    })
  },
  destroy(obj) {
    return new Promise((resolve) => {
      const url = `${CONFIG.ApiHost}api/image/del/${obj.id}`

      const resData = HTTP.post(url, obj)

      resData.then((res) => {
        console.log(res)
        console.log('destroy++')
        resolve(JSON.parse(res))
      })

      resData.catch((err) => {
        console.log(`destroy++${err}`)
        resolve(false)
      })
    })
  },
  delete(obj) {
    return new Promise((resolve) => {
      const url = `${CONFIG.ApiHost}api/image/delete?img=${obj.img}`

      const resData = HTTP.post(url, obj)

      resData.then((res) => {
        console.log(res)
        console.log('delete++')
        resolve(JSON.parse(res))
      })

      resData.catch((err) => {
        console.log(`delete++${err}`)
        resolve(false)
      })
    })
  },
}