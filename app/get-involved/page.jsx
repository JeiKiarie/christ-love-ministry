// app/get-involved/page.js
import {
	Container,
	Typography,
	Box,
	Grid,
	Card,
	CardContent,
} from '@mui/material';

export default function GetInvolved() {
	return (
		<Container>
			<Box my={4}>
				<Typography
					variant="h3"
					component="h1"
					gutterBottom>
					Get Involved
				</Typography>
				<Grid
					container
					spacing={2}>
					<Grid
						item
						xs={12}
						sm={6}
						md={4}>
						<Card>
							<CardContent>
								<Typography
									variant="h5"
									component="h2">
									Join a Ministry
								</Typography>
								<Typography paragraph>
									Become a part of one of our many ministries.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={4}>
						<Card>
							<CardContent>
								<Typography
									variant="h5"
									component="h2">
									Volunteer
								</Typography>
								<Typography paragraph>
									Help out at our events and outreach programs.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={4}>
						<Card>
							<CardContent>
								<Typography
									variant="h5"
									component="h2">
									Attend Events
								</Typography>
								<Typography paragraph>
									Participate in our various church events.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={4}>
						<Card>
							<CardContent>
								<Typography
									variant="h5"
									component="h2">
									Donate
								</Typography>
								<Typography paragraph>
									Support our church and its missions.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
