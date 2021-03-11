import React from 'react';
import Layout from '../home/components/Layout';
import Head from '../home/components/Head';
import Feed from '../home/components/Feed';
import Login from '../home/components/Login';
import { useStateValue } from './../../StateProvider.jsx';
// import Landing from '../pages/landing'
// import SignUp from '../pages/signup'
// import Login from '../pages/login'

function IndexPage() {
	const [ { user }, dispatch ] = useStateValue();

	return (
		<div>
			{/* <SignUp />  */}
			{/* <Landing />  */}
			{!user ? (
				<Login />
			) : (
				<Layout>
					<Head title="Home" />
					<Feed />
				</Layout>
			)}
		</div>
	);
}

export default IndexPage;
