import {
  Promise,
} from '../libs/es6-promise'
// import regeneratorRuntime from '../libs/runtime'
// import co from '../libs/co'
// dao
import Dao from '../dao/base'
import User from '../dao/user'

export default {
  initLoginUser() {
    return new Promise((resolve) => {
      const userToken = Dao.auLogin()
      userToken.then(() => {
        resolve(User.me())
      })
    })
  },
}