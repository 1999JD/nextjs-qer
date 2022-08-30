import { useState } from 'react'
import { Button, TextField, FormControlLabel, Checkbox, Link, Typography } from '@mui/material'
import { apiUser, apiUserVerify } from '../../api/index'
import useInterval from '../../hooks/useInterval'


function SMS({ account, setPageName, uid, setUid }) {
  const [code, setCode] = useState("")
  const [checkAuth, setCheckAuth] = useState(false)
  const [time, setTime] = useState(20)
  const [hasSentApply, setHasSentApply] = useState(false)
  const [isClickable, setIsClickable] = useState(true)
  const [isRunning, setIsRunning] = useState(false)
  const applyCode = async (e) => {
    e.preventDefault()
    if (!isClickable) return
    if (!checkAuth) {
      alert('請勾選是否同意服務條款與隱私權政策')
      return
    }
    setIsClickable(false)
    setTime(20)
    setIsRunning(true)
    // axios 送 / user /
    apiUser({
      ICP: account.ICP,
      phone: account.phone
    }).then(response => response.data).then(res => {
      setHasSentApply(true)
      setUid(res.userID)
    }).catch(error => {
      if (error) return false
    })
  }

  useInterval(() => {
    if (time === 0) {
      setIsClickable(true)
      setIsRunning(false)
      return
    }
    setTime(time - 1)
  }, isRunning ? 1000 : null)

  const sendCode = (e) => {
    e.preventDefault()
    //axios 送 /user/{id}/verify/
    if (!code) {
      alert('欄位不可為空')
      return
    }
    if (!checkAuth) {
      alert('請勾選是否同意服務條款與隱私權政策')
      return
    }
    apiUserVerify(uid, {
      token: code.toString()
    }).then(response => response.data).then(res => {
      //這裡返回 JWT
      window.localStorage.setItem('token', res.token)
      setPageName('page-set-password')
    }).catch(error => {
      if (error) return false
    })
  }

  return (
    <>
      <Typography component="h1" variant="h5" align={`center`} >
        您尚未擁有一個帳號
        <br />請問是否申請?
      </Typography>
      <Typography component="h2" variant="h6" align={`center`} >
        {account.ICP}  {account.phone}
      </Typography>
      <di noValidate>
        <FormControlLabel
          control={<Checkbox color="primary"
            checked={checkAuth} onChange={() => { checkAuth === true ? setCheckAuth(false) : setCheckAuth(true) }}
          />}
          label={
            <div>
              <span>我接受 </span>
              <Link to={'/'}>服務條款</Link>
              <span> 與 </span>
              <Link to={'/'}>隱私權政策</Link>
            </div>
          }
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"

          onClick={applyCode}
        >
          {isClickable && ('寄送簡訊驗證碼')}
          {!isClickable && (`${time}秒後可再次寄送簡訊驗證碼`)}
        </Button>
        {hasSentApply && (
          <form action="">
            <hr />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phone"
              label="請填入簡訊驗證碼"
              type="text"
              id="code"
              placeholder=""
              value={code}
              onChange={(e) => { setCode(e.target.value) }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"

              onClick={sendCode}
            >
              確認送出
            </Button>
          </form>
        )}

      </di>
    </>
  )
}
export default SMS