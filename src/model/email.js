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
  send(id, email) {
    return new Promise((resolve) => {
      const url = `${CONFIG.ApiHost}api/email/send?email=${email}&id=${id}`

      const group = HTTP.get(url)

      group.then((res) => {
        console.log(`send++${res}`)
        console.log(res)
        resolve(res)
      })

      group.catch((err) => {
        console.log(`send++${err}`)
        resolve(false)
      })
    })
  },
}