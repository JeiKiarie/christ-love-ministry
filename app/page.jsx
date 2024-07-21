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
		name: 'Children’s Ministry',
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
		<Box sx={{ py: 1 }}>
			{/* Hero Section with Carousel */}
			<Box sx={{ mb: 1 }}>
				<Carousel />
			</Box>

			{/* About Us Section */}
			<Box sx={{ textAlign: 'center' }}>
				<Typography
					variant="h3"
					component="h2"
					gutterBottom>
					Welcome to Christ's Love Ministry
				</Typography>
				<Typography
					variant="h5"
					paragraph>
					At Christ's Love Ministry, we believe in the power of community and
					faith. Our mission is to nurture and inspire individuals to grow
					spiritually and engage actively in our church life. We offer a variety
					of programs and services to support every member of our community.
				</Typography>
				<Button
					variant="contained"
					color="primary"
					component={Link}
					href="/about-us">
					Learn More About Us
				</Button>
			</Box>

			{/* Upcoming Events Section */}
			<Box sx={{ my: 6, textAlign: 'center' }}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Upcoming Events
				</Typography>
				<Grid
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
							<Card variant="outlined">
								<CardContent>
									<Typography variant="h5">{event.title}</Typography>
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
			<Box sx={{ my: 6, textAlign: 'center' }}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Our Ministries
				</Typography>
				<Grid
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
							<Card variant="outlined">
								<CardContent>
									<Typography variant="h5">{ministry.name}</Typography>
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
			<Box sx={{ my: 6 }}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Service Times
				</Typography>
				<Grid
					container
					spacing={2}>
					<Grid
						item
						xs={12}
						sm={6}
						md={4}>
						<Card variant="outlined">
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
			<Box sx={{ my: 6, textAlign: 'center' }}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Get Involved
				</Typography>
				<Typography paragraph>
					Whether you are looking to volunteer, join a small group, or become a
					member, there are many ways to get involved at [Church Name]. We
					invite you to explore the opportunities and find where you can make a
					difference.
				</Typography>
				<Button
					variant="contained"
					color="primary"
					component={Link}
					href="/get-involved">
					Find Out How to Get Involved
				</Button>
			</Box>

			{/* Testimonials Section */}
			<Box sx={{ my: 6 }}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom
					textAlign="center">
					What Our Members Say
				</Typography>
				<Grid
					container
					spacing={2}
					justifyContent="center">
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
									"Joining this church has been a transformative experience for
									me. The community is incredibly supportive and welcoming. I’ve
									grown so much in my faith here."
								</Typography>
								<Typography
									variant="body2"
									color="textSecondary">
									- Jane Doe
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
									"The outreach programs have been a great way to connect with
									the community and make a positive impact. I feel truly
									involved and valued here."
								</Typography>
								<Typography
									variant="body2"
									color="textSecondary">
									- John Smith
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>

			{/* Call to Action Section */}
			<Box sx={{ my: 6, textAlign: 'center' }}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Join Us This Sunday!
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
	);
};

export default HomePage;
