// app/contact/page.js
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import Image from 'next/image';
import Image1 from '../../public/images/ismael-paramo-Ra8Oi7iVjqY.jpg';

export default function Contact() {
	return (
		<>
			<Box
				component="section"
				height="25rem">
				<Image
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
						Contact Us
					</Typography>
					<form
						noValidate
						autoComplete="off">
						<Box mb={2}>
							<TextField
								fullWidth
								label="Name"
								variant="outlined"
							/>
						</Box>
						<Box mb={2}>
							<TextField
								fullWidth
								label="Email"
								variant="outlined"
							/>
						</Box>
						<Box mb={2}>
							<TextField
								fullWidth
								label="Message"
								variant="outlined"
								multiline
								rows={4}
							/>
						</Box>
						<Button
							variant="contained"
							color="primary"
							type="submit">
							Send Message
						</Button>
					</form>
				</Box>
			</Container>
		</>
	);
}
