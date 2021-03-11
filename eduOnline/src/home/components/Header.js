import React from 'react';
import * as headerStyles from '../styles/header.module.scss';
import { Link, graphql, useStaticQuery } from 'gatsby';
import HomeIcon from '@material-ui/icons/Home';
import { Avatar } from '@material-ui/core';
import { useStateValue } from '../../../StateProvider';

const Header = () => {
	const [ { user }, dispatch ] = useStateValue();

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div className={headerStyles.header}>
			<div className={headerStyles.headerLeft}>
				<h1>
					<Link className={headerStyles.title} to="/landing">
						{data.site.siteMetadata.title}
					</Link>
				</h1>
			</div>
			<div className={headerStyles.headerCenter}>
				<div className={headerStyles.headerOption}>
					<h1>Home</h1>
				</div>
				<div className={headerStyles.headerOption}>
					<h1>Lookbook</h1>
				</div>
				<div className={headerStyles.headerOption}>
					<h1>Profile</h1>
				</div>
			</div>
			<div className={headerStyles.headerRight}>
				<div className={headerStyles.headerInfo}>
					<Link to="/login">
						<Avatar src={user.photoURL} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
