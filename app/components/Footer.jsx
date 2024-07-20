// components/Footer.js
import { Box, Typography } from '@mui/material';

export default function Footer() {
	return (
		<Box
			component="footer"
			sx={{ p: 2, mt: 4, textAlign: 'center', backgroundColor: '#f8f8f8' }}>
			<Typography>
				&copy; {new Date().getFullYear()} Church Name. All rights reserved.
			</Typography>
		</Box>
	);
}
