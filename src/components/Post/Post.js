import React from 'react';
import {Link} from "react-router-dom";

import css from './Post.module.css'

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className={css.postDiv}>
            <div className={css.post}>
                <Link to={id.toString()} state={post}>TITLE: {title}</Link>
            </div>
        </div>
    );
};

export default Post;