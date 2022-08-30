import { Avatar, Card, CardHeader, CardTitle, CardContent, Badge, Typography } from '@mui/material';

import { useState } from 'react';
import Link from 'next/link'


function MiniWindow() {
	let [toggle, setToggle] = useState(false);
	const handleToggle = () => {
		setToggle(!toggle);
	}
	return (
		<div>
			{toggle && (
				<Card bg="warning" onClick={handleToggle} text='dark'>
					<CardHeader>餐廳名稱</CardHeader>
					<CardContent>
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							目前順序
						</Typography>
						8
						<Link href="/order"><a>前往餐廳</a></Link>
					</CardContent>
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