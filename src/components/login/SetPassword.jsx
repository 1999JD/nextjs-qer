import { useState } from 'react';
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { apiUserPassword } from '../../api/index'

function SetPassword({ account, uid }) {
    const history = useRouter()
    const [password, setPassword] = useState("");
    const sendPassWord = (e) => {
        e.preventDefault();
        //(密碼是否符合格式 還沒寫)
        if (password === "") {
            alert("密碼不可為空")
            return false
        }
        //送出密碼
        apiUserPassword(uid, { "password": password }
        ).then(_response => {
            //恭喜他成功設置密碼 然後轉到 首頁
            alert('恭喜您成功設置密碼!')
            history.push('/')
        }).catch(error => {
            if (error) return false
        })
    }
    return (
        <>
            <Typography component="h1" variant="h5" align={`center`} >
                設定您的密碼
            </Typography>
            <Typography component="h2" variant="h6" align={`center`} >
                {account.ICP}  {account.phone}
            </Typography>
            <form id="passwordForm"  noValidate>
                <input type="text" value={account.ICP + account.phone} autoComplete="username number" readOnly hidden />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="設定密碼"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    // helperText="設定密碼"
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
export default SetPassword;