'use client';
import React from 'react';
import {
	Box,
	Typography,
	Grid,
	TextField,
	Button,
	Link,
	useTheme,
} from '@mui/material';
import {
	Facebook,
	Twitter,
	Instagram,
	Email,
	LocationOn,
	Phone,
	EmailOutlined,
} from '@mui/icons-material';
// import GoogleMapReact from 'google-map-react';

const Footer = () => {
	const theme = useTheme();
	const defaultProps = {
		center: {
			lat: 40.73061,
			lng: -73.935242,
		},
		zoom: 11,
	};

	return (
		<Box sx={{ bgcolor: theme.palette.background.paper, py: 6, px: 4 }}>
			<Grid
				container
				spacing={4}>
				{/* Mission Statement Section */}
				<Grid
					item
					xs={12}
					md={4}>
					<Typography
						variant="h6"
						gutterBottom>
						Our Mission
					</Typography>
					<Typography
						variant="body1"
						paragraph>
						At [Church Name], our mission is to spread the love and teachings of
						Jesus Christ through our worship, community outreach, and various
						ministries. We aim to create a welcoming environment where everyone
						can grow in faith and find a place to belong.
					</Typography>
				</Grid>

				{/* Contact Information Section */}
				<Grid
					item
					xs={12}
					md={4}>
					<Typography
						variant="h6"
						gutterBottom>
						Contact Us
					</Typography>
					<Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
						<LocationOn sx={{ mr: 1 }} />
						<Typography variant="body1">
							123 Church St., City, State, ZIP
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
						<Phone sx={{ mr: 1 }} />
						<Typography variant="body1">(123) 456-7890</Typography>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
						<EmailOutlined sx={{ mr: 1 }} />
						<Typography variant="body1">
							<Link href="mailto:info@church.com">info@church.com</Link>
						</Typography>
					</Box>
				</Grid>

				{/* Map Section */}
				<Grid
					item
					xs={12}
					md={4}>
					<Typography
						variant="h6"
						gutterBottom>
						Find Us
					</Typography>
					{/* <Box sx={{ height: '200px', width: '100%', mb: 2 }}>
						<GoogleMapReact
							bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
							defaultCenter={defaultProps.center}
							defaultZoom={defaultProps.zoom}>
							<LocationOn
								lat={40.73061}
								lng={-73.935242}
								text="My Church"
							/>
						</GoogleMapReact>
					</Box> */}
				</Grid>

				{/* Quick Links Section */}
				<Grid
					item
					xs={12}
					md={4}>
					<Typography
						variant="h6"
						gutterBottom>
						Quick Links
					</Typography>
					<Box>
						<Link
							href="/"
							color="inherit"
							underline="none">
							<Typography variant="body2">Home</Typography>
						</Link>
						<Link
							href="/about"
							color="inherit"
							underline="none">
							<Typography variant="body2">About Us</Typography>
						</Link>
						<Link
							href="/services"
							color="inherit"
							underline="none">
							<Typography variant="body2">Services</Typography>
						</Link>
						<Link
							href="/ministries"
							color="inherit"
							underline="none">
							<Typography variant="body2">Ministries</Typography>
						</Link>
						<Link
							href="/events"
							color="inherit"
							underline="none">
							<Typography variant="body2">Events</Typography>
						</Link>
						<Link
							href="/contact"
							color="inherit"
							underline="none">
							<Typography variant="body2">Contact</Typography>
						</Link>
						<Link
							href="/donate"
							color="inherit"
							underline="none">
							<Typography variant="body2">Donate</Typography>
						</Link>
						<Link
							href="/volunteer"
							color="inherit"
							underline="none">
							<Typography variant="body2">Volunteer</Typography>
						</Link>
					</Box>
				</Grid>

				{/* Newsletter Signup Section */}
				<Grid
					item
					xs={12}
					md={4}>
					<Typography
						variant="h6"
						gutterBottom>
						Newsletter Signup
					</Typography>
					<Typography
						variant="body1"
						gutterBottom>
						Stay updated with the latest news and events from our church. Sign
						up for our newsletter:
					</Typography>
					<Box
						component="form"
						noValidate
						autoComplete="off"
						sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<TextField
							label="Email Address"
							variant="outlined"
							size="small"
							fullWidth
						/>
						<Button
							variant="contained"
							color="primary">
							Subscribe
						</Button>
					</Box>
				</Grid>
			</Grid>

			{/* Social Media Icons Section */}
			<Box sx={{ mt: 4, textAlign: 'center' }}>
				<Link
					href="https://facebook.com/[your-church]"
					color="inherit"
					sx={{ mx: 1 }}>
					<Facebook />
				</Link>
				<Link
					href="https://twitter.com/[your-church]"
					color="inherit"
					sx={{ mx: 1 }}>
					<Twitter />
				</Link>
				<Link
					href="https://instagram.com/[your-church]"
					color="inherit"
					sx={{ mx: 1 }}>
					<Instagram />
				</Link>
				<Link
					href="mailto:info@church.com"
					color="inherit"
					sx={{ mx: 1 }}>
					<Email />
				</Link>
			</Box>

			{/* Footer Bottom Section */}
			<Box sx={{ mt: 4, textAlign: 'center' }}>
				<Typography
					variant="body2"
					color="textSecondary">
					&copy; {new Date().getFullYear()} [Church Name]. All rights reserved.
				</Typography>
				<Link
					href="/privacy-policy"
					color="inherit"
					underline="none">
					<Typography variant="body2">Privacy Policy</Typography>
				</Link>
				<Link
					href="/terms"
					color="inherit"
					underline="none">
					<Typography variant="body2">Terms of Service</Typography>
				</Link>
			</Box>
		</Box>
	);
};

export default Footer;
