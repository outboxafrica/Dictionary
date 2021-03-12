import React from 'react';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import * as postStyles from '../styles/post.module.scss';

const Post = ({ profilePic, image, username, timestamp, postBody}) => {
	return (
		<div className={postStyles.post}>
			<div className={postStyles.postTop}>
				<Avatar src={profilePic} className={postStyles.postAvatar} />
				<div className={postStyles.postTopInfo}>
					<h3>{username}</h3>
					<p>{new Date(timestamp?.toDate()).toUTCString()}</p>
				</div>
			</div>
			<div className={postStyles.postBody}>
				<p>{postBody}</p>
			</div>
			<div className={postStyles.postImage}>
				<img src={image} alt="" />
			</div>
			<div className={postStyles.postOptions}>
				<div className={postStyles.postOption}>
					<ThumbUpIcon />
					<p>Like</p>
				</div>
				<div className={postStyles.postOption}>
					<ChatBubbleOutlineIcon />
					<p>Comment</p>
				</div>
			</div>
		</div>
	)
}

export default Post;
