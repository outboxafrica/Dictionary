import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../login/context';
import { Link } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';
import ava from '../login/ava.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		width: '60vw',
		maxWidth: '80vw'
	},
	media: {
		height: '30vh'
	}
});

export default function Profile() {
	const { user } = useContext(AuthContext);
	const classes = useStyles();

	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ photo, setPhoto ] = useState('');

	useEffect(
		() => {
			if (user != null) {
				setName(user.displayName);
				setEmail(user.email);
				setPhoto(user.photoURL);
			}
		},
		[ user ]
	);

	return (
		<div style={{ width: '100%' }}>
			<Box display="flex" justifyContent="center">
				<Card className={classes.root}>
					<CardActionArea>
						{/* <Avatar /> */}
						<CardMedia className={classes.media} image={!photo ? ava : photo} title="User_Photo" />
						<div />
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{name}
								{/*  */}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{email}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="large" color="primary">
							<Link to="/edit_profile">Edit Profile</Link>
						</Button>
					</CardActions>
				</Card>
			</Box>
		</div>
	);
}
