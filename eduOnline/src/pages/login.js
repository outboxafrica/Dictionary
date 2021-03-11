import React from 'react';
import { AuthProvider } from '../login/context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../login/components.js/Header';
import Login from '../login/components.js/Login';
import { Box } from '@material-ui/core';
import '../login/App.css';

function LoginPage() {
	return (
		<BrowserRouter>
			<div className="App">
				<h1 style={{ textAlign: 'center' }}>Welcome to Dictionary!</h1>
				<AuthProvider>
					<Box display="flex" justifyContent="center">
						<Header />
					</Box>
					<Switch>
						<Route path="/login" exact component={Login} />
					</Switch>
				</AuthProvider>
			</div>
		</BrowserRouter>
	);
}

export default LoginPage;
