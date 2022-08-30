import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react'
import axios from 'axios';


function Member() {
  const [inputOldPwd, setinputOldOwd] = useState("");
  const [inputNewPwd, setinputNewPwd] = useState("");
  const handleInputOldPwd = (e) => {
    let { value } = e.target;

    setinputOldOwd(value);
  }
  const handleInputNewPwd = (e) => {
    let { value } = e.target;
    setinputNewPwd(value);
  }
  // let changeRequestFormData = new FormData();
  let url = "http://localhost/test.php";
  const config = {
    headers: { 'content-type': 'multipart/form-data' }
  }
  //後期搭配 localStorage
  // changeRequestFormData.append("userName", "0900000000")
  // changeRequestFormData.append("oldPassword", inputOldPwd);
  // changeRequestFormData.append("newPassword", inputNewPwd);

  let sendChangeRequest = (e) => {
    e.preventDefault();
    axios.post(url, changeRequestFormData, config)
      .then(response => {
        console.log(response.data)
        return response.data
      })
      .then(res => {
        if (res.state === "成功") {
          alert('修改成功');
        }
        else console.log(res)
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <Container maxWidth="xs">
      <form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="輸入您的舊密碼"
              type="password"
              id="password"
              autoComplete="current-password"
              value={inputOldPwd} onChange={handleInputOldPwd}

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="new-password"
              label="輸入您的新密碼"
              type="new-password"
              id="new-password"
              autoComplete="new-password"
              value={inputNewPwd} onChange={handleInputNewPwd}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="comfirm-password"
              label="再次確認您的新密碼"
              type="comfirm-password"
              id="comfirm-password"
              autoComplete="comfirm-password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="我確認更改密碼"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"

          onClick={sendChangeRequest}
        >
          確認
        </Button>
      </form>
    </Container>
  )
}
export default Member