// app/contact/page.js
import { Container, Typography, Box, TextField, Button } from '@mui/material';

export default function Contact() {
	return (
		<Container>
			<Box my={4}>
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
	);
}
