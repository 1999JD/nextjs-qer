import { useState, useEffect } from 'react';
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router'

export default function Custom404() {
  const router = useRouter()

  const [time, setTime] = useState(5);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(prevTime => prevTime - 1); // <-- Change this line!
      console.log(time)
    }, 1000);
    if (time === 0) {
      window.clearInterval(timer);
      router.push('/')
    }
    return () => {
      window.clearInterval(timer);
    };
  });
  return (
    <div>
      <Container component="main" maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          404 Not Found
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'抱歉，您所訪問的頁面無法瀏覽或不存在'}
        </Typography>
        <Typography variant="body1">{time}秒後將導回首頁... ...</Typography>
      </Container>
    </div>
  )
}