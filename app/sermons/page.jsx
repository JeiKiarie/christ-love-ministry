// app/sermons/page.js
import { BiMicrophone } from 'react-icons/bi';
import {
	Container,
	Typography,
	Box,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';

export default function Sermons() {
	return (
		<Container>
			<Box my={4}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Recent Sermons <BiMicrophone />
				</Typography>
				<List>
					<ListItem
						button
						component="a"
						href="#">
						<ListItemText primary="Walking in Faith - July 18, 2024" />
					</ListItem>
					<ListItem
						button
						component="a"
						href="#">
						<ListItemText primary="The Power of Prayer - July 11, 2024" />
					</ListItem>
				</List>
			</Box>
			<Box my={4}>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom>
					Sermon Archive <BiMicrophone />
				</Typography>
				<Typography paragraph>
					Explore our sermon archive to hear more messages from our pastors and
					guest speakers. You can search by date, topic, or speaker.
				</Typography>
			</Box>
		</Container>
	);
}
