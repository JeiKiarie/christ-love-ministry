// // components/Carousel.js
// 'use client';
// import React from 'react';
// import Slider from 'react-slick';
// import { Box, Typography, Button, CardMedia } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// const carouselItems = [
// 	{
// 		image: '/path-to-image1.jpg',
// 		title: 'Welcome to Our Church',
// 		description:
// 			'Join us for a vibrant and welcoming community. Learn more about our services and programs.',
// 		link: '/about',
// 	},
// 	{
// 		image: '/path-to-image2.jpg',
// 		title: 'Upcoming Events',
// 		description:
// 			'Discover our upcoming events and get involved in our community activities.',
// 		link: '/events',
// 	},
// 	{
// 		image: '/path-to-image3.jpg',
// 		title: 'Get Involved',
// 		description:
// 			'Explore our ministries and find ways to serve and connect with others.',
// 		link: '/ministries',
// 	},
// ];

// const Carousel = () => {
// 	const theme = useTheme();
// 	const settings = {
// 		dots: true,
// 		infinite: true,
// 		speed: 500,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		autoplaySpeed: 5000,
// 		arrows: true,
// 	};

// 	return (
// 		<Box sx={{ my: 6 }}>
// 			<Slider {...settings}>
// 				{carouselItems.map((item, index) => (
// 					<Box
// 						key={index}
// 						sx={{ position: 'relative', height: '400px' }}>
// 						<CardMedia
// 							component="img"
// 							height="400"
// 							image={item.image}
// 							alt={item.title}
// 							sx={{ objectFit: 'cover', height: '100%' }}
// 						/>
// 						<Box
// 							sx={{
// 								position: 'absolute',
// 								top: '50%',
// 								left: '50%',
// 								transform: 'translate(-50%, -50%)',
// 								textAlign: 'center',
// 								backgroundColor: theme.palette.background.paper,
// 								p: 3,
// 								borderRadius: 2,
// 								boxShadow: 3,
// 							}}>
// 							<Typography
// 								variant="h4"
// 								component="h2"
// 								color="text.primary"
// 								gutterBottom>
// 								{item.title}
// 							</Typography>
// 							<Typography
// 								variant="h6"
// 								color="text.secondary"
// 								paragraph>
// 								{item.description}
// 							</Typography>
// 							<Button
// 								variant="contained"
// 								color="primary"
// 								href={item.link}>
// 								Learn More
// 							</Button>
// 						</Box>
// 					</Box>
// 				))}
// 			</Slider>
// 		</Box>
// 	);
// };

// export default Carousel;
'use client';
import React from 'react';
import { Box, Typography, useTheme, styled } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselItems = [
	{
		title: 'Welcome to Our Church',
		description: 'Join us for worship and community.',
		image: 'path/to/image1.jpg',
	},
	{
		title: 'Community Outreach',
		description: 'Making a difference in our community.',
		image: 'path/to/image2.jpg',
	},
	{
		title: 'Faith and Fellowship',
		description: 'Growing together in faith.',
		image: 'path/to/image3.jpg',
	},
];

const CarouselItem = styled(Box)(({ theme }) => ({
	position: 'relative',
	height: '400px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: '#fff',
	textAlign: 'center',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	'&::after': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background: 'rgba(0, 0, 0, 0.5)',
	},
	'& .content': {
		position: 'relative',
		zIndex: 1,
	},
}));

const Carousel = () => {
	const theme = useTheme();

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
	};

	return (
		<Box sx={{ maxWidth: '100%', overflow: 'hidden', position: 'relative' }}>
			<Slider {...settings}>
				{carouselItems.map((item, index) => (
					<CarouselItem
						key={index}
						sx={{ backgroundImage: `url(${item.image})` }}>
						<Box className="content">
							<Typography
								variant="h3"
								component="h1"
								gutterBottom>
								{item.title}
							</Typography>
							<Typography variant="h6">{item.description}</Typography>
						</Box>
					</CarouselItem>
				))}
			</Slider>
		</Box>
	);
};

export default Carousel;
