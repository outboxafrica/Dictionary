import React from 'react';
import Signup from '../signup/components/signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../signup/context/AuthCont';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function SignUpPage() {
	return (
		<Container
			className="d-flex align-items-center justify-content-center"
			style={{ backgroundImage: 'url(edu.png)', minHeight: '100vh' }}
		>
			<div className="w-100 " style={{ maxWidth: '400px' }}>
				<Router>
					<AuthProvider>
						<Switch>
							<Route path="/signup" component={Signup} />
						</Switch>
						{/* <Signup /> */}
					</AuthProvider>
				</Router>
			</div>
		</Container>
	);
}

export default SignUpPage;
