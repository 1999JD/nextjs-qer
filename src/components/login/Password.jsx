import { useState } from 'react';
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { apiAuthLoginPassword } from '../../api/index';

function Password({ account }) {
  const history = useRouter()
  const [password, setPassword] = useState("");

  const sendPassWord = (e) => {
    e.preventDefault();
    //(密碼是否符合格式 還沒寫)
    if (password === "") alert("密碼不可為空")
    //送出密碼
    apiAuthLoginPassword({
      ICP: account.ICP,
      phone: account.phone,
      password: password
    }).then(response => response.data).then(res => {
      if (res) {
        window.localStorage.setItem("token", res.token)
        history.push(`/customer`);
      }
      else {
        alert('錯誤：請重試')
        return false
      }
    })
  }
  return (
    <>
      <Typography component="h1" variant="h5" align={`center`} >
        輸入您的密碼
      </Typography>
      <Typography component="h2" variant="h6" align={`center`} >
        {account.ICP}  {account.phone}
      </Typography>
      <form id="passwordForm" noValidate>
        <input type="text" value={account.ICP + account.phone} autoComplete="username number" readOnly hidden />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={sendPassWord}
        >
          送出
        </Button>
      </form>
    </>
  )
}
export default Password;