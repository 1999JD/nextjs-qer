import { useState, useEffect } from 'react';
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import StarIcon from '@mui/icons-material/StarBorder';

//materialui component copyright
function Order() {
  // let notification = () => {
  //     if (typeof Notification !== 'undefined') {
  //         new Notification("It's your turn !");
  //     }
  // }
  useEffect(() => {
    // 首先讓我們確定瀏覽器支援 Notification
    if (!("Notification" in window)) {
      alert("這個瀏覽器不支援 Notification");
    }

    // 再檢查使用者是否已經授權執行 Notification
    else if (Notification.permission === "granted") {
      // 如果已經授權就可以直接新增 Notification 了!
      // new Notification("It's your turn !");
    }

    // 否則，我們會需要詢問使用者是否開放權限
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // 如果使用者同意了就來新增一個 Notification 打聲招呼吧
        if (permission === "granted") {
          // new Notification("It's your turn !");
        }
      });
    }
  }, []);

  const [number, setNumber] = useState(8);
  // const socket = new WebSocket("ws://www.example.com/socketserver");
  // socket.onopen = () => {
  //   console.log("websocket client connected")
  // }
  // //接收事件
  // socket.onmessage = function (e) {
  //   console.log(e.data);
  //   setNumber(8);
  // }
  const tier = {
    title: '店家的名字',
    qerNum: '8',
    description: '我是店家描述我是店家描述我是店家描述我是店家描述',
    buttonText: '取消等候',
    buttonVariant: 'contained',
  }

  return (
    <Container component="main" maxWidth="xs">
      <Card >
        <CardHeader
          title={tier.title}
          color="secondary"
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{ align: 'center' }}
          action={tier.title === 'Pro' ? <StarIcon /> : null}

        />
        <CardContent>
          <div >
            <Typography variant="h6" color="textSecondary">
              序號
            </Typography>
            <Typography component="h2" variant="h3" color="textPrimary">
              {number}
            </Typography>
          </div>
          <img src="https://fakeimg.pl/200x150/eeeeee/000" alt="img of cooking" />
          <div >
            <LinearProgress />
          </div>

          <Typography component="p" variant="subtitle1" align="center" >
            {tier.description}
          </Typography>

        </CardContent>
        <CardActions>
          <Button fullWidth variant={tier.buttonVariant} color="primary">
            {tier.buttonText}
          </Button>
        </CardActions>
      </Card>
    </Container >
  )
}

export default Order;

export async function getServerSideProps({ params }) {
  return {
    props: { paramId: params.id }, // will be passed to the page component as props
  }
}