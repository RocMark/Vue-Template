import JsnlibDesEcb from 'jsnlib-des-ecb.js'


// 使用
// import mixin from '@/mixins/encrypt'  // store.js
// mixin.methods.request() // access mixin method

export default {
  methods: {
    encryptTest() {
      return 'encryptTest From Mixin'
    },
    encryptHeader(data = {}) {
      const key = ''
      JsnlibDesEcb.setKey(key)

      const defaultHeader = {
        clientId: '',
        clientSecret: '',
        // userToken: JSON.parse(localStorage.getItem('admin')).token,
        userToken: 'fake',
        ...data,
      }

      const encryptHeader = JsnlibDesEcb.encrypt(defaultHeader)

      return {
        params: encryptHeader,
      }
    },
    encryptBody(data) {
      // 把 Body 所有屬性先轉成字串 再進行加密
      function formated(obj) {
        Object.keys(obj).forEach((attribute) => {
          if (obj[attribute] !== null && typeof obj[attribute] !== 'string') {
            // eslint-disable-next-line
            obj[attribute] = JSON.stringify(obj[attribute])
          }
        })
        return obj
      }

      // 資料不存在 代表無 Body
      if (!data) return null

      const formatedBody = formated(data)
      console.table(formatedBody)
      console.warn('Request')

      const encryptBody = JsnlibDesEcb.encrypt(formatedBody)

      return {
        params: encryptBody,
      }
    },
  },
}
