import LANG from '../lang/lang'
import CONFIG from '../config'

export default {
  data: {
    error: false,
    errorMsg: LANG.ErrorMsg,
    emptyShow: false,
    emptyTxt: LANG.ShoppingCartIsEmpty,
    emptyImg: `${CONFIG.ImgHost}img/empty.png`,
    loading: false,
    imgUrlProxy: CONFIG.imgUrlProxy,
    'LANG': LANG,
  },
}