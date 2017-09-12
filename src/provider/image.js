import regeneratorRuntime from '../libs/runtime'
import co from '../libs/co'

import Image from '../dao/image'
// stack
import Stack from '../mwx/stack'
import WXimage from '../mwx/image'
import Event from '../mwx/event'
import Print from '../fn/print'
import Config from '../config'
// fn
import FnImage from '../fn/image'
import Istorage from '../mwx/storage'

export default {
  /**
   * 点击选择图片上传
   * @param {any} e
   */
  Upload(e) {
    const vm = Stack.page()
    const imgIndex = Event.dataset(e, 'id')
    const data = vm.data
    const imageList = data.imageList
    const image = data.image

    co(function* c() {
      const filepath = yield WXimage.chooseImage()

      if (!filepath) {
        Print.Log('选择图片取消')
        return
      }
      Print.Log(filepath)
      Print.Log(imgIndex)
      imageList[imgIndex].src = filepath

      vm.setData({
        imageList,
        loading: true,
      })

      const imgPath = yield Image.store(filepath)

      Print.Log(imgPath)

      imageList[imgIndex].src = imgPath.src
      imageList[imgIndex].delete = true

      image[imgIndex] = imgPath.path

      const addList = {
        src: '',
      }

      imageList.push(addList)

      vm.setData({
        imageList,
        image,
        loading: false,
      })

      Istorage.set(Istorage.image, image)
      Istorage.set(Istorage.imageList, imageList)
    })
  },
  destroy(e) {
    const vm = Stack.page()
    const imgIndex = Event.dataset(e, 'id')
    const userInfo = Istorage.get(Istorage.userInfo)
    const data = vm.data
    const imageList = data.imageList
    const image = data.image
    const delImage = data.image[imgIndex]

    image[imgIndex] = ''
    imageList[imgIndex].src = ''
    imageList[imgIndex].delete = false
    vm.setData({
      imageList,
      image,
    })

    Istorage.set(Istorage.image, image)
    Istorage.set(Istorage.imageList, imageList)

    const obj = {
      img: FnImage.replacePrefix(delImage, userInfo.id),
    }

    Image.delete(obj)
  },
  editViewImg(e) {
    const vm = Stack.page()
    const index = Event.dataset(e, 'id')
    const data = vm.data
    const image = data.image
    const len = image.length
    const arr = []
    let i

    for (i = 0; i < len; i += 1) {
      const item = image[i]
      arr.push(Config.FileHost + item)
    }

    Print.Log(arr)

    WXimage.previewImage(arr[index], arr)
  },
}