import React from 'react';
import Header from './Header';
import * as layoutStyles from '../styles/layout.module.scss';

const Layout = (props) => {
	return (
		<div className={layoutStyles.container}>
			<div>
				<Header />
				{props.children}
			</div>
		</div>
	);
};

export default Layout;
