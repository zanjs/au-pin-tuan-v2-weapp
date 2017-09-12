import {
  Promise,
} from '../libs/es6-promise'
import HTTP from '../util/http'
import CONFIG from '../config'


export default {
  /**
   * Display a listing of the resource.
   * @returns
   */
  index() {
    return new Promise((resolve) => {
      const url = `${CONFIG.ApiHost}api/group`

      const group = HTTP.get(url)

      group.then((res) => {
        console.log(`store++${res}`)
        resolve(res)
      })

      group.catch((err) => {
        console.log(`store++${err}`)
        resolve(false)
      })
    })
  },
  /**
   * Store a newly created resource in storage
   * @returns
   */
  store(obj) {
    return new Promise((resolve) => {
      const url = `${CONFIG.ApiHost}api/group`

      const group = HTTP.post(url, obj)

      group.then((res) => {
        console.log(`store++${res}`)
        resolve(res)
      })

      group.catch((err) => {
        console.log(`store++${err}`)
        resolve(false)
      })
    })
  },
  /**
   * Display the specified resource.
   * @param {any} id
   * @returns
   */
  show(id) {
    return new Promise((resolve) => {
      const url = `${CONFIG.ApiHost}api/group/${id}`

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
  update(obj) {
    return new Promise((resolve) => {
      const url = `${CONFIG.ApiHost}api/group/update/${obj.id}`

      const group = HTTP.post(url, obj)

      group.then((res) => {
        console.log(`update++${res}`)
        resolve(res)
      })

      group.catch((err) => {
        console.log(`update++${err}`)
        resolve(false)
      })
    })
  },
  /**
   * Display the specified resource.
   * @param {any} id
   * @returns
   */
  edit(id) {
    return new Promise((resolve) => {
      const url = `${CONFIG.ApiHost}api/group/edit/${id}`

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
  updateOpen(obj) {
    return new Promise((resolve) => {
      const url = `${CONFIG.ApiHost}api/group/open/${obj.id}`

      const group = HTTP.post(url, obj)

      group.then((res) => {
        console.log('updateOpen++')
        console.log(res)
        resolve(res)
      })

      group.catch(() => {
        console.log('updateOpen++err')
        resolve(false)
      })
    })
  },
  destroy(id) {
    return new Promise((resolve) => {
      const url = `${CONFIG.ApiHost}api/group/del/${id}`

      const group = HTTP.post(url)

      group.then((res) => {
        console.log('destroy++')
        console.log(res)
        resolve(res)
      })

      group.catch(() => {
        console.log('destroy++err')
        resolve(false)
      })
    })
  },
}