// app/page.js
import Link from 'next/link';
import { BiTimeFive } from 'react-icons/bi';
import {
	Container,
	Typography,
	Box,
	Button,
	Grid,
	Card,
	CardContent,
} from '@mui/material';

export default function Home() {
	return (
		<Container>
			<Box my={4}>
				<Typography
					variant="h3"
					component="h1"
					gutterBottom>
					Welcome to [Church Name]
				</Typography>
				<Typography paragraph>
					We are a community of believers committed to following Jesus and
					sharing His love with the world. Join us for worship, fellowship, and
					service.
				</Typography>
			</Box>
			<Box my={4}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Service Times <BiTimeFive />
				</Typography>
				<Typography paragraph>Sundays: 9:00 AM and 11:00 AM</Typography>
				<Typography paragraph>Wednesdays: 7:00 PM</Typography>
			</Box>
			<Box my={4}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Upcoming Events
				</Typography>
				<Grid
					container
					spacing={2}>
					<Grid
						item
						xs={12}
						sm={6}>
						<Card>
							<CardContent>
								<Typography
									variant="h5"
									component="h3">
									<Link href="/events#vbs">
										Vacation Bible School - July 25-29
									</Link>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}>
						<Card>
							<CardContent>
								<Typography
									variant="h5"
									component="h3">
									<Link href="/events#outreach">
										Community Outreach - August 15
									</Link>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
			<Box my={4}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Our Location
				</Typography>
				<Box
					id="map"
					sx={{ height: 300, backgroundColor: '#e0e0e0' }}>
					[Embed Google Map]
				</Box>
				<Typography paragraph>[Church Address]</Typography>
			</Box>
			<Box
				my={4}
				textAlign="center">
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Get Involved
				</Typography>
				<Typography paragraph>
					We invite you to join our next service, participate in our events, and
					become part of our community.
				</Typography>
				<Button
					variant="contained"
					color="primary"
					component={Link}
					href="/get-involved">
					Join Us
				</Button>
			</Box>
		</Container>
	);
}
