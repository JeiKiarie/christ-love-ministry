// app/about/page.js
import { Container, Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import Image1 from '../../public/images/ismael-paramo-Ra8Oi7iVjqY.jpg';

export default function About() {
	return (
		<Container
			component={'main'}
			className="about-page">
			<Box
				component="section"
				height="25rem"
				my={9}>
				<Image
					src={Image1}
					style={{
						height: '100%',
						width: '100%',
						objectFit: 'cover',
						objectPosition: 'center',
					}}></Image>
			</Box>
			{[
				{
					heading: `About Our Church`,
					paragraph1: `Christ's Love Ministry is a Pentecostal Church totally submitted to
						God in Trinity. A Kiswahili and English speaking Church targeting
						the whole world to accept Jesus Christ as their personal Saviour.
						Missions oriented, with an outreach to the community within their
						reach. A community of believers, open to people of all tribes and
						races of the community. A Church with a ministry approach that is
						holistic; we seek to reach out to the whole person with the life
						changing Gospel. The church was a small assembly of 15 - 30 members
						and Apostle Dr. Jane Njeri Kinyanjui, who is credited with the
						design of the church logo and her leadership in the writing of the
						Church Constitution.`,
					paragraph2: `From a small assembly with a attendance of
						about 15 to 30 people, the church has experienced continuous growth
						to the current 8 branches and 30 clerics. As a church, CLM is
						committed to a holistic Gospel that impacts society in every sphere
						of life. Accordingly, apart from spiritual ministry to our
						congregations, we consider underprivileged communities, especially
						orphans, destitute children and widows.`,
					image: Image1,
				},
				{
					heading: 'Vision Bearer ',
					paragraph1: `Who is the founder of Christ 's Love Ministry? Apostle Dr. Jane
						Njeri Kinyanjui *History* Our history dates back to 1997 when
						Apostle Dr. Jane Njeri Kinyanjui was residing in Mwiki Kasarani
						Nairobi County started a fellowship with the vision of establishing
						a church. The first church service was held at Mwiki - Kasarani. In
						2003, the Church moved to Kasarani where the present Christ's Love
						Ministry Headquarter is.`,

					paragraph2: `Christ's Love Ministry is grounded in the
						word of God and sound doctrine. We believe in the divine
						inspiration, truthfulness and authority of the Old and New Testament
						Scriptures as the infallible Word of God with power to accomplish
						His purpose of salvation. Christ's Love Ministry is a church that
						strives to know God and make Him known who desire to lift up the
						Lord Jesus Christ through worship and prayer as He draws His people
						through His Word`,
					image: Image1,
				},
				{
					heading: 'We believe',
					paragraph1: `Our beliefs are founded solely on the Bible, which we consider God's
					infallible written Word. This includes both the Old and New
					Testaments, which we believe were uniquely inspired by the Holy
					Spirit and written without error in their original manuscripts.
					Christ's Love Ministry emphasizes individuals making a personal
					commitment to Christ, believers entering into water baptism, place
					of faith in divine healing, emphasis on the baptism in the Holy
					Spirit with the evidence of speaking in tongues, and the second
					coming of Jesus Christ. Christ's Live Ministry believes that God’s
					purpose concerning man is to seek and to save that which is lost, to
					be worshiped by man and to build a body of believers in the image of
					His Son Jesus Christ.`,
					paragraph2: `That these believers, saved and called out of
					the world, constitute the Church of Jesus Christ built and
					established upon the foundation of the apostles and prophets, Jesus
					Christ Himself being the chief cornerstone. That the members of the
					Body, the Church of Jesus Christ, are enjoined to gather themselves
					for worship, fellowship, counsel, and instruction in the Word of
					God, the work of the ministry, and for the exercise of those
					spiritual gifts and offices provided for New Testament church order.
					That it is evident the early apostolic churches came together in
					fellowship as a representative body of saved, Spirit-filled
					believers who ordained and sent out evangelists and missionaries,
					and under the supervision of the Holy Spirit set over the apostles
					and church clerics. That the priority reason-for-being of the
					Christ's Love Ministry is to be an agency of God for evangelizing
					the world, to be a corporate body in which man may worship God, and
					to be a channel of God’s purpose to build a body of saints being
					perfected in the image of His Son.`,
					paragraph3: `That the Christ's Love Ministry
					exists expressly to give continuing emphasis to this reason-for
					being in the New Testament apostolic pattern by teaching and
					encouraging believers to be baptized in the Holy Spirit, which
					enables them to evangelize in the power of the Spirit with
					accompanying supernatural signs, adding a necessary dimension to
					worshipful relationship with God, and enabling them to respond to
					the full working of the Holy Spirit in expression of fruit and gifts
					and ministries as in New Testament times for the edifying of the
					body of Christ. Christ's Love Ministry whose purpose is neither to
					usurp authority over the various local gathering, nor to deprive
					them of their scriptural and local rights and privileges; but to
					recognize and promote scriptural methods and order for worship,
					unity, fellowship, work, and business for God; and to disapprove
					unscriptural methods, doctrines, and conduct, endeavoring to keep
					the unity of the Spirit in the bond of peace, “till we all come in
					the unity of the faith, and of the knowledge of the Son of God, unto
					a perfect man, unto the measure of the stature of the fullness of
					Christ” (Ephesians 4:13).`,
					image: Image1,
				},
				{
					heading: 'Faith Statement',
					paragraph1: `We believe in the deity of our Lord Jesus Christ, in His virgin
					birth, in His bodily death and resurrection from the dead and His
					ascension to the right hand of God We believe that the Son of God,
					Jesus Christ, became incarnate, was begotten by the Holy Spirit,
					born of the Virgin Mary, and is true God and true man. We believe in
					one God, the creator and sustainer of all, who manifests himself in
					three persons. God the Father, perfect in justice and love; Jesus
					Christ His Son, our Lord and Savior, who is one with the Father,
					manifested in the flesh, and who gave himself on the cross as
					propitiation for our sins and rose again on the third day and is now
					seated at the right hand of the Father; and in the Holy Spirit, the
					comforter and helper, who gives spiritual birth to believers’ lives
					within them and empowers them for witnessing and service. We believe
					the Holy Spirit inspired the scriptures, convicts of sin, and
					instructs in righteousness.`,
					paragraph2: `We believe the Bible is the inspired
					word of God and is to be used as our guide in matters of faith and
					conduct. We believe in the Church: that Christ Jesus is the head of
					the church, the church is the body of believers dedicated to the
					worship and service of God and dedicated to the building of God’s
					kingdom. We believe that all men have sinned and fallen short of the
					glory of God and are in need of salvation but unable to save
					themselves. In order to be saved, we believe one must be born again,
					repenting of one’s sins and receiving by faith Christ’s sacrificial
					atonement for one’s sins. We believe in the baptism of believers by
					immersion, symbolizing burial with Christ and resurrection to
					newness of life, and the washing away of sins. We believe that
					children may be dedicated until they reach an age when they can make
					their own decision to follow Jesus Christ`,
					image: Image1,
				},
				{
					heading: 'Our Mission',
					paragraph1: `“To know God and to make Him known through evangelism and
					discipleship” To preach the gospel of Jesus Christ in the power of
					the holy Spirit To make disciples of all who believe the gospel To
					establish Local Churches and abroad. To Provide diaconal services to
					the disciples and the community To equip the members with knowledge
					and skill to serve the Lord Jesus Christ To build church capacity
					and mobilize resources that will facilitate the attainment of the
					afore mentioned mission objectives.`,
					image: Image1,
				},
				{
					heading: 'Our Vision',
					paragraph1: `“A Community of Believers Impacting the World with the Gospel of our	Lord Jesus Christ and repentance through the transforming Power of
					the Holy Spirit” of national importance must be addressed. To be a
					dynamic church of God fearing believers, who know Jesus Christ
					intimately and are holistically transformed and who reach out to all
					people with the Gospel of Jesus Christ.`,
					image: Image1,
				},
			].map((article) => (
				<Box
					component={'section'}
					className="section-center about-info-container"
					my={4}>
					<Box
						className="about-info-text"
						component={'article'}
						// sx={{
						// 	flexBasis: 'calc(50% - 2rem)',
						// }}
						textAlign={'justify'}>
						<Typography
							variant="h3"
							component="h3"
							textAlign={'left'}
							gutterBottom>
							{article.heading}
						</Typography>
						<Box>
							<Typography paragraph>{article.paragraph1}</Typography>
							<Typography paragraph>{article.paragraph2}</Typography>
							<Typography paragraph>{article.paragraph3}</Typography>
						</Box>
					</Box>
					<Box
						className="about-info-img"
						component={'article'}>
						<Image
							className="img"
							alt="congregation"
							src={article.image}
							style={{ height: '500px', width: '100%', objectFit: 'cover' }}
						/>
					</Box>
				</Box>
			))}

			<section className="leadership-section">
				<Box className="section-center">
					<Typography
						variant="h4"
						component="h2"
						gutterBottom
						textAlign={'center'}>
						Our Leadership
					</Typography>
					<article className="leadership">
						<Box className="leadership-img">
							<Image
								className="img"
								src={Image1}
								alt="Apostle Dr Jane Njeri Kinyanjui"></Image>
						</Box>

						<Box className="leadership-text">
							<Typography paragraph>
								Apostle Dr. Jane Njeri Kinyanjui has been leading our church
								since 1997 and is passionate about teaching the Word of God and
								shepherding the congregation.
							</Typography>
						</Box>
					</article>
				</Box>
			</section>
		</Container>
	);
}
