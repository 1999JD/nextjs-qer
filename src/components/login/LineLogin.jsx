import Button from '@mui/material/Button';
import { useEffect } from 'react'
import { useRouter } from 'next/router'


function LineLogin() {
    const lineState = Math.random().toString(36).substring(7);
    const handleLineLogin = (e) => {
        let url = "https://access.line.me/oauth2/v2.1/authorize?";
        url += 'response_type=code';
        url += `&client_id=${1656184249}`;
        url += `&redirect_uri=${`http://localhost:3000/login`}`;
        url += `&state=${lineState}`;
        url += "&scope=openid%20profile";
        window.open(url, '_self');
    }

    const router = useRouter()
    const { code, state } = router.query
    useEffect(() => {
        if (!code) {
            window.localStorage.setItem("lineState", lineState)
        }
        else {
            if (window.localStorage.getItem("lineState") !== state) {
                alert('驗證失敗 !')
                window.localStorage.setItem("lineState", lineState)
            }
            else {
                window.localStorage.setItem("lineState", lineState)
                alert('驗證成功 !')
            }
        }

    })
    return (
        <>
            <span className="line-login-hint">或者使用 line 登入</span>
            <Button className="line-login" onClick={handleLineLogin}></Button>
        </>
    )
}
export default LineLogin;