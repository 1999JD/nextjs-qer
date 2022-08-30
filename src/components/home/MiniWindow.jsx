import { Avatar, Card, Badge } from '@mui/material';
import { useState } from 'react';

function MiniWindow() {
	let [toggle, setToggle] = useState(false);
	const handleToggle = () => {
		setToggle(!toggle);
	}
	return (
		<div className="miniwindow text-center">

			{toggle && (
				<Card bg="warning" onClick={handleToggle} text='dark'>
					<Card.Header>餐廳名稱</Card.Header>
					<Card.Body>
						<Card.Title>目前順序</Card.Title>
						<Card.Text>
							8
						</Card.Text>
						<Link className={"nav-link text-white"} to="/order">前往餐廳</Link>
					</Card.Body>
				</Card>

			)}
			{!toggle && (
				<Badge onClick={handleToggle}>
					<Avatar>
						8
					</Avatar>
				</Badge>
			)}
		</div>


	)

}

export default MiniWindow;