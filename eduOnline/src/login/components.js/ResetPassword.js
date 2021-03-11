import React, { useState } from 'react';
import { auth } from '../firebase';
import { Button, TextField, Box } from '@material-ui/core';

export default function ResetPassword() {
	const [ email, setEmail ] = useState('');
	const [ emailHasBeenSent, setEmailHasBeenSent ] = useState(false);
	const [ error, setError ] = useState(null);

	const onChangeHandler = (event) => {
		const { name, value } = event.currentTarget;

		if (name === 'userEmail') {
			setEmail(value);
		}
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		auth
			.sendPasswordResetEmail(email)
			.then(() => {
				// email sent
				setEmailHasBeenSent(true);
				setTimeout(() => {
					setEmailHasBeenSent(false);
				}, 3000);
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				setError(errorMessage);
				console.log(errorCode, errorMessage);
			});
	};

	return (
		<div style={{ width: '100%' }}>
			{' '}
			<h3>Enter email address for a password rest link</h3>
			<Box display="flex" justifyContent="center" m={4} p={2}>
				<div>
					<form onSubmit={onSubmitHandler}>
						{emailHasBeenSent && <div>An email has been sent to you!</div>}
						{error !== null && <div>{error}</div>}
						<Box>
							<TextField
								label="Email"
								type="email"
								value={email}
								name="userEmail"
								id="userEmail"
								onChange={onChangeHandler}
							/>
						</Box>
						<Box m={4}>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								size="large"
								onClick={onChangeHandler}
							>
								Send Reset Link
							</Button>
						</Box>
					</form>
				</div>
			</Box>
		</div>
	);
}
