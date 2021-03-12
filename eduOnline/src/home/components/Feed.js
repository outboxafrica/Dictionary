import React, { useEffect, useState } from 'react';
import * as feedStyles from '../styles/feed.module.scss';
import CreatePost from './CreatePost';
import Post from '../templates/post';
import db from '../../../firebase';

const Feed = () => {
	const [ posts, setPosts ] = useState([]);

	useEffect(() => {
		db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
			setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
		});
	}, []);

	return (
		<div className={feedStyles.feed}>
			<CreatePost />
			{posts.map((post) => (
				<Post
					key={post.data.id}
					profilePic={post.data.profilePic}
					postBody={post.data.postBody}
					timestamp={post.data.timestamp}
					username={post.data.username}
					image={post.data.image}
				/>
			))}
		</div>
	);
};

export default Feed;
