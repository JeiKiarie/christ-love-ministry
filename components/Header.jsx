// components/Header.js
'use client';
import Link from 'next/link';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Box,
	useMediaQuery,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/images/Logo.jpg';

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('lg'));

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{ textAlign: 'center', px: 1 }}>
			<Typography
				variant="h5"
				sx={{ my: 2 }}>
				Christ&#39;s Love Ministry
			</Typography>
			<List>
				{[
					{ name: 'Home', link: '/' },
					{ name: 'About Us', link: '/about-us' },
					{ name: 'Ministries', link: '/ministries' },
					{ name: 'Sermons', link: '/sermons' },
					{ name: 'Events', link: '/events' },
					{ name: 'Get Involved', link: '/get-involved' },
					{ name: 'Contact Us', link: '/contact-us' },
					{ name: 'Giving', link: '/giving' },
				].map((link) => (
					<ListItem
						button
						component={Link}
						href={link.link}
						key={link.name}>
						<ListItemText primary={link.name} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box
			sx={{ flexGrow: 1, marginBottom: '4.5rem' }}
			component={'header'}>
			<AppBar
				component={'nav'}
				height={'4rem'}
				position="fixed"
				top="0"
				right="0"
				left="0">
				<Toolbar
					// style={{
					// 	'background-image': 'linear-gradient(to right, #00395d, #8f8f8c)',
					// }}
					style={{
						'background-image':
							'linear-gradient(to right, #fff 30%, #001759 75%)',
					}}>
					<Image
						className="logo"
						src={Logo}
						style={{
							// flexGrow: 1,
							width: '3rem',
							height: '100%',
							objectFit: 'cover',
							objectPosition: 'center',
							marginRight: '0.2rem',
						}}
						alt="logo"></Image>
					<Typography
						variant="h6"
						sx={{ flexGrow: 1, color: '#bf0205', fontSize: '2rem' }}>
						Christ&#39;s Love Ministry
					</Typography>
					{isMobile ? (
						<>
							<IconButton
								edge="start"
								color="inherit"
								aria-label="menu"
								onClick={handleDrawerToggle}>
								<MenuIcon />
							</IconButton>
							<Drawer
								anchor="right"
								open={mobileOpen}
								onClose={handleDrawerToggle}>
								{drawer}
							</Drawer>
						</>
					) : (
						<Box component={'ul'}>
							{[
								{ name: 'Home', link: '/' },
								{ name: 'About Us', link: '/about-us' },
								{ name: 'Ministries', link: '/ministries' },
								{ name: 'Sermons', link: '/sermons' },
								{ name: 'Events', link: '/events' },
								{ name: 'Get Involved', link: '/get-involved' },
								{ name: 'Contact Us', link: '/contact-us' },
								{ name: 'Giving', link: '/giving' },
							].map((link) => (
								<Button
									color="inherit"
									component={Link}
									href={link.link}
									key={link.name}>
									{link.name}
								</Button>
							))}
						</Box>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
