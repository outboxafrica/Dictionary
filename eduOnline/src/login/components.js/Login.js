import React, { useState, useContext } from 'react';
import { AuthContext } from '../context';

import 'firebase/firestore';
import { auth } from '../../../firebase';
import Links from './Links';
import { Redirect } from 'react-router-dom';
import { Button, Box, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '40ch'
		}
	}
}));

export default function Login() {
	//get the user state from the context
	const { user } = useContext(AuthContext);

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const [ error, setError ] = useState(null);

	const classes = useStyles();

	function handleChange(e) {
		const { name, value } = e.target;

		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	}

	const handleSubmit = (el) => {
		el.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				console.log(user.uid);
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				setError(errorMessage);
				console.log(errorCode);
			});
	};

	return (
		<div style={{ width: '100%' }}>
			<h2>Login Here!</h2>

			<Box display="flex" justifyContent="center" alignItems="center" m={1} p={2}>
				{!!user ? (
					<Redirect to={{ pathname: '/' }} />
				) : (
					<div>
						<Box>
							{!error ? (
								<div />
							) : (
								<div
									style={{
										color: '#f01',
										fontSize: '0.7em'
									}}
								>
									{error}
								</div>
							)}
						</Box>
						<form onSubmit={handleSubmit} className={classes.root}>
							<div>
								<TextField
									label="Email"
									type="email"
									value={email}
									name="email"
									onChange={handleChange}
								/>
							</div>
							<div>
								<TextField
									id="standard-password-input"
									label="Password"
									type="password"
									autoComplete="current-password"
									value={password}
									name="password"
									onChange={handleChange}
								/>
							</div>
							<Box textAlign="center" m={2}>
								<Button type="submit" size="large" variant="contained" color="primary">
									LOGIN
								</Button>
							</Box>
						</form>
						<div>
							<Links />
						</div>
					</div>
				)}
			</Box>
		</div>
	);
}
