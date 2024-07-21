// app/layout.js
import '../styles/globals.css';
import ThemeProvider from '../components/ThemeProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
	title: 'Church Website',
	description: 'A church website built with Next.js and Material UI',
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
