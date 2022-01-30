import React from 'react';
import css from "../../components/PostById/PostById.module.css";

const PostById = ({post}) => {
    return (
        <div className={css.postDiv}>
            <div className={css.post}>ID: {post.id}</div>
            <div className={css.post}>TITLE: {post.title}</div>
            <div className={css.post}>BODY: {post.body}</div>
        </div>
    );
};

export default PostById;