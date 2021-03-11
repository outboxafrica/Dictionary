import React, { useState, useEffect } from 'react';
// import firebase from "firebase/app";
import 'firebase/auth';
import { DB } from '../login/firebase';
import { Link } from 'react-router-dom';

export default function Lookbook() {
	let [ userData, setData ] = useState([]);

	const [ userId, setID ] = useState('');
	const [ displayName, setName ] = useState('');
	const [ photo, setPhoto ] = useState('');

	const fetchUsers = async () => {
		// var res =

		await DB.collection('users')
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					setData([ { id: doc.id, ...doc.data() } ]);
					// {id:doc.id, ...doc.data()};
					console.log(doc.data());
					console.log(userData);
				});
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div>
			{userData.map((user, idx) => <p key={user.id}>{user.email}</p>)}
			{/* {console.log(userData)} */}
		</div>
	);
}
