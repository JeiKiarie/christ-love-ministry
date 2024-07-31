// app/layout.js
import '../styles/globals.css';
import ThemeProvider from '../components/ThemeProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
	title: `Christ's Love Ministry`,
	description: 'Join us for worship and community',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
