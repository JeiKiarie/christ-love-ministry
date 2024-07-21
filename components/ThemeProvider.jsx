// components/ThemeProvider.js
'use client';

import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import theme from '../app/theme';

export default function ThemeProvider({ children }) {
	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</MuiThemeProvider>
	);
}
