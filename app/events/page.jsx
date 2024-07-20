// app/events/page.js
import {
	Container,
	Typography,
	Box,
	Card,
	CardContent,
	CardActions,
	Button,
} from '@mui/material';

export default function Events() {
	return (
		<Container>
			<Box my={4}>
				<Typography
					variant="h3"
					component="h1"
					gutterBottom>
					Upcoming Events
				</Typography>
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
			</Box>
		</Container>
	);
}
