import axios from 'axios'
// const domain = process.env.DOMAIN
const domain = process.env.DOMAIN
// const baseURL = 'http://loccalhost:3000'

const requestAuth = axios.create({
  baseURL: `${domain}/auth/login`,
  headers: { 'Content-Type': 'application/json' }
})
// auth api 攔截器
requestAuth.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          alert('驗證錯誤，請重新執行')
          break
        case 405:
          alert('資料傳送出現錯誤，請聯絡管理員')
          break
        default:
          alert('出現錯誤，請刷新後重新嘗試登入')
      }
    }
    if (!window.navigator.onLine) {
      alert('網路出了問題，請重新連線後重整網頁')
      return
    } else if (window.navigator.onLine && !error.response) {
      alert('出現不明錯誤，請刷新後嘗試\n 若重複出現錯誤，請聯絡管理員')
      return
    }
    return Promise.reject(error)
  }
)

const requestUser = axios.create({
  baseURL: `${domain}/user`,
})

requestUser.interceptors.response.use(
  function (response) {
    return response
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          alert('驗證錯誤，請重新輸入')
          break
        case 405:
          alert('資料傳送出現錯誤，請聯絡管理員')
          break
        case 409:
          alert('伺服器出現錯誤，請刷新後嘗試 \n 若重複出現錯誤，請聯絡管理員')
          break
        default:
          alert('出現錯誤，請刷新後重新嘗試登入')
      }
    }
    if (!window.navigator.onLine) {
      alert('網路出了問題，請重新連線後重整網頁\n若確認已連線，請聯絡管理員')
      return
    } else if (window.navigator.onLine && !error.response) {
      alert('出現不明錯誤，請刷新後嘗試\n 若重複出現錯誤，請聯絡管理員')
      return
    }
    return Promise.reject(error)
  }
)

const requestOrder = axios.create({
  baseURL: `${domain}/order`,
})

const apiAuthLogin = (data) => requestAuth.post('/', data)
const apiAuthLoginPassword = (data) => requestAuth.post('/password', data)
const apiAuthLoginLine = (data) => requestAuth.post('/line', data)

const apiUser = (data) => requestUser.post('/', data)
const apiUserVerify = (param, data) =>
  requestUser.post(`/${param}/verify`, data)
const apiUserPassword = (param, data) =>
  requestUser.post(`/${param}/password`, data)
const apiUserLine = (param, data) => requestUser.post(`/${param}/line`, data)

const apiOrder = (data) => requestOrder.post('/', data)

export {
  apiAuthLogin,
  apiAuthLoginPassword,
  apiAuthLoginLine,
  apiUser,
  apiUserVerify,
  apiUserPassword,
  apiUserLine,
  apiOrder,
}
