import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MessageIcon from '@mui/icons-material/Message';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const cardData = [
    {
        icon: <AttachMoneyIcon />,
        title: '線上訂位平台',
        content: 'Qer 不只是一個訂位平台，為了節省您的時間，我們提供線上點餐的服務，讓您可以在進入餐廳後快速地開始用餐'
    },
    {
        icon: <QueryBuilderIcon />,
        title: '快速通關',
        content: '透過Qer 的快速通關機制，您將可以用最快的速度進入餐廳'
    },
    {
        icon: <NotificationsActiveIcon />,
        title: '線上叫號功能',
        content: '我們提供線上查看較好進度的功能，讓您可以利用等候時間於鄰近商圈觀光'
    },
    {
        icon: <MessageIcon />,
        title: '評論功能',
        content: '在您每次的消費後，您將收到一份匿名用餐的體驗調查來幫助餐廳成長'
    },
    {
        icon: <CreditCardIcon />,
        title: '點數回饋機制',
        content: '在Qer 消費滿額後會得到系統回饋的點數，此點數日後可用來折抵在Qer網頁上的其他消費'
    },
]




function Cards() {
    return (
        cardData.map((item) => (
            <Grid key={item.title} item xs={12} sm={6} md={4} container alignItems="center" direction="column">
                <Avatar>
                    {item.icon}
                </Avatar>
                <h3>
                    {item.title}
                </h3>
                <p>
                    {item.content}
                </p>
            </Grid >
        ))
    )
}

export default Cards