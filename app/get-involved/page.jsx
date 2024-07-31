// app/get-involved/page.js
import {
	Container,
	Typography,
	Box,
	Grid,
	Card,
	CardContent,
} from '@mui/material';
import Image from 'next/image';
import Image1 from '../../public/images/ismael-paramo-Ra8Oi7iVjqY.jpg';

export default function GetInvolved() {
	return (
		<>
			<Box
				component="section"
				height="25rem"
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
				<Box
					my={4}
					component={'article'}>
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
		</>
	);
}
