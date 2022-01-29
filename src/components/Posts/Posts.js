import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import Post from "../Post/Post";

import css from './Posts.module.css'

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postService.getByUserId(userId).then(value => setPosts(value))
    }, [userId])
    return (
        <div className={css.posts}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;