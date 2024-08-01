// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#1976d2',
			// main: '#fff',
			// main: '#bf0205',
		},
		secondary: {
			main: '#dc004e',
			// A400: '#bf0205',
		},
	},
	typography: {
		fontFamily: 'Poppins, sans-serif',
		// fontSize: 20,
	},
});

export default theme;
