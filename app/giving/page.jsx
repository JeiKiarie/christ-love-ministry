// app/giving/page.js
import { Container, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import Image1 from '../../public/images/ismael-paramo-Ra8Oi7iVjqY.jpg';

export default function Giving() {
	return (
		<>
			<Box
				component="section"
				height="25rem">
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
				className="section-center"
				component={'section'}>
				<Box
					my={4}
					component={'article'}>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom>
						Giving
					</Typography>
					<Typography paragraph>
						Your generosity helps us continue our mission to spread the Gospel
						and serve the community. There are several ways you can give:
					</Typography>
					<Button
						variant="contained"
						color="primary">
						Donate by Mpesa
					</Button>
				</Box>
			</Container>
		</>
	);
}
