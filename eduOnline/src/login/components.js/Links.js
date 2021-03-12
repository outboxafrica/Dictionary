import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
	textDecoration: 'none',
	margin: '1em'
};

export default function Links() {
	return (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
			<Link to="/reset_password" style={linkStyle}>
				Forgot Password?
			</Link>
			<Link to="/signup" style={linkStyle}>
				Not a member?{' '}
			</Link>
		</div>
	);
}
