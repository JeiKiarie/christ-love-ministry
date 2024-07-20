// app/about/page.js
import { Container, Typography, Box } from '@mui/material';

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
				<Box
					display="flex"
					alignItems="center"
					mb={2}>
					<Box mr={2}>
						<img
							src="[Pastor Photo]"
							alt="Pastor [Name]"
							style={{ borderRadius: '50%', width: 100, height: 100 }}
						/>
					</Box>
					<Box>
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
					</Box>
				</Box>
			</Box>
			<Box my={4}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Statement of Faith
				</Typography>
				<Typography paragraph>
					We believe in one God, the Father Almighty, Maker of heaven and earth,
					and in Jesus Christ, His only Son, our Lord. We believe in the Holy
					Spirit, the holy catholic church, the communion of saints, the
					forgiveness of sins, the resurrection of the body, and the life
					everlasting.
				</Typography>
			</Box>
		</Container>
	);
}
