import React from 'react';

import css from './Post.module.css'

const Post = ({post}) => {
    return (
        <div className={css.post}>
            <div className={css.postDiv}>USERID: {post.userId}</div>
            <div className={css.postDiv}>ID: {post.id}</div>
            <div className={css.postDiv}>TITLE: {post.title}</div>
            <div className={css.postDiv}>BODY: {post.body}</div>
        </div>
    );
};

export default Post;