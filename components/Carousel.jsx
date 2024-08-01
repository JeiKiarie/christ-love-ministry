'use client';
import React from 'react';
import { Box, Typography, useTheme, styled } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
// import image1 from '../images/hannahrodrigo.jpg';
// import image2 from '../images/ismaelparamo.jpg';
// import image3 from '../images/tobiasdoering.jpg';

const carouselItems = [
	{
		title: 'Welcome to Our Church',
		description: 'Join us for worship and community.',
		image: '../images/tobiasdoering.jpg',
	},
	{
		title: 'Community Outreach',
		description: 'Making a difference in our community.',
		image: '../images/ismaelparamo.jpg',
	},
	{
		title: 'Faith and Fellowship',
		description: 'Growing together in faith.',
		image: '../images/hannahrodrigo.jpg',
	},
];
const CarouselItem = styled(Box)(({ theme }) => ({
	position: 'relative',
	height: '500px',
	marginBottom: '0.5rem',
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
		autoplaySpeed: 3500,
		pauseOnHover: false,
	};

	return (
		<Box
			sx={{ maxWidth: '100%', overflow: 'hidden', position: 'relative' }}
			className="carousel">
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
