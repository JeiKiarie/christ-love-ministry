// app/giving/page.js
import { Container, Typography, Box, Button } from '@mui/material';

export default function Giving() {
	return (
		<Container>
			<Box my={4}>
				<Typography
					variant="h3"
					component="h1"
					gutterBottom>
					Giving
				</Typography>
				<Typography paragraph>
					Your generosity helps us continue our mission to spread the Gospel and
					serve the community. There are several ways you can give:
				</Typography>
				<Button
					variant="contained"
					color="primary">
					Donate Online
				</Button>
			</Box>
		</Container>
	);
}
