// components/Header.js
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Header() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography
					variant="h6"
					sx={{ flexGrow: 1 }}>
					Church Name
				</Typography>
				<Box>
					<Button
						color="inherit"
						component={Link}
						href="/">
						Home
					</Button>
					<Button
						color="inherit"
						component={Link}
						href="/about">
						About Us
					</Button>
					<Button
						color="inherit"
						component={Link}
						href="/ministries">
						Ministries
					</Button>
					<Button
						color="inherit"
						component={Link}
						href="/sermons">
						Sermons
					</Button>
					<Button
						color="inherit"
						component={Link}
						href="/events">
						Events
					</Button>
					<Button
						color="inherit"
						component={Link}
						href="/get-involved">
						Get Involved
					</Button>
					<Button
						color="inherit"
						component={Link}
						href="/contact">
						Contact Us
					</Button>
					<Button
						color="inherit"
						component={Link}
						href="/giving">
						Giving
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
