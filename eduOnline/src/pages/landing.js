import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import './../../node_modules/antd/dist/antd.css';

import Router from '../landing/router';
import i18n from '../landing/translation';

const LandingPage = () => (
	<BrowserRouter>
		<I18nextProvider i18n={i18n}>
			<Router />
		</I18nextProvider>
	</BrowserRouter>
);

export default LandingPage;
