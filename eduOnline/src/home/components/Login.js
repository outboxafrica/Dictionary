import { Button } from '@material-ui/core';
import React from 'react';
import * as loginStyles from '../styles/login.module.scss';
import { auth, provider } from '../../../firebase';
import { actionTypes } from '../../../reducer';
import { useStateValue } from '../../../StateProvider';

const Login = () => {
	const [ state, dispatch ] = useStateValue();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user
				});
				console.log(result);
			})
			.catch((error) => {
				alert(error.message);
			});
	};
	return (
		<div className={loginStyles.login}>
			<Button type="submit" onClick={signIn}>
				Sign In
			</Button>
		</div>
	);
};

export default Login;
