import { useState } from 'react';
import LineLogin from '../src/components/login/LineLogin';
import SMS from '../src/components/login/SMS'
import SetPassword from '../src/components/login/SetPassword'
import Password from '../src/components/login/Password'
import { apiAuthLogin } from '../src/api/index';
import { Avatar, Button, TextField, Link, Grid, Typography, Container, MenuItem } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {
  const [pageName, setPageName] = useState("page-account");
  const [account, setAccount] = useState({
    ICP: "+886",
    phone: "900123456"
  });
  const [uid, setUid] = useState(0);
  const [accountState, setAccountState] = useState(false);


  const sendAccount = (e) => {
    e.preventDefault();
    let re = /^9[0-9]{8}$/
    if (!re.test(account.phone)) {
      alert('格式錯誤，請重新確認');
      return false
    }
    //送出 axios "/auth/login/"
    apiAuthLogin({
      ICP: account.ICP,
      phone: account.phone
    }).then(response => response.data).then(res => {
      if (res.state === true) {
        setPageName("page-password");
        setAccountState(true);
      }
      else if (res.state === false) {
        setAccountState(false);
        setPageName("page-sms");
      }
      else alert(res.state + "  請重新輸入");
    }).catch(error => {
      if (error)
        return false
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <Avatar sx={{ margin: 'auto', mb: 4 }}>
        <LockOutlinedIcon />
      </Avatar>
      {pageName === "page-account" && (<form noValidate>
        <Typography component="h1" variant="h5" align={`center`} >
          註冊/登入<br />
          輸入您的手機
        </Typography>
        <TextField
          id="ICP"
          select
          margin="normal"
          label="國際冠碼"
          value={account.ICP}
          onChange={(e) => setAccount((prevState) => {
            return {
              ...prevState,
              ICP: e.target.value,
            }
          })}
          helperText="請輸入您門號的國際冠碼"
          variant="outlined"
        >
          <MenuItem value={`+886`}>+886</MenuItem>
        </TextField>
        <TextField
          variant="outlined"
          margin="normal"
          // required
          fullWidth
          name="phone"
          label="電話號碼"
          type="tel"
          id="phone"
          helperText="請輸入您的門號"
          value={account.phone}
          onChange={(e) => setAccount((prevState) => {
            return {
              ...prevState,
              phone: e.target.value,
            }
          })}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"

          onClick={sendAccount}
        >
          送出
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              忘記密碼?
            </Link>
          </Grid>
        </Grid>
      </form>)}
      {pageName === 'page-sms' && (
        <SMS account={account} setPageName={setPageName} uid={uid} setUid={setUid} />
      )}
      {pageName === 'page-set-password' && accountState === false && (
        <SetPassword account={account} uid={uid} />
      )}
      {pageName === 'page-password' && accountState === true && (
        <Password account={account} />
      )}
      <hr />
      <LineLogin />
    </Container >

  )
}
export default Login;