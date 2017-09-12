import regeneratorRuntime from '../libs/runtime'
import co from '../libs/co'
// dao
import Dao from '../dao/base'

export default {
  login(page) {
    const vm = page
    console.log(vm.data)

    co(function* c() {
      const userInfo = yield Dao.wxLoginGetUserInfo()

      console.log(userInfo)
    })
  },
  init() {

  },
}