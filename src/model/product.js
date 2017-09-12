import {
  Promise,
} from '../libs/es6-promise'
import HTTP from '../util/http'
import CONFIG from '../config'


export default {
  /**
   * Display the specified resource.
   * @param {any} id
   * @returns
   */
  show(id) {
    return new Promise((resolve) => {
      const url = `${CONFIG.ApiHost}api/group/product/${id}`

      const group = HTTP.get(url)

      group.then((res) => {
        console.log(`show++${res}`)
        console.log(res)
        resolve(res)
      })

      group.catch((err) => {
        console.log(`show++${err}`)
        resolve(false)
      })
    })
  },
}