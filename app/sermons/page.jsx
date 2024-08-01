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
import Image from 'next/image';
import Image1 from '../../public/images/ismael-paramo-Ra8Oi7iVjqY.jpg';

export default function Sermons() {
	return (
		<>
			<Box
				component="section"
				height="20rem"
				my={9}>
				<Image
					alt=""
					src={Image1}
					style={{
						height: '100%',
						width: '100%',
						objectFit: 'cover',
						objectPosition: 'center',
					}}></Image>
			</Box>
			<Container
				component={'main'}
				className="section-center">
				<Box
					my={4}
					component={'section'}>
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
				<Box
					my={4}
					component={'section'}>
					<Typography
						variant="h4"
						component="h2"
						gutterBottom>
						Sermon Archive <BiMicrophone />
					</Typography>
					<Typography paragraph>
						Explore our sermon archive to hear more messages from our pastors
						and guest speakers.
					</Typography>
				</Box>
			</Container>
		</>
	);
}
