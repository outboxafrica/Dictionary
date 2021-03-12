import React, { useState, useContext } from 'react';
import { AuthContext } from '../context';
import ava from '../ava.png';
import { BURL } from '../cloudinary';
import { Input, Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '40ch'
		}
	}
}));

export default function EditProfile() {
	const { user } = useContext(AuthContext);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ displayName, setName ] = useState('');
	const [ photo, setPhoto ] = useState(user.photoURL);

	const [ msg, setMsg ] = useState('');

	const classes = useStyles();

	function changeHandler(el) {
		const { name, value } = el.target;
		if (name === 'NewName' && value) setName(value);
		else if (name === 'NewPassword') setPassword(value);
		else if (name === 'NewEmail')
			// set new display name
			setEmail(value);
		return false;
	}

	function updateEmail() {
		// set new email
		user
			.updateEmail(email)
			.then(function() {
				// Update successful.
				console.log('Email changed!');
				setMsg('Email changed!');
			})
			.catch(function(error) {
				// An error happened.
				console.log(error.message);
			});
	}

	function updatePassword() {
		// set user's password
		user
			.updatePassword(password)
			.then(() => {
				// Update successful.
				console.log('Password changed!');
				setMsg('Password changed!');
			})
			.catch((error) => {
				// An error happened.
				console.log(error.message);
			});
	}

	function updateName() {
		user
			.updateProfile({
				displayName: displayName
			})
			.then(() => {
				// Update successful.
				console.log('Name changed!');
				setMsg('Name changed!');
			})
			.catch((error) => {
				// An error happened.
				console.log(error.message);
			});
	}

	function uploadPhoto(e) {
		e.preventDefault();
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append('file', file);
		formData.append('upload_preset', 'wq3lj5it');
		fetch(BURL, {
			method: 'POST',
			body: formData
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.secure_url !== '') {
					const uploadedFileUrl = data.secure_url;
					setPhoto(uploadedFileUrl);
					// console.log(uploadedFileUrl);
					// console.log(photo);
				}
			})
			.catch((err) => console.error(err.message));
	}

	function updatePhoto() {
		user
			.updateProfile({
				photoURL: photo
			})
			.then(() => {
				// Update successful.
				console.log('Photo changed!');
				// console.log(photo);
			})
			.catch((error) => {
				// An error happened.
				console.log(error.message);
			});
	}

	function saveDetails(el) {
		el.preventDefault();
	}
	return (
		<div>
			{msg}
			<form className="classes.root" noValidate={true} autoComplete="off" onSubmit={saveDetails}>
				<Avatar variant="rounded" src={!user.photoURL ? ava : photo} />
				<div className={classes.root}>
					<Input
						placeholder={user.displayName}
						name="NewName"
						type="text"
						className={classes.root}
						value={displayName}
						onChange={changeHandler}
					/>
				</div>
				<Button color="primary" onClick={updateName}>
					Change Name
				</Button>
				<div className={classes.root}>
					<Input
						placeholder={user.email}
						name="NewEmail"
						value={email}
						type="email"
						onChange={changeHandler}
					/>
				</div>

				<Button color="primary" onClick={updateEmail}>
					Change Email
				</Button>
				<div className={classes.root}>
					<Input
						placeholder="Set New Password"
						name="NewPassword"
						value={password}
						type="password"
						inputProps={('aria-label', 'description')}
						onChange={changeHandler}
					/>
				</div>

				<Button color="primary" onClick={updatePassword}>
					Change Password
				</Button>
			</form>
			<form method="post">
				<div className={classes.root}>
					<Input type="file" variant="contained" onChange={uploadPhoto} />
				</div>
				<div>
					<Button
						id="upload_widget"
						variant="outlined"
						color="primary"
						size="large"
						onClick={updatePhoto}
						m={5}
					>
						Change Avatar
					</Button>
				</div>
			</form>
		</div>
	);
}
