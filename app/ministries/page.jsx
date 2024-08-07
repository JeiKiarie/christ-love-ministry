// app/ministries/page.js
import { BiHeart } from 'react-icons/bi';
import {
	Container,
	Typography,
	Box,
	Grid,
	Card,
	CardContent,
} from '@mui/material';
import Image1 from '../../public/images/church-faithful5.jpg';
import Image from 'next/image';

export default function Ministries() {
	return (
		<>
			<Box
				component="section"
				height="32rem"
				mt={9}>
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
				component={'section'}
				className="section-center">
				<Box my={4}>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom>
						Our Ministries
					</Typography>
					<Typography paragraph>
						We offer a variety of ministries to serve our congregation and
						community. Get involved and grow in your faith through our programs.
					</Typography>
				</Box>
				<Box my={4}>
					<Grid
						container
						spacing={2}>
						<Grid
							component={'article'}
							item
							xs={12}
							sm={6}>
							<Card>
								<CardContent>
									<Typography
										variant="h4"
										component="h2">
										Children&#39;s Ministry <BiHeart />
									</Typography>
									<Typography paragraph>
										Our children&#39;s ministry provides a safe and nurturing
										environment for kids to learn about Jesus. We offer Sunday
										school classes and special events throughout the year.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid
							component={'article'}
							item
							xs={12}
							sm={6}>
							<Card>
								<CardContent>
									<Typography
										variant="h4"
										component="h2">
										Youth Ministry <BiHeart />
									</Typography>
									<Typography paragraph>
										Our youth ministry meets every Wednesday evening for
										fellowship, worship, and Bible study. We also host retreats,
										mission trips, and service projects to help our youth grow
										in their faith and make a difference in the world.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid
							component={'article'}
							item
							xs={12}
							sm={6}>
							<Card>
								<CardContent>
									<Typography
										variant="h4"
										component="h2">
										Adult Ministry <BiHeart />
									</Typography>
									<Typography paragraph>
										We offer various programs for adults, including Bible
										studies, prayer groups, and fellowship events. Whether
										you&#39;re single, married, or a senior, there&#39;s a place
										for you to connect and grow.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid
							component={'article'}
							item
							xs={12}
							sm={6}>
							<Card>
								<CardContent>
									<Typography
										variant="h4"
										component="h2">
										Community Outreach <BiHeart />
									</Typography>
									<Typography paragraph>
										Our community outreach programs aim to serve those in need
										through food drives, clothing donations, and volunteer
										services. Join us as we share the love of Christ with our
										neighbors.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
}
