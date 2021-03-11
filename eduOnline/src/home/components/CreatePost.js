import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import * as createPostStyles from '../styles/createpost.module.scss';
import { useStateValue } from '../../../StateProvider';
import db from '../../../firebase';
import firebase from 'firebase';

const CreatePost = () => {
	const [ { user }, dispatch ] = useStateValue();
	const [ input, setInput ] = useState('');
	const [ inputURL, setInputURL ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		db.collection('posts').add({
			postBody: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			username: user.displayName,
			image: inputURL
		});

		setInput('');
		setInputURL('');
	};
	return (
		<div className={createPostStyles.createPost}>
			<div className={createPostStyles.createPostTop}>
				<Avatar src={user.photoURL} />
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						type="text"
						className={createPostStyles.createPostInput}
						placeholder={`Share something, ${user.displayName}?`}
					/>
					<br />
					<input
						value={inputURL}
						onChange={(e) => setInputURL(e.target.value)}
						type="text"
						placeholder="Image URL (Optional)"
					/>
					<button onClick={handleSubmit} type="submit" />
				</form>
			</div>
		</div>
	);
};

export default CreatePost;
