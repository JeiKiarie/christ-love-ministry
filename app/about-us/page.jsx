// app/about/page.js
import { Container, Typography, Box, Grid } from '@mui/material';

export default function About() {
	return (
		<Container>
			<Box my={4}>
				<Typography
					variant="h3"
					component="h1"
					gutterBottom>
					Our Story
				</Typography>
				<Typography paragraph>
					[Church Name] was founded in [Year] with the mission to serve the
					community and spread the Gospel. Over the years, we have grown into a
					vibrant congregation dedicated to worship, discipleship, and outreach.
				</Typography>
			</Box>
			<Box my={4}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Our Mission and Vision
				</Typography>
				<Typography paragraph>
					Our mission is to love God, love people, and make disciples of all
					nations. We envision a world where every person knows and experiences
					the love of Christ.
				</Typography>
			</Box>
			<Box my={4}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Our Leadership
				</Typography>
				<Grid
					container
					spacing={2}>
					<Grid
						item
						xs={12}
						sm={4}>
						<Box
							display="flex"
							alignItems="center"
							mb={2}>
							<Box mr={2}>
								<img
									src="[Pastor Photo]"
									alt="Pastor [Name]"
									style={{ borderRadius: '50%', width: '100%', height: 'auto' }}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						sm={8}>
						<Typography
							variant="h5"
							component="h3">
							Pastor [Name]
						</Typography>
						<Typography paragraph>
							Pastor [Name] has been leading our church since [Year] and is
							passionate about teaching the Word of God and shepherding the
							congregation.
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box my={4}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					What We Believe
				</Typography>
				<Typography paragraph>
					We believe in the Trinity, the divinity of Jesus Christ, and the
					authority of the Bible. Our faith is grounded in the teachings of
					Scripture and the example of Jesus Christ.
				</Typography>
			</Box>
		</Container>
	);
}
