import React from 'react';

import { lazy } from 'react';

import IntroContent from '../../content/IntroContent.json';
import MiddleBlockContent from '../../content/MiddleBlockContent.json';
import AboutContent from '../../content/AboutContent.json';
import MissionContent from '../../content/MissionContent.json';
import ProductContent from '../../content/ProductContent.json';
import ContactContent from '../../content/ContactContent.json';

const ContactFrom = lazy(() => import('../../components/ContactForm'));
const ContentBlock = lazy(() => import('../../components/ContentBlock'));
const MiddleBlock = lazy(() => import('../../components/MiddleBlock'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));

const Home = () => {
	return (
		<Container>
			<ScrollToTop />
			<ContentBlock
				type="right"
				first="true"
				title={IntroContent.title}
				content={IntroContent.text}
				// button={IntroContent.button}
				icon="developer.svg"
				id="intro"
			/>

			<ContentBlock
				type="right"
				title={MissionContent.title}
				content={MissionContent.text}
				icon="product-launch.svg"
				id="mission"
			/>

			<ContentBlock
				type="left"
				title={ProductContent.title}
				content={ProductContent.text}
				icon="waving.svg"
				id="product"
			/>
		</Container>
	);
};

export default Home;
