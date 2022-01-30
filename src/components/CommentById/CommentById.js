import React from 'react';
import css from "../CommentById/CommentById.module.css";

const CommentById = ({comment}) => {
    return (
        <div className={css.commentDiv}>
            <div className={css.comment}>ID: {comment.id}</div>
            <div className={css.comment}>NAME: {comment.name}</div>
            <div className={css.comment}>EMAIL: {comment.email}</div>
            <div className={css.comment}>BODY: {comment.body}</div>
        </div>
    );
};

export default CommentById;