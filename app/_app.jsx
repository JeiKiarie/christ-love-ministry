// app/_app.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme'; // Adjust path to your theme file
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
