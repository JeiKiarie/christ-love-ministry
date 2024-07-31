// import React from 'react';

// function PrivacyPolicy() {
// 	return <div>Privacy Policy</div>;
// }

// export default PrivacyPolicy;

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';

const PrivacyPolicy = () => {
	return (
		<Container
			maxWidth="md"
			sx={{ py: 6 }}>
			<Typography
				variant="h4"
				gutterBottom>
				Privacy Policy
			</Typography>

			<Typography
				variant="body1"
				paragraph>
				Welcome to Christ&#39;s Love Ministry. We are committed to protecting
				your privacy and ensuring that your personal information is handled in a
				safe and responsible manner. This Privacy Policy outlines how we
				collect, use, and protect your information.
			</Typography>

			<Box sx={{ my: 4 }}>
				<Typography
					variant="h6"
					gutterBottom>
					Information We Collect
				</Typography>
				<Typography
					variant="body1"
					paragraph>
					We may collect the following types of information:
				</Typography>
				<ul>
					<Typography
						component="li"
						variant="body1">
						Personal Information: Name, email address, phone number, and mailing
						address.
					</Typography>
					<Typography
						component="li"
						variant="body1">
						Financial Information: Payment information for donations and event
						registrations.
					</Typography>
					<Typography
						component="li"
						variant="body1">
						Usage Data: Information about how you use our website, including IP
						address, browser type, and pages visited.
					</Typography>
				</ul>
			</Box>

			<Box sx={{ my: 4 }}>
				<Typography
					variant="h6"
					gutterBottom>
					How We Use Your Information
				</Typography>
				<Typography
					variant="body1"
					paragraph>
					We use your information for the following purposes:
				</Typography>
				<ul>
					<Typography
						component="li"
						variant="body1">
						To communicate with you and respond to your inquiries.
					</Typography>
					<Typography
						component="li"
						variant="body1">
						To process donations and event registrations.
					</Typography>
					<Typography
						component="li"
						variant="body1">
						To improve our website and services.
					</Typography>
					<Typography
						component="li"
						variant="body1">
						To send you newsletters and updates about our activities and events.
					</Typography>
				</ul>
			</Box>

			<Box sx={{ my: 4 }}>
				<Typography
					variant="h6"
					gutterBottom>
					Information Sharing and Disclosure
				</Typography>
				<Typography
					variant="body1"
					paragraph>
					We do not sell or share your personal information with third parties,
					except in the following circumstances:
				</Typography>
				<ul>
					<Typography
						component="li"
						variant="body1">
						With your consent.
					</Typography>
					<Typography
						component="li"
						variant="body1">
						To comply with legal obligations.
					</Typography>
					<Typography
						component="li"
						variant="body1">
						To protect and defend our rights and property.
					</Typography>
				</ul>
			</Box>

			<Box sx={{ my: 4 }}>
				<Typography
					variant="h6"
					gutterBottom>
					Data Security
				</Typography>
				<Typography
					variant="body1"
					paragraph>
					We implement appropriate security measures to protect your personal
					information from unauthorized access, alteration, disclosure, or
					destruction. However, no method of transmission over the Internet or
					electronic storage is 100% secure, and we cannot guarantee absolute
					security.
				</Typography>
			</Box>

			<Box sx={{ my: 4 }}>
				<Typography
					variant="h6"
					gutterBottom>
					Your Rights
				</Typography>
				<Typography
					variant="body1"
					paragraph>
					You have the right to access, update, and delete your personal
					information. You can also object to the processing of your personal
					information or request that we restrict the processing of your
					personal information. To exercise these rights, please contact us at
					<Link href="mailto:info@church.com">info@church.com</Link>.
				</Typography>
			</Box>

			<Box sx={{ my: 4 }}>
				<Typography
					variant="h6"
					gutterBottom>
					Changes to This Privacy Policy
				</Typography>
				<Typography
					variant="body1"
					paragraph>
					We may update this Privacy Policy from time to time. We will notify
					you of any changes by posting the new Privacy Policy on this page. You
					are advised to review this Privacy Policy periodically for any
					changes.
				</Typography>
			</Box>

			<Box sx={{ my: 4 }}>
				<Typography
					variant="h6"
					gutterBottom>
					Contact Us
				</Typography>
				<Typography
					variant="body1"
					paragraph>
					If you have any questions about this Privacy Policy, please contact us
					at:
				</Typography>
				<Typography variant="body1">Christ&#39;s Love Ministry</Typography>
				<Typography variant="body1">123 Church St., Nairobi, Kenya.</Typography>
				<Typography variant="body1">Phone: +254 722 374497</Typography>
				<Typography variant="body1">
					Email: <Link href="mailto:info@church.com">info@church.com</Link>
				</Typography>
			</Box>
		</Container>
	);
};

export default PrivacyPolicy;
