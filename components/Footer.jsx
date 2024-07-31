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
		<Box
			component={'section'}
			sx={{
				bgcolor: theme.palette.background.paper,
				py: 6,
				px: 2,
			}}>
			<Grid
				className="section-center footer"
				container
				spacing={4}
				style={{ width: '100%', marginInline: 'auto' }}>
				{/* Quick Links Section */}
				<Grid
					className="quick-links"
					style={{
						display: 'flex',
						flexDirection: 'column',
						// alignItems: 'center',
					}}
					item
					xs={12}
					md={1.5}>
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
				{/* Mission Statement Section */}
				<Grid
					className="mission-statement"
					style={{
						display: 'flex',
						flexDirection: 'column',
						// alignItems: 'center',
						textAlign: 'justify',
						paddingInline: '1rem',
					}}
					item
					xs={12}
					md={5.5}>
					<Typography
						variant="h6"
						gutterBottom>
						Our Mission
					</Typography>
					<Typography
						variant="body1"
						paragraph>
						“To know God and to make Him known through evangelism and
						discipleship”. To preach the gospel of Jesus Christ in the power of
						the holy Spirit. To make disciples of all who believe the gospel To
						establish Local Churches and abroad. To Provide diaconal services to
						the disciples and the community. To equip the members with knowledge
						and skill to serve the Lord Jesus Christ. To build church capacity
						and mobilize resources that will facilitate the attainment of the
						afore mentioned mission objectives.
					</Typography>
				</Grid>

				{/* Contact Information Section */}

				<Grid
					className="contact-info"
					style={{
						display: 'flex',
						flexDirection: 'column',
						// alignItems: 'center',
						// marginInline: 'auto',
					}}
					item
					xs={12}
					md={5}>
					<Typography
						variant="h6"
						gutterBottom>
						Contact Us
					</Typography>
					<Box
						component={'address'}
						sx={{
							display: 'flex',
							// justifyContent: 'center',
							alignItems: 'center',
							mb: 1,
						}}>
						<LocationOn sx={{ mr: 1 }} />
						<Typography variant="body2">
							123 Church St., Nairobi, Kenya,
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							// justifyContent: 'center',
							mb: 1,
						}}>
						<Phone sx={{ mr: 1 }} />
						<Typography variant="body2">+254 722 374497</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							// justifyContent: 'center',
							mb: 1,
						}}>
						<EmailOutlined sx={{ mr: 1 }} />
						<Typography variant="body2">
							<Link href="mailto:info@church.com">info@ourchurch.com</Link>
						</Typography>
					</Box>
				</Grid>

				{/* Map Section */}
				{/* <Grid
					item
					xs={12}
					md={4}>
					<Typography
						variant="h6"
						gutterBottom>
						Find Us
					</Typography> */}
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
				{/* </Grid> */}

				{/* Newsletter Signup Section */}
				{/* <Grid
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
				</Grid> */}
			</Grid>

			{/* Social Media Icons Section */}
			<Box sx={{ mt: 4, textAlign: 'center' }}>
				<Link
					href="https://facebook.com/"
					color="inherit"
					sx={{ mx: 1 }}>
					<Facebook />
				</Link>
				<Link
					href="https://twitter.com/"
					color="inherit"
					sx={{ mx: 1 }}>
					<Twitter />
				</Link>
				<Link
					href="https://instagram.com/"
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
					&copy; {new Date().getFullYear()} Christ's Love Ministry. All rights
					reserved.
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
