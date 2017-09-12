// js 工具集
export default {
  /**
   * 数据对象深拷贝
   * @param {any} arrObj
   * @returns
   */
  deepCopy(arrObj) {
    const vm = this
    if (arrObj instanceof Array) {
      const n = []
      for (let i = 0; i < arrObj.length; i += 1) {
        n[i] = vm.deepCopy(arrObj[i])
      }
      return n
    } else if (arrObj instanceof Object) {
      const n = {}
      for (var i in arrObj) {
        n[i] = vm.deepCopy(arrObj[i])
      }
      return n
    } else {
      return arrObj
    }
  },
  /**
   * 过滤重复数组
   *
   * @param {any} arr
   * @returns
   */
  unique(arr) {
    const result = []
    const hash = {}
    for (var i = 0, elem;
      (elem = arr[i]) != null; i++) {
      if (!hash[elem]) {
        result.push(elem)
        hash[elem] = true
      }
    }
    return result
  },
  /**
   * 验证 URL
   *
   * @param {any} URL
   * @returns
   */
  checkURL(URL) {
    const str = URL
      // 判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
      // 下面的代码中应用了转义字符"\"输出一个字符"/"
    const Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
    const objExp = new RegExp(Expression)
    if (objExp.test(str) == true) {
      return true
    } else {
      return false
    }
  },
  /**
   * 验证手机号
   *
   * @param {any} tel
   * @returns
   */
  checkPhone(tel) {
    const reg = /^(13\d|14[57]|15[^4\D]|17[0135-8]|18\d)\d{8}$/
    const phone = tel.toString().replace(/(^\s*)|(\s*$)/g, '')
    return reg.test(phone)
  },
  /**
   * 取整进一
   *
   * @param {any} v
   * @returns
   */
  modFoat(v) {
    let _max = parseInt(v) + 1
    if (_max - v < 1) {
      return _max
    }
    return v
  },
  /**
   * 保留 n 位小数
   * 解决 toFixed bug
   * @param {any} num
   * @param {any} fractionDigits
   * @returns
   */
  iTofixed(digit, length) {
    const leng = length ? length - 0 : 0
    if (leng <= 0) return Math.round(digit)
    return Math.round(digit * Math.pow(10, leng)) / Math.pow(10, leng)
  },
  /**
   * 进位精度问题 保留s为小数四舍五入
   * @param {any} num
   * @param {any} s
   * @returns
   */
  toFloatFixed(num, s) {
    const times = Math.pow(10, s)
    const des = num * times
    const intNum = Math.round(des)
    const finalNum = intNum / times

    return finalNum
  },
  /**
   * 强制保留两位小数  不足时补充0
   */
  fixTwoNum(f_x) {
    let s_x = f_x.toString()
    var pos_decimal = s_x.indexOf('.')
    if (pos_decimal < 0) {
      pos_decimal = s_x.length
      s_x += '.'
    }
    while (s_x.length <= pos_decimal + 2) {
      s_x += '0'
    }

    // console.log(typeof parseFloat(s_x))
    return s_x
  },
  trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, '')
  },
  /**
   * 时间显示格式化
   * @param {any} t
   * @returns
   */
  timeCity(t) {
    let time = t.split(':')
    time = `${time[0]}:${time[1] || '00'}`
    time = time.replace(/-/g, '.')
    return time
  },
}