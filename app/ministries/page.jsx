// app/ministries/page.js
import { BiHeart } from 'react-icons/bi';
import { Container, Typography, Box } from '@mui/material';

export default function Ministries() {
	return (
		<Container>
			<Box my={4}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Children’s Ministry <BiHeart />
				</Typography>
				<Typography paragraph>
					Our children’s ministry provides a safe and fun environment where kids
					can learn about Jesus through stories, crafts, and games. We offer
					Sunday school classes and special events throughout the year.
				</Typography>
			</Box>
			<Box my={4}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Youth Ministry <BiHeart />
				</Typography>
				<Typography paragraph>
					Our youth ministry meets every Wednesday evening for fellowship,
					worship, and Bible study. We also host retreats, mission trips, and
					service projects to help our youth grow in their faith and make a
					difference in the world.
				</Typography>
			</Box>
			<Box my={4}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Adult Ministry <BiHeart />
				</Typography>
				<Typography paragraph>
					We offer various programs for adults, including Bible studies, prayer
					groups, and fellowship events. Whether you’re single, married, or a
					senior, there’s a place for you to connect and grow.
				</Typography>
			</Box>
			<Box my={4}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Community Outreach <BiHeart />
				</Typography>
				<Typography paragraph>
					Our community outreach programs aim to serve those in need through
					food drives, clothing donations, and volunteer services. Join us as we
					share the love of Christ with our neighbors.
				</Typography>
			</Box>
		</Container>
	);
}
