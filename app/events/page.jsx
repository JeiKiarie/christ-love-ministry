// app/events/page.js
import {
	Container,
	Typography,
	Box,
	Grid,
	Card,
	CardContent,
	CardActions,
	Button,
} from '@mui/material';
import Image from 'next/image';
import Image1 from '../../public/images/ismael-paramo-Ra8Oi7iVjqY.jpg';

export default function Events() {
	return (
		<>
			<Box
				component="section"
				height="20rem"
				my={9}>
				<Image
					alt=""
					src={Image1}
					style={{
						height: '100%',
						width: '100%',
						objectFit: 'cover',
						objectPosition: 'center',
					}}></Image>
			</Box>
			<Container
				component={'section'}
				className="section-center">
				<Box my={4}>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom>
						Upcoming Events
					</Typography>
					<Grid
						container
						spacing={2}>
						<Grid
							component={'article'}
							item
							xs={12}
							sm={6}>
							<Card>
								<CardContent>
									<Typography
										variant="h5"
										component="h2">
										Vacation Bible School - July 25-29
									</Typography>
									<Typography color="textSecondary">
										Join us for a fun week of learning and activities for kids!
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										color="primary">
										Learn More
									</Button>
								</CardActions>
							</Card>
						</Grid>
						<Grid
							component={'article'}
							item
							xs={12}
							sm={6}>
							<Card>
								<CardContent>
									<Typography
										variant="h5"
										component="h2">
										Community Outreach - August 15
									</Typography>
									<Typography color="textSecondary">
										Help us serve our community by participating in our outreach
										event.
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										color="primary">
										Learn More
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
}
