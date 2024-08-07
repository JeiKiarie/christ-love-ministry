import React from 'react';
import Carousel from '@/components/Carousel';
import {
	Box,
	Typography,
	Button,
	Grid,
	Card,
	CardContent,
	CardActions,
	CardMedia,
	useTheme,
} from '@mui/material';
import Link from 'next/link';

const events = [
	{
		title: 'Community Outreach',
		date: 'August 15, 2024',
		description:
			'Join us as we reach out to the local community with support and love. Participate in various activities and make a difference.',
		link: '/events/community-outreach',
	},
	{
		title: 'Youth Camp',
		date: 'September 10-12, 2024',
		description:
			'A fun-filled camp experience for our youth group, including games, workshops, and spiritual growth activities. Register now!',
		link: '/events/youth-camp',
	},
];

const ministries = [
	{
		name: 'Worship Team',
		description:
			'Our worship team leads the congregation in musical worship each Sunday. Join us to experience uplifting and heartfelt music.',
		link: '/ministries/worship',
	},
	{
		name: `Children’s Ministry`,
		description:
			'Programs and activities designed to help children of all ages grow in their faith. We offer age-appropriate lessons and fun activities.',
		link: '/ministries/children',
	},
	{
		name: 'Community Service',
		description:
			'Get involved in our community service projects that aim to support and uplift those in need in our local area.',
		link: '/ministries/community-service',
	},
];

const HomePage = () => {
	// const theme = useTheme();

	return (
		<Box
			sx={{ py: 0.2 }}
			component={'main'}>
			{/* Hero Section with Carousel */}
			<Box
				// className="carousel"
				sx={{ mb: 1 }}
				component={'section'}>
				<Carousel />
			</Box>

			{/* About Us Section */}
			<Box
				sx={{ textAlign: 'center' }}
				component="section">
				<Box
					component={'article'}
					className="section-center">
					<Typography
						variant="h3"
						component="h2"
						className="font-bold text-4xl"
						gutterBottom>
						Welcome to Christ&#39;s Love Ministry
					</Typography>
					<Typography
						variant="h5"
						paragraph>
						At Christ&#39;s Love Ministry, we believe in the power of community
						and faith. We strive to nurture and inspire individuals to grow
						spiritually and engage actively in our church life. We also offer a
						variety of programmes and services to support every member of our
						community.
					</Typography>
					<Button
						variant="contained"
						color="primary"
						component={Link}
						href="/about-us">
						Learn More About Us
					</Button>
				</Box>
			</Box>

			{/* Upcoming Events Section */}
			<Box
				sx={{ my: 6, textAlign: 'center' }}
				component={'section'}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom
					className="font-bold text-3xl">
					Upcoming Events
				</Typography>
				<Grid
					className="section-center"
					container
					px={1}
					justifyContent={'space-between'}
					spacing={2}>
					{events.map((event, index) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							key={index}>
							<Card
								variant="outlined"
								component={'article'}>
								<CardContent>
									<Typography
										variant="h5"
										className="text-1xl font-bold">
										{event.title}
									</Typography>
									<Typography color="textSecondary">{event.date}</Typography>
									<Typography paragraph>{event.description}</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										color="primary"
										component={Link}
										href={event.link}>
										Learn More
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>

			{/* Ministries Section */}
			<Box
				sx={{ my: 6, textAlign: 'center' }}
				component={'section'}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom
					className="font-bold text-3xl">
					Our Ministries
				</Typography>
				<Grid
					className="section-center"
					container
					spacing={2}
					justifyContent="center">
					{ministries.map((ministry, index) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							key={index}>
							<Card
								component={'article'}
								variant="outlined"
								sx={{
									minHeight: '13rem',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
								}}
								// sx={{ }}
							>
								<CardContent>
									<Typography
										variant="h5"
										className="text-1xl font-bold"
										gutterBottom>
										{ministry.name}
									</Typography>
									<Typography paragraph>{ministry.description}</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										color="primary"
										component={Link}
										href={ministry.link}>
										Learn More
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>

			{/* Service Times Section */}
			<Box
				sx={{ my: 6 }}
				component={'section'}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom
					textAlign={'center'}
					className="font-bold text-3xl">
					Service Times
				</Typography>
				<Grid
					className="section-center"
					container
					spacing={2}>
					<Grid
						item
						xs={12}
						sm={6}
						md={4}>
						<Card
							variant="outlined"
							component={'article'}>
							<CardContent>
								<Typography variant="h5">Sunday Worship</Typography>
								<Typography>9:00 AM - Traditional Service</Typography>
								<Typography>11:00 AM - Contemporary Service</Typography>
							</CardContent>
							<CardActions>
								<Button
									size="small"
									color="primary"
									component={Link}
									href="/services/sunday">
									More Details
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={4}>
						<Card variant="outlined">
							<CardContent>
								<Typography variant="h5">Wednesday Service</Typography>
								<Typography>7:00 PM - Midweek Bible Study</Typography>
							</CardContent>
							<CardActions>
								<Button
									size="small"
									color="primary"
									component={Link}
									href="/services/wednesday">
									More Details
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Box>

			{/* Get Involved Section */}
			<Box
				sx={{ my: 6, textAlign: 'center' }}
				component={'section'}>
				<Box
					className="section-center"
					component={'article'}>
					<Typography
						variant="h4"
						component="h2"
						gutterBottom
						className="font-bold text-3xl">
						Get Involved
					</Typography>
					<Typography paragraph>
						Whether you are looking to volunteer, join a small group, or become
						a member, there are many ways to get involved at Christ&#39;s Love
						Ministry. We invite you to explore the opportunities and find where
						you can make a difference.
					</Typography>
					<Button
						variant="contained"
						color="primary"
						component={Link}
						href="/get-involved">
						Find Out How to Get Involved
					</Button>
				</Box>
			</Box>

			{/* Testimonials Section */}
			<Box
				sx={{ my: 6 }}
				component={'section'}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom
					textAlign="center"
					className="font-bold text-3xl">
					What Our Members Say
				</Typography>
				<Grid
					className="section-center"
					container
					spacing={2}
					justifyContent="center">
					<Grid
						item
						xs={12}
						sm={6}
						md={4}>
						<Card
							variant="outlined"
							component={'article'}>
							<CardContent>
								<Typography
									variant="h6"
									paragraph>
									&#34;Joining this church has been a transformative experience
									for me. The community is incredibly supportive and welcoming.
									I&#39;ve grown so much in my faith here.&#34;
								</Typography>
								<Typography
									variant="body2"
									color="textSecondary">
									- Duncan Odhiambo - Member
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={4}>
						<Card variant="outlined">
							<CardContent>
								<Typography
									variant="h6"
									paragraph>
									&#34;The outreach programmes have been a great way to connect
									with the community and make a positive impact. I feel truly
									involved and valued here.&#34;
								</Typography>
								<Typography
									variant="body2"
									color="textSecondary">
									Emmanuel Kiluma - Member
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>

			{/* Call to Action Section */}
			<Box
				sx={{ my: 6, textAlign: 'center' }}
				component={'section'}>
				<Box
					className="section-center"
					component={'article'}>
					<Typography
						variant="h4"
						component="h2"
						gutterBottom
						className="font-bold">
						Join Us Today!
					</Typography>
					<Typography paragraph>
						Experience the warmth of our community and the inspiration of our
						services. We welcome you to join us for our Sunday worship and get
						involved in our vibrant community life.
					</Typography>
					<Button
						variant="contained"
						color="primary"
						component={Link}
						href="/contact">
						Contact Us
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default HomePage;
